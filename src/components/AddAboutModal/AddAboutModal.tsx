"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const AddAboutModal = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!image || !occupation || !description || !email || !phone) {
      toast.error("Please fill out all fields.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image);

      const resImg = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        formData
      );
      const imageUrl = resImg.data.data.url;

      const res = await axios.post(
        "https://personal-website-server-chi.vercel.app/api/v1/about",

        {
          occupation,
          description,
          image: imageUrl,
          email,
          phone,
        }
      );

      if (res.data.success) {
        toast.success("✅ About added successfully!");
        setOccupation("");
        setEmail("");
        setPhone("");
        setDescription("");
        setImage(null);
        (
          document.getElementById("add_about_modal") as HTMLDialogElement
        )?.close();

        // 🔄 call parent refresh function
        onSuccess && onSuccess();
      } else {
        toast.error("❌ Failed to post about.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Error occurred while posting.");
    }

    setLoading(false);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          (
            document.getElementById("add_about_modal") as HTMLDialogElement
          )?.showModal()
        }
      >
        ➕ Add New About
      </button>

      <dialog id="add_about_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">📝 Add Blog</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Occupation <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Occupation"
                className="input input-bordered w-full"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
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
                placeholder="Email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Phone"
                className="input input-bordered w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Description <span className="text-red-500">*</span>
                </span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }}
              className="file-input file-input-bordered w-full"
            />

            <div className="modal-action flex justify-between items-center">
              <button
                type="submit"
                className={`btn btn-success ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Posting..." : "Post Blog"}
              </button>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  (
                    document.getElementById(
                      "add_about_modal"
                    ) as HTMLDialogElement
                  )?.close()
                }
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddAboutModal;
