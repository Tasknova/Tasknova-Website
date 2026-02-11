import { motion } from "motion/react";
import { 
  TrendingUp, DollarSign, Clock, Users, Target, Zap,
  CheckCircle2, BarChart3, Award
} from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "32%",
    label: "Average Revenue Growth",
    description: "Teams using Tasknova see significant revenue increases within 6 months"
  },
  {
    icon: DollarSign,
    value: "$2.4M",
    label: "Additional ARR per Team",
    description: "Average incremental annual recurring revenue generated"
  },
  {
    icon: Clock,
    value: "12 hrs",
    label: "Saved per Rep per Week",
    description: "Time recovered from manual note-taking and admin work"
  },
  {
    icon: Target,
    value: "28%",
    label: "Higher Win Rates",
    description: "Deal closure improvement with AI-powered insights"
  },
  {
    icon: Users,
    value: "40%",
    label: "Faster Rep Ramp Time",
    description: "New hires reach quota faster with AI coaching"
  },
  {
    icon: Zap,
    value: "3 days",
    label: "Average Setup Time",
    description: "From signup to full team deployment"
  },
  {
    icon: BarChart3,
    value: "98%",
    label: "Forecast Accuracy",
    description: "Pipeline predictions based on conversation intelligence"
  },
  {
    icon: Award,
    value: "94%",
    label: "Customer Satisfaction",
    description: "Based on 5,000+ customer reviews"
  }
];

const industryStats = [
  {
    industry: "SaaS & Technology",
    teams: "2,300+",
    growth: "+45%",
    highlight: "Highest adoption rate"
  },
  {
    industry: "Financial Services",
    teams: "1,200+",
    growth: "+38%",
    highlight: "Top revenue growth"
  },
  {
    industry: "Healthcare & Life Sciences",
    teams: "800+",
    growth: "+29%",
    highlight: "Fastest growing segment"
  },
  {
    industry: "Manufacturing & Industrial",
    teams: "700+",
    growth: "+34%",
    highlight: "Longest deal cycles improved"
  }
];

export function MetricsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real metrics from real revenue teams using Tasknova
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-slate-900 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-slate-600">
                  {metric.description}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industry Breakdown */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-3">
              Trusted Across Industries
            </h3>
            <p className="text-lg text-slate-600">
              Teams from every sector rely on Tasknova for revenue intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryStats.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900 text-white"
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wide">
                    {industry.highlight}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-3">{industry.industry}</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Teams</span>
                  <span className="font-semibold text-xl">{industry.teams}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Avg. Growth</span>
                  <span className="font-semibold text-xl text-cyan-400">{industry.growth}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROI Calculator CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Calculate Your Potential ROI
            </h3>
            <p className="text-lg text-cyan-50 mb-6">
              See how much revenue you could add with Tasknova
            </p>
            <a href="/pricing#roi-calculator">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-slate-50 transition-colors text-lg">
                Try ROI Calculator
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
