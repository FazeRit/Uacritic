import mongoose, { Schema, Document } from "mongoose";
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface ProfileAttributes extends Document {
    id: number;
    email: string;
    password: string;
    birthDate?: Date;
    achievements: [
        {
            achievementId: mongoose.Schema.Types.ObjectId,
            dateAchieved: Date | null,
            progress: number,
            points: number,
            status: boolean
        }
    ],
    totalPoints: number;
    username: string;
    role: string;
}

const profileSchema = new Schema<ProfileAttributes>({
    id: { type: Number, required: true, unique: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthDate: Date,
    achievements: [
        {
            achievementId: { type: mongoose.Schema.Types.ObjectId, ref: 'Achievement' },
            dateAchieved: { type: Date, required: false },
            progress: { type: Number, default: 0 },
            points: { type: Number, default: 0 },
            status: { type: Boolean, default: false }
        }
    ],
    totalPoints: { type: Number, default: 0 },
    username: { type: String, required: true },
    role: { type: String, required: true, default: "USER" }
});

profileSchema.plugin(updateIfCurrentPlugin);

const Profile = mongoose.model<ProfileAttributes>('Profile', profileSchema);

export default Profile;