import express from 'express';
import ProfileController from '../controllers/profileController';

const router = express.Router();

router.get('/', ProfileController.profile);

export default router;