"use client";

import React, { useState, useEffect } from "react";
import SubscribeModal from "@/components/modals/SubscribeModal";
import SubPage from "@/components/shared/SubPage";
import { getPlan, SubscriptionPlan } from "@/lib/subscription";
import { useSession } from "next-auth/react";

export default function ClientWrapper({ sub_pages }: { sub_pages: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const checkPlan = async () => {
      if (!session?.user?.email) return;
      
      try {
        const userPlan = await getPlan(session.user.email);
        setPlan(userPlan);
        
        // Check if user has a valid plan
        if (userPlan && (userPlan.plan === 'pro' || userPlan.plan === 'basic')) {
          console.log('User has a valid plan:', userPlan.plan);
          setIsOpen(false);
        } else {
          console.log('User does not have a valid plan');
          // Only show the modal if user doesn't have a valid plan
          setTimeout(() => {
            setIsOpen(true);
          }, 1000);
        }
      } catch (error) {
        console.error('Error checking plan status:', error);
        // In case of error, we'll keep the modal closed by default
        setIsOpen(false);
      }
    };
    
    checkPlan();
  }, [session?.user?.email]);

  // Check if user has a valid plan
  const hasValidPlan = plan && (plan.plan === 'pro' || plan.plan === 'basic');

  return (
    <>
      <SubPage 
        sub_pages={sub_pages} 
        hasValidPlan={hasValidPlan}
        onUpgradeClick={() => setIsOpen(true)}
      />
      <SubscribeModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
