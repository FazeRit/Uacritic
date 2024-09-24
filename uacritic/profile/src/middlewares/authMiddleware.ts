import {NextFunction, Request, Response} from 'express';
import {ApiError} from "@uacritic/uacritic_common";

import TokenService from "../service/tokenService";

module.exports = function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return next(ApiError.UnAuthorizedError());
        }

        const accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnAuthorizedError());
        }

        const userData = TokenService.validateToken(accessToken);
        if (!userData) {
            return next(ApiError.UnAuthorizedError());
        }

        req.user = userData;
        next();
    } catch (err) {
        return next(ApiError.UnAuthorizedError());
    }
}