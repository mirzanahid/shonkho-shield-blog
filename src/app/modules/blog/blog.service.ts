import status from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { BlogSearchableFields } from "./blog.constant";
import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

const createBlogIntoDB = async (paylod: TBlog, email: string) => {
  const userData = await User.findOne({ email });
  if (email !== userData?.email) {
    throw new AppError(status.UNAUTHORIZED, "You are not authorized!");
  }
  console.log(userData);
  console.log(paylod);
  const data = {
    title: paylod?.title,
    content: paylod?.content,
    author: userData?._id,
    isPublished: paylod?.isPublished,
  };
  const result = await BlogModel.create(data);
  return result;
};

const updateBlogIntoDB = async (id: string, paylod: TBlog, userId: string) => {
  const blogData = await BlogModel.findById(id);
  if (!blogData) {
    throw new AppError(status.NOT_FOUND, "Blog is not Found");
  }
  const authorId = blogData?.author.toString();
  if (userId !== authorId) {
    throw new AppError(status.UNAUTHORIZED, "You are not authorized!");
  }
  const result = await BlogModel.findByIdAndUpdate(id, paylod, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteBlogIntoDB = async (id: string, userId: string) => {
  const blogData = await BlogModel.findById(id);
  const authorId = blogData?.author.toString();
  if (!blogData) {
    throw new AppError(status.NOT_FOUND, "Blog is not Found");
  }
  if (userId !== authorId) {
    throw new AppError(status.UNAUTHORIZED, "You are not authorized!");
  }
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};

const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(BlogModel.find().populate("author"), query)
    .search(BlogSearchableFields)
    .sortOrder()
    .filter()
    .sortBy();
  const result = await blogQuery.modelQuery;
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogIntoDB,
  getAllBlogFromDB,
};
