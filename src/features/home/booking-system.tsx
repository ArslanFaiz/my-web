import { useState } from "react"
import { motion } from "framer-motion"
import { Card, Button } from "../../components"

export default function BookingSystem() {
  const [selectedSlots, setSelectedSlots] = useState<number[]>([])
  const [hoursRequested, setHoursRequested] = useState(4)

  const timeSlots = [
    { id: 1, time: "9:00 AM - 10:00 AM", available: 12 },
    { id: 2, time: "10:00 AM - 11:00 AM", available: 8 },
    { id: 3, time: "11:00 AM - 12:00 PM", available: 5 },
    { id: 4, time: "1:00 PM - 2:00 PM", available: 15 },
    { id: 5, time: "2:00 PM - 3:00 PM", available: 10 },
    { id: 6, time: "3:00 PM - 4:00 PM", available: 3 },
    { id: 7, time: "4:00 PM - 5:00 PM", available: 7 },
  ]

  const toggleSlot = (id: number) => {
    setSelectedSlots((prev) =>
      prev.includes(id) ? prev.filter((slot) => slot !== id) : [...prev, id]
    )
  }

  const totalSlots = selectedSlots.reduce((sum, id) => {
    const slot = timeSlots.find((s) => s.id === id)
    return sum + (slot?.available || 0)
  }, 0)

  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 relative overflow-hidden">
      {/* Floating Gradient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            You Choose When We Call
          </h2>
          <p className="text-xl text-slate-600">
            Select your preferred time slots and we'll handle the rest
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Time Slot Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-8 border border-slate-200 rounded-2xl shadow-xl bg-white/70 backdrop-blur-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Available Time Slots
              </h3>

              <div className="space-y-3 mb-8">
                {timeSlots.map((slot, i) => (
                  <motion.button
                    key={slot.id}
                    onClick={() => toggleSlot(slot.id)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all duration-300 ${
                      selectedSlots.includes(slot.id)
                        ? "border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        animate={{
                          scale: selectedSlots.includes(slot.id) ? 1.1 : 1,
                        }}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          selectedSlots.includes(slot.id)
                            ? "bg-blue-600 border-blue-600"
                            : "border-slate-300"
                        }`}
                      >
                        {selectedSlots.includes(slot.id) && (
                          <span className="text-white text-sm">✓</span>
                        )}
                      </motion.div>
                      <div className="text-left">
                        <p className="font-semibold text-slate-900">
                          {slot.time}
                        </p>
                        <p className="text-sm text-slate-500">
                          {slot.available} slots available
                        </p>
                      </div>
                    </div>
                    {slot.available <= 5 && (
                      <span className="text-xs font-bold text-orange-600 bg-orange-100/80 px-3 py-1 rounded-full">
                        Limited
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="pt-6 border-t border-slate-200"
              >
                <p className="text-sm text-slate-600 mb-4">
                  Total slots selected:{" "}
                  <span className="font-bold text-slate-900">{totalSlots}</span>
                </p>
              </motion.div>
            </Card>
          </motion.div>

          {/* Booking Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border border-blue-200 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-100/70 backdrop-blur-xl shadow-xl hover:shadow-2xl sticky top-8 transition-all duration-500">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Booking Summary
              </h3>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Hours Requested
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() =>
                        setHoursRequested(Math.max(1, hoursRequested - 1))
                      }
                      className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition-colors"
                    >
                      −
                    </button>
                    <span className="text-2xl font-bold text-blue-600 w-12 text-center">
                      {hoursRequested}
                    </span>
                    <button
                      onClick={() => setHoursRequested(hoursRequested + 1)}
                      className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <motion.div
                  className="pt-4 border-t border-blue-200"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-slate-600 mb-2">Selected Slots</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {selectedSlots.length}
                  </p>
                </motion.div>

                <motion.div
                  className="pt-4 border-t border-blue-200"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-slate-600 mb-2">
                    Total Availability
                  </p>
                  <p className="text-3xl font-bold text-green-600">
                    {totalSlots}
                  </p>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: selectedSlots.length > 0 ? 1.02 : 1 }}
              >
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                  disabled={selectedSlots.length === 0}
                >
                  Confirm Booking
                </Button>
              </motion.div>

              <p className="text-xs text-slate-600 text-center mt-4">
                System assigns available agents automatically
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
