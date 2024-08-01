/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import heroImage from "@/assets/img/hero-img.png";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/twitter.png";
import linkedin from "@/assets/icons/linkedin.png";
import youtube from "@/assets/icons/youtube.png";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="flex-wrap sm:flex-wrap md:flex lg:flex justify-between items-center text-center pt-10 sm:pt-10 md:pt-8 lg:pt-0 bg-gradient-to-r from-indigo-500 px-24">
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
        <button className="uppercase btn bg-blue-400 hover:bg-blue-500 mt-3">
          Say Hello
        </button>
      </div>
      <div className="flex-wrap sm:flex-wrap md:flex lg:flex items-center gap-0 sm:gap-0 md:gap-10 lg:gap-10">
        <Image
          src={heroImage}
          className="mt-5"
          alt="hero image"
          height={450}
          width={450}
        />
        <div className="flex sm:flex md:flex-col lg:flex-col gap-8">
          <Image
            className="ring-2 p-1 rounded hover:bg-blue-200"
            src={facebook}
            alt="facebook icon"
            height={40}
            width={40}
          />
          <Image
            className="ring-2 p-1 rounded hover:bg-blue-200"
            src={twitter}
            alt="facebook icon"
            height={40}
            width={40}
          />
          <Image
            className="ring-2 p-1 rounded hover:bg-blue-200"
            src={linkedin}
            alt="facebook icon"
            height={40}
            width={40}
          />
          <Image
            className="ring-2 p-1 rounded hover:bg-blue-200"
            src={youtube}
            alt="facebook icon"
            height={40}
            width={40}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
