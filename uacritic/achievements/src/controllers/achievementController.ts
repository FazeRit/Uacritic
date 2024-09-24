import {NextFunction, Request, Response} from "express";
import AchievementService from "../service/achievementService";

export default class AchievementController {
    static async achievements(req: Request, res: Response, next: NextFunction) {
        try {
            const achievements = await AchievementService.achievements();
            
            res.status(200).json(achievements);
        } catch (err) {
            next(err);
        }
    }

    static async userAchievements(req: Request, res: Response, next: NextFunction) {
        try {
            const {accessToken} = req.params;

            const userAchievements = await AchievementService.userAchievements(accessToken);

            return res.status(200).json(userAchievements);
        } catch (err) {
            next(err);
        }
    }

    static async addToGeneralList(req: Request, res: Response, next: NextFunction) {
        try {
            const {accessToken} = req.cookies;

            const {name, description, triggerTags, points} = req.body;

            const achievement = await AchievementService.addToGeneralList(accessToken, {
                name,
                description,
                triggerTags,
                points
            });

            res.status(200).json(achievement);
        } catch (err) {
            next(err);
        }
    }

    static async addToUserList(req: Request, res: Response, next: NextFunction) {
        try {
            const {accessToken} = req.cookies;
            const {achievementId} = req.params;

            await AchievementService.addToUserList(accessToken, Number(achievementId));

            return res.status(200).json({});
        } catch (err) {
            next(err);
        }
    }
}