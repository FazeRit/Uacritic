import jwt from 'jsonwebtoken';

import Token from '../models/tokenModel';

interface SaveTokenProps {
    userId: number;
    refreshToken: string;
}

export default class TokenService {
    static async generateToken(email: string) {
        const accessToken = jwt.sign({email}, process.env.JWT_SECRET!, {expiresIn: "30h"});
        const refreshToken = jwt.sign({email}, process.env.JWT_SECRET!, {expiresIn: "30d"});
        return {
            accessToken, refreshToken
        };
    }

    static async validateToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_SECRET!);
            return userData;
        } catch (err) {
            return null;
        }
    }

    static async findToken(refreshToken: string) {
        const tokenData = await Token.findOne({where: {refreshToken}});
        return tokenData;
    }

    static async saveToken({userId, refreshToken}: SaveTokenProps) {
        const tokenData = await Token.findOne({where: {userId}});
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await Token.create({userId, refreshToken});
    }

    static async removeToken(refreshToken: string) {
        const tokenData = await Token.destroy({where: {refreshToken}});
        return tokenData;
    }
}