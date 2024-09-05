"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
router.post('/signup', (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password').isLength({ min: 4, max: 32 }), userController_1.default.signup);
router.post('/login', userController_1.default.login);
router.post('/logout', userController_1.default.logout);
router.get('/refresh', userController_1.default.refresh);
router.get('/activate/:link', userController_1.default.activate);
router.get('/profile', userController_1.default.profile);
exports.default = router;
