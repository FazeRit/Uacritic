import {NextFunction, Request, Response} from 'express';
import {ApiError} from "@uacritic/uacritic_common";
import TokenService from "../service/tokenService";

declare global {
    namespace Express {
        interface Request {
            user?: string;
        }
    }
}

export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return next(ApiError.UnAuthorizedError());
        }

        const userData = await TokenService.validateToken(accessToken);

        if (!userData) {
            return next(ApiError.UnAuthorizedError());
        }

        req.user = userData.email!;
        next();
    } catch (err) {
        console.error('Authentication error:', err);
        return next(ApiError.UnAuthorizedError());
    }
}
