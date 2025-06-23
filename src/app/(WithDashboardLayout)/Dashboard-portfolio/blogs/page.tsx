// "use client";

// import { useEffect, useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";

// import axios from "axios";
// import AddBlogModal from "@/components/AddBlogModal/AddBlogModal";
// import Image from "next/image";

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);

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

//   const handleDelete = async (id: string) => {
//     const confirmDelete = confirm("Are you sure you want to delete this blog?");
//     if (confirmDelete) {
//       // You can add delete API here
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold">📚 All Blogs</h2>
//         <AddBlogModal onSuccess={fetchBlogs} />
//       </div>

//       {loading ? (
//         <p className="text-center">Loading blogs...</p>
//       ) : blogs.length === 0 ? (
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
//               {blogs.map((blog: any, index: number) => (
//                 <tr key={blog._id}>
//                   <td>{index + 1}</td>
//                   <td>
//                     <Image
//                       src={blog.image}
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
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPage;

"use client";

import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import AddBlogModal from "@/components/AddBlogModal/AddBlogModal";
import Image from "next/image";

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

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
              {currentBlogs.map((blog: any, index: number) => (
                <tr key={blog._id}>
                  <td>{indexOfFirstBlog + index + 1}</td>
                  <td>
                    <Image
                      src={blog.image}
                      alt="blog"
                      className="w-20 h-14 object-cover rounded-md"
                      height={100}
                      width={100}
                    />
                  </td>
                  <td>{blog.title}</td>
                  <td>{blog.description?.slice(0, 50)}...</td>
                  <td className="flex justify-center gap-2">
                    <button className="btn btn-sm btn-info text-white">
                      <FaEdit className="mr-1" /> Edit
                    </button>
                    <button className="btn btn-sm btn-error text-white">
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
