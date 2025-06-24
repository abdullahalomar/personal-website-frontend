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
        // Optimistic UI Update
        const updatedAbout = about.filter((about) => about._id !== id);
        setAbout(updatedAbout);

        // Refetch from server to ensure sync
        const { data } = await axios.get(
          "https://personal-website-server-chi.vercel.app/api/v1/about"
        );
        setAbout(data.data); // Adjust according to your API response structure

        // Pagination logic
        const totalRemainingAbout = updatedAbout.length;
        const totalPages = Math.ceil(totalRemainingAbout / aboutPerPage);
        if (currentPage > totalPages) {
          setCurrentPage(totalPages || 1);
        }

        toast.success("About deleted successfully!");
      } else {
        console.error("❌ Failed to delete About");
        toast.error("Failed to delete about!");
      }
    } catch (err) {
      console.error("❌ Error while deleting About", err);
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
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">📚 All about</h2>
        <AddAboutModal onSuccess={fetchAbout} />
      </div>

      {loading ? (
        <p className="text-center">Loading about...</p>
      ) : currentAbout.length === 0 ? (
        <p className="text-center text-gray-500">No about found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead className="bg-base-200">
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
              {currentAbout.map((about, index) => (
                <tr key={about?._id}>
                  <td>{indexOfFirstAbout + index + 1}</td>
                  <td>
                    <Image
                      src={about?.image}
                      alt="about"
                      className="w-20 h-14 object-cover rounded-md"
                      height={100}
                      width={100}
                    />
                  </td>

                  <td className="text-sm">
                    {about.description?.slice(0, 40)}...
                  </td>
                  <td className="font-medium">{about.occupation}</td>
                  <td className="font-medium">{about.email}</td>
                  <td className="font-medium">{about.phone}</td>

                  <td className="flex justify-center gap-2">
                    <EditAboutModal about={about} onSuccess={fetchAbout} />
                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => handleDelete(about._id)}
                    >
                      <FaTrash className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination UI */}
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
