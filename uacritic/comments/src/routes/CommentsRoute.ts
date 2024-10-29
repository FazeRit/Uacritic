import express from "express";
import {body} from 'express-validator';

import CommentsController from "../controller/CommentsController";
import {AuthMiddleware} from '@uacritic/uacritic_common';


const router = express.Router();

router.get('/userComments', AuthMiddleware, CommentsController.userComments);
router.post('/itemComments', 
    [
        body('category')
        .notEmpty()
        .withMessage('Category is required'),
        body('itemId')
        .notEmpty()
        .withMessage('Item ID is required')
    ],
    CommentsController.itemComments
);

router.post('/addComment', 
    [
        body('category')
        .notEmpty()
        .withMessage('Category is required'),
        body('itemId')
        .notEmpty()
        .withMessage('Item ID is required'),
        body('text')
        .notEmpty()
        .withMessage('Text is required')
        .isLength({min: 1, max: 500})
        .withMessage('Text must be between 1 and 250 characters'),
        body('rating')
        .notEmpty()
        .isInt({min: 1, max: 10})
        .withMessage('Rating must be between 1 and 10'),
        body('tags')
        .notEmpty()
        .isArray()
        .withMessage('There must be tags related to item that is commented'),
    ],
    AuthMiddleware, 
    CommentsController.addComment
);

export default router;