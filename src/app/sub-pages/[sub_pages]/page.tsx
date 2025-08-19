import SubPage from "@/components/shared/SubPage";
import React from "react";

const Page = async ({ params }: { params: { sub_pages: string } }) => {
  const { sub_pages } = await params;

  return (
    <>
      <SubPage sub_pages={sub_pages} />
    </>
  );
};

export default Page;
