"use client";
import { useState, useEffect } from "react";
import navItems from "@/components/navItems";

import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // একেবারে টপে থাকলে ব্যাকগ্রাউন্ড ট্রান্সপারেন্ট হবে
        setIsScrolled(false);
      } else {
        // স্ক্রল করলে ব্যাকগ্রাউন্ড প্রাইমারি কালারে পরিবর্তন হবে
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-1000 ${
        isScrolled
          ? "bg-primary"
          : "bg-gradient-to-r from-[#83B4FF] via-[#5A72A0] to-[#FDFFE2]"
      }`}
    >
      <div className="navbar bg-transparent lg:px-24 md:px-24 sm:px-10 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <a>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="text-xl text-white">Abdullah Al Omar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <div className="">
            {/* <button>
              <Image src={dark} alt="light mode" width={25} height={25} />
            </button> */}
          </div>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="hidden sm:block px-4 py-1 rounded-md border-2 border-secondary hover:bg-secondary duration-700 text-black hover:text-white uppercase"
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
