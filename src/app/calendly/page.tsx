"use client";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { getPlan } from "@/lib/subscription";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

const CalendlyPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const checkPlan = async () => {
    if (!session?.user?.email) return;

    try {
      const userPlan = await getPlan(session.user.email);
      if (userPlan?.plan !== "pro") {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkPlan();
  }, [session]);

  return (
    <>
      <Navbar />
      <div className="rounded-[20px] my-20 flex items-center  justify-center  ">
        <div className="w-11/12 md:max-w-[476px] max-w-full lg:max-w-[700px] h-[1000px] mt-20  rounded-2xl border border-gray-200">
          <iframe
            src="https://calendly.com/d/crvj-s67-8yf/detect-auto-intro-demo"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Booking Page"
            className="rounded-[20px] "
          />
        </div>
      </div>
      <Footer />{" "}
    </>
  );
};

export default CalendlyPage;
