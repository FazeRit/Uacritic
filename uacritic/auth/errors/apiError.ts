class ApiError extends Error {
    status: number;
    errors: unknown[];

    constructor(status: number, message: string, errors: unknown[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnAuthorizedError() {
        return new ApiError(401, "Користувач не авторизований");
    }

    static BadRequestError(message: string, errors: any[] = []) {
        return new ApiError(400, message, errors);
    }
}

export default ApiError;