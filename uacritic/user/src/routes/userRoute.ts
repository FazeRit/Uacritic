import express from 'express';
import UserController from '../controllers/userController';
import {body} from 'express-validator';
import authMiddleware from "../middlewares/authMiddleware";

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

router.get('/profile/', authMiddleware, UserController.profile);

router.get('/check', authMiddleware, UserController.check);

export default router;
