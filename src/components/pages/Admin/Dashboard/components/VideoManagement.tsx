"use client";
import { Button } from "@/components/ui/button";
import api from "@/config/axios";
import { Loader2, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";

export interface Video {
  id: string;
  title: string;
  description: string;
  videoLink: string;
  category: string;
}

const VideoManagement = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [totalVideos, setTotalVideos] = useState(0);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateVideo, setUpdateVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<Record<string, string | null>>({});
  const [page, setPage] = useState(1);
  const limit = Number(process.env.NEXT_PUBLIC_SECURE_LIMIT!) || 10;
  const tabs = [
    "Professional Dressing and Attire",
    "Communication Skills",
    "Key Performance Indicators",
    "Selling Skills",
    "Relation Building",
    "Education",
    "AI",
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [tab, setTab] = useState(tabs[activeTab]);

  const fetchVideos = async () => {
    try {
      // making the state object for differ loading and error by adding auto genrate keys name
      setLoading({ fetch: true });
      setError({ fetch: null });
      const res = await api.get(
        `/v1/media/get-videos?category=${tab}&page=${page}&limit=${limit}`
      );
      setVideos(res.data.videos);
      setTotalVideos(res.data.totalVideos);
    } catch (error) {
      console.error(error);
      setError({ fetch: "Failed to fetch videos" });
    } finally {
      setLoading({ fetch: false });
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [tab, page, limit]);

  const handleDelete = async (id: string) => {
    try {
      setLoading({ delete: true });
      setError({ delete: null });
      const res = await api.delete(`/v1/media/delete-video?id=${id}`);
      if (res.status === 200) {
        const newVideos = videos.filter((video) => video.id !== id);
        setVideos(newVideos);
      }
    } catch (error) {
      console.error(error);
      setError({ delete: "Failed to delete video" });
    } finally {
      setLoading({ delete: false });
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {openUpdateModal && (
        <UpdateModal
          fetchVideos={fetchVideos}
          video={updateVideo}
          setOpen={setOpenUpdateModal}
        />
      )}
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
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setTab(tab);
              }}
              className={`px-4 py-2 text-[12px] font-medium rounded-full whitespace-nowrap transition-colors ${
                activeTab === index
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Video Content Area */}
      <div className=" p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">{tabs[activeTab]} Videos</h3>
        {loading?.fetch ? (
          <div className="flex items-center justify-center h-[50vh]">
            <Loader2 className="animate-spin" />
          </div>
        ) : error?.fetch ? (
          <div className="flex items-center justify-center h-[50vh]">
            <p className="text-red-600 text-2xl font-bold">{error.fetch}</p>
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Placeholder for videos - replace with actual content */}
            {videos.map((video) => (
              <div key={video.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-w-16 aspect-h-9  rounded mb-3"></div>
                <div className="flex items-center justify-between">
                  <h4 className="font-medium my-3">{video.title}</h4>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-sm my-3 flex items-center gap-2 cursor-pointer bg-red-500 text-white px-2 py-1 rounded ${
                        loading?.delete ? "opacity-50 pointer-events-none" : ""
                      }`}
                      onClick={() => handleDelete(video.id)}
                    >
                      {loading?.delete ? "Deleting..." : "Delete"}{" "}
                      <Trash2 size={18} />
                    </span>

                    <span
                      className={`font-sm my-3 flex items-center gap-2 cursor-pointer bg-blue-500 text-white px-2 py-1 rounded `}
                      onClick={() => {
                        setOpenUpdateModal(true);
                        setUpdateVideo(video);
                      }}
                    >
                      Update <Pencil size={18} />
                    </span>
                  </div>
                </div>
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

export default VideoManagement;
