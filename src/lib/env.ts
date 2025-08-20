import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  ADMIN_USERNAME: z.string().min(1, "ADMIN_USERNAME is required"),
  AUTH_SECRET: z
    .string()
    .min(32, "AUTH_SECRET must be at least 32 chars (base64/hex ok)"),
  AUTH_COOKIE_NAME: z.string().min(1),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  ADMIN_USERNAME: process.env.ADMIN_USERNAME,
  AUTH_SECRET: process.env.AUTH_SECRET,
  AUTH_COOKIE_NAME: process.env.AUTH_COOKIE_NAME ?? "admin_session",
});
