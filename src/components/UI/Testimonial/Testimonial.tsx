"use client";

import Image from "next/image";
import testimonial from "@/assets/img/review.jpg";
import quote from "@/assets/icons/icons8-get-quote-100.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./testimonial.css";

// import required modules
import { EffectCards } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="ps-8 md:ps-16 lg:ps-24">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between">
        <div>
          <p className="text-2xl text-primary">Testimonials</p>
          <h1 className="text-5xl font-bold">Give your valuable comments</h1>
          <div className="flex gap-20 pt-10">
            <div>
              <Image src={quote} height={100} width={100} alt="testimonial" />
            </div>
            <div>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-l-2xl"
            src={testimonial}
            height={500}
            width={600}
            alt="testimonial"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
