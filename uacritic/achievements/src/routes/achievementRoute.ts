import express from 'express';
import AchievementController from "../controllers/achievementController";

import {AuthMiddleware} from "@uacritic/uacritic_common";

const router = express.Router();

router.get('/', AchievementController.achievements);
router.get('/userAchievements', AuthMiddleware, AchievementController.userAchievements);
router.post('/addToGeneralList', AuthMiddleware, AchievementController.addToGeneralList);

export default router;