import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import AboutSection from "@/components/pages/About/About";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Page;
