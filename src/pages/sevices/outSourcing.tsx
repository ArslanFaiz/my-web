"use client"

import { motion } from "framer-motion"
import { Phone, Users, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "../../components"
import { NavLink } from "react-router-dom"

export default function OutSourcing() {
  const features = [
    {
      icon: Phone,
      title: "Multi-Channel Support",
      description:
        "Phone calls, video, emails, and mobile app support all in one platform",
    },
    {
      icon: Users,
      title: "Expert Specialists",
      description:
        "Well-trained reservation specialists focused on customer satisfaction",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Continuous monitoring and improvement of operations",
    },
  ]

  return (
    <>
      {/* ===== FIRST SECTION ===== */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-14 mt-4"
          >
            Outsourcing
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            {/* Left Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
                <img
                  src="/assets/woman-profile.jpg"
                  alt="Team member"
                  className="w-full h-full rounded-full object-cover border-4 border-blue-600"
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Center Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center"
            >
              <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 rounded-full mb-8 shadow-sm"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Reliable Outsourcing Solutions
              </h3>
              <p className="text-gray-600 text-lg">
                We deliver customized outsourcing services that help businesses reduce costs, improve efficiency, and focus on core operations while we manage their non-core tasks with professionalism and quality.
              </p>
            </motion.div>

            {/* Right Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
                <img
                  src="/assets/man-profile.jpg"
                  alt="Team member"
                  className="w-full h-full rounded-full object-cover border-4 border-blue-600"
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECOND SECTION WITH ANIMATION ===== */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-20 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Why Outsource Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Reservation
              </span>{" "}
              Call Center?
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto md:mx-0">
              Transform your customer service with our comprehensive multi-channel support solution.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-slate-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start"
          >
            <NavLink to={"/contact"}>
            <Button className="px-8 py-4 bg-gradient-to-r cursor-pointer from-cyan-400 to-blue-400 text-slate-900 font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </NavLink>
            <Button className="px-8 py-4 border border-white/20 cursor-pointer text-white font-semibold rounded-full hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
