class ApiError extends Error {
    status: number;
    errors: unknown[];

    constructor(status: number, message: string, errors: unknown[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnAuthorizedError() {
        return new ApiError(401, "Not authorized");
    }

    static BadRequestError(message: string, errors: any[] = []) {
        return new ApiError(400, message, errors);
    }

    static AccessDeniedError() {
        return new ApiError(403, 'Access Denied');
    }

    static DatabaseError() {
        return new ApiError(500, 'Database error');
    }
}

export {ApiError};