import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ContactSection from "@/components/pages/Contact/Contact";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
