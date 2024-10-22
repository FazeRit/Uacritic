import {NextFunction, Request, Response} from "express";
import {ApiError} from "@uacritic/uacritic_common";
import {validationResult} from "express-validator";
import CommentsService from "../service/CommentsService";

declare global {
    namespace Express {
        interface Request {
            user?: string;
        }
    }
}

export default class CommentsController {
    static async userComments(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.user!;

            const comments = await CommentsService.userComments(email);
            
            res.status(200).json(comments);
        } catch (err) {
            next(err);
        }
    }

    static async itemComments(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequestError('Error validating data', errors.array()));
            }
            const {category, itemId} = req.body;

            const comments = await CommentsService.itemComments(category, itemId);

            res.status(200).json(comments);
        } catch (err) { 
            next(err);
        }
    }

    static async addComment(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequestError('Error validating data', errors.array()));
            }

            const {text, rating, category, itemId, tags} = req.body;

            const comment = await CommentsService.addComment(req.user!, text, rating, category, itemId, tags);

            res.status(201).json({message: 'Comment added successfully', comment});
        } catch (err) {
            next(err);
        }
    }
}