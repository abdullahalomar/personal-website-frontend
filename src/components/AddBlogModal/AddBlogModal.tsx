// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { toast } from "sonner";

// const AddBlogModal = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!image || !title || !description) {
//       toast.error("Please fill out all fields.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("image", image);

//       const resImg = await axios.post(
//         `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
//         formData
//       );
//       const imageUrl = resImg.data.data.url;

//       const res = await axios.post(
//         "https://personal-website-server-chi.vercel.app/api/v1/blogs",
//         {
//           title,
//           description,
//           image: imageUrl,
//         }
//       );

//       if (res.data.success) {
//         toast.success("✅ Blog added successfully!");
//         setTitle("");
//         setDescription("");
//         setImage(null);
//         (
//           document.getElementById("add_blog_modal") as HTMLDialogElement
//         )?.close();
//       } else {
//         toast.error("❌ Failed to post blog.");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("❌ Error occurred while posting.");
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       <button
//         className="btn btn-primary"
//         onClick={() =>
//           (
//             document.getElementById("add_blog_modal") as HTMLDialogElement
//           )?.showModal()
//         }
//       >
//         ➕ Add New Blog
//       </button>

//       <dialog id="add_blog_modal" className="modal">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg mb-4">📝 Add Blog</h3>
//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input
//               type="text"
//               placeholder="Title"
//               className="input input-bordered w-full"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />

//             <textarea
//               placeholder="Description"
//               className="textarea textarea-bordered w-full"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />

//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="file-input file-input-bordered w-full"
//             />

//             <div className="modal-action flex justify-between items-center">
//               <button
//                 type="submit"
//                 className={`btn btn-success ${loading ? "loading" : ""}`}
//                 disabled={loading}
//               >
//                 {loading ? "Posting..." : "Post Blog"}
//               </button>
//               <button
//                 type="button"
//                 className="btn"
//                 onClick={() =>
//                   (
//                     document.getElementById(
//                       "add_blog_modal"
//                     ) as HTMLDialogElement
//                   )?.close()
//                 }
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </>
//   );
// };

// export default AddBlogModal;

"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const AddBlogModal = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
        setImage(null);
        (
          document.getElementById("add_blog_modal") as HTMLDialogElement
        )?.close();

        // 🔄 call parent refresh function
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
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">📝 Add Blog</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
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
