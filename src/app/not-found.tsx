/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
// import cartoonImage from "@/assets/img/404-cartoon.png"; // ✅ তোমার image path অনুযায়ী আপডেট করো

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-100 px-4 text-center">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        {/* <Image
          src={cartoonImage}
          alt="Cartoon 404"
          width={300}
          height={300}
          className="mb-4"
        /> */}
      </motion.div>

      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        404 - Page Not Found
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Sorry! The page you're looking for doesn’t exist.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
