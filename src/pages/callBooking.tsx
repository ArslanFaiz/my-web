"use client"

import { useState } from "react"
import { Button } from "../components"
import { ChevronLeft, Phone, Calendar } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

export default function CallBooking() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("Please confirm my booking")
  const [bookingStep, setBookingStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleBooking = async () => {
    if (!name || !phone || !email || !selectedDate || !selectedTime) return

    const today = new Date().toISOString().slice(0, 10)
    if (selectedDate < today) {
      toast.error("Booking date cannot be in the past!")
      return
    }

    const bookingData = {
      name,
      phone,
      email,
      date: `${selectedDate}T${selectedTime}:00.000Z`,
      message,
    }

    setLoading(true)
    try {
      const response = await fetch(
        "https://technacallcanadabackend-production.up.railway.app/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      )
      const data = await response.json()

      if (response.ok && data.success) {
        toast.success("Booking created successfully!")
        setBookingStep(1)
        setSelectedDate("")
        setSelectedTime("")
        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
      } else {
        toast.error(data.message || "Something went wrong!")
      }
    } catch (error) {
      toast.error("Network error! Please try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ]

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center mt-15 cursor-pointer space-x-2 text-slate-300 hover:text-white transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 space-y-8">
              <div className="flex items-center justify-between mb-8">
                {[1, 2].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        step <= bookingStep
                          ? "bg-blue-600 text-white"
                          : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 2 && (
                      <div
                        className={`w-12 h-1 mx-2 transition-all ${
                          step < bookingStep ? "bg-blue-600" : "bg-slate-700"
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              {bookingStep >= 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white">Step 1: Your Info</h2>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              )}

              {bookingStep >= 2 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <h2 className="text-xl font-semibold text-white">Step 2: Choose Your Date</h2>
                  </div>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />

                  {selectedDate && (
                    <p className="text-sm text-green-400 flex items-center space-x-2">
                      <span>✓</span>
                      <span>Date selected: {selectedDate}</span>
                    </p>
                  )}

                  <div className="space-y-3">
                    <h3 className="text-white font-semibold text-lg">Choose Time</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 text-sm font-medium rounded-xl transition-all ${
                            selectedTime === time
                              ? "bg-blue-600 text-white border-blue-500"
                              : "bg-slate-700 border border-slate-600 hover:bg-blue-600/40 hover:border-blue-500"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-8 border-t border-slate-700">
                {bookingStep > 1 && (
                  <Button onClick={() => setBookingStep(bookingStep - 1)} variant="outline" className="flex-1">
                    Back
                  </Button>
                )}
                {bookingStep < 2 && (
                  <Button
                    onClick={() => setBookingStep(bookingStep + 1)}
                    disabled={bookingStep === 1 && (!name || !phone || !email)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                  </Button>
                )}
                {bookingStep === 2 && (
                  <Button
                    onClick={handleBooking}
                    disabled={!selectedDate || !selectedTime || loading}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    {loading ? "Booking..." : "Confirm Booking"}
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">Booking Summary</h3>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Full Name</p>
                  <p className="text-lg font-semibold">{name || "Not provided"}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Phone</p>
                  <p className="text-lg font-semibold">{phone || "Not provided"}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Email</p>
                  <p className="text-lg font-semibold">{email || "Not provided"}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Date</p>
                  <p className="text-lg font-semibold">{selectedDate || "Not selected"}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Message</p>
                  <p className="text-lg font-semibold">{message}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm mb-1">What Happens Next?</p>
                    <p className="text-sm text-blue-100">
                      Our appointment setters will call and book meetings during your selected date.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-300">✓ Only 5 slots left today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
