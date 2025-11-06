// src/components/ChatWidget.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hello! Welcome to CallVerse Global. How can we assist you today?",
    },
  ]);

  const handleSend = () => {
    if (message.trim() === "") return;
    setMessages([...messages, { from: "user", text: message }]);
    setMessage("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thank you! Our support team will get back to you shortly 😊",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end cursor-pointer">
      {/* Chat window animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 60 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-lg bg-white/95 shadow-2xl rounded-3xl flex flex-col overflow-hidden border border-blue-100
                       w-[19rem] h-[26rem] sm:w-[21rem] sm:h-[27rem] md:w-[25rem] md:h-[31rem] lg:w-[27rem] lg:h-[33rem]"
          >
            {/* Header with logo */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-extrabold text-sm sm:text-base tracking-wide">
                    CG
                  </span>
                </div>
                <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-blue-200 to-cyan-100 bg-clip-text text-transparent tracking-tight">
                  CallVerse Global
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="hover:bg-white/20 p-1.5 rounded-full transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white space-y-2 scrollbar-thin scrollbar-thumb-blue-200">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 sm:px-4 py-2 rounded-2xl text-sm sm:text-[15px] shadow-sm max-w-[75%] ${
                      msg.from === "user"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-br-none"
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input area */}
            <div className="p-2 sm:p-3 border-t bg-white flex items-center gap-2 sm:gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 p-2 sm:p-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-2 sm:p-2.5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <Send size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!open && (
        <motion.button
          key="chatbutton"
          onClick={() => setOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative bg-gradient-to-r from-blue-600 to-cyan-400 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-40 blur-lg animate-pulse" />
          <MessageCircle size={26} className="relative z-10" />
        </motion.button>
      )}
    </div>
  );
}
