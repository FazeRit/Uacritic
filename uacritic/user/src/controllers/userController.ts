import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

import UserService from "../service/userService";
import {ApiError} from "@uacritic/uacritic_common";

declare global {
    namespace Express {
        interface Request {
            user?: string;
        }
    }
}

export default class UserController {
    static async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const {accessToken} = req.cookies;
            
            const token = await UserService.logout(accessToken);
            res.clearCookie('accessToken');
            return res.json(token);
        } catch (err) {
            next(err);
        }
    }

    static async check(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.user;

            await UserService.check(email!);

            return res.json({loggedIn: true});
        } catch (err) {
            next(err);
        }
    }

    static async profile(req: Request, res: Response, next: NextFunction) {
        try {
            const user = req.user;

            const userData = await UserService.profile(user!);

            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }

    static async signup(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequestError('Error validating data', errors.array()));
            }
            const {email, password, username} = req.body;

            const userData = await UserService.signup({email, password, username});
            res.cookie('accessToken', userData.token,
                {
                    maxAge: 86400 * 1000,
                    httpOnly: true,
                    sameSite: 'strict'
                });
            return res.status(201).json(userData.user);
        } catch (err) {
            next(err);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequestError('Error validating data', errors.array()));
            }
            const {email, password} = req.body;
            const userData = await UserService.login(email, password);
            res.cookie('accessToken', userData.token,
                {
                    maxAge: 86400 * 1000,
                    httpOnly: true,
                    sameSite: 'strict'
                });
            return res.json(userData.user);
        } catch (err) {
            next(err);
        }
    }

    static async activate(req: Request, res: Response, next: NextFunction) {
        try {
            const activationLink = req.params.link;

            await UserService.activate(activationLink);

            return res.redirect(process.env.CLIENT_URL!);
        } catch (err) {
            next(err);
        }
    }

    static async editProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequestError('Error validating data', errors.array()));
            }

            const {field, value} = req.body;

            await UserService.editProfile(field, value, req.user!);

            return res.status(200).json({message: 'Profile updated'});
        } catch (err) {
            next(err);
        }
    }
}