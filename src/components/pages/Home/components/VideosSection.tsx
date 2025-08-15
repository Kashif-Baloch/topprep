"use client";
import React, { useState } from "react";

const VideosSection = () => {
  // Tab categories
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

  return (
    <section className="container mx-auto px-4 py-16">
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
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Placeholder for videos - replace with actual content */}
          {[1, 2].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="aspect-w-16 aspect-h-9  rounded mb-3"></div>
              <h4 className="font-medium">Video Title {item}</h4>
              <iframe
                // width="560"
                // height="315"
                className="aspect-video"
                src="https://www.youtube.com/embed/ijMTbUzDS-U?si=EyRMVCmGZ5EbDE5P"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
