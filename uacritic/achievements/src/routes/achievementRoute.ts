import express from 'express';
import AchievementController from "../controllers/achievementController";
import authMiddleware from "../middlewares/authMiddleware";
import isAuthMiddleware from "../middlewares/isAuthMiddleware";

const router = express.Router();

router.get('/', AchievementController.achievements);
router.get('/:id', authMiddleware, isAuthMiddleware, AchievementController.userAchievements);
router.post('/addToGeneralList', authMiddleware, isAuthMiddleware, AchievementController.addToGeneralList);
router.post('/addToUserList/:id', AchievementController.addToUserList)

export default router;