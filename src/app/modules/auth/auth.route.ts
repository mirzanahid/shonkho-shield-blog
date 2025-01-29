import express from 'express';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { UserValidation } from '../user/user.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidation.userValidationShcema),
  AuthControllers.registerUser
);
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationShcema),
  AuthControllers.loginUser
);

export const AuthRoutes = router;
