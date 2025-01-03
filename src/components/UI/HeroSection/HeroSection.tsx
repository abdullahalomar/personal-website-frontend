/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import heroImage from "@/assets/img/hero-img.png";
import { TypeAnimation } from "react-type-animation";
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const HeroSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const handleClick = () => {
    // Speech Synthesis Setup
    const message = new SpeechSynthesisUtterance(
      "Hi, welcome to Abdullah Al Omor's website, stay tuned and learn about Abdullah Al Omor. thank you"
    );
    message.lang = "en-US";
    message.rate = 1;
    message.pitch = 1;
    window.speechSynthesis.speak(message);
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center pt-10 sm:pt-10 md:pt-8 lg:pt-0 px-32 w-full bg-gradient-to-r from-[#83B4FF] via-[#5A72A0] to-[#aacff3]">
      <div className="text-start" data-aos="zoom-out-right">
        <h1 className="uppercase text-3xl">
          <span className="text-white">Hello</span> i'm
        </h1>
        <h1 className="text-6xl mt-2 mb-4 font-bold text-primary">
          Abdullah Al Omar
        </h1>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center">
          <p className="text-2xl text-primary font-semibold me-3">
            A Passionate
          </p>

          <div>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Web Designer",
                1000,
                "Frontend Developer",
                1000,
                "Video Creator",
                1000,
                "App Developer",
                500,
              ]}
              speed={50}
              style={{ fontSize: "24px", color: "white" }}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="mt-3">
          <TbArrowBigDownLineFilled className="animate-bounce" fontSize={20} />
          <div className="bg-secondary shadow-md w-[120px] md:w-[190px] pb-1.5 rounded-md">
            <button
              className="w-[120px] md:w-[190px] h-9 md:h-12 rounded-md uppercase text-white bg-primary hover:bg-secondary transition duration-300 hover:text-black"
              onClick={handleClick}
            >
              Say Hello
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center gap-0 sm:gap-0 md:gap-10 lg:gap-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src={heroImage}
          className="mt-5"
          alt="hero image"
          height={450}
          width={450}
        />
      </motion.div>
      <div className="flex sm:flex md:flex-col lg:flex-col gap-8">
        <Link
          target="_blank"
          href="https://www.facebook.com/abdullahalomar2"
          className="animate-bounce"
        >
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>

          <FaFacebookF fontSize={35} />
        </Link>

        <Link
          target="_blank"
          href="https://github.com/abdullahalomar"
          className="animate-bounce"
        >
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>

          <FaGithub fontSize={35} />
        </Link>
        <Link
          target="_blank"
          href="www.linkedin.com/in/omar17"
          className="animate-bounce"
        >
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>

          <FaLinkedinIn fontSize={35} />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/c/AbdullahAlOmar"
          className=" animate-bounce"
        >
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>

          <FaYoutube className="" fontSize={35} />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
