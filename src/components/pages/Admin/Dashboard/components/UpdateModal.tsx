import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api from "@/config/axios";
import { CheckCircle, Send, X, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Video } from "./Videos";

const UpdateModal = ({
  video,
  setOpen,
  fetchVideos,
}: {
  video: Video | null;
  setOpen: (open: boolean) => void;
  fetchVideos: () => void;
}) => {
  const tabs = [
    "Professional Dressing and Attire",
    "Communication Skills",
    "Key Performance Indicators",
    "Selling Skills",
    "Relation Building",
    "Education",
    "AI",
  ];

  const [formData, setFormData] = useState({
    title: video?.title || "",
    description: video?.description || "",
    url: video?.videoLink || "",
    category: video?.category || "",
  });

  useEffect(() => {
    setFormData({
      title: video?.title || "",
      description: video?.description || "",
      url: video?.videoLink || "",
      category: video?.category || "",
    });
  }, [video]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.description ||
      !formData.url ||
      !formData.category
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await api.put("/v1/media/update-video", {
        ...formData,
        id: video?.id,
      });
      if (res.status === 200) {
        setIsSubmitted(true);
        fetchVideos();
      } else setError("Upload failed 📍");
    } catch (error) {
      console.log(error);
      setError("Upload failed 📍");
    } finally {
      setIsSubmitting(false);
      setError(null);
    }
  };

  return (
    <div className="fixed bg-[#0000006e] scroll-hide inset-0 z-[1000] overflow-y-auto grid place-items-center">
      <div className="container relative mx-auto py-20">
        <div>
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white relative rounded-2xl shadow-2xl p-8 lg:max-w-lg w-full mx-auto">
              <X
                size={20}
                className="absolute top-4 right-4 cursor-pointer text-black"
                onClick={() => setOpen(false)}
              />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Update Video</h3>
                  <p className="text-sm text-gray-600">
                    Update your video here
                  </p>
                </div>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">
                      Video updated successfully!
                    </span>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-700 font-medium">{error}</span>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Video Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 outline-emerald-500 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200"
                    placeholder="Enter video title"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Video Description *
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 outline-emerald-500 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200"
                    placeholder="Enter video description"
                  />
                </div>

                <div>
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Video URL *
                  </label>
                  <input
                    type="text"
                    id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    className="w-full px-4 outline-emerald-500 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200"
                    placeholder="Enter video url"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Video Category *
                  </label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger className="w-full border border-gray-300 px-4 py-6 rounded-lg transition-all duration-200">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="z-[60000]">
                      {tabs.map((tab, index) => (
                        <SelectItem key={index} value={tab}>
                          {tab}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Updating...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Update Video
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
