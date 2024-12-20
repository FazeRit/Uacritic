import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

import UserService from "../service/userService";
import TokenService from "../service/tokenService";
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
            const { refreshToken } = req.cookies;
    
            await UserService.logout( refreshToken);
            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');
    
            res.json({ message: 'Logged out successfully' });
        } catch (err) {
            next(err);
        }
    }

    static async check(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.user;

            await UserService.check(email!);

            res.json({loggedIn: true});
        } catch (err) {
            next(err);
        }
    }

    static async profile(req: Request, res: Response, next: NextFunction) {
        try {
            const user = req.user;

            const userData = await UserService.profile(user!);

            res.json(userData);
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
            
            res.cookie('accessToken', userData.accessToken, {
                maxAge: 15 * 60 * 1000,
                httpOnly: true,
                sameSite: 'strict'
            });
    
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 86400 * 1000,
                httpOnly: true,
                sameSite: 'strict'
            });
                
                
            res.status(201).json(userData.user);
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
            res.cookie('accessToken', userData.accessToken, {
                maxAge: 15 * 60 * 1000,
                httpOnly: true,
                sameSite: 'strict'
            });
    
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 86400 * 1000,
                httpOnly: true,
                sameSite: 'strict'
            }); 
            res.json(userData.user);
        } catch (err) {
            next(err);
        }
    }

    static async refresh(req: Request, res: Response, next: NextFunction) {
        try{
            const {refreshToken} = req.cookies;
            if (!refreshToken) throw ApiError.UnAuthorizedError();
        
            const tokens = await TokenService.refreshTokens(refreshToken);
            res.json(tokens);
        }catch(err){
            next(err);
        }
    }

    static async activate(req: Request, res: Response, next: NextFunction) {
        try {
            const activationLink = req.params.link;

            await UserService.activate(activationLink);

            res.redirect(process.env.CLIENT_URL!);
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

            res.status(200).json({message: 'Profile updated'});
        } catch (err) {
            next(err);
        }
    }
}