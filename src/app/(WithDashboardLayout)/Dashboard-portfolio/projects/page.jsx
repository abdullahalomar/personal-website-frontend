"use client";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { toast } from "sonner";
import axios from "axios";
import Image from "next/image";
import AddProjectModal from "@/components/AddProjectModal/AddProjectModal"; // Adjust path if needed

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    setLoading(true);
    axios
      .get("https://personal-website-server-chi.vercel.app/api/v1/projects")
      .then((res) => setProjects(res.data.data)) // ✅ Fix applied here
      .catch(() => toast.error("Failed to load projects"))
      .finally(() => setLoading(false));
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (!confirm) return;

    try {
      await axios.delete(
        `https://personal-website-server-chi.vercel.app/api/v1/projects/${id}`
      );
      toast.success("Project deleted successfully!");
      fetchProjects(); // Refresh the project list
    } catch (error) {
      toast.error("Failed to delete project!");
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    toast("Edit function will be implemented!");
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Project Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <FaPlus /> Add Project
        </button>
      </div>

      {/* Modal Component */}
      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProjectAdded={fetchProjects}
      />

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="overflow-x-auto shadow border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Created At</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {projects?.map((project) => (
                <tr key={project?.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Image
                      src={project?.image}
                      alt="Project"
                      width={60}
                      height={40}
                      className="rounded object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {project?.title}
                  </td>
                  <td className="px-4 py-3 text-gray-600 line-clamp-2 max-w-xs">
                    {project?.description}
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(project?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right flex justify-end gap-4">
                    <button
                      onClick={() => handleEdit(project.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
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
