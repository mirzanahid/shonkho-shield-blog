/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import status from 'http-status';
const notFound: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'API Not Found !',
    error: '',
  });
};

export default notFound;
