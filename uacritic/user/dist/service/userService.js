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
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const userModel_1 = __importDefault(require("../models/userModel"));
const userDto_1 = __importDefault(require("../dto/userDto"));
const mailService_1 = __importDefault(require("./mailService"));
const tokenService_1 = __importDefault(require("./tokenService"));
const tokenModel_1 = __importDefault(require("../models/tokenModel"));
const uacritic_common_1 = require("@uacritic/uacritic_common");
class UserService {
    static logout(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield tokenService_1.default.removeToken(refreshToken);
            return tokenData;
        });
    }
    static signup(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password, username }) {
            const candidate = yield userModel_1.default.findOne({ where: { email } });
            if (candidate) {
                throw uacritic_common_1.ApiError.BadRequestError(`Користувач з такою поштою:${email} вже існує`);
            }
            const hashPassword = yield bcrypt_1.default.hash(password, 10);
            const activationLink = (0, uuid_1.v4)();
            const user = yield userModel_1.default.create({ email, password: hashPassword, activationLink, isActivated: false, username });
            const mailService = new mailService_1.default();
            yield mailService.sendActivationLink({
                to: email,
                link: `${process.env.API_URL}/api/user/activate/${activationLink}`
            });
            const userDto = new userDto_1.default(user);
            const token = yield tokenService_1.default.generateToken(userDto.email);
            yield tokenService_1.default.saveToken({ userId: userDto.id, refreshToken: token.refreshToken });
            return Object.assign(Object.assign({}, token), { user: userDto });
        });
    }
    static login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.default.findOne({ where: { email } });
            if (!user) {
                throw uacritic_common_1.ApiError.BadRequestError('Користувач з такою поштою не знайдений');
            }
            const isPassEqual = yield bcrypt_1.default.compare(password, user.password);
            if (!isPassEqual) {
                throw uacritic_common_1.ApiError.BadRequestError('Невірний пароль');
            }
            const userDto = new userDto_1.default(user);
            const token = yield tokenService_1.default.generateToken(userDto.email);
            yield tokenService_1.default.saveToken({ userId: userDto.id, refreshToken: token.refreshToken });
            return Object.assign(Object.assign({}, token), { user: userDto });
        });
    }
    static refresh(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken) {
                throw uacritic_common_1.ApiError.UnAuthorizedError();
            }
            const userData = yield tokenService_1.default.validateToken(refreshToken);
            if (typeof userData === 'string') {
                throw uacritic_common_1.ApiError.UnAuthorizedError();
            }
            const tokenDb = yield tokenService_1.default.findToken(refreshToken);
            if (!tokenDb) {
                throw uacritic_common_1.ApiError.UnAuthorizedError();
            }
            const user = yield userModel_1.default.findOne({ where: { id: userData.id } });
            if (!user) {
                throw uacritic_common_1.ApiError.UnAuthorizedError();
            }
            const userDto = new userDto_1.default(user);
            const token = yield tokenService_1.default.generateToken(userDto.email);
            yield tokenService_1.default.saveToken({ userId: userDto.id, refreshToken: token.refreshToken });
            return Object.assign(Object.assign({}, token), { user: userDto });
        });
    }
    static activate(activationLink) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.default.findOne({ where: { activationLink } });
            if (!user) {
                throw uacritic_common_1.ApiError.BadRequestError(`Некоректне посилання активації`);
            }
            user.isActivated = true;
            yield user.save();
        });
    }
    static profile(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken) {
                throw uacritic_common_1.ApiError.UnAuthorizedError();
            }
            const tokenRecord = yield tokenModel_1.default.findOne({ where: { refreshToken } });
            if (!tokenRecord) {
                throw uacritic_common_1.ApiError.UnAuthorizedError();
            }
            const user = yield userModel_1.default.findOne({ where: { id: tokenRecord.userId } });
            if (!user) {
                throw uacritic_common_1.ApiError.UnAuthorizedError();
            }
            return {
                email: user.email,
                username: user.username,
                isActivated: user.isActivated,
                dateOfBirth: user.dateOfBirth,
            };
        });
    }
}
exports.default = UserService;
