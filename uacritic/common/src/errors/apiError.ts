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

    static AccessDeniedError() {
        return new ApiError(403, 'Доступ до данного ресурсу забороннений')
    }

    static DatabaseError() {
        return new ApiError(500, 'Помилка бази данних');
    }
}

export {ApiError};