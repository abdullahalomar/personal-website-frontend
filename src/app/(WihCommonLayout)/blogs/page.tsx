"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const BlogsPage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For tablets and larger phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480, // For smaller phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="bg-[#e6f1fc] px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="py-8 md:py-16">
        <p className="text-lg md:text-2xl text-secondary uppercase">
          Get Updates
        </p>
        <h1 className="text-2xl md:text-5xl font-bold">Recent Blog</h1>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {/* Blog Card */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="card bg-base-100 max-w-[90%] md:max-w-[96%] mx-auto shadow-lg rounded-lg"
            >
              <figure>
                <Image
                  className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-125 duration-700"
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Blog Image"
                  width={600}
                  height={600}
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-start">
                  <div className="badge badge-outline hover:bg-primary hover:text-white transition duration-300">
                    Fashion
                  </div>
                  <div className="badge badge-outline hover:bg-primary hover:text-white transition duration-300">
                    Products
                  </div>
                </div>
                <p className="card-title hover:text-secondary transition duration-300">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogsPage;
