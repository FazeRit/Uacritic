import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';

import User from "../models/userModel";

import UserDto from "../dto/userDto";

import MailService from "./mailService";
import TokenService from "./tokenService";

import {ApiError} from '@uacritic/uacritic_common';

import {UserCreatedPublisher} from "../events/publishers/user-created-publisher";
import {natsWrapper} from "../natsWrapper";
import {UserUpdatedPublisher} from '../events/publishers/user-updated-publisher';

interface UserCredentials {
    email: string;
    password: string;
    username: string;
}

export default class UserService {
    static async logout(refreshToken: string) {
        return await TokenService.removeToken(refreshToken);
    }

    static async signup({email, password, username}: UserCredentials) {
        const candidate = await User.findOne({where: {email}});

        if (candidate) {
            throw ApiError.BadRequestError(`Email is used`);
        }

        const hashPassword = await bcrypt.hash(password, 4);
        const activationLink = uuidv4();

        const user = await User.create({email, password: hashPassword, activationLink, isActivated: false, username});

        const mailService = new MailService();
        await mailService.sendActivationLink({
            to: email,
            link: `${process.env.API_URL}/api/user/activate/${activationLink}`
        });

        const userDto = new UserDto(user);
        const {accessToken, refreshToken} = await TokenService.generateTokens(userDto.email);

        await TokenService.saveToken({userId: userDto.id, accessToken, refreshToken});;

        await new UserCreatedPublisher(natsWrapper.client).publish({
            id: userDto.id,
            email,
            username,
            password
        })

        return {accessToken, refreshToken, user: userDto};
    }

    static async login(email: string, password: string) {
        const user = await User.findOne({where: {email}});
        if (!user) {
            throw ApiError.BadRequestError('User not found');
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            throw ApiError.BadRequestError('Password is incorrect');
        }
        const userDto = new UserDto(user);
        const {accessToken, refreshToken} = await TokenService.generateTokens(userDto.email);

        await TokenService.saveToken({userId: userDto.id, accessToken, refreshToken});
        return {accessToken, refreshToken, user: userDto};
    }

    static async activate(activationLink: string) {
        const user = await User.findOne({where: {activationLink}});
        if (!user) {
            throw ApiError.BadRequestError(`Wrong activation link`);
        }
        user.isActivated = true;
        await user.save();
    }

    static async profile(email: string) {
        if (!email) {
            throw ApiError.UnAuthorizedError();
        }

        const user = await User.findOne({where: {email}});
        if (!user) {
            throw ApiError.UnAuthorizedError();
        }

        return {
            username: user.username,
            isActivated: user.isActivated,
            dateOfBirth: user.birthDate
        };
    }

    static async editProfile(field: string, value: string | Date, user: string) {
        if (field === 'birthDate') {
            value = (value instanceof Date) ? value : new Date(value);
        }

        await User.update({ [field]: value }, { where: { email: user } });
        const updatedUser = await User.findOne({ where: { email: user } });
        new UserUpdatedPublisher(natsWrapper.client).publish({
            id: updatedUser!.id,
            fieldName: field,
            fieldValue: value
        });        

        return true;    
    }

    static async check(email: string) {
        const user = await User.findOne({where: {email}});
        if (!user) {
            throw ApiError.UnAuthorizedError();
        }

        return true;
    }
}