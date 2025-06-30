"use client";

import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { toast } from "sonner";
import axios from "axios";
import Image from "next/image";
import AddProjectModal from "@/components/AddProjectModal/AddProjectModal";
import EditProjectModal from "@/components/EditProjectModal/EditProjectModal";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import CSS

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    setLoading(true);
    axios
      .get("https://personal-website-server-chi.vercel.app/api/v1/projects")
      .then((res) => setProjects(res.data.data))
      .catch(() => toast.error("Failed to load projects"))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this project?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(
                `https://personal-website-server-chi.vercel.app/api/v1/projects/${id}`
              );
              toast.success("Project deleted successfully!");
              fetchProjects();
            } catch (error) {
              toast.error("Failed to delete project!");
              console.error(error);
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleEdit = (project) => {
    setEditingProject(project);
  };

  return (
    <div className="p-4 sm:p-6 text-white">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <h1 className="text-xl sm:text-3xl font-bold text-black">
          📁 Project Management
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <FaPlus /> Add Project
        </button>
      </div>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProjectAdded={fetchProjects}
      />

      <EditProjectModal
        isOpen={!!editingProject}
        onClose={() => setEditingProject(null)}
        project={editingProject}
        onProjectUpdated={fetchProjects}
      />

      {loading ? (
        <p className="text-center text-gray-300">Loading projects...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg bg-gray-800 shadow">
          <table className="min-w-[700px] w-full text-sm sm:text-base">
            <thead className="bg-gray-700 text-gray-100 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Created At</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {projects?.map((project) => (
                <tr key={project?._id} className="hover:bg-gray-700 transition">
                  <td className="px-4 py-3">
                    <Image
                      src={project?.image}
                      alt="Project"
                      width={60}
                      height={40}
                      className="rounded object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-white max-w-[200px] truncate">
                    {project?.title}
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm break-words max-w-[300px] line-clamp-2">
                    {project?.description}
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-xs">
                    {new Date(project?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right flex justify-end gap-4">
                    <button
                      onClick={() => handleEdit(project)}
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-300">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
