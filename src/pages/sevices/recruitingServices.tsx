"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Briefcase, Users } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function RecruitingServices() {
  const responsibilities = [
    "Schedule interviews across departments",
    "Manage last-minute scheduling changes",
    "Conduct background checks",
    "Address hiring process obstacles",
  ]

  return (
    <>
      {/* ===== FIRST SECTION ===== */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Services Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-14 mt-4"
          >
            Recruiting Services
          </motion.h2>

          {/* Left & Right Avatars with Center Text */}
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
                Expert Recruiting Solutions
              </h3>
              <p className="text-gray-600 text-lg">
                We offer professional recruiting services to help businesses find and hire top talent efficiently,
                streamlining the hiring process and ensuring the best fit for every role.
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

      {/* ===== SECOND SECTION ===== */}
      <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="order-2 lg:order-1"
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight"
  >
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
      Recruiting
    </span>{" "}
    Excellence
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    className="text-lg text-slate-700 mb-8 leading-relaxed"
  >
    We understand the significance of recruiting coordinators in the hiring process and would be pleased to
    assist with recruiting. Our experienced team has been collaborating with different agencies for several
    years now.
  </motion.p>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15, duration: 0.6 },
      },
    }}
    className="space-y-4 mb-12"
  >
    {responsibilities.map((item, index) => (
      <motion.div
        key={index}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="flex items-start gap-4 group"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
        <p className="text-slate-700 text-lg">{item}</p>
      </motion.div>
    ))}
  </motion.div>
<NavLink to={"/contact"}>
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: true }}
    className="px-8 py-4 bg-gradient-to-r cursor-pointer from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 inline-flex items-center gap-2 group"
  >
    Start Recruiting
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </motion.button>
  </NavLink>
</motion.div>

{/* Right Visual */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="order-1 lg:order-2 relative"
>
  <div className="relative h-96 lg:h-full min-h-96">
    {/* Decorative cards */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="absolute top-0 right-0 w-64 h-40 bg-white rounded-2xl shadow-xl p-6 border border-amber-100 transform hover:scale-105 transition-transform"
    >
      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
        <Briefcase className="w-6 h-6 text-white" />
      </div>
      <h4 className="font-bold text-slate-900 mb-2">Interview Scheduling</h4>
      <p className="text-sm text-slate-600">Seamless coordination across departments</p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="absolute bottom-0 left-0 w-64 h-40 bg-white rounded-2xl shadow-xl p-6 border border-orange-100 transform hover:scale-105 transition-transform"
    >
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
        <Users className="w-6 h-6 text-white" />
      </div>
      <h4 className="font-bold text-slate-900 mb-2">Team Collaboration</h4>
      <p className="text-sm text-slate-600">Work with recruiters and hiring managers</p>
    </motion.div>

    {/* Center Glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-40 h-40 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-2xl"></div>
    </div>
  </div>
</motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
