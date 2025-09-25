export interface SubscriptionPlan {
  plan: "basic" | "pro";
  status: string;
  currentPeriodEnd: Date | null;
}

export async function getPlan(email: string): Promise<SubscriptionPlan | null> {
  try {
    const res = await fetch(`/api/get-plan?email=${email}`);
    const subscription = await res.json();

    return subscription;
  } catch (error) {
    console.error("Error fetching subscription plan:", error);
    return null;
  }
}

export async function hasActiveSubscription(email: string): Promise<boolean> {
  try {
    const subscription = await getPlan(email);
    if (!subscription) return false;

    const now = new Date();
    return (
      subscription.status === "active" &&
      subscription.currentPeriodEnd !== null &&
      subscription.currentPeriodEnd > now
    );
  } catch (error) {
    console.error("Error checking active subscription:", error);
    return false;
  }
}
