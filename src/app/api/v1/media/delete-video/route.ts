// app/api/media/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, allowMethods } from "@/lib/api-guard";
import { prisma } from "@/lib/prisma";

export async function DELETE(req: NextRequest) {
  try {
    const notAllowed = allowMethods(["DELETE"], req);
    if (notAllowed) return notAllowed;

    const admin = await requireAdmin(req);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get("id") as string;

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const video = await prisma.video.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      success: true,
      video,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
