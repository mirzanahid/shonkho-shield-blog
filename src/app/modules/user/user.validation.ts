import { z } from "zod";
import { userRole } from "./user.constant";

const userValidationShcema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required." }),
    email: z.string({ required_error: "Email is required." }).email(),
    role: z.enum([...(userRole as [string, ...string[]])]).optional(),
    pasword: z
      .string({
        invalid_type_error: "Password must be string",
        required_error: "Password is required.",
      })
      .max(20, { message: "Password can not be more than 20 characters" }),
    isBlocked: z.boolean().optional(),
  }),
});

export const UserValidation = {
  userValidationShcema,
};
