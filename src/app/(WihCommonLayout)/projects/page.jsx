"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import project1 from "@/assets/img/mind-map-Thumbnail.png";
import ProjectDetailsModal from "@/components/utils/projectDetailsModal";
import { GrView } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css";

const gradientColors = [
  "from-pink-400 via-pink-300 to-yellow-300",
  "from-purple-500 via-indigo-400 to-blue-400",
  "from-green-400 via-teal-300 to-cyan-300",
];

const projects = [
  {
    title: "Website Design for Codeefly",
    category: "Web Design",
    image: project1,
    details:
      "This is a web design project showcasing modern website design with a responsive layout.",
    duration: 3000,
  },
  {
    title: "Landing Page for SaaS",
    category: "UI/UX Design",
    image: project1,
    details:
      "A modern, conversion-focused landing page built for a SaaS company.",
    duration: 2000,
  },
  {
    title: "Portfolio Website Redesign",
    category: "Front-End Development",
    image: project1,
    details:
      "A personal portfolio redesign focused on smooth UX and animation.",
    duration: 1000,
  },
];

const ProjectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalContent, setIsModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setIsModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalContent(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    // bg-gradient-to-b from-[#f9fafb] to-[#e5e7eb] dark:from-[#E2ECF6] dark:to-[#c4d7e9]
    <div className="px-6 md:px-16 lg:px-24 py-16  transition-all duration-500">
      <div className="text-center mb-20">
        <p className="text-xl md:text-2xl text-primary uppercase tracking-wide">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 ">
          My Recent Work
        </h1>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration={project.duration}
            className={`card p-6 rounded-xl shadow-lg bg-gradient-to-br ${
              gradientColors[index % gradientColors.length]
            } text-white transition-all duration-300 hover:scale-[1.01]`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-sm uppercase tracking-wide opacity-80">
                  {project.category}
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h2>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={350}
                  height={250}
                  className="rounded-xl transform transition-transform duration-300 hover:scale-105 shadow-md"
                />
                <button
                  onClick={() =>
                    handleOpenModal(
                      <>
                        <h3 className="font-bold text-lg">
                          {project.title} Details
                        </h3>
                        <p className="py-4">{project.details}</p>
                      </>
                    )
                  }
                  className="btn btn-outline btn-circle btn-white border-white text-white hover:bg-white hover:text-black"
                >
                  <GrView size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectDetailsModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {isModalContent}
      </ProjectDetailsModal>
    </div>
  );
};

export default ProjectPage;
