import bcrypt from "bcryptjs";
import { env } from "./env";
import { constantTimeEqual } from "./auth";

export async function verifyAdminCredentials(
  username: string,
  password: string
): Promise<boolean> {
  const userOk = await constantTimeEqual(username, env.ADMIN_USERNAME);
  if (!userOk) return false;

  const Hash = process.env.ADMIN_PASSWORD_HASH!;

  try {
    return await bcrypt.compare(password, Hash);
  } catch {
    return false;
  }
}
