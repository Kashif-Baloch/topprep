import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ClientWrapper from "./ClientWrapper";

const Page = async ({ params }: { params: Promise<{ sub_pages: string }> }) => {
  const { sub_pages } = await params;

  return (
    <>
      <Navbar />
      <ClientWrapper sub_pages={sub_pages} />

      <Footer />
    </>
  );
};

export default Page;
