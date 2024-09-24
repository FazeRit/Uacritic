import jwt from 'jsonwebtoken';

import Token from '../models/tokenModel';

interface SaveTokenProps {
    userId: number;
    accessToken: string;
}

interface UserData {
    email: string;
    iat: number;
    exp: number;
}

export default class TokenService {
    static async generateToken(email: string) {
        return jwt.sign({email}, process.env.JWT_SECRET!, {expiresIn: "30h"});
    }

    static async validateToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET!) as UserData;
        } catch (err) {
            return null;
        }
    }

    static async saveToken({userId, accessToken}: SaveTokenProps) {
        const tokenData = await Token.findOne({where: {userId}});
        if (tokenData) {
            tokenData.accessToken = accessToken;
            return tokenData.save();
        }
        return await Token.create({userId, accessToken});
    }

    static async removeToken(accessToken: string) {
        const tokenData = await Token.destroy({where: {accessToken}});
        return tokenData;
    }
}