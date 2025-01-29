import express from 'express';
import auth from '../../middlewares/auth';
import { AdminControllers } from './admin.controller';

const router = express.Router();

router.delete('/blogs/:id', auth('admin'), AdminControllers.deleteBlogByAdmin);
router.patch(
  '/users/:id/block',
  auth('admin'),
  AdminControllers.blockedUserByAdmin
);

export const AdminRouter = router;
