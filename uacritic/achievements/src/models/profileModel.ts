import mongoose from "mongoose";

interface ProfileAttributes {
    id: number;
    email: string;
    password: string;
    isActivated: boolean;
    dateOfBirth?: Date;
    achievements: [
        {
            achievementId: number,
            dateAchieved: Date
        }
    ],
    totalPoints: number;
    username: string;
    role: string;
}

const profileSchema = new mongoose.Schema<ProfileAttributes>({
    id: {type: Number, required: true, unique: true, autoIncrement: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, required: true, default: false},
    dateOfBirth: Date,
    achievements: [
        {
            id: {type: Number, required: true, unique: true},
            dateAchieved: {type: Date, required: true},
            points: {type: Number, required: true, default: 0}
        }
    ],
    totalPoints: {type: Number, default: 0},
    username: {type: String, required: true},
    role: {type: String, required: true, default: "USER"}
}, {_id: false})

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;