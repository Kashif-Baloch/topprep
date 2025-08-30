"use client";
import { Button } from "@/components/ui/button";
import api from "@/config/axios";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Video {
  id: string;
  title: string;
  description: string;
  videoLink: string;
  category: string;
}

const SubPage = ({ sub_page }: { sub_page: string }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [totalVideos, setTotalVideos] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const limit = Number(process.env.NEXT_PUBLIC_SECURE_LIMIT!) || 10;
  const tab = decodeURIComponent(sub_page);

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

  return (
    <section className="container mx-auto mt-20 px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Exclusive Video Content
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access in-depth, expert-curated videos that cover all aspects of sales
          mastery by experienced managers of corporates.
        </p>
      </div>
      {/* Tabs Navigation - Similar to the screenshot */}
      <div className="flex overflow-x-auto pb-2 mb-8 hide-scrollbar">
        <div className="flex space-x-2 justify-center mx-auto">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors`}
          >
            {tab}
          </button>
        </div>
      </div>
      {/* Video Content Area */}
      <div className=" p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">{tab} Videos</h3>
        {loading ? (
          <div className="flex items-center justify-center h-[50vh]">
            <Loader2 className="animate-spin" />
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-[50vh]">
            <p className="text-red-600 text-2xl font-bold">{error}</p>
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Placeholder for videos - replace with actual content */}
            {videos.map((video) => (
              <div key={video.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-w-16 aspect-h-9  rounded mb-3"></div>
                <h4 className="font-medium my-3">{video.title}</h4>
                <iframe
                  className="aspect-video rounded-md"
                  src={video.videoLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center h-[50vh] justify-center">
            <h1 className="text-2xl font-bold text-gray-600">
              No videos found
            </h1>
          </div>
        )}
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
    </section>
  );
};

export default SubPage;
