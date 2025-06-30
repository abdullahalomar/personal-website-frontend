"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

// Dynamic import for Editor to avoid SSR issues
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const AddProjectModal = ({ isOpen, onClose, onProjectAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
    gitLink: "",
    demoLink: "",
    createdAt: "",
  });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const htmlContent = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setFormData((prev) => ({ ...prev, description: htmlContent }));
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
      setEditorState(EditorState.createEmpty());
      setImageFile(null);
    } catch (err) {
      toast.error("Failed to add project!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const editorToolbar = {
    options: ["inline", "blockType", "list", "textAlign", "link", "history"],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
    blockType: {
      options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"],
    },
    list: {
      options: ["unordered", "ordered"],
    },
    textAlign: {
      options: ["left", "center", "right"],
    },
    link: {
      options: ["link"],
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white text-slate-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4">Add New Project</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="title" className="block mb-1 font-medium">
              Project Title <span className="text-red-600">*</span>
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Project Title"
              required
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="subTitle" className="block mb-1 font-medium">
              Project Subtitle <span className="text-red-600">*</span>
            </label>
            <input
              id="subTitle"
              name="subTitle"
              value={formData.subTitle}
              onChange={handleChange}
              placeholder="Project Subtitle"
              required
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Project Description <span className="text-red-600">*</span>
            </label>
            <div className="border rounded p-2 min-h-[200px]">
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbar={editorToolbar}
                placeholder="Write your project description..."
                editorStyle={{
                  minHeight: "150px",
                  padding: "10px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="gitLink" className="block mb-1 font-medium">
              GitHub Link
            </label>
            <input
              id="gitLink"
              name="gitLink"
              value={formData.gitLink}
              onChange={handleChange}
              placeholder="GitHub Link"
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="demoLink" className="block mb-1 font-medium">
              Live Demo Link
            </label>
            <input
              id="demoLink"
              name="demoLink"
              value={formData.demoLink}
              onChange={handleChange}
              placeholder="Live Demo Link"
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label htmlFor="imageFile" className="block mb-1 font-medium">
              Upload Image <span className="text-red-600">*</span>
            </label>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
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
