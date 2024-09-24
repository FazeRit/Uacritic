import jwt from 'jsonwebtoken';

export default class TokenService {
    static async validateToken(token: string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_SECRET!);
            return userData;
        } catch (err) {
            return null;
        }
    }
}