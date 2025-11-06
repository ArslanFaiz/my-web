"use client"

import { motion } from "framer-motion"
import { benefits } from "../../constants"
import { Button } from "../../components"
import { NavLink } from "react-router-dom"

export default function BookingServices() {
    
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Services Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14 mt-4"
        >
          Booking Services
        </motion.h2>


        {/* Avatars + Text Section */}
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
              Streamlined Booking Solutions
            </h3>
            <p className="text-gray-600 text-lg">
              We provide efficient and reliable booking services to help businesses manage appointments, reservations, and schedules smoothly, saving time and enhancing customer satisfaction.
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

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-6 rounded-3xl shadow-inner"
        >
          <div className="max-w-7xl mx-auto">
            {/* Animated Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                What You Will{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                  Get
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to succeed as an appointment setter with our comprehensive support system
              </p>
            </motion.div>

            {/* Animated Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center"
            >
                <NavLink to={"/contact"}>
              <Button className="px-10 py-4 bg-gradient-to-r cursor-pointer from-emerald-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 inline-flex items-center gap-2 group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </NavLink>
             
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArrowRight({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )
}
