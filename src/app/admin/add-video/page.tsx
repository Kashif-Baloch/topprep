import SideBar from "@/components/shared/Sidebar";
import AddVideo from "@/components/pages/Admin/Dashboard/components/AddVideo";
import React from "react";

const Page = () => {
  return (
    <>
      <SideBar>
        <AddVideo />
      </SideBar>
    </>
  );
};

export default Page;
