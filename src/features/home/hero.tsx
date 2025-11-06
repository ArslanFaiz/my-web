import { useState, useEffect } from "react"
import { Button } from "../../components/"
import { useNavigate } from "react-router-dom"

export default function HeroSection() {
  const [callsBooked, setCallsBooked] = useState(0)
  const [ratio, setRatio] = useState(0)
  
  useEffect(() => {
    const callsInterval = setInterval(() => {
      setCallsBooked((prev) => (prev < 1275 ? prev + 15 : 1275))
    }, 50)

    const ratioInterval = setInterval(() => {
      setRatio((prev) => (prev < 43 ? prev + 0.5 : 43))
    }, 50)

    return () => {
      clearInterval(callsInterval)
      clearInterval(ratioInterval)
    }
  }, [])
 const route = useNavigate();
 const handleBooking = () => {
    route("/CallBooking");
 }
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let Us Fill Your Calendar — While You Close Deals.
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Our trained appointment setters call, qualify, and book insurance leads for you — with live performance
                tracking and on-demand scheduling.
              </p>
            </div>
       
            <Button
              size="lg"
              onClick={handleBooking}
              className="w-fit bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Start Booking Calls
            </Button>
          </div>

          {/* Right side - Animated Dashboard Preview */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Dashboard card */}
              <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-white font-semibold text-lg mb-2">Live Performance</h3>
                  <p className="text-slate-400 text-sm">Real-time metrics</p>
                </div>

                {/* Metrics */}
                <div className="space-y-6">
                  {/* Calls Booked */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm font-medium">Calls Booked</span>
                      <span className="text-blue-400 font-bold text-lg">{Math.floor(callsBooked)}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(callsBooked / 1275) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Ratio */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm font-medium">Conversion Ratio</span>
                      <span className="text-purple-400 font-bold text-lg">{Math.floor(ratio)}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${ratio}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-slate-400 text-sm">Active & Tracking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card - Agent closing deal */}
              <div className="absolute -bottom-8 -right-8 bg-slate-700/80 backdrop-blur-xl border border-slate-600 rounded-xl p-4 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">👤</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Agent Closing Deal</p>
                    <p className="text-slate-400 text-xs">+$2,450 commission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
