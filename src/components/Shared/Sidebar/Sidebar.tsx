"use client";
import { useState } from "react";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logo from "@/assets/logo/logo.png";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="fixed top-32 left-0 z-50"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute top-1/2 
          ${isCollapsed ? "-right-7" : "-right-6 hover:translate-x-3"} 
        h-64 rounded-br-lg rounded-tr-lg transform -translate-y-1/2 bg-primary p-2 shadow-lg transition duration-200`}
      >
        {isCollapsed ? (
          <IoIosArrowForward fontSize={20} color="white" />
        ) : (
          <IoIosArrowBack fontSize={20} color="white" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "w-0 overflow-hidden" : "w-20"
        } h-72 bg-secondary shadow-md relative z-10 `}
      >
        {!isCollapsed && (
          <>
            <Image
              className="w-16 m-1"
              src={logo}
              height={80}
              width={80}
              alt="logo"
            />

            <div>{/* <ThemeToggle></ThemeToggle> */}</div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="bg-slate-50 rounded-full p-2 mx-3 absolute bottom-5"
            >
              <a
                href="/ABDULLAH_AL_OMAR-CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-primary"
              >
                <HiOutlineDownload fontSize={30} className="animate-bounce" />
              </a>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
