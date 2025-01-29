import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },

    content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true,
    },

    author: {
      type: Schema.Types.ObjectId,
      required: [true, 'user id is required'],
      ref: 'User',
    },
    isPublished: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export const BlogModel = model<TBlog>('Blog', blogSchema);
