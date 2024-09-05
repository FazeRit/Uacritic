"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("./userModel"));
const tokenModel_1 = __importDefault(require("./tokenModel"));
userModel_1.default.hasOne(tokenModel_1.default, { foreignKey: 'userId' });
tokenModel_1.default.belongsTo(userModel_1.default, { foreignKey: 'userId' });
