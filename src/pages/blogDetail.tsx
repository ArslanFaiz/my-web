"use client";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

type BlogType = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  status?: string;
  images?: { imageUrl: string }[];
  createdAt: string;
};

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://technacallcanadabackend-production.up.railway.app/api/blogs/${id}`
        );
        setBlog(res.data.data.blog);

        if (res.data.data.blog?.images?.length > 0) {
          setMainImage(res.data.data.blog.images[0].imageUrl);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center py-32">
        <ClipLoader color="#3b82f6" size={50} />
      </div>
    );

  if (!blog)
    return (
      <div className="text-center py-32 text-gray-500 text-lg">
        Blog not found.
      </div>
    );

  // Combine main image + other images into a single array
  const allImages = mainImage
    ? [{ imageUrl: mainImage }, ...(blog.images?.filter(img => img.imageUrl !== mainImage) || [])]
    : blog.images || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto my-20 px-6 py-16 bg-gradient-to-b from-indigo-50 to-white rounded-3xl shadow-2xl border border-gray-200"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-2 transition-colors duration-300"
      >
        &larr; Back to Blogs
      </button>

      {/* Blog Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight drop-shadow-md">
        {blog.title}
      </h1>

      {/* All Images with description below each */}
      <div className="flex flex-col gap-12">
        <AnimatePresence>
          {allImages.map((img, idx) => (
            <motion.div
              key={img.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <div
                className="w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-xl border border-gray-200 cursor-pointer mb-4"
                onClick={() => setMainImage(img.imageUrl)}
              >
                <img
                  src={img.imageUrl}
                  alt={`Blog Image ${idx + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105 rounded-3xl"
                />
              </div>

              {/* Description */}
              <div className="prose max-w-none text-gray-700 leading-relaxed md:prose-lg">
                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
