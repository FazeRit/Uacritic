import express from 'express';
import UserController from '../controllers/userController';
import {body} from 'express-validator'

const router = express.Router();

router.post('/signup',
    body('email').isEmail(),
    body('password').isLength({min: 4, max: 32}),
    UserController.signup);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);
router.get('/activate/:link', UserController.activate);

export default router;