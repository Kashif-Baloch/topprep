// app/dashboard/page.tsx
import Home from "@/components/pages/Admin/Dashboard/components/Home";
import Videos from "@/components/pages/Admin/Dashboard/components/Videos";
import SideBar from "@/components/shared/Sidebar";
import { getAdminSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <>
      <SideBar>
        <Home username={session?.username} />
        <Videos />
      </SideBar>
    </>
  );
}
