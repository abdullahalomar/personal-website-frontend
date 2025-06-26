"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";
import { toast } from "sonner";
import axios from "axios";

const HeroImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://personal-website-server-chi.vercel.app/api/v1/hero"; // ← Replace with your server

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(BASE_URL);
        setImageUrl(res.data.image);
      } catch (error) {
        console.error("Error fetching hero image:", error);
      }
    };
    fetchImage();
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        formData
      );
      const uploadedUrl = res.data.data.url;
      await axios.post(BASE_URL, { image: uploadedUrl });
      setImageUrl(uploadedUrl);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    fileInputRef.current.click();
  };

  const handleDelete = async () => {
    try {
      await axios.delete(BASE_URL);
      setImageUrl(null);
      toast.success("Image deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete image");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Hero Image
        </h1>

        {!imageUrl ? (
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 rounded-lg">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No image uploaded yet
            </p>
            <button
              onClick={() => fileInputRef.current.click()}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2 mx-auto"
            >
              <FaUpload /> Upload Image
            </button>
          </div>
        ) : (
          <div className="relative group">
            <Image
              src={imageUrl}
              alt="Hero"
              width={1200}
              height={600}
              className="rounded-lg shadow-md w-full object-cover max-h-[400px] sm:max-h-[500px]"
            />
            <div className="absolute top-3 right-3 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={handleEdit}
                className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 shadow"
              >
                <FaEdit />
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          ref={fileInputRef}
          className="hidden"
        />

        {loading && <p className="text-blue-600 mt-4">Uploading...</p>}
      </div>
    </div>
  );
};

export default HeroImage;
