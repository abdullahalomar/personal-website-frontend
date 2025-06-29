"use client";

import { useState } from "react";
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

// Import CSS only on client side

interface AddBlogModalProps {
  onSuccess?: () => void;
}

const AddBlogModal = ({ onSuccess }: AddBlogModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    const htmlContent = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setDescription(htmlContent);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!image || !title || !description) {
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
        "https://personal-website-server-chi.vercel.app/api/v1/blogs",
        {
          title,
          description,
          image: imageUrl,
        }
      );

      if (res.data.success) {
        toast.success("✅ Blog added successfully!");
        setTitle("");
        setDescription("");
        setEditorState(EditorState.createEmpty());
        setImage(null);
        (
          document.getElementById("add_blog_modal") as HTMLDialogElement
        )?.close();

        onSuccess && onSuccess();
      } else {
        toast.error("❌ Failed to post blog.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Error occurred while posting.");
    }

    setLoading(false);
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
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          (
            document.getElementById("add_blog_modal") as HTMLDialogElement
          )?.showModal()
        }
      >
        ➕ Add New Blog
      </button>

      <dialog id="add_blog_modal" className="modal">
        <div className="modal-box text-black">
          <h3 className="font-bold text-lg mb-4">📝 Add Blog</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* ✅ Rich Text Editor */}
            <div className="border rounded p-2 min-h-[200px]">
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbar={editorToolbar}
                placeholder="Write blog description here..."
                editorStyle={{
                  minHeight: "150px",
                  padding: "10px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px",
                }}
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
                      "add_blog_modal"
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

export default AddBlogModal;
