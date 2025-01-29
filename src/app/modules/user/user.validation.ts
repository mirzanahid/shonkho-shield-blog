import { z } from 'zod';
import { userRole } from './user.constant';

const userValidationShcema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(1, 'Name cannot be empty or contain only spaces')
      .refine((value) => !/^\s*$/.test(value), {
        message: 'Name cannot contain only spaces',
      }),
    email: z.string({ required_error: 'Email is required.' }).email(),
    role: z
      .enum([...(userRole as [string, ...string[]])], {
        errorMap: () => ({
          message: 'Invalid role! Allowed roles are admin or user',
        }),
      })
      .optional(),
    password: z
      .string()
      .trim()
      .min(1, 'Password cannot be empty or only spaces')
      .max(20, 'Password cannot be more than 20 characters')
      .refine((password) => !/^\s*$/.test(password), {
        message: 'Password cannot contain only spaces',
      }),
    isBlocked: z.boolean().optional(),
  }),
});

export const UserValidation = {
  userValidationShcema,
};
