import { z } from "zod";

const userValidationShcema = z.object({
  body: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

export const UserValidation = {
  userValidationShcema,
};
