// app/api/media/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, allowMethods } from "@/lib/api-guard";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { prisma } from "@/lib/prisma";

export async function PUT(req: NextRequest) {
  try {
    const notAllowed = allowMethods(["PUT"], req);
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
            "Retry-After": Math.ceil(
              (rl.resetAt - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    const body = await req.json();
    const { title, description, url, category, id } = body;

    const updateVideo = await prisma.video.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        videoLink: url,
        uploadedBy: admin.username,
        category,
      },
    });

    console.log(updateVideo);

    return NextResponse.json({
      success: true,
      video: {
        id: updateVideo.id,
        title,
        description,
        videoLink: url,
        category,
        uploadedBy: admin.username,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
