import {ApiError} from "@uacritic/uacritic_common";
import Profile from "../models/profileModel";

import {Achievement, AchievementAttributes} from "../models/achievementModel";

export default class AchievementService {
    static async addToGeneralList(email: string, achievementData: 
    {
        name: string;
        description: string;
        triggerTags: string[];
        points: number;
        maxProgress: number;
    }
    ) {
        const user = await Profile.findOne({ email });
    
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