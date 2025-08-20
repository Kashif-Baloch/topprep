import { SignJWT, jwtVerify } from "jose";
import { env } from "./env";

export const SESSION_MAX_AGE_SEC = 60 * 60 * 12;
export const COOKIE_NAME = env.AUTH_COOKIE_NAME;

const secret = new TextEncoder().encode(env.AUTH_SECRET);

export type AdminSession = {
  sub: "admin";
  username: string;
  role: "admin";
};

async function hmacSha256(message: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const mac = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message)
  );
  return new Uint8Array(mac);
}

function timingSafeEqualBytes(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a[i] ^ b[i];
  }
  return result === 0;
}

export async function createSession(username: string): Promise<string> {
  return await new SignJWT({ sub: "admin", username, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE_SEC}s`)
    .sign(secret);
}

export async function verifySession(
  token: string
): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"],
      clockTolerance: "5s",
    });

    if (
      payload.sub === "admin" &&
      payload.role === "admin" &&
      typeof payload.username === "string"
    ) {
      return payload as AdminSession;
    }
    return null;
  } catch (err) {
    console.error("JWT verify failed:", err);
    return null;
  }
}

export async function constantTimeEqual(
  a: string,
  b: string
): Promise<boolean> {
  const ha = await hmacSha256(a);
  const hb = await hmacSha256(b);
  return timingSafeEqualBytes(ha, hb);
}
