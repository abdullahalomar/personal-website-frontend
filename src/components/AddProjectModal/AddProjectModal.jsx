"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const AddProjectModal = ({ isOpen, onClose, onProjectAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
    gitLink: "",
    demoLink: "",
    createdAt: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      toast.error("Please upload an image!");
      return;
    }

    setLoading(true);
    try {
      // Upload to ImageBB
      const imgForm = new FormData();
      imgForm.append("image", imageFile);

      const imgUpload = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        imgForm
      );

      const imageUrl = imgUpload.data.data.url;

      const finalData = {
        ...formData,
        image: imageUrl,
      };

      await axios.post(
        "https://personal-website-server-chi.vercel.app/api/v1/projects",
        finalData
      );

      toast.success("Project added successfully!");
      onClose();
      onProjectAdded(); // reload
      setFormData({
        title: "",
        subTitle: "",
        description: "",
        gitLink: "",
        demoLink: "",
        createdAt: "",
      });
      setImageFile(null);
    } catch (err) {
      toast.error("Failed to add project!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Add New Project</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
            className="border p-2 rounded"
          />
          <input
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
            placeholder="Project Subtitle"
            required
            className="border p-2 rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description"
            required
            className="border p-2 rounded"
          />
          <input
            name="gitLink"
            value={formData.gitLink}
            onChange={handleChange}
            placeholder="GitHub Link"
            className="border p-2 rounded"
          />
          <input
            name="demoLink"
            value={formData.demoLink}
            onChange={handleChange}
            placeholder="Live Demo Link"
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="border p-2 rounded"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {loading ? "Uploading..." : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
