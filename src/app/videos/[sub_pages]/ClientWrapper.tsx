"use client";

import React from "react";
import SubscribeModal from "@/components/modals/SubscribeModal";
import SubPage from "@/components/shared/SubPage";

export default function ClientWrapper({ sub_pages }: { sub_pages: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  return (
    <>
      <SubPage sub_pages={sub_pages} />
      <SubscribeModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
