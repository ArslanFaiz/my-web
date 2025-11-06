"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function About() {
  const stats = [
    { num: 50, label: "Trusted Clients" },
    { num: 1100, label: "Calls Per Day" },
    { num: 80, label: "Professional Staff" },
    { num: 5, label: "Years Experience" },
  ]

  const [counters, setCounters] = useState(stats.map(() => 0))
  const duration = 2000 // all counters end together (2 seconds)

  useEffect(() => {
    const startTime = performance.now()

    const update = (time:number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      setCounters(stats.map(stat => Math.floor(stat.num * progress)))
      if (progress < 1) requestAnimationFrame(update)
      else setCounters(stats.map(stat => stat.num)) // ensure final values
    }

    requestAnimationFrame(update)
  }, [])

  return (
    <div className="w-full bg-white text-gray-900 overflow-hidden">
      {/* About Us Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-14 mt-4"
          >
            About Us
          </motion.h2>

          {/* Team Avatars and Description */}
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

            {/* Center Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center"
            >
              <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 rounded-full mb-8 shadow-sm"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Who we are and what we do?
              </h3>
              <p className="text-gray-600 text-lg">
                We are a Customer Facilitation Service provider.
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

          {/* Company Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-blue-600 font-semibold text-sm tracking-wide mb-4">
                OUR COMPANY
              </p>
              <h2 className="text-5xl font-bold text-black mb-6 leading-tight">
                Best Customer Services For Your Business
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We Provide Individual Bookers and Appointment Setters for
                Insurance Sales Agents and Managers. Using the CRM (provided by
                the client), we contact the customers directly on your behalf,
                providing 25-30 dials/hour per agent on all their leads or
                specific lead types chosen by the agent for that day.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <div className="bg-gradient-to-br from-blue-200 to-green-100 rounded-3xl h-64 shadow-lg shadow-blue-100"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="w-full overflow-hidden flex justify-center"
>
  <div className="max-w-6xl w-full rounded-3xl overflow-hidden shadow-lg">
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wvVfaPHYVip7ChQYwOexcqyqnSoP82.png"
      alt="Customer service team working at desks"
      className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
    />
  </div>
</motion.section>


      {/* Tabs Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-14">
            {["OUR VISION", "OUR MISSION", "OUR PRINCIPLE"].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center cursor-pointer transition-transform"
              >
                <h3 className="text-blue-600 font-semibold text-sm tracking-wide mb-2 uppercase">
                  {item}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto rounded-full"></div>
              </motion.div>
            ))}
          </div>

          {/* Headline */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-center mb-20"
>
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug max-w-4xl mx-auto">
    <span className="block text-blue-600">Communication Services That Elevate Your Business</span>
    <span className="block mt-4 text-gray-700 font-medium text-2xl md:text-3xl">
      Helping You Reach New Heights of Success with Smart, Personalized Solutions
    </span>
  </h1>
  <div className="mt-6 w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 rounded-full shadow-md"></div>
</motion.div>


          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <p className="text-5xl font-bold text-blue-600 mb-2">
                  {counters[i]}+
                </p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
