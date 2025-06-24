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

  // timestamp
  // BlogPage.js এ এই ফাংশনগুলো যোগ করুন:

  // Enhanced date formatting
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Time ago function (optional)
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
                <th>Created</th>
                <th>Published</th>
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
                  <td className="font-medium">{blog.title}</td>
                  <td className="text-sm">
                    {blog.description?.slice(0, 40)}...
                  </td>
                  <td className="text-xs text-gray-600">
                    <div>{formatDate(blog.createdAt)}</div>
                    {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                      <div className="text-orange-600 text-xs">
                        Updated: {formatDate(blog.updatedAt)}
                      </div>
                    )}
                  </td>
                  <td className="text-xs text-green-600">
                    {formatDate(blog.publishedAt)}
                  </td>
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
