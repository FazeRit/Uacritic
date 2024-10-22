import jwt from 'jsonwebtoken';

interface UserData {
    email: string;
    iat: number;
    exp: number;
}

export default class TokenService {
    static async validateToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET!) as UserData;
        } catch (err) {
            return null;
        }
    }
}