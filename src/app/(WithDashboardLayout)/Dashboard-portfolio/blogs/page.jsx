"use client";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import AddBlogModal from "@/components/AddBlogModal/AddBlogModal";
import EditBlogModal from "@/components/EditBlogModal/EditBlogModal";
import Image from "next/image";
import toast from "react-hot-toast";

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
      toast.error("Failed to fetch blogs!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(
        `https://personal-website-server-chi.vercel.app/api/v1/blogs/${id}`
      );
      if (res.data.success) {
        const updatedBlogs = blogs.filter((blog) => blog._id !== id);
        setBlogs(updatedBlogs);
        const totalRemainingBlogs = updatedBlogs.length;
        const totalPages = Math.ceil(totalRemainingBlogs / blogsPerPage);
        if (currentPage > totalPages) {
          setCurrentPage(totalPages || 1);
        }
        toast.success("Blog deleted successfully!");
      } else {
        toast.error("Failed to delete blog!");
      }
    } catch (err) {
      console.error("Error while deleting blog", err);
      toast.error("Error while deleting blog!");
    }
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const timeAgo = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    if (diffInHours < 1) return "এইমাত্র";
    if (diffInHours < 24) return `${diffInHours} ঘন্টা আগে`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)} দিন আগে`;
    return formatDate(dateString);
  };

  return (
    <div className="p-4 sm:p-6 text-white">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-black">
          📚 All Blogs
        </h2>
        <AddBlogModal onSuccess={fetchBlogs} />
      </div>

      {loading ? (
        <p className="text-center text-gray-300">Loading blogs...</p>
      ) : currentBlogs.length === 0 ? (
        <p className="text-center text-gray-400">No blogs found.</p>
      ) : (
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table className="table w-full text-sm sm:text-base text-white">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Created</th>
                <th>Published</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBlogs.map((blog, index) => (
                <tr key={blog?._id} className="hover:bg-gray-700 transition">
                  <td>{indexOfFirstBlog + index + 1}</td>
                  <td>
                    <Image
                      src={blog?.image}
                      alt="blog"
                      width={80}
                      height={60}
                      className="rounded-md object-cover w-20 h-14"
                      priority={index < 3}
                    />
                  </td>
                  <td className="max-w-[180px] font-medium truncate">
                    {blog.title}
                  </td>
                  <td className="text-sm max-w-[220px] truncate">
                    {blog.description?.slice(0, 40)}...
                  </td>
                  <td className="text-xs text-gray-300">
                    <div>{formatDate(blog.createdAt)}</div>
                    {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                      <div className="text-orange-400 text-xs">
                        Updated: {formatDate(blog.updatedAt)}
                      </div>
                    )}
                  </td>
                  <td className="text-xs text-green-400">
                    {formatDate(blog.publishedAt)}
                  </td>
                  <td className="flex flex-wrap justify-center items-center gap-2">
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

          {/* Pagination */}
          <div className="flex justify-center mt-6 pb-4">
            <div className="join">
              <button
                className="join-item btn"
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                «
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`join-item btn ${
                    currentPage === i + 1 ? "btn-active" : ""
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="join-item btn"
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
