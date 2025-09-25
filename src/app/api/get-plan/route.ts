import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const subscription = await prisma.subscription.findFirst({
      where: {
        email: email,
      },
      select: {
        plan: true,
        status: true,
        currentPeriodEnd: true,
      },
    });

    if (!subscription) {
      return NextResponse.json(
        { error: "No subscription found for this email" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      plan: subscription.plan,
      status: subscription.status,
      currentPeriodEnd: subscription.currentPeriodEnd,
    });
  } catch (error) {
    console.error("Error fetching plan:", error);
    return NextResponse.json({ error: "Error fetching plan" }, { status: 500 });
  }
}
