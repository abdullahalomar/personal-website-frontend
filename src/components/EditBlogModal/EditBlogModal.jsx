"use client";

import { useState, useEffect } from "react";
import { FaEdit, FaImage, FaTimes } from "react-icons/fa";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";

const EditBlogModal = ({ blog, onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  // Initialize form data when blog prop changes
  useEffect(() => {
    if (blog) {
      setTitle(blog.title || "");
      setDescription(blog.description || "");
      setImage(blog.image || "");
      setImagePreview(blog.image || "");
    }
  }, [blog]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImageToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      setImageUploading(true);
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        return response.data.data.url;
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image!");
      return null;
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setLoading(true);

    try {
      let finalImageUrl = image;

      // Upload new image if selected
      if (imageFile) {
        const uploadedImageUrl = await uploadImageToImgBB(imageFile);
        if (!uploadedImageUrl) {
          setLoading(false);
          return;
        }
        finalImageUrl = uploadedImageUrl;
      }

      const blogData = {
        title: title.trim(),
        description: description.trim(),
        image: finalImageUrl,
      };

      const response = await axios.put(
        `https://personal-website-server-chi.vercel.app/api/v1/blogs/${blog._id}`,
        blogData
      );

      if (response.data.success) {
        toast.success("Blog updated successfully!");
        setIsOpen(false);
        resetForm();
        onSuccess();
      } else {
        toast.error("Failed to update blog!");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Error updating blog!");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage("");
    setImageFile(null);
    setImagePreview("");
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form to original blog data
    if (blog) {
      setTitle(blog.title || "");
      setDescription(blog.description || "");
      setImage(blog.image || "");
      setImagePreview(blog.image || "");
      setImageFile(null);
    }
  };

  return (
    <>
      {/* Edit Button */}
      <button
        className="btn btn-sm btn-info text-white"
        onClick={() => setIsOpen(true)}
      >
        <FaEdit className="mr-1" /> Edit
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal modal-open ">
          <div className="modal-box w-11/12 max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-black">✏️ Edit Blog</h3>
              <button
                className="btn btn-sm btn-circle btn-ghost"
                onClick={handleClose}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 ">
              {/* Title */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Title <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full text-black"
                  placeholder="Enter blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Description <span className="text-red-500">*</span>
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-32 text-black"
                  placeholder="Enter blog description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Blog Image</span>
                </label>

                {/* Current/Preview Image */}
                {imagePreview && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">Current Image:</p>
                    <Image
                      src={imagePreview}
                      alt="Blog preview"
                      className="w-full h-48 object-cover rounded-lg border"
                      width={400}
                      height={200}
                    />
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    className="file-input file-input-bordered flex-1 text-black"
                    onChange={handleImageChange}
                  />
                  <div className="btn btn-outline btn-sm">
                    <FaImage className="mr-1" />
                    {imageFile ? "Change" : "Upload"} Image
                  </div>
                </div>

                {imageUploading && (
                  <p className="text-sm text-blue-600 mt-2">
                    Uploading image...
                  </p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleClose}
                  disabled={loading || imageUploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading || imageUploading}
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Updating...
                    </>
                  ) : (
                    <>
                      <FaEdit className="mr-1" />
                      Update Blog
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditBlogModal;
