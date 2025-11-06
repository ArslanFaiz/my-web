"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
        message: formData.message,
      }

      const response = await axios.post(
        "https://technacallcanadabackend-production.up.railway.app/api/contacts",
        payload,
        { headers: { "Content-Type": "application/json" } }
      )

      if (response.data.success) {
        setSuccess(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        toast.success("Message sent successfully!")
      } else {
        console.error("Submission error:", response.data.message)
        toast.error("Failed to send message.")
      }
    } catch (error) {
      console.error("Submission failed:", error)
      toast.error("Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Toast Container */}
      <Toaster position="top-center" />

      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[30rem] h-[30rem] bg-blue-400/20 blur-3xl rounded-full -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-[30rem] h-[30rem] bg-lime-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-24">
        {/* Top Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-14 mt-4"
          >
            Contact Us
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
                {success ? (
                  <div className="w-full h-full flex items-center justify-center bg-lime-400 rounded-full">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                ) : (
                  <img
                    src="/assets/woman-profile.jpg"
                    alt="Support representative"
                    className="w-full h-full rounded-full object-cover border-4 border-blue-600"
                  />
                )}
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
                Let’s Connect With Our Team
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Whether you’re looking to outsource your communication operations,
                get a custom service quote, or simply learn more about our solutions — 
                we’re just a message away.
              </p>
            </motion.div>

            {/* Right Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
                <img
                  src="/assets/man-profile.jpg"
                  alt="Team member"
                  className="w-full h-full rounded-full object-cover border-4 border-blue-600"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Contact Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <p className="text-lime-500 font-medium uppercase tracking-wide mb-3">
                Contact Us
              </p>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 mt-4 text-lg max-w-md">
                Have a question, project idea, or just want to say hello? Fill out the form, and our team will get back to you shortly.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="backdrop-blur-xl bg-white/60 border border-white/30 shadow-lg rounded-2xl p-4 flex items-center gap-4 hover:scale-[1.02] transition">
                <div className="bg-lime-400 p-3 rounded-xl text-black">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-700">info@callverseglobal.net</p>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/60 border border-white/30 shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition">
                <div className="bg-lime-400 p-3 rounded-xl text-black">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-700">+1 (416) 555-7890</p>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/60 border border-white/30 shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition sm:col-span-2">
                <div className="bg-lime-400 p-3 rounded-xl text-black">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-700">Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/60 border border-white/30 shadow-2xl rounded-3xl p-10 space-y-6"
          >
            {(["name", "email", "phone"] as const).map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required={field !== "phone"}
                  className="peer w-full border border-gray-300 bg-transparent rounded-xl px-4 pt-6 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder={field}
                />
                <label
                  htmlFor={field}
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-lime-500"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                required
                className="peer w-full border border-gray-300 bg-transparent rounded-xl px-4 pt-6 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-lime-500"
              >
                Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full bg-lime-400 text-black font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-lime-500 transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"} <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
