import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ClientWrapper from "./ClientWrapper";

const Page = async ({ params }: { params: Promise<{ sub_page: string }> }) => {
  const { sub_page } = await params;

  return (
    <>
      <Navbar />
      <ClientWrapper sub_pages={sub_page} />

      <Footer />
    </>
  );
};

export default Page;
