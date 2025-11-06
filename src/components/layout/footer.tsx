"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Logo Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-xl">TC</span>
              </div>
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent tracking-wide">
                Technacall Canada
              </span>
            </div>
            <p className="text-gray-600 max-w-sm leading-relaxed">
              Building beautiful digital experiences with passion and precision.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-black font-bold text-lg mb-3">Contact</h4>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:info@callverseglobal.com"
                className="text-blue-600 hover:underline"
              >
                info@callverseglobal.com
              </a>
            </p>
            <p className="text-gray-700">
              Phone: <span className="text-blue-600">+1 (416) 555-7890</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-transform transform hover:-translate-y-1 hover:scale-105 shadow-md"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-transform transform hover:-translate-y-1 hover:scale-105 shadow-md"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-transform transform hover:-translate-y-1 hover:scale-105 shadow-md"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 bg-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CallVerse Global. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
