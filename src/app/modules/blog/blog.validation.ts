import { z } from 'zod';

const blogValidationShcema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    content: z.string({ required_error: 'Title is required' }),
  }),
});

export const BlogValidation = {
  blogValidationShcema,
};
