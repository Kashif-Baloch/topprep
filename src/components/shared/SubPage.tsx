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

interface SubPageProps {
  sub_pages: string;
  hasValidPlan: boolean | null;
  onUpgradeClick: () => void;
}

const SubPage = ({ sub_pages, hasValidPlan, onUpgradeClick }: SubPageProps) => {
  const [displayedVideos, setDisplayedVideos] = useState<Video[]>([]);

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
        const fetchedVideos = res.data.videos;
        setVideos(fetchedVideos);
        setTotalVideos(res.data.totalVideos);

        // Update displayed videos based on subscription status
        if (hasValidPlan) {
          setDisplayedVideos(fetchedVideos);
        } else {
          // Only show first 2 videos for non-subscribers
          setDisplayedVideos(fetchedVideos.slice(0, 2));
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [tab, page, limit, hasValidPlan]);

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
              className="relative bg-white p-4 rounded-lg shadow-sm group"
            >
              <h4 className="font-medium text-2xl my-6">{video.title}</h4>

              <div className="relative aspect-video rounded-md mb-3 overflow-hidden">
                {hasValidPlan || index < 2 ? (
                  // Show full video for subscribers or first 2 videos for non-subscribers
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
                  // Locked preview for non-subscribers
                  <div
                    onClick={onUpgradeClick}
                    className="relative w-full h-full bg-black/10 rounded-md cursor-pointer flex items-center justify-center group"
                  >
                    <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-300 z-10"></div>
                    <img
                      src={`https://img.youtube.com/vi/${getYoutubeVideoId(
                        video.videoLink
                      )}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full absolute top-0 left-0 object-cover"
                    />
                    <div className="relative z-20 flex flex-col items-center justify-center text-white text-center p-4">
                      <Lock className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-sm font-semibold group-hover:text-emerald-400 transition-colors duration-300">
                        Subscribe to Unlock All Videos
                      </p>
                      <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Get access to all videos with a Pro subscription
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
          onClick={() => {
            if (!hasValidPlan) {
              onUpgradeClick();
            } else {
              setPage(page + 1);
            }
          }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {hasValidPlan ? "View More" : "Upgrade to View More"}
        </Button>
      </div>
    </section>
  );
};

// Helper function to extract YouTube video ID from URL
function getYoutubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
}

export default SubPage;
