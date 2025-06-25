"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const EditProjectModal = ({ isOpen, onClose, project, onProjectUpdated }) => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
    gitLink: "",
    demoLink: "",
    image: "",
  });
  const [newImageFile, setNewImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        subTitle: project.subTitle,
        description: project.description,
        gitLink: project.gitLink,
        demoLink: project.demoLink,
        image: project.image,
      });
    }
  }, [project]);

  if (!isOpen || !project) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = formData.image;

      // যদি নতুন ইমেজ দেয়া হয়
      if (newImageFile) {
        const imgForm = new FormData();
        imgForm.append("image", newImageFile);

        const imgUpload = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
          imgForm
        );
        imageUrl = imgUpload.data.data.url;
      }

      const updatedData = {
        ...formData,
        image: imageUrl,
      };

      // ✅ Optional Debugging
      console.log(
        "PUT URL:",
        `https://personal-website-server-chi.vercel.app/api/v1/projects/${project._id}`
      );
      console.log("Data sent:", updatedData);

      const response = await axios.put(
        `https://personal-website-server-chi.vercel.app/api/v1/projects/${project._id}`,
        updatedData
      );

      toast.success("Project updated successfully!");
      onClose();
      onProjectUpdated();
    } catch (error) {
      console.error("Update error:", error?.response?.data || error.message);
      toast.error("Failed to update project!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Edit Project</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Project Title"
            className="border p-2 rounded"
            required
          />
          <input
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
            placeholder="Project Subtitle"
            className="border p-2 rounded"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description"
            className="border p-2 rounded"
            required
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
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {loading ? "Updating..." : "Update Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectModal;
