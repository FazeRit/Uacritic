import {NextFunction, Request, Response} from 'express';
import {ApiError} from "@uacritic/uacritic_common";

export default async function isAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const user = req.user;
        if (!user) {
            return next(ApiError.UnAuthorizedError());
        }

        next();
    } catch (err) {
        return next(ApiError.UnAuthorizedError());
    }
}
