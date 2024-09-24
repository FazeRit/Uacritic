import express from 'express';
import UserController from '../controllers/userController';
import {body} from 'express-validator';
import authMiddleware from "../middlewares/authMiddleware";
import isAuthMiddleware from "../middlewares/isAuthMiddleware";

const router = express.Router();

router.post('/signup',
    body('email')
        .isEmail()
        .withMessage('Invalid email format'),
    body('password')
        .isLength({min: 6, max: 32})
        .withMessage('Password must be between 6 and 32 characters'),
    body('username')
        .isLength({min: 6, max: 20})
        .withMessage('Username must be between 6 and 20 characters'),
    body('confirmPassword')
        .custom((value, {req}) => {
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

router.post('/login',
    body('email')
        .isEmail()
        .withMessage("Email is required"),
    body('password')
        .isLength({min: 6, max: 32})
        .withMessage("Password must be between 6 and 32 characters"),
    UserController.login
);

router.post('/logout', UserController.logout);

router.get('/activate/:link', UserController.activate);

router.get('/profile/', authMiddleware, isAuthMiddleware, UserController.profile);

router.get('/check', authMiddleware, isAuthMiddleware, UserController.check);

router.put(
    '/profile/edit',
    authMiddleware,
    isAuthMiddleware,
    [
        body('field')
            .notEmpty()
            .withMessage('Field is required')
            .isIn(['username', 'birthDate'])
            .withMessage('Invalid field'),
        body('value')
            .custom((value, {req}) => {
                if (req.body.field === 'username') {
                    if (typeof value !== 'string' || value.length < 6 || value.length > 20) {
                        throw new Error('Username must be between 6 and 20 characters');
                    }
                } else if (req.body.field === 'birthDate') {
                    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                    if (!dateRegex.test(value)) {
                        throw new Error('Invalid date format, expected YYYY-MM-DD');
                    }
                }
                return true;
            })
    ],
    UserController.editProfile
);


export default router;
