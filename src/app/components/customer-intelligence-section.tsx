import { motion } from "motion/react";
import { Building2, Users, TrendingUp, FileText, Brain, Target } from "lucide-react";

const intelligenceFeatures = [
  {
    icon: Building2,
    title: "Account Context",
    description: "Company size, industry, tech stack, and organizational structure at your fingertips"
  },
  {
    icon: TrendingUp,
    title: "Industry Signals",
    description: "Market trends, competitive landscape, and sector-specific insights"
  },
  {
    icon: Users,
    title: "Stakeholder Insights",
    description: "Decision-maker profiles, roles, responsibilities, and influence mapping"
  },
  {
    icon: FileText,
    title: "Engagement History",
    description: "Complete interaction timeline across all touchpoints and team members"
  },
  {
    icon: Brain,
    title: "AI-Generated Briefs",
    description: "Dynamic intelligence summaries tailored to each conversation context"
  },
  {
    icon: Target,
    title: "Buyer Signals",
    description: "Intent indicators, pain points, and readiness-to-buy signals"
  }
];

export function CustomerIntelligenceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Know Your Customer Before Every Conversation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tasknova builds dynamic customer intelligence briefs that prepare reps and success teams with account context, industry signals, stakeholder insights, and engagement history before every interaction.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {intelligenceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border border-slate-200 hover:border-cyan-500/50 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Differentiator Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Your Competitive Edge</h3>
            </div>
            <p className="text-lg text-cyan-50 max-w-2xl mx-auto mb-6">
              While other platforms only analyze what happened in conversations, Tasknova prepares your team with intelligence before they start talking.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-lg backdrop-blur-sm">
              <span className="text-sm font-semibold">The only platform that combines conversation intelligence with proactive customer intelligence</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
