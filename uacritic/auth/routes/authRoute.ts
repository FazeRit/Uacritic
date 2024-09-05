import express from 'express';
import AuthController from '../controllers/authController';
import {body} from 'express-validator'

const router = express.Router();

router.post('/signup',
    body('email').isEmail(),
    body('password').isLength({min: 4, max: 32}),
    AuthController.signup);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.get('/refresh', AuthController.refresh);
router.get('/activate/:link', AuthController.activate);

export default router;