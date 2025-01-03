"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import project1 from "@/assets/img/mind-map-Thumbnail.png";
import ProjectDetailsModal from "@/components/utils/projectDetailsModal";
import { GrView } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalContent, setIsModalContent] = useState(null);

  const handleOpenModal = (content: any) => {
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
    <div className="px-8 md:px-16 lg:px-24 mb-24 bg-slate-300">
      <div className="text-center mb-16">
        <p className="text-2xl text-secondary uppercase">Portfolio</p>
        <h1 className="text-5xl font-bold">My Recent Work</h1>
      </div>
      <div>
        <div className="flex w-full flex-col">
          <div
            className="card p-4 rounded-box ring-offset-2 ring-2 "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-10 md:gap-0 justify-between">
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-3 md:gap-16 justify-between items-center">
                <div>
                  <h2 className="uppercase text-xl text-slate-400">
                    Web Design
                  </h2>
                </div>
                <div>
                  <h1 className="text-5xl font-medium">
                    Website Design for codeefly
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-32 justify-between">
                <div>
                  <Image
                    className="max-w-80 w-full rounded-xl transform transition-transform scale-75 hover:scale-100 skew-y-3 duration-300 hover:rotate-[17deg]"
                    src={project1}
                    alt=""
                    height={300}
                    width={400}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-circle btn-outline btn-neutral w-20 h-20"
                    onClick={() =>
                      handleOpenModal(
                        <>
                          <h3 className="font-bold text-lg">
                            Codeefly Project Details
                          </h3>
                          <p className="py-4">
                            This is a web design project showcasing modern
                            website design with a responsive layout.
                          </p>
                        </>
                      )
                    }
                  >
                    <GrView fontSize={30} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          <div
            className="card p-4 rounded-box ring-offset-2 ring-2 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-10 md:gap-0 justify-between">
              <div className="flex flex-col md:flex-row gap-3 md:gap-16 justify-between items-center">
                <div>
                  <h2 className="uppercase text-xl text-slate-400">
                    Web Design
                  </h2>
                </div>
                <div>
                  <h1 className="text-5xl font-medium">
                    Website Design for codeefly
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-32 justify-between">
                <div>
                  <Image
                    className="max-w-80 w-full rounded-xl transform transition-transform scale-75 hover:scale-100 skew-y-3 duration-300 hover:rotate-[17deg]"
                    src={project1}
                    alt=""
                    height={300}
                    width={400}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-circle btn-outline btn-neutral w-20 h-20"
                    onClick={() =>
                      handleOpenModal(
                        <>
                          <h3 className="font-bold text-lg">
                            Codeefly Project Details
                          </h3>
                          <p className="py-4">
                            This is a web design project showcasing modern
                            website design with a responsive layout.
                          </p>
                        </>
                      )
                    }
                  >
                    <GrView fontSize={30} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          <div
            className="card p-4 rounded-box ring-offset-2 ring-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
              <div className="flex flex-col md:flex-row gap-3 md:gap-16 justify-between items-center">
                <div>
                  <h2 className="uppercase text-xl text-slate-400">
                    Web Design
                  </h2>
                </div>
                <div>
                  <h1 className="text-5xl font-medium">
                    Website Design for codeefly
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-32 justify-between">
                <div>
                  <Image
                    className="max-w-80 w-full rounded-xl transform transition-transform scale-75 hover:scale-100 skew-y-3 duration-300 hover:rotate-[17deg]"
                    src={project1}
                    alt=""
                    height={300}
                    width={400}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-circle btn-outline btn-neutral w-20 h-20"
                    onClick={() =>
                      handleOpenModal(
                        <>
                          <h3 className="font-bold text-lg">
                            Codeefly Project Details
                          </h3>
                          <p className="py-4">
                            This is a web design project showcasing modern
                            website design with a responsive layout.
                          </p>
                        </>
                      )
                    }
                  >
                    <GrView fontSize={30} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectDetailsModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {isModalContent}
      </ProjectDetailsModal>
    </div>
  );
};

export default ProjectPage;
