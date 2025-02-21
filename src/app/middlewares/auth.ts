import { NextFunction, Request, Response } from 'express';
import status from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';
import catchAsync from '../utils/catchAsync';
import { User } from '../modules/user/user.model';

const auth = (...requiredRole: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError(
        status.UNAUTHORIZED,
        'You must provide a Bearer token!'
      );
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      throw new AppError(status.UNAUTHORIZED, 'You are not authorized!');
    }
    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string
      ) as JwtPayload;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new AppError(status.UNAUTHORIZED, 'Invalid or expired token!');
    }

    const { email, role } = decoded;
    const userData = await User.findOne({ email });
    if (!userData) {
      throw new AppError(status.NOT_FOUND, 'This user is not found!');
    }
    const userStatus = userData?.isBlocked;
    if (userStatus) {
      throw new AppError(status.FORBIDDEN, 'This user is blocked!');
    }
    if (requiredRole && !requiredRole.includes(role)) {
      throw new AppError(status.UNAUTHORIZED, 'You are not authorized !');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
