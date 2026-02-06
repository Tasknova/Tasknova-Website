import { motion } from "motion/react";
import { Zap, Brain, Clock, MessageSquare, BarChart3, Target, Users, TrendingUp } from "lucide-react";

const efficiencyItems = [
  {
    icon: Zap,
    title: "Automated Transcription",
    description: "Never take notes again—AI captures every word"
  },
  {
    icon: Clock,
    title: "Smart Follow-ups",
    description: "Automated next steps based on conversation context"
  },
  {
    icon: MessageSquare,
    title: "Meeting Intelligence",
    description: "Auto-generated summaries and action items"
  }
];

const effectivenessItems = [
  {
    icon: Brain,
    title: "Revenue Signals",
    description: "AI identifies buying intent and deal risks in real-time"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Data-driven insights on what actually moves deals forward"
  },
  {
    icon: Target,
    title: "Predictive Coaching",
    description: "Prescriptive recommendations to close skill gaps"
  }
];

export function ValueDuality() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Do More. Win More.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tasknova doesn't just save time—it transforms how your revenue teams perform
          </p>
        </div>

        {/* Dual Value Props */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left - Efficiency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-3xl" />
            <div className="relative p-8 lg:p-10 rounded-3xl border-2 border-cyan-500/20 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Increase Efficiency</h3>
              </div>
              
              <p className="text-lg text-slate-600 mb-8">
                Eliminate manual busywork with intelligent automation
              </p>

              <div className="space-y-6">
                {efficiencyItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Average time saved</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                    10+ hrs/week
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Effectiveness */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl" />
            <div className="relative p-8 lg:p-10 rounded-3xl border-2 border-blue-500/20 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Increase Effectiveness</h3>
              </div>
              
              <p className="text-lg text-slate-600 mb-8">
                Make smarter decisions with AI-powered intelligence
              </p>

              <div className="space-y-6">
                {effectivenessItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Average win rate increase</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    +28%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connection Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200">
            <TrendingUp className="w-6 h-6 text-cyan-600" />
            <span className="font-semibold text-slate-700">
              Efficiency + Effectiveness = Predictable Revenue Growth
            </span>
            <Users className="w-6 h-6 text-blue-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
