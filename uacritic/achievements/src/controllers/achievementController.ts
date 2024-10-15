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
            const email = req.user;

            const userAchievements = await AchievementService.userAchievements(email!);

            res.status(200).json(userAchievements);
        } catch (err) {
            next(err);
        }
    }

    static async addToGeneralList(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.user;

            const {name, description, triggerTags, points} = req.body;

            const achievement = await AchievementService.addToGeneralList(email!, {
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
            const email = req.user;
            const {achievementId} = req.params;

            await AchievementService.addToUserList(email!, Number(achievementId));

            res.status(200).json({message: "Successfully added achievement to user list"});
        } catch (err) {
            next(err);
        }
    }
}