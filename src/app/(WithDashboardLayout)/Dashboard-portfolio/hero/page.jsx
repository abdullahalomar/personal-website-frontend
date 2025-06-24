"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";
import { toast } from "sonner";
import axios from "axios";

const HeroImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=85c1216e45edfae5e4e2980d02d293ba`,
        formData
      );
      setImageUrl(res.data.data.url);
      toast.success("Image uploaded!");
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

  const handleDelete = () => {
    setImageUrl(null);
    toast.success("Image deleted!");
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Hero Image</h1>

      {!imageUrl ? (
        <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg">
          <p className="mb-4 text-gray-600">No image uploaded yet</p>
          <button
            onClick={() => fileInputRef.current.click()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <FaUpload /> Upload Image
          </button>
        </div>
      ) : (
        <div className="relative">
          <Image
            src={imageUrl}
            alt="Hero"
            width={800}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-3">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600"
            >
              <FaEdit />
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
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
  );
};

export default HeroImage;
