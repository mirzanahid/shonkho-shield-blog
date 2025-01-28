import status from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";

const userRegisteredIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const userLoginIntoDB = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload?.email }).select(
    "+password"
  );

  if (!user) {
    throw new AppError(status.UNAUTHORIZED, "Invalid credentials");
  }

  const userStatus = user?.isBlocked;

  if (userStatus) {
    throw new AppError(
      status.FORBIDDEN,
      "Access denied. Your account has been blocked."
    );
  }

  const isPasswordMatch = await bcrypt.compare(
    payload?.password,
    user?.password
  );

  if (!isPasswordMatch) {
    throw new AppError(status.UNAUTHORIZED, "Invalid credentials");
  }

  const token = jwt.sign(
    { email: user?.email, role: user?.role, userId: user?._id },
    `${config.jwt_access_secret}`,
    {
      expiresIn: "1d",
    }
  );

  return { token, user };
};

export const AuthServices = {
  userRegisteredIntoDB,
  userLoginIntoDB,
};
