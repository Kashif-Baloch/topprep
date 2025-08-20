import { NextRequest, NextResponse } from "next/server";
import { verifySession, COOKIE_NAME } from "@/lib/auth";

export async function requireAdmin(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return await verifySession(token);
}

export function allowMethods(methods: string[], req: NextRequest) {
  if (!methods.includes(req.method)) {
    return NextResponse.json(
      { error: "Method Not Allowed" },
      { status: 405, headers: { Allow: methods.join(", ") } }
    );
  }
}
