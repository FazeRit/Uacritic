import jwt from 'jsonwebtoken';

interface UserData {
    email: string;
    iat: number;
    exp: number;
}

export class TokenService {
    static async validateToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET!) as UserData;
        } catch (err) {
            console.log('Token validation error:', err);
            return null;
        }
    }
}