import * as z from 'zod';

export const VideoSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  email: z.string().optional(),
});

export type Video = z.infer<typeof VideoSchema>;
