import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import React from "react";

const CalendlyPage = () => {
  return (
    <>
      <Navbar />
      <div className="rounded-[20px] my-20 flex items-center  justify-center  ">
        <div className="w-11/12 md:max-w-[476px] max-w-full lg:max-w-[700px] h-[1000px] mt-20  rounded-2xl border border-gray-200">
          <iframe
            src="https://calendly.com/d/crvj-s67-8yf/detect-auto-intro-demo"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Booking Page"
            className="rounded-[20px] "
          />
        </div>
      </div>
      <Footer />{" "}
    </>
  );
};

export default CalendlyPage;
