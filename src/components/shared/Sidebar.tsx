"use client";
import {
  LogOut,
  LayoutDashboard,
  MenuIcon,
  X,
  Plus,
  Video,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import api from "@/config/axios";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    api
      .post("/v1/auth/admin/logout")
      .then(() => {
        window.location.href = "/admin/login";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const router = useRouter();

  const sidebarLinks = [
    {
      title: "1",
      items: [
        { title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { title: "Add Video", href: "/admin/add-video", icon: Plus },
        { title: "Videos", href: "/admin/videos", icon: Video },
      ],
    },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed right-[20px] top-[18px] z-[200] w-fit cursor-pointer lg:hidden"
      >
        <MenuIcon className="size-7" />
      </div>
      <div
        className={`fixed left-0 top-0 flex h-full w-full max-w-[240px] z-[500] flex-col items-center bg-white transition-all duration-500 justify-start ${
          sidebarOpen ? "" : "translate-x-[-500px] lg:translate-x-[0px]"
        }`}
      >
        <div
          onClick={() => setSidebarOpen(false)}
          className="absolute right-4 top-4 cursor-pointer lg:hidden"
        >
          <X />
        </div>
        <div className="flex pt-5 w-full items-center justify-start px-4 font-poppins">
          <Link href={"/"}>
            <div className="flex items-center justify-center lg:justify-start">
              <div className="text-4xl font-bold">
                <span className="text-blue-800">T</span>
                <span className="text-emerald-500">P</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full flex-grow overflow-y-auto px-1">
          <div className="flex w-full flex-col items-center justify-center gap-0">
            {sidebarLinks?.map((item, index) => (
              <div key={index} className={`w-full !space-y-1 py-6`}>
                {item.items?.map((subItem, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={() => {
                      setSidebarOpen(false);
                      handleNavigation(subItem?.href);
                    }}
                    className={`group flex h-[44px] w-full cursor-pointer items-center justify-start gap-3 rounded-md px-4 transition-all hover:bg-[#0206170D] dark:hover:bg-[#30313A66] ${
                      pathname.startsWith(subItem.href) &&
                      "bg-[#0206170D] dark:!bg-[#30313A66]"
                    }`}
                  >
                    <subItem.icon
                      className={`size-[18px] shrink-0 text-[#8C8C8C] dark:text-[#A3A7AC] transition-all group-hover:text-black dark:group-hover:text-[#F8FAFC] ${
                        pathname.startsWith(subItem.href) &&
                        "!text-[#020617] dark:!text-[#F8FAFC]"
                      }`}
                    />
                    <p
                      className={`font-poppins text-xs font-[500] text-start text-[#8C8C8C] transition-all dark:text-[#A3A7AC] group-hover:text-black dark:group-hover:text-[#F8FAFC] ${
                        pathname.startsWith(subItem.href) &&
                        "!text-[#020617] dark:!text-[#F8FAFC]"
                      }`}
                    >
                      {subItem?.title}
                    </p>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={() => {
            handleLogout();
          }}
          className="flex min-h-[63px] w-full items-center border-t-[1px] border-black/20  dark:border-[#E2E8F01A]"
        >
          <div className="group flex h-[44px] w-full cursor-pointer items-center justify-start gap-3 rounded-md px-5 transition-all hover:bg-[#0206170D] dark:hover:bg-[#30313A66]">
            <LogOut className="size-[18px] shrink-0 text-[#8C8C8C] group-hover:text-black dark:text-[#87888C] dark:group-hover:text-[#F8FAFC]" />
            <p className="font-poppins text-xs font-[500] text-[#8C8C8C] group-hover:text-black dark:text-[#A3A7AC] dark:group-hover:text-[#F8FAFC]">
              Sign Out
            </p>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="lg:ml-[240px]">{children}</div>
    </>
  );
};

export default SideBar;
