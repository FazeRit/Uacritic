import express from 'express';
import { body } from 'express-validator';

import UserController from '../controllers/userController';

import { AuthMiddleware } from '@uacritic/uacritic_common';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     tags: [User]
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               username:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Error validating data
 */
router.post('/signup',
    body('email')
        .isEmail()
        .withMessage('Invalid email format'),
    body('password')
        .isLength({ min: 6, max: 32 })
        .withMessage('Password must be between 6 and 32 characters'),
    body('username')
        .isLength({ min: 6, max: 20 })
        .withMessage('Username must be between 6 and 20 characters'),
    body('confirmPassword')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),
    body('username')
        .notEmpty()
        .withMessage("Username is required"),
    UserController.signup
);

/**
 * @swagger
 * /login:
 *   post:
 *     tags: [User]
 *     summary: Log in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Error validating data
 */
router.post('/login',
    body('email')
        .isEmail()
        .withMessage("Email is required"),
    body('password')
        .isLength({ min: 6, max: 32 })
        .withMessage("Password must be between 6 and 32 characters"),
    UserController.login
);

/**
 * @swagger
 * /logout:
 *   post:
 *     tags: [User]
 *     summary: Log out a user
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
router.post('/logout', AuthMiddleware, UserController.logout);

/**
 * @swagger
 * /activate/{link}:
 *   get:
 *     tags: [User]
 *     summary: Activate a user account
 *     parameters:
 *       - in: path
 *         name: link
 *         required: true
 *         description: Activation link
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Account activated successfully
 *       400:
 *         description: Invalid activation link
 */
router.get('/activate/:link', UserController.activate);

/**
 * @swagger
 * /profile:
 *   get:
 *     tags: [User]
 *     summary: Get user profile
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved
 *       401:
 *         description: Unauthorized
 */
router.get('/profile/', AuthMiddleware, UserController.profile);

/**
 * @swagger
 * /check:
 *   get:
 *     tags: [User]
 *     summary: Check if user is logged in
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User is logged in
 *       401:
 *         description: Unauthorized
 */
router.get('/check', AuthMiddleware, UserController.check);

/**
 * @swagger
 * /profile/edit:
 *   put:
 *     tags: [User]
 *     summary: Edit user profile
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *                 enum: [username, birthDate]
 *               value:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       400:
 *         description: Error validating data
 */
router.put(
    '/profile/edit',
    AuthMiddleware,
    [
        body('field')
            .notEmpty()
            .withMessage('Field is required')
            .isIn(['username', 'birthDate'])
            .withMessage('Invalid field'),
        body('value').custom((value, { req }) => {
            if (req.body.field === 'username') {
                if (typeof value !== 'string' || value.length < 6 || value.length > 20) {
                    throw new Error('Username must be between 6 and 20 characters');
                }
            } else if (req.body.field === 'birthDate') {
                const isoDateString = value;
                const date = new Date(isoDateString);

                if (isNaN(date.getTime())) {
                    throw new Error('Invalid date format');
                }
            }

            return true;
        })
    ],
    UserController.editProfile
);

/**
 * @swagger
 * /refresh:
 *   post:
 *     tags: [User]
 *     summary: Refresh access token
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: New tokens issued
 *       401:
 *         description: Unauthorized
 */
router.post('/refresh', UserController.refresh);

export default router;
