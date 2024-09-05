declare class ApiError extends Error {
    status: number;
    errors: unknown[];
    constructor(status: number, message: string, errors?: unknown[]);
    static UnAuthorizedError(): ApiError;
    static BadRequestError(message: string, errors?: any[]): ApiError;
}
export { ApiError };
