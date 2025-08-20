import { z } from "zod";

export const videoUploadSchema = z.object({
  title: z.string().min(3).max(200),
  youtubeUrl: z
    .string()
    .url()
    .regex(/^https:\/\/(www\.)?youtube\.com/),
});
