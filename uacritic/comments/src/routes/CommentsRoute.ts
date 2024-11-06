import express from "express";
import { body } from "express-validator";
import CommentsController from "../controller/CommentsController";
import { AuthMiddleware } from "@uacritic/uacritic_common";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Comment management
 */

/**
 * @swagger
 * /userComments:
 *   get:
 *     tags: [Comment]
 *     summary: Get all comments of a user
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of user comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   text:
 *                     type: string
 *                   rating:
 *                     type: integer
 *                   category:
 *                     type: string
 *                     enum: [MOVIES, GAMES, SERIES]
 *                   itemId:
 *                     type: integer
 *                   tags:
 *                     type: array
 *                     items:
 *                       type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   userId:
 *                     type: integer
 *       400:
 *         description: No comments found
 */
router.get('/userComments', AuthMiddleware, CommentsController.userComments);

/**
 * @swagger
 * /itemComments:
 *   post:
 *     tags: [Comment]
 *     summary: Get all comments of an item
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *                 enum: [MOVIES, GAMES, SERIES]
 *               itemId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: List of item comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   text:
 *                     type: string
 *                   rating:
 *                     type: integer
 *                   category:
 *                     type: string
 *                     enum: [MOVIES, GAMES, SERIES]
 *                   itemId:
 *                     type: integer
 *                   tags:
 *                     type: array
 *                     items:
 *                       type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   userId:
 *                     type: integer
 *       400:
 *         description: No comments found
 */
router.post(
  '/itemComments',
  [
    body('category').notEmpty().withMessage('Category is required'),
    body('itemId').notEmpty().withMessage('Item ID is required')
  ],
  CommentsController.itemComments
);

/**
 * @swagger
 * /addComment:
 *   post:
 *     tags: [Comment]
 *     summary: Add a comment to an item
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *                 enum: [MOVIES, GAMES, SERIES]
 *               itemId:
 *                 type: integer
 *               text:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 500
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 10
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 comment:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     text:
 *                       type: string
 *                     rating:
 *                       type: integer
 *                     category:
 *                       type: string
 *                       enum: [MOVIES, GAMES, SERIES]
 *                     itemId:
 *                       type: integer
 *                     tags:
 *                       type: array
 *                       items:
 *                         type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     userId:
 *                       type: integer
 *       400:
 *         description: Invalid data
 */
router.post(
  '/addComment',
  [
    body('category').notEmpty().withMessage('Category is required'),
    body('itemId').notEmpty().withMessage('Item ID is required'),
    body('text')
      .notEmpty()
      .withMessage('Text is required')
      .isLength({ min: 1, max: 500 })
      .withMessage('Text must be between 1 and 500 characters'),
    body('rating')
      .notEmpty()
      .isInt({ min: 1, max: 10 })
      .withMessage('Rating must be between 1 and 10'),
    body('tags')
      .notEmpty()
      .isArray()
      .withMessage('There must be tags related to item that is commented')
  ],
  AuthMiddleware,
  CommentsController.addComment
);

export default router;
