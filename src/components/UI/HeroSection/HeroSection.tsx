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
import gridImage from "@/assets/logo/grid.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import img1 from "@/assets/icons/content.png";
import img2 from "@/assets/icons/montage.png";
import img3 from "@/assets/icons/programming.png";
import img4 from "@/assets/icons/video-editing-app.png";
import img5 from "@/assets/icons/pages.png";

const HeroSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const handleClick = () => {
    const speakMessage = () => {
      const message = new SpeechSynthesisUtterance(
        "Hello and welcome! I'm so glad you're here. This is Abdullah's personal website. Feel free to explore his work, learn more about him, and of course — don’t hesitate to say hello. Enjoy your visit!"
      );
      message.lang = "en-US";
      message.rate = 1;
      message.pitch = 1;

      const voices = window.speechSynthesis.getVoices();

      // Try to pick a known male voice
      const preferredMaleVoices = [
        "Google UK English Male", // Chrome
        "Microsoft David - English (United States)", // Windows
        "Alex", // macOS
        "Daniel", // macOS
      ];

      const maleVoice = voices.find((voice) =>
        preferredMaleVoices.includes(voice.name)
      );

      if (maleVoice) {
        message.voice = maleVoice;
      } else {
        console.warn("Preferred male voice not found. Using default voice.");
      }

      window.speechSynthesis.speak(message);
    };

    // Wait for voices to load if not loaded already
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.onvoiceschanged = speakMessage;
    } else {
      speakMessage();
    }
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
                "QA Engineer",
                1000,
                "Software QA",
                1000,
                "Quality Assurance",
                1000,
                "Video Creator",
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
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center gap-0 sm:gap-0 md:gap-10 lg:gap-10 relative"
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

        {/* Floating Images */}
        <motion.div
          initial={{ x: -10 }}
          animate={{ x: 10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute left-10 hidden md:block"
        >
          <Image src={img1} alt="img1" width={30} height={30} />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 hidden md:block"
        >
          <Image src={img2} alt="img2" width={30} height={30} />
        </motion.div>
        <motion.div
          initial={{ x: 10 }}
          animate={{ x: -10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-12 right-20 hidden md:block"
        >
          <Image src={img3} alt="img3" width={30} height={30} />
        </motion.div>
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: -10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-40 right-16 hidden md:block"
        >
          <Image src={img4} alt="img4" width={30} height={30} />
        </motion.div>
        <motion.div
          initial={{ x: -10 }}
          animate={{ x: 10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 right-14 hidden md:block"
        >
          <Image src={img5} alt="img5" width={30} height={30} />
        </motion.div>
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
