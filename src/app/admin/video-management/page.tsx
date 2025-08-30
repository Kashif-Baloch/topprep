import VideoManagement from "@/components/pages/Admin/Dashboard/components/VideoManagement";
import SideBar from "@/components/shared/Sidebar";
import React from "react";

const Page = () => {
  return (
    <div>
      <SideBar>
        <VideoManagement />
      </SideBar>
    </div>
  );
};

export default Page;
