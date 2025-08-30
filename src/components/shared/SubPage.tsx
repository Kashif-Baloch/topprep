"use client";

import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import SubscribeModal from "../modals/SubscribeModal";
import api from "@/config/axios";
import { Button } from "../ui/button";

interface Video {
  id: string;
  title: string;
  description: string;
  videoLink: string;
  category: string;
}

const SubPage = ({ sub_pages }: { sub_pages: string }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false); // track if user has subscribed

  const [videos, setVideos] = useState<Video[]>([]);
  const [totalVideos, setTotalVideos] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const limit = Number(process.env.NEXT_PUBLIC_SECURE_LIMIT!) || 10;
  const tab = decodeURIComponent(sub_pages);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get(
          `/v1/media/get-videos?category=${tab}&page=${page}&limit=${limit}`
        );
        setVideos(res.data.videos);
        setTotalVideos(res.data.totalVideos);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [tab, page, limit]);

  // const videos = [
  //   {
  //     id: 1,
  //     title: "Video Title 1",
  //     url: "https://www.youtube.com/embed/vljPVueLV9Y?si=Vty9MCLkwa_WpLmn",
  //   },
  //   {
  //     id: 2,
  //     title: "Video Title 2",
  //     url: "https://www.youtube.com/embed/vljPVueLV9Y?si=Vty9MCLkwa_WpLmn",
  //   },
  //   {
  //     id: 3,
  //     title: "Video Title 3",
  //     url: "https://www.youtube.com/embed/vljPVueLV9Y?si=Vty9MCLkwa_WpLmn",
  //   },
  //   {
  //     id: 4,
  //     title: "Video Title 4",
  //     url: "https://www.youtube.com/embed/vljPVueLV9Y?si=Vty9MCLkwa_WpLmn",
  //   },
  //   {
  //     id: 5,
  //     title: "Video Title 5",
  //     url: "https://www.youtube.com/embed/vljPVueLV9Y?si=Vty9MCLkwa_WpLmn",
  //   },
  // ];

  const handleSubscribe = () => {
    setUnlocked(true);
    setModalOpen(false);
  };

  return (
    <section className="container mx-auto px-4 py-16 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {decodeURIComponent(sub_pages)}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access in-depth, expert-curated videos that cover all aspects of sales
          mastery by experienced managers of corporates.
        </p>
      </div>

      {/* Video Content */}
      <div className="p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative bg-white p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-medium text-2xl my-6">{video.title}</h4>

              <div className="relative aspect-video rounded-md mb-3 overflow-hidden">
                {/* Free videos */}
                {index < 2 || unlocked ? (
                  <iframe
                    className="w-full h-full rounded-md"
                    src={video.videoLink}
                    title={`YouTube video player ${video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  /* Locked preview - thumbnail only */
                  <div
                    onClick={() => setModalOpen(true)}
                    className="relative w-full h-full bg-black/10 backdrop-blur-3xl  rounded-md cursor-pointer flex items-center justify-center group"
                  >
                    <div className="absolute inset-0 size-full bg-black/30 backdrop-blur-lg z-20"></div>
                    <img
                      src={`https://img.youtube.com/vi/vljPVueLV9Y/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full absolute top-0 left-0 object-cover "
                    />
                    <div className="relative w-44 h-44 z-30 flex flex-col items-center justify-center text-white text-center">
                      <Lock className="w-12 h-12 mb-2" />
                      <p className="text-lg font-semibold">
                        Subscribe to Unlock
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <Button
          disabled={page >= Math.ceil(totalVideos / limit)}
          onClick={() => setPage(page + 1)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View More
        </Button>
      </div>

      {/* Modal */}
      <SubscribeModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        // onSubscribe={handleSubscribe}
      />
    </section>
  );
};

export default SubPage;
