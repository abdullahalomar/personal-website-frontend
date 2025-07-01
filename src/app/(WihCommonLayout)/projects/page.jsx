/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Link from "next/link";

const gradientColors = [
  "from-pink-400 via-pink-300 to-yellow-300",
  "from-purple-500 via-indigo-400 to-blue-400",
  "from-green-400 via-teal-300 to-cyan-300",
];

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [modalContent, setModalContent] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    Aos.init();

    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "https://personal-website-server-chi.vercel.app/api/v1/projects"
        );
        setProjects(res.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-24 transition-all duration-500">
      <div className="text-center mb-12">
        <p className="text-xl md:text-2xl text-primary uppercase tracking-wide">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          My Recent Work
        </h1>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project._id}
            data-aos="fade-up"
            data-aos-duration="1500"
            className={`relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br ${
              gradientColors[index % gradientColors.length]
            } text-white transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group`}
          >
            <div className="p-6 space-y-4">
              <div className="text-center md:text-left">
                <h3 className="text-sm uppercase tracking-wide opacity-80">
                  {project.subTitle}
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h2>
              </div>

              <div className="flex justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl w-full h-52 object-cover shadow-md transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-52 bg-white/20 rounded-xl flex items-center justify-center text-white text-sm">
                    No Image
                  </div>
                )}
              </div>

              <div className="flex justify-center md:justify-end">
                <button
                  onClick={() => {
                    setModalContent(
                      <div className="">
                        <h3 className="font-bold text-lg mb-2">
                          {project.title}
                        </h3>
                        <h4 className="text-sm uppercase tracking-wide opacity-80 mb-4">
                          {project.subTitle}
                        </h4>
                        <div
                          className="prose prose-sm max-w-none mb-4"
                          dangerouslySetInnerHTML={{
                            __html: project.description,
                          }}
                        />
                        <div className="text-xs mt-4 opacity-80 space-y-1 border-t pt-4">
                          <p>🛠️ Created: {formatDate(project.createdAt)}</p>
                          <p>♻️ Updated: {formatDate(project.updatedAt)}</p>
                          <p>🚀 Published: {formatDate(project.publishedAt)}</p>
                        </div>
                        <div className="mt-4 space-y-2">
                          <p className="text-sm">
                            🔗 GitHub:{" "}
                            <Link
                              href={project.gitLink || "#"}
                              target="_blank"
                              className="underline text-blue-700 hover:text-slate-800"
                            >
                              {project.gitLink || "N/A"}
                            </Link>
                          </p>
                          <p className="text-sm">
                            🌐 Demo:{" "}
                            <Link
                              href={project.demoLink || "#"}
                              target="_blank"
                              className="underline text-blue-700 hover:text-slate-800"
                            >
                              {project.demoLink || "N/A"}
                            </Link>
                          </p>
                        </div>
                      </div>
                    );
                    document.getElementById("project_modal").showModal();
                  }}
                  className="absolute top-4 right-4 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 hover:rotate-12 transition"
                >
                  <GrView size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DaisyUI Modal */}
      <dialog id="project_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          {modalContent}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProjectPage;
