import { motion } from "framer-motion"
import { Card } from "../../components"

export default function DashboardPreview() {
  const metrics = [
    { label: "Total Calls", value: "1,275", icon: "📞", color: "from-blue-500 to-blue-600" },
    { label: "Appointment Rate", value: "43%", icon: "✓", color: "from-green-500 to-green-600" },
    { label: "Confirmed Meetings", value: "320", icon: "📅", color: "from-purple-500 to-purple-600" },
    { label: "Avg Handle Time", value: "3m 42s", icon: "⏱️", color: "from-orange-500 to-orange-600" },
  ]

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Floating radial gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-500/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4"
          >
            Interactive Dashboard Preview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-slate-400"
          >
            Real-time metrics updated nightly
          </motion.p>
        </div>

        {/* Main dashboard card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6">
              <h3 className="text-white text-2xl font-bold">Performance Dashboard</h3>
              <p className="text-slate-300 text-sm mt-1">Updated at end of business day</p>
            </div>

            <div className="p-8">
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="space-y-3"
                  >
                    <div
                      className={`bg-gradient-to-br ${metric.color} rounded-xl p-5 text-white shadow-md hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="text-4xl mb-2">{metric.icon}</div>
                      <div className="text-3xl font-bold">{metric.value}</div>
                    </div>
                    <p className="text-slate-600 font-medium text-sm text-center">{metric.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Chart visualization */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h4 className="text-slate-900 font-semibold mb-6">Calls Booked This Week</h4>
                <div className="flex items-end justify-between h-48 gap-2">
                  {[65, 78, 92, 88, 95, 110, 125].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: (value / 125) }}
                      transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                      viewport={{ once: true }}
                      className="flex-1 flex flex-col items-center origin-bottom"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl shadow-lg"
                        style={{ height: `${(value / 125) * 100}%` }}
                      ></motion.div>
                      <span className="text-xs text-slate-500 mt-2 font-medium">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
