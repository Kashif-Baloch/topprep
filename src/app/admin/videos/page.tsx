import Videos from "@/components/pages/Admin/Dashboard/components/Videos";
import SideBar from "@/components/shared/Sidebar";
import React from "react";

const Page = () => {
  return (
    <div>
      <SideBar>
        <Videos />
      </SideBar>
    </div>
  );
};

export default Page;
