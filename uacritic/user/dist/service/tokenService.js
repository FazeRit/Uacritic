"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenModel_1 = __importDefault(require("../models/tokenModel"));
class TokenService {
    static generateToken(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = jsonwebtoken_1.default.sign({ email }, process.env.JWT_SECRET, { expiresIn: "30h" });
            const refreshToken = jsonwebtoken_1.default.sign({ email }, process.env.JWT_SECRET, { expiresIn: "30d" });
            return {
                accessToken, refreshToken
            };
        });
    }
    static validateToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                return userData;
            }
            catch (err) {
                return null;
            }
        });
    }
    static findToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield tokenModel_1.default.findOne({ where: { refreshToken } });
            return tokenData;
        });
    }
    static saveToken(_a) {
        return __awaiter(this, arguments, void 0, function* ({ userId, refreshToken }) {
            const tokenData = yield tokenModel_1.default.findOne({ where: { userId } });
            if (tokenData) {
                tokenData.refreshToken = refreshToken;
                return tokenData.save();
            }
            return yield tokenModel_1.default.create({ userId, refreshToken });
        });
    }
    static removeToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield tokenModel_1.default.destroy({ where: { refreshToken } });
            return tokenData;
        });
    }
}
exports.default = TokenService;
