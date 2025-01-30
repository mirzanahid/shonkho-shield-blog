import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";
import status from "http-status";

const createBlog = catchAsync(async (req, res) => {
  const userEmail = req.user?.email;
  const result = await BlogServices.createBlogIntoDB(req.body, userEmail);

  const filteredResponse = {
    _id: result?._id,
    title: result?.title,
    content: result?.content,
    author: result?.author,
  };

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Blog created successfully",
    data: filteredResponse,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const userId = req.user?.userId;
  // console.log(req.user)
  const { id } = req.params;
  const result = await BlogServices.updateBlogIntoDB(id, req.body, userId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const userId = req.user?.userId;
  const { id } = req.params;
  await BlogServices.deleteBlogIntoDB(id, userId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog deleted successfully",
    data: "",
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogFromDB(req.query);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
