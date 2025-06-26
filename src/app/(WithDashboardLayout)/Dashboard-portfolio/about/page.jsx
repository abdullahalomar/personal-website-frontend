"use client";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import Image from "next/image";
import { toast } from "sonner";
import AddAboutModal from "@/components/AddAboutModal/AddAboutModal";
import EditAboutModal from "@/components/EditAboutModal/EditAboutModal";

const AboutPage = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [aboutPerPage] = useState(5);

  const fetchAbout = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://personal-website-server-chi.vercel.app/api/v1/about"
      );
      setAbout(res.data?.data || []);
    } catch (err) {
      console.error("Failed to fetch about", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://personal-website-server-chi.vercel.app/api/v1/about/${id}`
      );
      if (res.data.success) {
        const updatedAbout = about.filter((item) => item._id !== id);
        setAbout(updatedAbout);

        const { data } = await axios.get(
          "https://personal-website-server-chi.vercel.app/api/v1/about"
        );
        setAbout(data.data);

        const totalRemaining = updatedAbout.length;
        const totalPages = Math.ceil(totalRemaining / aboutPerPage);
        if (currentPage > totalPages) {
          setCurrentPage(totalPages || 1);
        }

        toast.success("About deleted successfully!");
      } else {
        toast.error("Failed to delete about!");
      }
    } catch (err) {
      console.error("Error while deleting About", err);
      toast.error("Error while deleting about!");
    }
  };

  // Pagination Logic
  const indexOfLastAbout = currentPage * aboutPerPage;
  const indexOfFirstAbout = indexOfLastAbout - aboutPerPage;
  const currentAbout = about.slice(indexOfFirstAbout, indexOfLastAbout);
  const totalPages = Math.ceil(about.length / aboutPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 ">
          📚 All About
        </h2>
        <AddAboutModal onSuccess={fetchAbout} />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading about...</p>
      ) : currentAbout.length === 0 ? (
        <p className="text-center text-gray-500">No about found.</p>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-900 dark:text-gray-200 rounded-lg shadow-md">
          <table className="table w-full text-sm sm:text-base">
            <thead className="bg-base-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Description</th>
                <th>Occupation</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentAbout.map((item, index) => (
                <tr key={item._id}>
                  <td>{indexOfFirstAbout + index + 1}</td>
                  <td>
                    <Image
                      src={item.image}
                      alt="about"
                      width={80}
                      height={60}
                      className="rounded-md object-cover w-20 h-14"
                    />
                  </td>
                  <td className="max-w-[180px] truncate">{item.description}</td>
                  <td>{item.occupation}</td>
                  <td className="whitespace-nowrap">{item.email}</td>
                  <td className="whitespace-nowrap">{item.phone}</td>
                  <td className="flex flex-wrap justify-center items-center gap-2">
                    <EditAboutModal about={item} onSuccess={fetchAbout} />
                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <div className="join">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`join-item btn ${
                    currentPage === i + 1 ? "btn-active" : ""
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
