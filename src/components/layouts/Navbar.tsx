"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="fixed bg-white backdrop-blur-md top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-5">
        <Link href={"/"}>
          <div className="flex items-center justify-center lg:justify-start">
            <div className="text-4xl font-bold">
              <span className="text-blue-800">T</span>
              <span className="text-emerald-500">P</span>
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-700">
              TopRep
            </span>
          </div>
        </Link>

        <div className="flex items-center lg:gap-3">
          <span
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="bg-white lg:hidden px-3 py-[10px] rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#000"
              stroke="#000"
              className="w-6 h-6"
            >
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </span>
          <nav>
            <ul className="hidden lg:flex items-center justify-center  space-x-6 text-white ">
              <Link
                href="/"
                className="hover:text-primary text-black transition-all"
              >
                Home
              </Link>
              <Link
                className="hover:text-primary text-black transition-all"
                href="/about"
              >
                About Us
              </Link>
            </ul>
          </nav>
          <Link
            className="bg-emerald-500 hover:bg-emerald-600 uppercase ml-4 text-white hidden lg:block px-8 py-[10px] rounded-lg shadow-lg hover:shadow-xl transition-all
          duration-300"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div>
        <nav>
          <ul
            className={`fixed ${
              showNav ? "translate-x-0" : "translate-x-[100%]"
            } z-[100] top-0 left-0 w-full transition-all h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center gap-7 text-black outfit`}
          >
            <Link className="hover:text-[#ffffffcc] transition-all" href="/">
              Home
            </Link>
            <Link
              className="hover:text-[#ffffffcc] transition-all"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="bg-emerald-500 hover:bg-emerald-600 border border-white uppercase text-white px-8 py-[10px] rounded-md"
              href="/contact"
            >
              Contact Us
            </Link>

            <span
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="bg- z-[60] lg:hidden px-3 py-[10px] rounded-xl outfit absolute top-5 right-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000"
                stroke="#000"
                className="w-6 h-6"
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
              </svg>
            </span>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
