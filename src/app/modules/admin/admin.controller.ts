import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";


const blockedUserByAdmin = catchAsync(async (req, res) => {
    const { id } = req.params;
    await AdminServices.userBlockedByAdminIntoDB(id,req.body);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "User is blocked successfully",
      data: "",
    });
  });
  


const deleteBlogByAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  await AdminServices.deleteBlogByAdminIntoDB(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog deleted successfully",
    data: "",
  });
});

export const AdminControllers = {
  deleteBlogByAdmin,
  blockedUserByAdmin
};
