"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const apiError_1 = require("../errors/apiError");
const ErrorMiddleware = (err, req, res, next) => {
    console.log(err);
    if (err instanceof apiError_1.ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: 'Неочікувана помилка' });
};
exports.ErrorMiddleware = ErrorMiddleware;
