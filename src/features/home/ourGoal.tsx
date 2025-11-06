"use client";

import { motion,useAnimation } from "framer-motion";
import { useEffect } from "react";
import { services } from "../../constants";

export default function OurGoal() {
  // Background gradient motion
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-24 text-white">
      {/* Animated gradient background */}
      <motion.div
        animate={controls}
        className="absolute inset-0 bg-[linear-gradient(120deg,#2563eb,#3b82f6,#60a5fa,#93c5fd)] bg-[length:200%_200%]"
      />

      {/* Decorative circles (floating subtly) */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full border border-white"></div>
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full border border-white"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full border border-white"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-yellow-300 font-semibold text-lg tracking-widest mb-3">
            OUR GOAL
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            We Communicate To Get Your Business To The Next Level
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Transforming ideas into impactful strategies that drive growth, engagement, and success.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 flex flex-col items-center justify-center text-center 
                shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 text-4xl 
                  group-hover:scale-110 transition-transform duration-500 shadow-md"
                >
                  <span className="text-blue-600">{service.icon}</span>
                </motion.div>
                <h3 className="text-white text-xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
