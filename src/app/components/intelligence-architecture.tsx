import { motion } from "motion/react";
import { Brain, Zap, CheckCircle2 } from "lucide-react";

export function IntelligenceArchitecture() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How Tasknova Understands Your Business
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* LEFT COLUMN - Company Brain */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-cyan-500 transition-colors"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Company Brain</h3>
              <p className="text-xl text-cyan-600 font-semibold mb-4">
                The Intelligence Model That Learns Your Business
              </p>
              
              <p className="text-slate-600 mb-6">
                Tasknova builds a custom intelligence layer using your product positioning, ICP, pricing strategy, SLAs, compliance standards, and revenue playbooks so every insight matches how your team operates.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Learns product positioning and messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Maps ICP and buyer personas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Adapts to pricing and negotiation frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Understands playbooks and SLAs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Applies industry context and compliance rules</span>
                </li>
              </ul>
            </motion.div>

            {/* RIGHT COLUMN - Project Brain */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-blue-500 transition-colors"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Project Brain</h3>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                The Intelligence Model That Learns Your Execution
              </p>
              
              <p className="text-slate-600 mb-6">
                Tasknova continuously analyzes live customer interactions, deal signals, engagement behavior, and performance patterns to deliver real-time execution intelligence.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Tracks deal and pipeline signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Maps stakeholder and engagement behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Detects expansion and churn indicators</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Learns rep performance patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Builds lifecycle intelligence</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            <p className="text-xl md:text-2xl font-semibold text-white">
              Together, Company Brain and Project Brain power Tasknova's Revenue Execution Intelligence Platform.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
