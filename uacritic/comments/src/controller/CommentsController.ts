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

            const {text, rating, category, itemId} = req.body;

            await CommentsService.addComment(req.user!, text, rating, category, itemId);

            res.status(201).json({message: 'Comment added successfully'});
        } catch (err) {
            next(err);
        }
    }
}