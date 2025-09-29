"use client";
import { Button } from "@/components/ui/button";
import api from "@/config/axios";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export interface Video {
  id: string;
  title: string;
  description: string;
  videoLink: string;
  category: string;
}

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [totalVideos, setTotalVideos] = useState(0);
  // const [openUpdateModal, setOpenUpdateModal] = useState(false);
  // const [updateVideo, setUpdateVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<Record<string, string | null>>({});
  const [page, setPage] = useState(1);
  const limit = Number(process.env.NEXT_PUBLIC_SECURE_LIMIT!) || 10;
  const tabs = [
    "All",
    "Health and Fitness",
    "Professional Dressing and Attire",
    "Communication Skills",
    "Key Performance Indicators",
    "Selling Skills",
    "Relation Building",
    "Education",
    "AI",
  ];

  const [activeTab, setActiveTab] = useState(1);
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

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    const cmp = a.title.localeCompare(b.title);
    return sortOrder === "asc" ? cmp : -cmp;
  });

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Filters: Search (wide) -> Tabs -> Sort */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-3 pb-2 mb-8">
        {/* Search Bar */}
        <Input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 !h-12 rounded-xl min-w-[260px] border border-gray-200 "
        />

        {/* Filter by Tabs */}
        <Select
          value={tab}
          onValueChange={(value) => {
            if (value === "All") value = "";
            setTab(value);
            setActiveTab(tabs.indexOf(value));
            setPage(1);
          }}
        >
          <SelectTrigger className="w-[220px] !h-12 rounded-xl">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {tabs.map((tab) => (
              <SelectItem key={tab} value={tab}>
                {tab}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort Asc/Desc */}
        <Select
          value={sortOrder}
          onValueChange={(v) => setSortOrder(v as "asc" | "desc")}
        >
          <SelectTrigger className="w-[160px] !h-12 rounded-xl">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Ascending (A → Z)</SelectItem>
            <SelectItem value="desc">Descending (Z → A)</SelectItem>
          </SelectContent>
        </Select>
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
        ) : sortedVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Placeholder for videos - replace with actual content */}
            {sortedVideos.map((video) => (
              <div key={video.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="aspect-w-16 aspect-h-9  rounded mb-3"></div>
                <div className="flex items-center justify-between">
                  <h4 className="font-medium my-3">{video.title}</h4>
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

export default Videos;
