import jwt from 'jsonwebtoken';

import Token from '../models/tokenModel';
import User from '../models/userModel';

import { ApiError } from '@uacritic/uacritic_common';

interface SaveTokenProps {
    userId: number;
    accessToken: string;
    refreshToken: string;
}

interface UserData {
    email: string;
    iat: number;
    exp: number;
}

export default class TokenService {
    static async generateTokens(email: string) {
        const accessToken = jwt.sign({email}, process.env.JWT_SECRET!, {expiresIn: "15m"});
        const refreshToken = jwt.sign({email}, process.env.JWT_SECRET!, {expiresIn: "30d"}); 
        return { accessToken, refreshToken };
    }

    static async saveToken({userId, accessToken, refreshToken}: {userId: number, accessToken: string, refreshToken: string}) {
        const tokenData = await Token.findOne({where: {userId}});
        if (tokenData) {
            tokenData.accessToken = accessToken;
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await Token.create({userId, accessToken, refreshToken});
    }
    
    static async refreshTokens(refreshToken: string) {
        try {
            const userData = jwt.verify(refreshToken, process.env.JWT_SECRET!) as UserData;
            const user = await User.findOne({where: {email: userData.email}});
            if (!user) throw ApiError.UnAuthorizedError();
    
            const tokens = await this.generateTokens(user.email);
            await this.saveToken({userId: user.id, accessToken: tokens.accessToken, refreshToken: tokens.refreshToken});
            return tokens;
        } catch (error) {
            throw ApiError.UnAuthorizedError();
        }
    }

    static async removeToken(accessToken: string) {
        return await Token.destroy({where: {accessToken}});
    }
}