import express from 'express';
import AchievementController from "../controllers/achievementController";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.get('/', AchievementController.achievements);
router.get('/:id', authMiddleware, AchievementController.userAchievements);
router.post('/addToGeneralList', authMiddleware, AchievementController.addToGeneralList);
router.post('/addToUserList/:id', AchievementController.addToUserList)

export default router;