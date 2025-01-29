import status from 'http-status';
import AppError from '../../errors/AppError';
import { BlogModel } from '../blog/blog.model';
import { User } from '../user/user.model';
import { TUser } from '../user/user.interface';

const userBlockedByAdminIntoDB = async (id: string, paylod: TUser) => {
  const userData = await User.findById(id);
  if (!userData) {
    throw new AppError(status.NOT_FOUND, 'User is not Found');
  }

  const { isBlocked } = paylod;
  if (typeof isBlocked !== 'boolean') {
    throw new AppError(
      status.BAD_REQUEST,
      'Invalid value for isBlocked. isBlocked only can true or false'
    );
  }
  const result = await User.findByIdAndUpdate(
    id,
    { isBlocked },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

const deleteBlogByAdminIntoDB = async (id: string) => {
  const blogData = await BlogModel.findById(id);
  if (!blogData) {
    throw new AppError(status.NOT_FOUND, 'Blog is not Found');
  }
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};

export const AdminServices = {
  deleteBlogByAdminIntoDB,
  userBlockedByAdminIntoDB,
};
