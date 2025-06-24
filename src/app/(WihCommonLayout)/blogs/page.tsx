"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./blog.css";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import blog1 from "@/assets/img/Programming-software.jpg";
import blog2 from "@/assets/img/artificial-intelligence.jpg";
import blog3 from "@/assets/img/data-analytics.jpg";
import blog4 from "@/assets/img/information-technology.jpg";
import blog5 from "@/assets/img/web-design.jpg";

const BlogsPage = () => {
  return (
    <div className=" px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="py-8 md:py-16">
        <p className="text-lg md:text-2xl text-secondary uppercase">
          Get Updates
        </p>
        <h1 className="text-2xl md:text-5xl font-bold">Recent Blog</h1>
      </div>
      <div className="pb-14">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card bg-base-100 max-w-96 h-80 shadow-xl">
              <figure>
                <Image
                  className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-125 duration-700 h-[538px]"
                  src={blog1}
                  alt="Blog Image"
                  width={600}
                  height={600}
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-secondary">NEW</div>
                <a
                  href=""
                  className="card-title hover:text-secondary duration-500"
                >
                  Programming Software
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 max-w-96 h-80 shadow-xl">
              <figure>
                <Image
                  className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-125 duration-700"
                  src={blog2}
                  alt="Blog Image"
                  width={600}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-secondary">NEW</div>
                <a
                  href=""
                  className="card-title hover:text-secondary duration-500"
                >
                  Artificial-Intelligence
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 max-w-96 h-80 shadow-xl">
              <figure>
                <Image
                  className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-125 duration-700 "
                  src={blog3}
                  alt="Blog Image"
                  width={600}
                  height={600}
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-secondary">NEW</div>
                <a
                  href=""
                  className="card-title hover:text-secondary duration-500"
                >
                  Data-Analytics
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 max-w-96 h-80 shadow-xl">
              <figure>
                <Image
                  className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-125 duration-700 "
                  src={blog4}
                  alt="Blog Image"
                  width={600}
                  height={600}
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-secondary">NEW</div>
                <a
                  href=""
                  className="card-title hover:text-secondary duration-500"
                >
                  Information-Technology
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 max-w-96 h-80 shadow-xl">
              <figure>
                <Image
                  className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-125 duration-700 "
                  src={blog5}
                  alt="Blog Image"
                  width={600}
                  height={600}
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-secondary">NEW</div>
                <a
                  href=""
                  className="card-title hover:text-secondary duration-500"
                >
                  Web-Design
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogsPage;
