"use client"

import { motion } from "framer-motion"
import type { Transition } from "framer-motion"

export default function CTA() {
  // Floating animation for images
  const floatTransition: Transition = {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: [0.42, 0, 0.58, 1], // equivalent to easeInOut
  }

  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-r from-lime-300 via-teal-400 to-blue-600 rounded-3xl overflow-hidden py-20 px-8 md:px-16">
          {/* Background pattern effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-20 w-80 h-80 rounded-full border border-white"></div>
            <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full border border-white"></div>
          </div>

          {/* Floating profile images */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 bg-gray-300 rounded-full border-4 border-white overflow-hidden"
            animate={{ y: [0, -10, 0] }}
            transition={floatTransition}
          >
            <img src="/assets/woman-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute top-12 right-12 w-20 h-20 bg-gray-300 rounded-full border-4 border-white overflow-hidden"
            animate={{ y: [0, 15, 0] }}
            transition={{ ...floatTransition, duration: 5 }}
          >
            <img src="/assets/woman-profile-2.jpg" alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-12 w-20 h-20 bg-gray-300 rounded-full border-4 border-white overflow-hidden"
            animate={{ y: [0, -12, 0] }}
            transition={{ ...floatTransition, duration: 4.5 }}
          >
            <img src="/assets/man-profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 bg-gray-300 rounded-full border-4 border-white overflow-hidden"
            animate={{ y: [0, 10, 0] }}
            transition={{ ...floatTransition, duration: 6 }}
          >
            <img src="/assets/man-profile-2.jpg" alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          {/* Call icon badges with pulse effect */}
          <motion.div
            className="absolute bottom-20 left-20 w-12 h-12 bg-lime-300 rounded-full flex items-center justify-center text-xl border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: [0.42, 0, 0.58, 1] }}
          >
            📞
          </motion.div>

          <motion.div
            className="absolute bottom-16 right-24 w-12 h-12 bg-lime-300 rounded-full flex items-center justify-center text-xl border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: [0.42, 0, 0.58, 1] }}
          >
            📞
          </motion.div>

          {/* Animated content */}
          <motion.div
            className="relative text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            >
              Get
            </motion.h1>

            <motion.h2
              className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
            >
              An Individual Experienced Booker For Your Customers
            </motion.h2>

            <motion.p
              className="text-white text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
            >
              Contact us today to get your services started!
            </motion.p>

            <motion.button
              className="bg-lime-300 hover:bg-lime-400 text-black font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <span>→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
