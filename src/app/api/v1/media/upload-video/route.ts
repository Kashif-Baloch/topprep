// app/api/media/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, allowMethods } from "@/lib/api-guard";
import { videoUploadSchema } from "@/lib/schemas";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  const notAllowed = allowMethods(["POST"], req);
  if (notAllowed) return notAllowed;

  const admin = await requireAdmin(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ip = getClientIp(req.headers);
  const rl = rateLimit(`login:${ip}`, 5, 10 * 60 * 1000);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many attempts. Try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil((rl.resetAt - Date.now()) / 1000).toString(),
        },
      }
    );
  }

  const body = await req.json();
  const parsed = videoUploadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.message }, { status: 400 });
  }

  const { title, youtubeUrl } = parsed.data;

  const fakeDbId = Math.random().toString(36).slice(2);

  return NextResponse.json({
    success: true,
    video: {
      id: fakeDbId,
      title,
      youtubeUrl,
      uploadedBy: admin.username,
    },
  });
}
