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
    ]
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
        }
    ],
    username: {type: String, required: true},
    role: String,
}, {_id: false})

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;