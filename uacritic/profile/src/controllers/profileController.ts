import {NextFunction, Request, Response} from "express";

import UserService from "../service/profileService";

export default class ProfileController {
    static async profile(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await UserService.profile(refreshToken);
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }
}