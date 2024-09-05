"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static UnAuthorizedError() {
        return new ApiError(401, "Користувач не авторизований");
    }
    static BadRequestError(message, errors = []) {
        return new ApiError(400, message, errors);
    }
}
exports.ApiError = ApiError;
