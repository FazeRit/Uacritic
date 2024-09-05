import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';

import User from "../models/userModel";

import UserDto from "../dto/userDto";

import MailService from "./mailService";
import TokenService from "./tokenService";

import {ApiError} from '@uacritic/uacritic_common';

interface UserCredentials {
    email: string;
    password: string;
    username: string;
}

export default class UserService {
    static async logout(refreshToken: string) {
        const tokenData = await TokenService.removeToken(refreshToken);
        return tokenData;
    }

    static async signup({email, password, username}: UserCredentials) {
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            throw ApiError.BadRequestError(`Користувач з такою поштою:${email} вже існує`);
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const activationLink = uuidv4();

        const user = await User.create({email, password: hashPassword, activationLink, isActivated: false, username});

        const mailService = new MailService();
        await mailService.sendActivationLink({
            to: email,
            link: `${process.env.API_URL}/api/user/activate/${activationLink}`
        });

        const userDto = new UserDto(user);
        const token = await TokenService.generateToken(userDto.email);

        await TokenService.saveToken({userId: userDto.id, refreshToken: token.refreshToken});

        return {...token, user: userDto}
    }


    static async login(email: string, password: string) {
        const user = await User.findOne({where: {email}});
        if (!user) {
            throw ApiError.BadRequestError('Користувач з такою поштою не знайдений');
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            throw ApiError.BadRequestError('Невірний пароль');
        }
        const userDto = new UserDto(user);
        const token = await TokenService.generateToken(userDto.email);

        await TokenService.saveToken({userId: userDto.id, refreshToken: token.refreshToken});
        return {...token, user: userDto}
    }

    static async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.UnAuthorizedError();
        }

        const userData = await TokenService.validateToken(refreshToken);
        if (typeof userData === 'string') {
            throw ApiError.UnAuthorizedError();
        }

        const tokenDb = await TokenService.findToken(refreshToken);
        if (!tokenDb) {
            throw ApiError.UnAuthorizedError();
        }

        const user = await User.findOne({where: {id: userData!.id}});
        if (!user) {
            throw ApiError.UnAuthorizedError();
        }

        const userDto = new UserDto(user);
        const token = await TokenService.generateToken(userDto.email);

        await TokenService.saveToken({userId: userDto.id, refreshToken: token.refreshToken});
        return {...token, user: userDto};
    }

    static async activate(activationLink: string) {
        const user = await User.findOne({where: {activationLink}});
        if (!user) {
            throw ApiError.BadRequestError(`Некоректне посилання активації`);
        }
        user.isActivated = true;
        await user.save();
    }
}