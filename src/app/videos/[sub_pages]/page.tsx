import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import SubPage from "@/components/shared/SubPage";
import React from "react";

const Page = async ({ params }: { params: Promise<{ sub_pages: string }> }) => {
  const { sub_pages } = await params;

  return (
    <>
      <Navbar />
      <SubPage sub_pages={sub_pages} />
      <Footer />
    </>
  );
};

export default Page;
