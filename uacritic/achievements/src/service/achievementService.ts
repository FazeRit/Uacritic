import {ApiError} from "@uacritic/uacritic_common";
import Profile from "../models/profileModel";

import {Achievement, AchievementAttributes} from "../models/achievementModel";

export default class AchievementService {
    static async addToGeneralList(email: string, achievementData: AchievementAttributes) {
        const user = await Profile.findOne({email});

        if (!user) {
            throw ApiError.UnAuthorizedError();
        }

        if (user.role !== "ADMIN") {
            throw ApiError.AccessDeniedError();
        }

        const achievement = await Achievement.create(achievementData);

        if (!achievement) {
            throw ApiError.DatabaseError();
        }

        return achievement;
    }

    static async addToUserList(email: string, achievementId: number) {
        const user = await Profile.findOne({email});

        if (!user) {
            throw ApiError.UnAuthorizedError();
        }

        const achievement = await Achievement.findOne({id: achievementId});

        if (!achievement) {
            throw ApiError.BadRequestError('No such achievement');
        }

        const alreadyHasAchievement = user.achievements.some(a => a.achievementId === achievementId);

        if (alreadyHasAchievement) {
            throw ApiError.BadRequestError('Achievement is done');
        }

        user.achievements.push({
            achievementId: achievementId,
            dateAchieved: new Date()
        });

        await user.save();

        return achievement;
    }

    static async achievements() {
        const achievements = await Achievement.find();
        if (!achievements) {
            throw ApiError.DatabaseError();
        }

        return achievements;
    }

    static async userAchievements(email: string) {
        const user = await Profile.findOne({email});

        if (!user) {
            throw ApiError.UnAuthorizedError();
        }

        return user.achievements;
    }


}