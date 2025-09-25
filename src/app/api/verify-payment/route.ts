import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "customer"],
    });

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 400 }
      );
    }

    const customerEmail = session.customer_details?.email;
    const plan = session.metadata?.plan;
    const amount = session.amount_total || 0;
    const customerId = session.customer as string;
    const subscriptionId = session.subscription as string | undefined;

    if (!customerEmail || !plan) {
      return NextResponse.json(
        { error: "Missing customer email or plan information" },
        { status: 400 }
      );
    }

    const existingSubscription = await prisma.subscription.findFirst({
      where: {
        email: customerEmail,
      },
    });

    if (existingSubscription) {
      await prisma.subscription.update({
        where: {
          id: existingSubscription.id,
        },
        data: {
          plan,
          status: "active",
          amount,
          stripeId: subscriptionId,
          customerId,
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      });
    } else {
      await prisma.subscription.create({
        data: {
          email: customerEmail,
          plan,
          amount,
          status: "active",
          stripeId: subscriptionId,
          customerId,
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Error verifying payment" },
      { status: 500 }
    );
  }
}
