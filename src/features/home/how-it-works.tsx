"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "../../components"

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: 1,
      title: "Choose Your Time Slots",
      description:
        "Agents select when they want calls made using a simple calendar.",
      icon: "📅",
      details:
        "Pick your availability, set preferred hours, and specify how many calls you want daily.",
    },
    {
      number: 2,
      title: "We Make the Calls",
      description:
        "Appointment setters call and book meetings in real time.",
      icon: "📞",
      details:
        "Our trained team qualifies leads and schedules appointments directly into your calendar.",
    },
    {
      number: 3,
      title: "Track Everything",
      description:
        "Agents see conversion rates, appointments, and performance.",
      icon: "📊",
      details:
        "Monitor live metrics, conversion rates, and confirmed meetings in real-time.",
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600">
            Three simple steps to start booking qualified leads
          </p>
        </motion.div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveStep(index)}
              className="cursor-pointer transition-transform duration-75 ease-out"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 12,
                duration: 0.15, // ⚡ snappy hover
              }}
            >
              <Card
                className={`p-8 h-full transition-all duration-100 ease-out ${
                  activeStep === index
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : "bg-slate-50 text-slate-900 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="text-4xl flex-shrink-0"
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.4 }} // faster emoji rotation
                  >
                    {step.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold mb-2 ${
                        activeStep === index
                          ? "text-blue-100"
                          : "text-blue-600"
                      }`}
                    >
                      STEP {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p
                      className={`mb-4 ${
                        activeStep === index
                          ? "text-blue-50"
                          : "text-slate-600"
                      }`}
                    >
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-blue-400 mt-4 card-content">
                      <p
                        className={`text-sm ${
                          activeStep === index
                            ? "text-blue-100"
                            : "text-slate-500"
                        }`}
                      >
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Progress Dots */}
        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {steps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`h-2 rounded-full transition-all duration-100 ease-out ${
                activeStep === index ? "bg-blue-600 w-8" : "bg-slate-300 w-2"
              }`}
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.15 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
