"use client";
import { useEffect, useState } from "react";
import navItems from "@/components/navItems";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);

      const sections = navItems.map((item) => document.getElementById(item.id));
      for (const section of sections) {
        if (section && scrollY >= section.offsetTop - 100) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-1000 ${
        isScrolled
          ? "bg-primary"
          : "bg-gradient-to-r from-[#99b9e5] via-[#5A72A0] to-[#83B4FF]"
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
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-white bg-base-100"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className={`${
                      activeSection === item.id
                        ? "text-secondary font-semibold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </a>
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
                <a
                  href={`#${item.id}`}
                  className={`transition duration-300 hover:text-secondary ${
                    activeSection === item.id
                      ? "text-secondary font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-6">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="hidden sm:block px-4 py-1 rounded-md border-2 border-secondary hover:bg-secondary duration-700 text-stone-50 hover:text-white uppercase"
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
