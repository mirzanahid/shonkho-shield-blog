import { z } from "zod";
import { userRole } from "./user.constant";

const userValidationShcema = z.object({
  body: z.object({
    name: z.string(),
    email:z.string().email(),
    role: z.enum([...(userRole as [string, ...string[]])]).optional(),
    pasword: z
      .string({
        invalid_type_error: "Password must be string",
      })
      .max(20, { message: "Password can not be more than 20 characters" })
      .optional(),
  }),
});

export const UserValidation = {
  userValidationShcema,
};
