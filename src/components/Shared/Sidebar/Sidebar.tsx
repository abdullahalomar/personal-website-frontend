"use client";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";
import logo from "@/assets/logo/logo.png";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <div className="w-20 h-72 rounded-br-lg bg-secondary shadow-md fixed left-0 z-10">
      <Image
        className="w-16 m-1 "
        src={logo}
        height={80}
        width={80}
        alt="logo"
      />
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
    </div>
  );
};

export default Sidebar;
