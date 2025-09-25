"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GoLock } from "react-icons/go";
import { getPlan, SubscriptionPlan } from "@/lib/subscription";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface SubscribeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ open, onClose }: SubscribeModalProps) {
  const router = useRouter();

  const { data: session } = useSession();
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (plan: "basic" | "pro", amount: number) => {
    if (!session?.user?.email) {
      router.push("/auth/signin");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session?.user?.email,
          plan,
          amount,
        }),
      });

      const { sessionId } = await response.json();

      if (sessionId) {
        const stripe = await import("@stripe/stripe-js").then((mod) =>
          mod.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
        );
        if (!stripe) {
          throw new Error("Stripe failed to initialize");
        }

        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });

        if (error) {
          console.error("Stripe error:", error);
          toast.error("Failed to redirect to payment");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getPlanStatus = async () => {
    const email = session?.user?.email;
    if (!email) {
      return;
    }
    const plan = await getPlan(email);
    setPlan(plan);
  };

  useEffect(() => {
    getPlanStatus();
  }, [session]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="backdrop-blur-3xl" />
      <DialogContent className="max-w-[600px] min-h-60 w-full rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-blue-800 text-center">
            Subscribe for Exclusive Content
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-center">
            <div className="bg-emerald-500 mx-auto mb-4 size-24 rounded-full grid place-items-center text-5xl p-4">
              <GoLock className="text-white w-10 h-10" />
            </div>
            Unlock premium resources, expert tips, and personalized healthcare
            content by subscribing now.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col justify-center mx-auto sm:flex-row gap-2 mt-4">
          <Button
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
            onClick={() => {
              if (plan?.plan === "pro" || plan?.plan === "basic") {
                toast.success("You are already subscribed");
                onClose();
                return;
              }
              handleClick("pro", 9900);
              onClose();
            }}
          >
            {isLoading ? "Loading..." : "Subscribe Now"}
          </Button>
          <Button variant="outline" onClick={onClose}>
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
