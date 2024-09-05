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
const express_validator_1 = require("express-validator");
const userService_1 = __importDefault(require("../service/userService"));
const uacritic_common_1 = require("@uacritic/uacritic_common");
class UserController {
    static logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const token = yield userService_1.default.logout(refreshToken);
                res.clearCookie('refreshToken');
                return res.json(token);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static signup(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return next(uacritic_common_1.ApiError.BadRequestError('Помилки валідації даних', errors.array()));
                }
                const { email, password, username } = req.body;
                const userData = yield userService_1.default.signup({ email, password, username });
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 86400, httpOnly: true });
                return res.json(userData);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const userData = yield userService_1.default.login(email, password);
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 86400, httpOnly: true });
                return res.json(userData);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static refresh(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const userData = yield userService_1.default.refresh(refreshToken);
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 86400, httpOnly: true });
                return res.json(userData);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static activate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activationLink = req.params.link;
                yield userService_1.default.activate(activationLink);
                return res.redirect(process.env.CLIENT_URL);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static profile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const userData = yield userService_1.default.profile(refreshToken);
                return res.json(userData);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = UserController;
