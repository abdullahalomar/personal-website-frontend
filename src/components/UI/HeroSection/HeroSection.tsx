// /* eslint-disable react/no-unescaped-entities */
// "use client";
// import Image from "next/image";
// import heroImage from "@/assets/img/hero-img.png";
// import { TypeAnimation } from "react-type-animation";
// import { TbArrowBigDownLineFilled } from "react-icons/tb";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState } from "react";
// import gridImage from "@/assets/logo/grid.svg";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa6";
// import img1 from "@/assets/icons/content.png";
// import img2 from "@/assets/icons/montage.png";
// import img3 from "@/assets/icons/programming.png";
// import img4 from "@/assets/icons/video-editing-app.png";
// import img5 from "@/assets/icons/pages.png";

// const HeroSection = () => {
//   useEffect(() => {
//     Aos.init();
//   }, []);

//   const handleClick = () => {
//     const speakMessage = () => {
//       const message = new SpeechSynthesisUtterance(
//         "Hello and welcome! I'm so glad you're here. This is Abdullah's personal website. Feel free to explore his work, learn more about him, and of course — don't hesitate to say hello. Enjoy your visit!"
//       );
//       message.lang = "en-US";
//       message.rate = 1;
//       message.pitch = 1;

//       const voices = window.speechSynthesis.getVoices();

//       // Try to pick a known male voice
//       const preferredMaleVoices = [
//         "Google UK English Male", // Chrome
//         "Microsoft David - English (United States)", // Windows
//         "Alex", // macOS
//         "Daniel", // macOS
//       ];

//       const maleVoice = voices.find((voice) =>
//         preferredMaleVoices.includes(voice.name)
//       );

//       if (maleVoice) {
//         message.voice = maleVoice;
//       } else {
//         console.warn("Preferred male voice not found. Using default voice.");
//       }

//       window.speechSynthesis.speak(message);
//     };

//     // Wait for voices to load if not loaded already
//     if (speechSynthesis.getVoices().length === 0) {
//       speechSynthesis.onvoiceschanged = speakMessage;
//     } else {
//       speakMessage();
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center pt-10 sm:pt-10 md:pt-8 lg:pt-0 px-32 w-full min-h-screen relative overflow-hidden">
//       {/* Enhanced Background with Multiple Layers */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#83B4FF] via-[#5A72A0] to-[#aacff3]"></div>

//       {/* Animated Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-cyan-400/20 animate-pulse"></div>

//       {/* Floating Geometric Shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute top-3/4 right-1/4 w-24 h-24 bg-cyan-300/20 rounded-lg rotate-45 blur-sm"
//           animate={{
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//             rotate: [45, 225, 45],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300/25 rounded-full blur-md"
//           animate={{
//             x: [0, 120, 0],
//             y: [0, -80, 0],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       {/* Animated Particles */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-white/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0.3, 1, 0.3],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Diagonal Wave Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <svg
//           className="absolute inset-0 w-full h-full"
//           viewBox="0 0 1000 1000"
//           preserveAspectRatio="none"
//         >
//           <motion.path
//             d="M0,200 Q250,100 500,200 T1000,200 L1000,0 L0,0 Z"
//             fill="url(#gradient1)"
//             animate={{
//               d: [
//                 "M0,200 Q250,100 500,200 T1000,200 L1000,0 L0,0 Z",
//                 "M0,250 Q250,150 500,250 T1000,250 L1000,0 L0,0 Z",
//                 "M0,200 Q250,100 500,200 T1000,200 L1000,0 L0,0 Z",
//               ],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.path
//             d="M0,1000 Q250,900 500,1000 T1000,1000 L1000,800 L0,800 Z"
//             fill="url(#gradient2)"
//             animate={{
//               d: [
//                 "M0,1000 Q250,900 500,1000 T1000,1000 L1000,800 L0,800 Z",
//                 "M0,1000 Q250,850 500,1000 T1000,1000 L1000,750 L0,750 Z",
//                 "M0,1000 Q250,900 500,1000 T1000,1000 L1000,800 L0,800 Z",
//               ],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <defs>
//             <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
//               <stop offset="100%" stopColor="rgba(135,206,235,0.2)" />
//             </linearGradient>
//             <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="rgba(147,197,253,0.15)" />
//               <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Grid Pattern Background */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//           `,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       {/* Glowing Orbs */}
//       <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-2xl animate-pulse" />

//       {/* Content */}
//       <div className="text-start relative z-10" data-aos="zoom-out-right">
//         <h1 className="uppercase text-3xl">
//           <span className="text-white">Hello</span> i'm
//         </h1>
//         <h1 className="text-6xl mt-2 mb-4 font-bold text-primary">
//           Abdullah Al Omar
//         </h1>
//         <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center">
//           <p className="text-2xl text-primary font-semibold me-3">
//             A Passionate
//           </p>

//           <div>
//             <TypeAnimation
//               preRenderFirstString={true}
//               sequence={[
//                 500,
//                 "QA Engineer",
//                 1000,
//                 "Software QA",
//                 1000,
//                 "Quality Assurance",
//                 1000,
//                 "Video Creator",
//                 500,
//               ]}
//               speed={50}
//               style={{ fontSize: "24px", color: "white" }}
//               repeat={Infinity}
//             />
//           </div>
//         </div>

//         <div className="mt-3">
//           <TbArrowBigDownLineFilled className="animate-bounce" fontSize={20} />
//           <div className="bg-secondary shadow-md w-[120px] md:w-[190px] pb-1.5 rounded-md">
//             <button
//               className="w-[120px] md:w-[190px] h-9 md:h-12 rounded-md uppercase text-white bg-primary hover:bg-secondary transition duration-300 hover:text-black"
//               onClick={handleClick}
//             >
//               Say Hello
//             </button>
//           </div>
//         </div>
//       </div>

//       <motion.div
//         className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center gap-0 sm:gap-0 md:gap-10 lg:gap-10 relative z-10"
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.5,
//           ease: [0, 0.71, 0.2, 1.01],
//         }}
//       >
//         <Image
//           src={heroImage}
//           className="mt-5"
//           alt="hero image"
//           height={450}
//           width={450}
//         />

//         {/* Floating Images */}
//         <motion.div
//           initial={{ x: -10 }}
//           animate={{ x: 10 }}
//           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//           className="absolute left-10 hidden md:block"
//         >
//           <Image src={img1} alt="img1" width={30} height={30} />
//         </motion.div>
//         <motion.div
//           initial={{ y: -10 }}
//           animate={{ y: 10 }}
//           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//           className="absolute top-20 left-10 hidden md:block"
//         >
//           <Image src={img2} alt="img2" width={30} height={30} />
//         </motion.div>
//         <motion.div
//           initial={{ x: 10 }}
//           animate={{ x: -10 }}
//           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//           className="absolute top-12 right-20 hidden md:block"
//         >
//           <Image src={img3} alt="img3" width={30} height={30} />
//         </motion.div>
//         <motion.div
//           initial={{ y: 10 }}
//           animate={{ y: -10 }}
//           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//           className="absolute top-40 right-16 hidden md:block"
//         >
//           <Image src={img4} alt="img4" width={30} height={30} />
//         </motion.div>
//         <motion.div
//           initial={{ x: -10 }}
//           animate={{ x: 10 }}
//           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//           className="absolute top-1/2 right-14 hidden md:block"
//         >
//           <Image src={img5} alt="img5" width={30} height={30} />
//         </motion.div>
//       </motion.div>

//       <div className="flex sm:flex md:flex-col lg:flex-col gap-8 relative z-10">
//         <Link
//           target="_blank"
//           href="https://www.facebook.com/abdullahalomar2"
//           className="animate-bounce"
//         >
//           <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
//           <FaFacebookF fontSize={35} />
//         </Link>

//         <Link
//           target="_blank"
//           href="https://github.com/abdullahalomar"
//           className="animate-bounce"
//         >
//           <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
//           <FaGithub fontSize={35} />
//         </Link>

//         <Link
//           target="_blank"
//           href="www.linkedin.com/in/omar17"
//           className="animate-bounce"
//         >
//           <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
//           <FaLinkedinIn fontSize={35} />
//         </Link>

//         <Link
//           target="_blank"
//           href="https://www.youtube.com/c/AbdullahAlOmar"
//           className=" animate-bounce"
//         >
//           <span className="animate-ping absolute inline-flex h-full w-full bg-sky-400 opacity-75"></span>
//           <FaYoutube className="" fontSize={35} />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

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
import { useEffect, useState } from "react";
import img1 from "@/assets/icons/content.png";
import img2 from "@/assets/icons/montage.png";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

interface TestResult {
  id: number;
  type: string;
  status: "PASS" | "FAIL" | "PENDING";
  x: number;
  y: number;
}

const HeroSection = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  useEffect(() => {
    Aos.init();

    const generateTestResults = () => {
      const testTypes = [
        "Unit Test",
        "Integration",
        "E2E Test",
        "API Test",
        "UI Test",
        "Performance",
      ];
      const statuses: TestResult["status"][] = ["PASS", "FAIL", "PENDING"];
      const results: TestResult[] = [];

      for (let i = 0; i < 8; i++) {
        results.push({
          id: i,
          type: testTypes[Math.floor(Math.random() * testTypes.length)],
          status: statuses[Math.floor(Math.random() * statuses.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
      }
      setTestResults(results);
    };

    generateTestResults();
    const interval = setInterval(generateTestResults, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center pt-10 sm:pt-10 md:pt-8 lg:pt-0 px-32 w-full min-h-screen relative overflow-hidden">
      {/* QA-themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3c4f85] via-[#536ec5] to-[#3b82f6]"></div>

      {/* Code Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${(i * 5) % 100}%`,
              top: "-10px",
            }}
            animate={{
              y: ["0vh", "110vh"],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          >
            {
              [
                "if(test)",
                "assert()",
                "verify()",
                "validate()",
                "debug()",
                "console.log()",
              ][Math.floor(Math.random() * 6)]
            }
          </motion.div>
        ))}
      </div>

      {/* Floating Test Results */}
      <div className="absolute inset-0">
        {testResults.map((test) => (
          <motion.div
            key={test.id}
            className={`absolute px-3 py-1 rounded-full text-xs font-bold border ${
              test.status === "PASS"
                ? "bg-green-500/20 text-green-300 border-green-400/50"
                : test.status === "FAIL"
                ? "bg-red-500/20 text-red-300 border-red-400/50"
                : "bg-yellow-500/20 text-yellow-300 border-yellow-400/50"
            }`}
            style={{
              left: `${test.x}%`,
              top: `${test.y}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.5],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {test.type}: {test.status}
          </motion.div>
        ))}
      </div>

      {/* Bug Detection Scanner */}
      <motion.div
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        initial={{ top: "-10%" }}
        animate={{ top: ["-10%", "110%"] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Quality Metrics Dashboard */}
      <div className="absolute top-10 right-10 bg-black/30 backdrop-blur-sm rounded-lg p-4 text-white text-sm">
        <div className="mb-2 font-bold text-cyan-400">Quality Metrics</div>
        <motion.div
          className="flex items-center mb-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          <span>Test Coverage: 98%</span>
        </motion.div>
        <motion.div
          className="flex items-center mb-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
          <span>Bugs Detected: 0</span>
        </motion.div>
        <motion.div
          className="flex items-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
          <span>Quality Score: A+</span>
        </motion.div>
      </div>

      {/* Testing Tools Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-4xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        >
          🔍
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-3xl"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          🐛
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/3 text-3xl"
          animate={{
            x: [-15, 15, -15],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          ✅
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 text-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          ⚙️
        </motion.div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0,10 L 10,10 M 10,0 L 10,20 M 10,10 L 20,10"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Glowing Test Automation Lines */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full">
          <motion.path
            d="M0,200 Q400,100 800,300 T1600,200"
            stroke="url(#testGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            animate={{
              strokeDashoffset: [0, -100],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <defs>
            <linearGradient id="testGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34,197,94,0.5)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.8)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0.5)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="text-start relative z-10" data-aos="zoom-out-right">
        <motion.h1
          className="uppercase text-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-white">Hello</span> i'm
        </motion.h1>
        <motion.h1
          className="text-6xl mt-2 mb-4 font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Abdullah Al Omar
        </motion.h1>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center">
          <motion.p
            className="text-2xl text-cyan-300 font-semibold me-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A Passionate
          </motion.p>

          <div>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "QA Engineer",
                1000,
                "Software Quality Expert",
                1000,
                "Bug Hunter",
                1000,
                "Test Automation Specialist",
                1000,
                "Software Quality Assurance",
                1000,
                "Content Creator",
                500,
              ]}
              speed={50}
              style={{ fontSize: "24px", color: "white", fontWeight: "bold" }}
              repeat={Infinity}
            />
          </div>
        </div>

        <motion.div
          className="mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <TbArrowBigDownLineFilled
            className="animate-bounce text-cyan-400"
            fontSize={20}
          />
          <div className="bg-white/10 backdrop-blur-sm shadow-lg w-[120px] md:w-[190px] pb-1.5 rounded-md">
            <button className="w-[120px] md:w-[190px] h-9 md:h-12 rounded-md uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition duration-300 font-bold shadow-lg">
              Say Hello
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center gap-0 sm:gap-0 md:gap-10 lg:gap-10 relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="relative">
          <Image
            src={heroImage}
            className="mt-5 drop-shadow-2xl"
            alt="hero image"
            height={450}
            width={450}
          />

          {/* QA Badge Overlay */}
          <motion.div
            className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            QA Certified ✅
          </motion.div>
        </div>

        {/* Enhanced Floating Images with QA Context */}
        <motion.div
          initial={{ x: -10 }}
          animate={{ x: 10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute left-10 hidden md:block"
        >
          <div className="relative">
            <Image src={img1} alt="img1" width={30} height={30} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 hidden md:block"
        >
          <div className="relative">
            <Image src={img2} alt="img2" width={30} height={30} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex sm:flex md:flex-col lg:flex-col gap-8 relative z-10">
        <Link
          target="_blank"
          href="https://www.facebook.com/abdullahalomar2"
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10"
          >
            <FaFacebookF
              fontSize={35}
              className="text-white group-hover:text-blue-400 transition-colors"
            />
          </motion.div>
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-sm transition-all"></div>
        </Link>

        <Link
          target="_blank"
          href="https://github.com/abdullahalomar"
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10"
          >
            <FaGithub
              fontSize={35}
              className="text-white group-hover:text-gray-300 transition-colors"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gray-500/20 rounded-full blur-xl group-hover:blur-sm transition-all"></div>
        </Link>

        <Link
          target="_blank"
          href="www.linkedin.com/in/omar17"
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10"
          >
            <FaLinkedinIn
              fontSize={35}
              className="text-white group-hover:text-blue-300 transition-colors"
            />
          </motion.div>
          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl group-hover:blur-sm transition-all"></div>
        </Link>

        <Link
          target="_blank"
          href="https://www.youtube.com/c/AbdullahAlOmar"
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10"
          >
            <FaYoutube
              fontSize={35}
              className="text-white group-hover:text-red-400 transition-colors"
            />
          </motion.div>
          <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:blur-sm transition-all"></div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
