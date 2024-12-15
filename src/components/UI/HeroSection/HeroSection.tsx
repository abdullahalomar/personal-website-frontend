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

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center text-center pt-10 sm:pt-10 md:pt-8 lg:pt-0 px-24  bg-gradient-to-r from-[#83B4FF] via-[#5A72A0] to-[#FDFFE2]">
      <div className="text-start">
        <h1 className="uppercase text-3xl">
          <span className="text-white">Hello</span> i'm
        </h1>
        <h1 className="text-6xl mt-2 mb-4 font-bold text-primary">
          Abdullah Al Omar
        </h1>
        <div>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "A Passionate Web Designer", // initially rendered starting point
              1000,
              "A Passionate Frontend Developer",
              1000,
              "A Passionate Video Creator",
              1000,
              "A Passionate App Developer",
              500,
            ]}
            speed={50}
            style={{ fontSize: "2em", color: "white" }}
            repeat={Infinity}
          />
        </div>

        <div className="mt-3">
          <TbArrowBigDownLineFilled className="animate-bounce" fontSize={20} />
          <div className="bg-slate-600 w-[191px] pb-1.5 rounded-md">
            <button className="px-14 py-3 rounded-md uppercase text-white bg-primary hover:bg-slate-600 mt-0">
              Say Hello
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center gap-0 sm:gap-0 md:gap-10 lg:gap-10">
        <Image
          src={heroImage}
          className="mt-5"
          alt="hero image"
          height={450}
          width={450}
        />
      </div>
      <div className="flex sm:flex md:flex-col lg:flex-col gap-8">
        <Link
          target="_blank"
          href="https://www.facebook.com/abdullahalomar2"
          className="animate-bounce"
        >
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
          <Image
            className="ring-2 p-1 rounded "
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
            className="ring-2 p-1 rounded "
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
            className="ring-2 p-1 rounded "
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
            className="ring-2 p-1 rounded "
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
