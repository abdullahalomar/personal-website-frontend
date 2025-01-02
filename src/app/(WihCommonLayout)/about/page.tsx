"use client";

import profile from "@/assets/img/profile-image-web.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import cv from "@/assets/img/Screenshot 2024-12-25 203334.png";
import { HiOutlineDownload } from "react-icons/hi";
import { BiSolidShow } from "react-icons/bi";
import Link from "next/link";

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const aboutText =
    "As a passionate Computer Science and Engineering student, I specialize in creating efficient, reliable, and innovative solutions that meet real-world needs. With a focus on web development and technology, I combine smart work, dedication, and collaboration to craft systems that drive results. Whether it’s building user-friendly applications or solving complex problems, my goal is to leverage technology to make a positive impact. Let’s bring ideas to life together!";

  const truncatedText = aboutText.substring(0, 240);

  return (
    <div>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center lg:gap-28 gap-10 px-6 sm:px-12 lg:px-24 mt-14 pb-0 md:pb-0 lg:pb-6 xl:pb-12">
        <div className="relative" data-aos="zoom-out-right">
          <Image
            className="hover:-translate-y-6 transition duration-700"
            src={profile}
            height={600}
            width={600}
            alt="about image"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="uppercase absolute -bottom-5 -right-5 lg:-bottom-10 lg:-right-10 bg-secondary py-3 px-6 lg:py-5 lg:px-8 flex gap-2 text-sm lg:text-base hover:bg-primary hover:text-white rounded-md"
            onClick={toggleModal}
          >
            Show CV
            <BiSolidShow fontSize={25} />
          </motion.button>
        </div>
        <div className="mt-10 lg:mt-20 sm:mt-20">
          <p className="uppercase text-lg sm:text-xl text-secondary">
            About me
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl my-5">
            I Develop Systems that Work
          </h1>
          <p className="text-lg sm:text-xl  w-[400px] md:w-[800px]">
            {truncatedText}...{" "}
            <Link
              className="bg-primary py-0 px-3 text-white rounded-lg text-sm"
              href="/about-details"
            >
              See more
            </Link>
          </p>
          <hr className="my-6 sm:my-8" />
          <div className="flex flex-col sm:flex-row sm:gap-10">
            <div className="table w-50">
              <div className="table-row-group">
                <div className="table-row">
                  <div className="table-cell">
                    <p className="font-bold text-lg">Name</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">Abdullah Al Omar</p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Age</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">24 Years</p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Occupation</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">Programmer, Content Creator</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="table w-50">
              <div className="table-row-group">
                <div className="table-row">
                  <div className="table-cell">
                    <p className="font-bold text-lg">Phone</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">+88 1234567890</p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Email</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">abdullahalomar048@gmail.com</p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Nationality</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">Bangladeshi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:my-8" />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-xl text-gray-600 hover:text-red-600"
              onClick={toggleModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">My CV</h2>
            <Image src={cv} height={800} width={800} alt="cv image" />
            <p className="text-lg text-secondary py-8">
              Click on download button to see complete CV and download.
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="bg-primary rounded-lg p-2 bottom-5"
            >
              <a
                href="/ABDULLAH_AL_OMAR-CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 text-secondary hover:text-white"
              >
                Download
                <HiOutlineDownload fontSize={30} />
              </a>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
