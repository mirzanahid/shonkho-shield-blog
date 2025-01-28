import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import AppError from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import { User } from "../modules/user/user.model";

const auth = (...requiredRole: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;

    const { email, role } = decoded;

    const userData = await User.findOne({ email });

    if (!userData) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
    }
    // const isDeleted = user?.isDeleted;

    // if (isDeleted) {
    //   throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !");
    // }

    // checking if the user is blocked
    const userStatus = userData?.isBlocked;

    if (userStatus) {
      throw new AppError(httpStatus.FORBIDDEN, "This user is blocked!");
    }

    // if (
    //   user.passwordChangedAt &&
    //   User.isJWTIssuedBeforePasswordChanged(
    //     user.passwordChangedAt,
    //     iat as number
    //   )
    // ) {
    //   throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized !");
    // }

    if (requiredRole && !requiredRole.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You are not authorized  hi!"
      );
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
