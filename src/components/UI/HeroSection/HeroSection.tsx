/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import heroImage from "@/assets/img/hero-img.png";
import facebook from "@/assets/icons/facebook.png";
import github from "@/assets/icons/github.png";
import linkedin from "@/assets/icons/linkedin.png";
import youtube from "@/assets/icons/youtube.png";
import { TypeAnimation } from "react-type-animation";
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";

const HeroSection = () => {
  const { theme } = useTheme();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center pt-10 sm:pt-10 md:pt-8 lg:pt-0 px-32 w-full ${
        theme === "dark"
          ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600"
          : "bg-gradient-to-r from-[#83B4FF] via-[#5A72A0] to-[#aacff3]"
      }`}
    >
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
              style={{ fontSize: "2em", color: "white" }}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="mt-3">
          <TbArrowBigDownLineFilled className="animate-bounce" fontSize={20} />
          <div className="bg-secondary shadow-md w-[190px] pb-1.5 rounded-md">
            <button className="w-[190px] h-12 rounded-md uppercase text-white bg-primary hover:bg-secondary transition duration-300 hover:text-black">
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
          <Image
            className="ring-2 ring-primary p-1 rounded "
            src={facebook}
            alt="facebook icon"
            height={40}
            width={40}
          />
        </Link>

        <Link
          target="_blank"
          href="https://github.com/abdullahalomar"
          className="animate-bounce"
        >
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
          <Image
            className="ring-2 ring-primary p-1 rounded "
            src={github}
            alt="facebook icon"
            height={40}
            width={40}
          />
        </Link>
        <Link
          target="_blank"
          href="www.linkedin.com/in/omar17"
          className="animate-bounce"
        >
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
          <Image
            className="ring-2 ring-primary p-1 rounded "
            src={linkedin}
            alt="facebook icon"
            height={40}
            width={40}
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/c/AbdullahAlOmar"
          className=" animate-bounce"
        >
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
          <Image
            className="ring-2 ring-primary p-1 rounded "
            src={youtube}
            alt="facebook icon"
            height={40}
            width={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
