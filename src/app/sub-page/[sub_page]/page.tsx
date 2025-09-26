import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ClientWrapper from "./ClientWrapper";

const Page = async ({ params }: { params: Promise<{ sub_page: string }> }) => {
  const { sub_page } = await params;

  return (
    <>
      <Navbar />
<<<<<<<< HEAD:src/app/videos/[sub_pages]/page.tsx
      <ClientWrapper sub_pages={sub_pages} />
========
      <SubPage sub_page={sub_page} />
>>>>>>>> ac0da70a75e13ddef8cdd07c6ec582e942b3e0d4:src/app/sub-page/[sub_page]/page.tsx
      <Footer />
    </>
  );
};

export default Page;
