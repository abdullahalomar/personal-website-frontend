// "use client";

// import { useEffect, useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import axios from "axios";
// import AddBlogModal from "@/components/AddBlogModal/AddBlogModal";
// import Image from "next/image";
// import { toast } from "sonner";

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [blogsPerPage] = useState(5);

//   const fetchBlogs = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         "https://personal-website-server-chi.vercel.app/api/v1/blogs"
//       );
//       setBlogs(res.data?.data || []);
//     } catch (err) {
//       console.error("Failed to fetch blogs", err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const res = await axios.delete(
//         `https://personal-website-server-chi.vercel.app/api/v1/blogs/${id}`
//       );
//       if (res.data.success) {
//         // Optimistic UI Update
//         const updatedBlogs = blogs.filter((blog) => blog._id !== id);
//         setBlogs(updatedBlogs);

//         // Refetch from server to ensure sync
//         const { data } = await axios.get(
//           "https://personal-website-server-chi.vercel.app/api/v1/blogs"
//         );
//         setBlogs(data.data); // Adjust according to your API response structure

//         // Pagination logic
//         const totalRemainingBlogs = updatedBlogs.length;
//         const totalPages = Math.ceil(totalRemainingBlogs / blogsPerPage);
//         if (currentPage > totalPages) {
//           setCurrentPage(totalPages || 1);
//         }

//         toast.success("Blog deleted successfully!");
//       } else {
//         console.error("❌ Failed to delete blog");
//         toast.error("Failed to delete blog!");
//       }
//     } catch (err) {
//       console.error("❌ Error while deleting blog", err);
//       toast.error("Error while deleting blog!");
//     }
//   };

//   // Pagination Logic
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
//   const totalPages = Math.ceil(blogs.length / blogsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold">📚 All Blogs</h2>
//         <AddBlogModal onSuccess={fetchBlogs} />
//       </div>

//       {loading ? (
//         <p className="text-center">Loading blogs...</p>
//       ) : currentBlogs.length === 0 ? (
//         <p className="text-center text-gray-500">No blogs found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table table-zebra w-full">
//             <thead className="bg-base-200">
//               <tr>
//                 <th>#</th>
//                 <th>Image</th>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th className="text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentBlogs.map((blog, index) => (
//                 <tr key={blog?._id}>
//                   <td>{indexOfFirstBlog + index + 1}</td>
//                   <td>
//                     <Image
//                       src={blog?.image}
//                       alt="blog"
//                       className="w-20 h-14 object-cover rounded-md"
//                       height={100}
//                       width={100}
//                     />
//                   </td>
//                   <td>{blog.title}</td>
//                   <td>{blog.description?.slice(0, 50)}...</td>
//                   <td className="flex justify-center gap-2">
//                     <button className="btn btn-sm btn-info text-white">
//                       <FaEdit className="mr-1" /> Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-error text-white"
//                       onClick={() => handleDelete(blog._id)}
//                     >
//                       <FaTrash className="mr-1" /> Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination UI */}
//           <div className="flex justify-center mt-6">
//             <div className="join">
//               {[...Array(totalPages)].map((_, i) => (
//                 <button
//                   key={i}
//                   className={`join-item btn ${
//                     currentPage === i + 1 ? "btn-active" : ""
//                   }`}
//                   onClick={() => paginate(i + 1)}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPage;

//---------------------------------------------

// "use client";

// import { useEffect, useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import axios from "axios";
// import AddBlogModal from "@/components/AddBlogModal/AddBlogModal";
// import EditBlogModal from "@/components/EditBlogModal/EditBlogModal";
// import Image from "next/image";
// import { toast } from "sonner";

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [blogsPerPage] = useState(5);
//   const [editingBlog, setEditingBlog] = useState(null);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   const fetchBlogs = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         "https://personal-website-server-chi.vercel.app/api/v1/blogs"
//       );
//       setBlogs(res.data?.data || []);
//     } catch (err) {
//       console.error("Failed to fetch blogs", err);
//       toast.error("Failed to load blogs");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const res = await axios.delete(
//         `https://personal-website-server-chi.vercel.app/api/v1/blogs/${id}`
//       );
//       if (res.data.success) {
//         const updatedBlogs = blogs.filter((blog) => blog._id !== id);
//         setBlogs(updatedBlogs);
//         toast.success("Blog deleted successfully!");

//         const totalRemainingBlogs = updatedBlogs.length;
//         const totalPages = Math.ceil(totalRemainingBlogs / blogsPerPage);
//         if (currentPage > totalPages) {
//           setCurrentPage(totalPages || 1);
//         }
//       } else {
//         toast.error("Failed to delete blog!");
//       }
//     } catch (err) {
//       console.error("Error while deleting blog", err);
//       toast.error("Error while deleting blog!");
//     }
//   };

//   const handleEditClick = (blog) => {
//     setEditingBlog(blog);
//     setIsEditModalOpen(true);
//   };

//   const handleUpdateBlog = async (updatedBlog) => {
//     try {
//       const res = await axios.put(
//         `https://personal-website-server-chi.vercel.app/api/v1/blogs/${updatedBlog._id}`,
//         updatedBlog
//       );

//       if (res.data.success) {
//         setBlogs(
//           blogs?.map((blog) =>
//             blog._id === updatedBlog._id ? res.data.data : blog
//           )
//         );
//         toast.success("Blog updated successfully!");
//         setIsEditModalOpen(false);
//       } else {
//         toast.error("Failed to update blog!");
//       }
//     } catch (err) {
//       console.error("Error updating blog:", err);
//       toast.error("Error updating blog!");
//     }
//   };

//   // Pagination Logic
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
//   const totalPages = Math.ceil(blogs.length / blogsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold">📚 All Blogs</h2>
//         <AddBlogModal onSuccess={fetchBlogs} />
//       </div>

//       {loading ? (
//         <p className="text-center">Loading blogs...</p>
//       ) : currentBlogs.length === 0 ? (
//         <p className="text-center text-gray-500">No blogs found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table table-zebra w-full">
//             <thead className="bg-base-200">
//               <tr>
//                 <th>#</th>
//                 <th>Image</th>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th className="text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentBlogs.map((blog, index) => (
//                 <tr key={blog?._id}>
//                   <td>{indexOfFirstBlog + index + 1}</td>
//                   <td>
//                     <Image
//                       src={blog?.image}
//                       alt="blog"
//                       className="w-20 h-14 object-cover rounded-md"
//                       height={100}
//                       width={100}
//                     />
//                   </td>
//                   <td>{blog.title}</td>
//                   <td>{blog.description?.slice(0, 50)}...</td>
//                   <td className="flex justify-center gap-2">
//                     <button
//                       className="btn btn-sm btn-info text-white"
//                       onClick={() => handleEditClick(blog)}
//                     >
//                       <FaEdit className="mr-1" /> Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-error text-white"
//                       onClick={() => handleDelete(blog._id)}
//                     >
//                       <FaTrash className="mr-1" /> Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination UI */}
//           <div className="flex justify-center mt-6">
//             <div className="join">
//               {[...Array(totalPages)].map((_, i) => (
//                 <button
//                   key={i}
//                   className={`join-item btn ${
//                     currentPage === i + 1 ? "btn-active" : ""
//                   }`}
//                   onClick={() => paginate(i + 1)}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Blog Modal */}
//       {isEditModalOpen && (
//         <EditBlogModal
//           blog={editingBlog}
//           onClose={() => setIsEditModalOpen(false)}
//           onUpdate={handleUpdateBlog}
//         />
//       )}
//     </div>
//   );
// };

// export default BlogPage;

//----------------------------------------

// "use client";

// import { useEffect, useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import axios from "axios";
// import AddBlogModal from "@/components/AddBlogModal/AddBlogModal";
// import Image from "next/image";
// import { toast } from "sonner";

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [blogsPerPage] = useState(5);
//   const [editingBlog, setEditingBlog] = useState(null);
//   const [editForm, setEditForm] = useState({
//     title: "",
//     description: "",
//     image: "",
//   });
//   const [uploading, setUploading] = useState(false);

//   const fetchBlogs = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         "https://personal-website-server-chi.vercel.app/api/v1/blogs"
//       );
//       setBlogs(res.data?.data || []);
//     } catch (err) {
//       console.error("Failed to fetch blogs", err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const handleEdit = (blog) => {
//     setEditingBlog(blog);
//     setEditForm({
//       title: blog.title,
//       description: blog.description,
//       image: blog.image,
//     });
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);

//     setUploading(true);
//     try {
//       const res = await axios.post(
//         `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
//         formData
//       );
//       const imageUrl = res.data?.data?.url;
//       setEditForm((prev) => ({ ...prev, image: imageUrl }));
//       toast.success("✅ Image uploaded successfully!");
//     } catch (err) {
//       console.error("Image upload error:", err);
//       toast.error("❌ Image upload failed!");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!editingBlog) return;

//     try {
//       const res = await axios.put(
//         `https://personal-website-server-chi.vercel.app/api/v1/blogs/${editingBlog._id}`,
//         {
//           title: editForm.title,
//           description: editForm.description,
//           image: editForm.image,
//         }
//       );

//       if (res.data.success) {
//         // Update the blogs list with the updated blog
//         const updatedBlogs = blogs.map((blog) =>
//           blog._id === editingBlog._id ? res.data.data : blog
//         );
//         setBlogs(updatedBlogs);

//         // Close the edit modal
//         setEditingBlog(null);

//         toast.success("✅ Blog updated successfully!");
//       } else {
//         toast.error("❌ Failed to update blog");
//       }
//     } catch (err) {
//       console.error("Error updating blog:", err);
//       toast.error("❌ Error updating blog");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const res = await axios.delete(
//         `https://personal-website-server-chi.vercel.app/api/v1/blogs/${id}`
//       );
//       if (res.data.success) {
//         const updatedBlogs = blogs.filter((blog) => blog._id !== id);
//         setBlogs(updatedBlogs);

//         const { data } = await axios.get(
//           "https://personal-website-server-chi.vercel.app/api/v1/blogs"
//         );
//         setBlogs(data.data);

//         const totalRemainingBlogs = updatedBlogs.length;
//         const totalPages = Math.ceil(totalRemainingBlogs / blogsPerPage);
//         if (currentPage > totalPages) {
//           setCurrentPage(totalPages || 1);
//         }

//         toast.success("Blog deleted successfully!");
//       } else {
//         console.error("❌ Failed to delete blog");
//         toast.error("Failed to delete blog!");
//       }
//     } catch (err) {
//       console.error("❌ Error while deleting blog", err);
//       toast.error("Error while deleting blog!");
//     }
//   };

//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
//   const totalPages = Math.ceil(blogs.length / blogsPerPage);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold">📚 All Blogs</h2>
//         <AddBlogModal onSuccess={fetchBlogs} />
//       </div>

//       {loading ? (
//         <p className="text-center">Loading blogs...</p>
//       ) : currentBlogs.length === 0 ? (
//         <p className="text-center text-gray-500">No blogs found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table table-zebra w-full">
//             <thead className="bg-base-200">
//               <tr>
//                 <th>#</th>
//                 <th>Image</th>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th className="text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentBlogs.map((blog, index) => (
//                 <tr key={blog?._id}>
//                   <td>{indexOfFirstBlog + index + 1}</td>
//                   <td>
//                     <Image
//                       src={blog?.image}
//                       alt="blog"
//                       className="w-20 h-14 object-cover rounded-md"
//                       height={100}
//                       width={100}
//                     />
//                   </td>
//                   <td>{blog.title}</td>
//                   <td>{blog.description?.slice(0, 50)}...</td>
//                   <td className="flex justify-center gap-2">
//                     <button
//                       className="btn btn-sm btn-info text-white"
//                       onClick={() => handleEdit(blog)}
//                     >
//                       <FaEdit className="mr-1" /> Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-error text-white"
//                       onClick={() => handleDelete(blog._id)}
//                     >
//                       <FaTrash className="mr-1" /> Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="flex justify-center mt-6">
//             <div className="join">
//               {[...Array(totalPages)].map((_, i) => (
//                 <button
//                   key={i}
//                   className={`join-item btn ${
//                     currentPage === i + 1 ? "btn-active" : ""
//                   }`}
//                   onClick={() => paginate(i + 1)}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {editingBlog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg w-full max-w-md">
//             <h3 className="text-xl font-bold mb-4">✏️ Edit Blog</h3>

//             <input
//               type="text"
//               className="input input-bordered w-full mb-3"
//               placeholder="Blog Title"
//               value={editForm.title}
//               onChange={(e) =>
//                 setEditForm({ ...editForm, title: e.target.value })
//               }
//             />

//             <input
//               type="file"
//               accept="image/*"
//               className="file-input file-input-bordered w-full mb-3"
//               onChange={handleImageUpload}
//             />

//             {uploading && (
//               <p className="text-sm text-blue-500 mb-2">Uploading image...</p>
//             )}

//             {editForm.image && (
//               <Image
//                 src={editForm.image}
//                 alt="Uploaded"
//                 width={100}
//                 height={80}
//                 className="rounded mb-3"
//               />
//             )}

//             <textarea
//               className="textarea textarea-bordered w-full mb-3"
//               rows="4"
//               placeholder="Blog Description"
//               value={editForm.description}
//               onChange={(e) =>
//                 setEditForm({ ...editForm, description: e.target.value })
//               }
//             />

//             <div className="flex justify-end gap-2">
//               <button className="btn" onClick={() => setEditingBlog(null)}>
//                 Cancel
//               </button>
//               <button
//                 className="btn btn-primary"
//                 onClick={handleUpdate}
//                 disabled={uploading}
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPage;

//----------------------------
"use client";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import AddBlogModal from "@/components/AddBlogModal/AddBlogModal";
import EditBlogModal from "@/components/EditBlogModal/EditBlogModal";
import Image from "next/image";
import { toast } from "sonner";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://personal-website-server-chi.vercel.app/api/v1/blogs"
      );
      setBlogs(res.data?.data || []);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://personal-website-server-chi.vercel.app/api/v1/blogs/${id}`
      );
      if (res.data.success) {
        // Optimistic UI Update
        const updatedBlogs = blogs.filter((blog) => blog._id !== id);
        setBlogs(updatedBlogs);

        // Refetch from server to ensure sync
        const { data } = await axios.get(
          "https://personal-website-server-chi.vercel.app/api/v1/blogs"
        );
        setBlogs(data.data); // Adjust according to your API response structure

        // Pagination logic
        const totalRemainingBlogs = updatedBlogs.length;
        const totalPages = Math.ceil(totalRemainingBlogs / blogsPerPage);
        if (currentPage > totalPages) {
          setCurrentPage(totalPages || 1);
        }

        toast.success("Blog deleted successfully!");
      } else {
        console.error("❌ Failed to delete blog");
        toast.error("Failed to delete blog!");
      }
    } catch (err) {
      console.error("❌ Error while deleting blog", err);
      toast.error("Error while deleting blog!");
    }
  };

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">📚 All Blogs</h2>
        <AddBlogModal onSuccess={fetchBlogs} />
      </div>

      {loading ? (
        <p className="text-center">Loading blogs...</p>
      ) : currentBlogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBlogs.map((blog, index) => (
                <tr key={blog?._id}>
                  <td>{indexOfFirstBlog + index + 1}</td>
                  <td>
                    <Image
                      src={blog?.image}
                      alt="blog"
                      className="w-20 h-14 object-cover rounded-md"
                      height={100}
                      width={100}
                    />
                  </td>
                  <td>{blog.title}</td>
                  <td>{blog.description?.slice(0, 50)}...</td>
                  <td className="flex justify-center gap-2">
                    <EditBlogModal blog={blog} onSuccess={fetchBlogs} />
                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => handleDelete(blog._id)}
                    >
                      <FaTrash className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination UI */}
          <div className="flex justify-center mt-6">
            <div className="join">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`join-item btn ${
                    currentPage === i + 1 ? "btn-active" : ""
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
