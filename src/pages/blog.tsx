// ✅ Blog Section with Pagination
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

// Types
export type BlogType = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  status?: string;
  images?: { imageUrl: string }[];
  createdAt: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        `https://technacallcanadabackend-production.up.railway.app/api/blogs?page=1&limit=50&publishedOnly=false`
      );

      const data = res?.data?.data?.blogs ?? [];
      setBlogs(data);
    } catch (err) {
      console.log("Error fetching blogs:", err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-14 mt-4"
          >
            Blog
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            {/* Left Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
                <img
                  src="/assets/woman-profile.jpg"
                  alt="Author"
                  className="w-full h-full rounded-full object-cover border-4 border-blue-600"
                />
              </div>
            </motion.div>

            {/* Center Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center"
            >
              <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 rounded-full mb-8 shadow-sm"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Insights, Updates, and Stories
              </h3>
              <p className="text-gray-600 text-lg">
                Explore our latest blogs, tips, and industry insights.
              </p>
            </motion.div>

            {/* Right Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
                <img
                  src="/assets/man-profile.jpg"
                  alt="Author"
                  className="w-full h-full rounded-full object-cover border-4 border-blue-600"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-400 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-16 text-center tracking-tight">
            Latest Blogs
          </h2>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <ClipLoader color="#3b82f6" size={50} />
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center text-white text-lg">
              No blogs available yet.
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <AnimatePresence>
                  {currentBlogs.map((b) => (
                    <motion.div
  key={b.id}
  layout
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 0.4 }}
  className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow duration-300 flex flex-col cursor-pointer"
  onClick={() => navigate(`/blogs/${b.id}`)}
>
  {/* First Image - Full Size */}
  {b?.images?.[0]?.imageUrl && (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={b.images[0].imageUrl}
        alt={b.title}
        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
      />
    </div>
  )}

  {/* Card Content */}
  <div className="p-6 flex flex-col flex-1">
    {/* Title */}
    <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug hover:text-indigo-600 transition-colors duration-300">
      {b.title}
    </h3>
    {/* Description */}
    <div
      className="text-gray-700 mb-4 line-clamp-4 text-sm leading-relaxed"
      dangerouslySetInnerHTML={{ __html: b.description }}
    ></div>

    {/* Meta */}
    <div className="flex items-center justify-between text-sm text-gray-500">
      <span>
        Published on {new Date(b.createdAt).toLocaleDateString()}
      </span>
    </div>
  </div>
</motion.div>

                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-12 gap-4">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-white font-semibold px-4 py-2">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
