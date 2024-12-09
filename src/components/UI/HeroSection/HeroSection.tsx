/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import heroImage from "@/assets/img/hero-img.png";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/twitter.png";
import linkedin from "@/assets/icons/linkedin.png";
import youtube from "@/assets/icons/youtube.png";
import { TypeAnimation } from "react-type-animation";
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center text-center pt-10 sm:pt-10 md:pt-8 lg:pt-0 bg-gradient-to-r from-[#b1c5ef] to-[#a9c4ec] px-24">
      <div className="text-start">
        <h1 className="uppercase text-3xl">
          <span className="text-white">Hello</span> i'm
        </h1>
        <h1 className="text-6xl mt-2 mb-4 font-bold">Abdullah Al Omar</h1>
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
        <TbArrowBigDownLineFilled className="animate-bounce" fontSize={20} />
        <button className="px-10 py-4 uppercase hover:text-white bg-blue-400 mt-3 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-150">
          Say Hello
        </button>
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
        <Link href="#" className="animate-bounce">
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
          <Image
            className="ring-2 p-1 rounded "
            src={facebook}
            alt="facebook icon"
            height={40}
            width={40}
          />
        </Link>
        <Link href="#" className=" animate-bounce">
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
          <Image
            className="ring-2 p-1 rounded "
            src={twitter}
            alt="facebook icon"
            height={40}
            width={40}
          />
        </Link>
        <Link href="#" className="animate-bounce">
          <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
          <Image
            className="ring-2 p-1 rounded "
            src={linkedin}
            alt="facebook icon"
            height={40}
            width={40}
          />
        </Link>
        <Link href="#" className=" animate-bounce">
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
