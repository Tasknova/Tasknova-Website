import { motion } from "motion/react";
import { XCircle, AlertTriangle } from "lucide-react";

const problems = [
  {
    title: "Fragmented Tools",
    description: "Sales teams juggle 10+ disconnected tools, losing context and wasting hours on manual data entry."
  },
  {
    title: "Siloed Data",
    description: "Critical insights trapped in email threads, call recordings, and individual notes—never reaching leadership."
  },
  {
    title: "Reactive Coaching",
    description: "Managers discover performance issues too late, missing critical moments to course-correct deals."
  },
  {
    title: "Invisible Revenue Risks",
    description: "Pipeline forecasts based on gut feel rather than conversation intelligence, leading to missed targets."
  }
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Sarcastic Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic text-slate-300">
            "We want to grow slowly and inefficiently..."
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Said no revenue leader ever. Yet most teams are stuck with:
          </p>
        </motion.div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-slate-400">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30">
            <AlertTriangle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The Problem? No Single Source of Truth
            </h3>
            <p className="text-lg text-slate-300 mb-6">
              Without unified revenue intelligence, you're flying blind—making decisions on incomplete data, 
              reacting to problems instead of preventing them, and leaving revenue on the table.
            </p>
            <div className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">
              <p className="font-semibold text-lg">
                Tasknova creates your unified intelligence layer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}