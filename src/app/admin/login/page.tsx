import LoginSection from "@/components/pages/Admin/Login/Login";
import { getAdminSession } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin/dashboard");
  }
  return (
    <div>
      <LoginSection />
    </div>
  );
};

export default Page;
