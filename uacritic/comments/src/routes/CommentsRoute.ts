import express from "express";
import CommentsController from "../controller/CommentsController";
import {AuthMiddleware} from '@uacritic/uacritic_common';

const router = express.Router();

router.get('/userComments', AuthMiddleware, CommentsController.userComments);
router.get('/itemComments', CommentsController.itemComments);
router.post('/addComment', AuthMiddleware, CommentsController.addComment);

export default router;