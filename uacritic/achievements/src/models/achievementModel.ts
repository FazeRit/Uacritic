import mongoose from "mongoose";

export interface AchievementAttributes {
    id?: number;
    name: string;
    description: string;
    triggerTags: string[];
    points: number;
}

const achievementModel = new mongoose.Schema<AchievementAttributes>({
    id: {type: Number, required: true, unique: true, autoIncrement: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    triggerTags: [String],
    points: Number
}, {_id: false})

const Achievement = mongoose.model('Achievement', achievementModel);

export {Achievement};