"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GoLock } from "react-icons/go";

interface SubscribeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ open, onClose }: SubscribeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="backdrop-blur-3xl" />
      <DialogContent className="max-w-[600px] min-h-60 w-full rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-blue-800 text-center">
            Subscribe for Exclusive Content
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-center">
            <div className="bg-emerald-500 mx-auto mb-4 size-24 rounded-full grid place-items-center text-5xl p-4">
              <GoLock className="text-white w-10 h-10" />
            </div>
            Unlock premium resources, expert tips, and personalized healthcare
            content by subscribing now.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col justify-center mx-auto sm:flex-row gap-2 mt-4">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Subscribe Now
          </Button>
          <Button variant="outline" onClick={onClose}>
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
