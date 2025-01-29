import express from 'express';

import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(BlogValidation.blogValidationShcema),
  auth('user'),
  BlogControllers.createBlog
);
router.patch('/:id', auth('user'), BlogControllers.updateBlog);
router.delete('/:id', auth('user', 'admin'), BlogControllers.deleteBlog);
router.get('/', BlogControllers.getAllBlogs);

export const BlogRouters = router;
