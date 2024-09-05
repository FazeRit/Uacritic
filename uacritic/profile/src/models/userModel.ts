import mongoose from "mongoose";

interface ProfileAttributes {
    id: number;
    email: string;
    password: string;
    imageUrl?: string;
    isActivated: boolean;
    dateOfBirth?: Date;
    username: string;
    role?: string;
}

const profileSchema = new mongoose.Schema<ProfileAttributes>({
    id: {type: Number, required: true, unique: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    imageUrl: String,
    isActivated: {type: Boolean, required: true, default: false},
    dateOfBirth: Date,
    username: {type: String, required: true},
    role: String,
}, {_id: false})

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;