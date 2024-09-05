import {NextFunction, Request, Response} from 'express';

declare const ErrorMiddleware: (err: Error, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export {ErrorMiddleware};
