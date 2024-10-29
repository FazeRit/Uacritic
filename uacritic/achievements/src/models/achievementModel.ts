import mongoose, { Schema, Document } from "mongoose";
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

export interface AchievementAttributes extends Document {
    id: number;
    name: string;
    description: string;
    triggerTags: string[];
    points: number;
    maxProgress: number;
}

interface Achievement {
    achievementId: mongoose.Types.ObjectId;
    dateAchieved: Date;
    progress: number;
    points: number;
    status: boolean;
  }

const achievementSchema = new Schema<AchievementAttributes>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    triggerTags: [String],
    points: { type: Number, required: true },
    maxProgress: { type: Number, required: true}
});

achievementSchema.plugin(updateIfCurrentPlugin);

const Achievement = mongoose.model<AchievementAttributes>('Achievement', achievementSchema);

export { Achievement };
