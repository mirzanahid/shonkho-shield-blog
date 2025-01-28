import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const registerUser = catchAsync(async (req, res) => {
  const result = await AuthServices.userRegisteredIntoDB(req.body);

  const filteredResponse = {
    _id: result?._id,
    name: result?.name,
    email: result?.email,
  };

  //  console.log(result)
  sendResponse(res, {
    success: true,
    message: "User registered successfully",
    statusCode: status.CREATED,
    data: filteredResponse,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.userLoginIntoDB(req.body);

  const data = {
    token : result.token
  }

  sendResponse(res, {
    success: true,
    message: "Login successful",
    statusCode: status.OK,
    data: data,
  });
});

export const AuthControllers = {
  registerUser,
  loginUser,
};
