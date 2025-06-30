/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// ✅ Proper Blog Type Interface
interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  createdAt: string;
}

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="sm:px-8 md:px-16 lg:px-24">
      <div className="mb-12 text-center">
        <p className="text-lg md:text-2xl text-secondary uppercase">
          Get Updates
        </p>
        <h1 className="text-2xl md:text-5xl font-bold">Recent Blogs</h1>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog._id}>
              <div className="card bg-base-100 shadow-xl border border-gray-200">
                <figure className="overflow-hidden h-[200px] md:h-[250px] lg:h-[200px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </figure>
                <div className="card-body p-4">
                  <div className="badge badge-secondary mb-2">
                    {formatDate(blog.createdAt)}
                  </div>
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="card-title text-lg font-bold hover:text-secondary duration-300"
                  >
                    {blog.title}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default BlogsPage;
