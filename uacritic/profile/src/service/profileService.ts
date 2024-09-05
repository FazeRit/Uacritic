import User from "../models/userModel";
import {ApiError} from '@uacritic/uacritic_common';
import Token from "../models/tokenModel";


export default class ProfileService {
    static async profile(refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.UnAuthorizedError();
        }

        const tokenRecord = await Token.findOne({refreshToken});

        if (!tokenRecord) {
            throw ApiError.UnAuthorizedError();
        }

        const user = await User.findById(tokenRecord.userId);


        if (!user) {
            throw ApiError.UnAuthorizedError();
        }

        return {
            email: user.email,
            username: user.username,
            isActivated: user.isActivated,
            dateOfBirth: user.dateOfBirth,
        };
    }
}