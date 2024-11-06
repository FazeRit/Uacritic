import express from 'express';
import AchievementController from "../controllers/achievementController";
import { AuthMiddleware } from "@uacritic/uacritic_common";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Achievement
 *   description: Achievements management
 */

/**
 * @swagger
 * /achievements:
 *   get:
 *     tags: [Achievement]
 *     summary: Get all achievements
 *     responses:
 *       200:
 *         description: List of achievements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   triggerTags:
 *                     type: array
 *                     items:
 *                       type: string
 *                   points:
 *                     type: integer
 *                   maxProgress:
 *                     type: integer
 *       500:
 *         description: Database error
 */

router.get('/', AchievementController.achievements);

/**
 * @swagger
 * /userAchievements:
 *   get:
 *     tags: [Achievement]
 *     summary: Get user achievements
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of user achievements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   triggerTags:
 *                     type: array
 *                     items:
 *                       type: string
 *                   points:
 *                     type: integer
 *                   maxProgress:
 *                     type: integer
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Database error
 */

router.get('/userAchievements', AuthMiddleware, AchievementController.userAchievements);

/**
 * @swagger
 * /addToGeneralList:
 *   post:
 *     tags: [Achievement]
 *     summary: Add achievement to general list
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               triggerTags:
 *                 type: array
 *                 items:
 *                   type: string
 *               points:
 *                 type: integer
 *               maxProgress:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Achievement added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 triggerTags:
 *                   type: array
 *                   items:
 *                     type: string
 *                 points:
 *                   type: integer
 *                 maxProgress:
 *                   type: integer
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Access denied
 *       500:
 *         description: Database error
 */

router.post('/addToGeneralList', AuthMiddleware, AchievementController.addToGeneralList);

export default router;
