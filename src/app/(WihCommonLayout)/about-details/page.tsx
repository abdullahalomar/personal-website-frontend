/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import profile from "@/assets/img/hero-img.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
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

const AboutDetailsPage = () => {
  const [about, setAbout] = useState<AboutType[]>([]);
  const [loading, setLoading] = useState(false);

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
  const age = calculateAge("2000-02-17");
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 bg-base-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={profile}
            alt="About Abdullah"
            className="rounded-2xl shadow-xl w-[400] h-[640px] object-cover"
            height={500}
            width={500}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I'm{" "}
            <span className="font-semibold text-secondary">
              Abdullah Al Omar
            </span>
            {data.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base-content">
            <div>
              <p>
                <span className="font-bold text-secondary">Name:</span> Abdullah
                Al Omar
              </p>
              <p>
                <span className="font-bold text-secondary">Age:</span>{" "}
                <CountUp end={age} duration={2} />
              </p>
              <p>
                <span className="font-bold text-secondary">Location:</span>{" "}
                Barishal, Bangladesh
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-secondary">Profession:</span>{" "}
                {data.occupation}
              </p>
              <p>
                <span className="font-bold text-secondary">Email:</span>{" "}
                {data.email}
              </p>
              <p>
                <span className="font-bold text-secondary">Phone:</span>{" "}
                {data.phone}
              </p>
            </div>
          </div>

          {/* <button className="mt-8 px-6 py-3 bg-secondary text-white rounded-md shadow hover:bg-primary transition duration-300">
            Download CV
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDetailsPage;
