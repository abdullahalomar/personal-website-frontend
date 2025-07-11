/* eslint-disable @next/next/no-img-element */
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
import CountUp from "react-countup";
import axios from "axios";

interface AboutType {
  image: string;
  occupation: string;
  phone: string;
  email: string;
  description: string;
}

const calculateAge = (birthDate: string | number | Date) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
};

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [about, setAbout] = useState<AboutType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchAbout = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://personal-website-server-chi.vercel.app/api/v1/about"
      );
      setAbout(res.data?.data || []);
    } catch (err) {
      console.error("Failed to fetch about", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAbout();
  }, []);
  const data = about[0] || {};
  // age calculate
  // const calculateAge = (birthDate: string | number | Date) => {
  //   const today = new Date();
  //   const birth = new Date(birthDate);
  //   let age = today.getFullYear() - birth.getFullYear();
  //   const monthDiff = today.getMonth() - birth.getMonth();
  //   const dayDiff = today.getDate() - birth.getDate();

  //   if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
  //     age--; // hasn't had birthday yet this year
  //   }
  //   return age;
  // };

  const age = calculateAge("2000-02-17");

  const aboutText =
    "As a dedicated Software Quality Assurance Engineer, I specialize in ensuring that software products are efficient, reliable, and meet the highest standards. With a strong focus on testing methodologies, automation, and continuous improvement, I work to identify and resolve issues before they impact users. Combining attention to detail, collaboration, and a passion for quality, my goal is to deliver seamless and robust software solutions. Let’s ensure excellence together!";

  return (
    <div>
      {/* Main Content */}
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center lg:gap-28 gap-10 px-6 sm:px-12 lg:px-24 mt-14 pb-0 md:pb-0 lg:pb-6 xl:pb-12">
        <div className="relative lg:w-2/5" data-aos="zoom-out-right">
          <img
            className="hover:-translate-y-6 transition duration-700"
            src={data?.image}
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
        <div className="mt-10 lg:mt-20 sm:mt-20 max-w-3xl lg:w-3/5">
          <p className="uppercase text-lg sm:text-xl text-secondary">
            About me
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl my-5">
            Ensuring Excellence
          </h1>
          <p className="text-lg sm:text-xl">
            {(data.description || "").substring(0, 240)}...
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
                    <p className="text-lg">
                      <span className="">
                        <CountUp end={age} duration={2} />
                      </span>{" "}
                      Years
                    </p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Profession</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">{data?.occupation}</p>
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
                    <p className="text-lg">{data?.phone}</p>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <p className="text-lg font-bold">Email</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-lg">{data?.email}</p>
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
