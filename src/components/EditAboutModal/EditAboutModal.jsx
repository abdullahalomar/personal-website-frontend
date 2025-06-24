"use client";

import { useState, useEffect } from "react";
import { FaEdit, FaImage, FaTimes } from "react-icons/fa";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";

const EditAboutModal = ({ about, onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  // Initialize form data when blog prop changes
  useEffect(() => {
    if (about) {
      setOccupation(about.occupation || "");
      setEmail(about.email || "");
      setPhone(about.phone || "");
      setDescription(about.description || "");
      setImage(about.image || "");
      setImagePreview(about.image || "");
    }
  }, [about]);

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

    if (
      !occupation.trim() ||
      !description.trim() ||
      !email.trim() ||
      !phone.trim()
    ) {
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

      const aboutData = {
        occupation: occupation.trim(),
        description: description.trim(),
        email: email.trim(),
        phone: phone.trim(),
        image: finalImageUrl,
      };

      const response = await axios.put(
        `https://personal-website-server-chi.vercel.app/api/v1/about/${about._id}`,
        aboutData
      );

      if (response.data.success) {
        toast.success("About updated successfully!");
        setIsOpen(false);
        resetForm();
        onSuccess();
      } else {
        toast.error("Failed to update about!");
      }
    } catch (error) {
      console.error("Error updating about:", error);
      toast.error("Error updating about!");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setOccupation("");
    setEmail("");
    setPhone("");
    setDescription("");
    setImage("");
    setImageFile(null);
    setImagePreview("");
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form to original blog data
    if (about) {
      setOccupation(about.occupation || "");
      setEmail(about.email || "");
      setPhone(about.phone || "");
      setDescription(about.description || "");
      setImage(about.image || "");
      setImagePreview(about.image || "");
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
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">✏️ Edit Blog</h3>
              <button
                className="btn btn-sm btn-circle btn-ghost"
                onClick={handleClose}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Occupation <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter about title"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Email <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter about title"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Phone <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter about title"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  className="textarea textarea-bordered w-full h-32"
                  placeholder="Enter about description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">About Image</span>
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
                    className="file-input file-input-bordered flex-1"
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
                  className="btn btn-ghost"
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
                      Update About
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

export default EditAboutModal;
