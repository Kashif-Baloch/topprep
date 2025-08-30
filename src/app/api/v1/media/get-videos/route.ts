// app/api/media/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, allowMethods } from "@/lib/api-guard";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const notAllowed = allowMethods(["GET"], req);
    if (notAllowed) return notAllowed;

    const admin = await requireAdmin(req);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = searchParams.get("page") || "1";
    const limit = searchParams.get("limit") || "10";
    const category =
      searchParams.get("category") || "Professional Dressing and Attire";

    console.log(category);

    const videos = await prisma.video.findMany({
      where: {
        category: {
          in: [category],
        },
      },
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
    });

    const totalVideos = await prisma.video.count({
      where: {
        category: {
          in: [category],
        },
      },
    });

    return NextResponse.json({
      success: true,
      videos,
      totalVideos,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
