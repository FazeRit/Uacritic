import mongoose from "mongoose";

interface TokenAttributes {
    id: number;
    accessToken: string;
    userId: number;
}

const tokenSchema = new mongoose.Schema<TokenAttributes>({
    id: {type: Number, required: true, unique: true},
    accessToken: {type: String, required: true},
    userId: {type: Number, ref: 'Profile', required: true}
}, {_id: false})

const Token = mongoose.model('Token', tokenSchema);

export default Token;