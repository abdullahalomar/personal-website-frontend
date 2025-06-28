/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const BlogDetailsPage = () => {
  const { blogId } = useParams() as { blogId: string };
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://personal-website-server-chi.vercel.app/api/v1/blogs/${blogId}`
        );
        setBlog(res.data?.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) fetchBlog();
  }, [blogId]);

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  if (!blog) {
    return <div className="text-center py-10 text-red-500">Blog not found</div>;
  }

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
      {/* Blog Image */}
      <div className="w-full mb-8 rounded-xl overflow-hidden shadow-lg">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-64 md:h-96 object-cover"
          // height={500}
          // width={1000}
        />
      </div>

      {/* Title & Dates */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          {blog.title}
        </h1>
        <div className="text-sm text-gray-500 space-y-1 md:text-right">
          <p>
            <span className="font-semibold">Created:</span>{" "}
            {formatDate(blog.createdAt)}
          </p>
          <p>
            <span className="font-semibold">Updated:</span>{" "}
            {formatDate(blog.updatedAt)}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none text-gray-700">
        {blog.description}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
