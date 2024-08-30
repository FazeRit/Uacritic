import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

import AuthService from "../service/authService";
import ApiError from "../errors/apiError";

export default class AuthController {
    static async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const token = await AuthService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (err) {
            next(err);
        }
    }

    static async signup(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequestError('Помилки валідації даних', errors.array()));
            }
            const {email, password} = req.body;
            const userData = await AuthService.signup({email, password});
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 86400, httpOnly: true});
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body;
            const userData = await AuthService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 86400, httpOnly: true});
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }

    static async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await AuthService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 86400, httpOnly: true});
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }

    static async activate(req: Request, res: Response, next: NextFunction) {
        try {
            const activationLink = req.params.link;
            await AuthService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL!);
        } catch (err) {
            next(err);
        }
    }
}