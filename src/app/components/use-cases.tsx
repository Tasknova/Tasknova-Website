import { motion } from "motion/react";
import { 
  Users, Building2, Heart, Briefcase, 
  TrendingUp, Target, Zap, CheckCircle2 
} from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "For Sales Leaders",
    role: "VP Sales, Sales Directors, Sales Managers",
    gradient: "from-cyan-500 to-blue-600",
    challenges: [
      "Inconsistent sales execution across the team",
      "Difficulty identifying why deals are won or lost",
      "Limited visibility into daily rep activities",
      "Coaching based on lagging indicators"
    ],
    solutions: [
      {
        feature: "Real-time conversation intelligence",
        benefit: "Know exactly what's happening in every deal, every day"
      },
      {
        feature: "Win/loss analysis automation",
        benefit: "Understand patterns in successful deals and replicate them"
      },
      {
        feature: "Performance benchmarking",
        benefit: "Compare reps against top performers with objective data"
      },
      {
        feature: "Proactive deal risk alerts",
        benefit: "Intervene before deals slip through the cracks"
      }
    ],
    outcomes: [
      "35% improvement in forecast accuracy",
      "28% increase in team quota attainment",
      "50% reduction in time spent on pipeline reviews"
    ]
  },
  {
    icon: Building2,
    title: "For Revenue Operations",
    role: "RevOps Leaders, Sales Operations, Strategy Teams",
    gradient: "from-blue-500 to-indigo-600",
    challenges: [
      "Data scattered across multiple systems",
      "Manual reporting consuming hours each week",
      "Inability to prove ROI of sales investments",
      "Disconnected tech stack creating blind spots"
    ],
    solutions: [
      {
        feature: "Unified data platform",
        benefit: "Single source of truth for all customer interactions"
      },
      {
        feature: "Automated reporting dashboards",
        benefit: "Real-time insights without manual data compilation"
      },
      {
        feature: "Revenue attribution analytics",
        benefit: "Prove which activities and tactics drive revenue"
      },
      {
        feature: "50+ native integrations",
        benefit: "Connect your entire tech stack in one platform"
      }
    ],
    outcomes: [
      "15+ hours saved per week on reporting",
      "98% data accuracy across systems",
      "40% faster time-to-insight for strategic decisions"
    ]
  },
  {
    icon: Heart,
    title: "For Customer Success",
    role: "CS Leaders, Account Managers, CSMs",
    gradient: "from-purple-500 to-pink-600",
    challenges: [
      "Reactive approach to churn prevention",
      "Missing context from sales-to-CS handoffs",
      "Difficulty identifying expansion opportunities",
      "Time-consuming QBR preparation"
    ],
    solutions: [
      {
        feature: "Customer health scoring",
        benefit: "Proactively identify at-risk accounts before they churn"
      },
      {
        feature: "Full conversation history",
        benefit: "Complete context from first sales call to renewals"
      },
      {
        feature: "Expansion signal detection",
        benefit: "AI identifies upsell and cross-sell opportunities"
      },
      {
        feature: "Automated QBR insights",
        benefit: "Generate executive summaries from all interactions"
      }
    ],
    outcomes: [
      "22% reduction in churn rate",
      "45% increase in expansion revenue",
      "8 hours saved per CSM per week"
    ]
  },
  {
    icon: Briefcase,
    title: "For Founders & Executives",
    role: "CEOs, Founders, Executive Teams",
    gradient: "from-orange-500 to-red-600",
    challenges: [
      "Limited visibility into revenue team performance",
      "Uncertainty about pipeline health and forecasts",
      "Difficulty scaling go-to-market motions",
      "Inability to identify strategic growth levers"
    ],
    solutions: [
      {
        feature: "Executive dashboards",
        benefit: "Real-time view of revenue metrics that matter"
      },
      {
        feature: "Market intelligence extraction",
        benefit: "Understand customer needs, competitor mentions, market trends"
      },
      {
        feature: "Playbook development",
        benefit: "Codify what works and scale it across the team"
      },
      {
        feature: "Strategic trend analysis",
        benefit: "Identify patterns that inform product and GTM strategy"
      }
    ],
    outcomes: [
      "3x improvement in revenue predictability",
      "32% faster achievement of growth targets",
      "Data-driven decision making across the organization"
    ]
  }
];

export function UseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built for Every Revenue Role
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're closing deals, optimizing operations, retaining customers, 
            or leading the business—Tasknova delivers the insights you need
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl overflow-hidden"
              >
                {/* LEFT: Role + Challenges, RIGHT: How Tasknova Helps + Outcomes */}
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* LEFT - Title & Challenges */}
                  <div className={`p-8 lg:p-10 bg-gradient-to-br ${useCase.gradient} text-white`}>
                    <Icon className="w-12 h-12 mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-sm opacity-90 mb-8">{useCase.role}</p>

                    <h4 className="font-semibold mb-4 text-white/80">Common Challenges:</h4>
                    <ul className="space-y-3">
                      {useCase.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-white/60">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT - Solutions & Outcomes */}
                  <div className="p-8 lg:p-10 bg-white">
                    <h4 className="font-bold text-lg mb-6 text-slate-900">
                      How Tasknova Helps:
                    </h4>

                    {/* Solutions List */}
                    <div className="space-y-4 mb-8">
                      {useCase.solutions.map((solution, i) => (
                        <div key={i} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-sm text-slate-900 mb-1">
                              {solution.feature}
                            </div>
                            <div className="text-sm text-slate-600">
                              {solution.benefit}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Outcomes */}
                    <div className="pt-6 border-t border-slate-200">
                      <h5 className="font-semibold text-sm text-slate-500 uppercase tracking-wide mb-4">
                        Expected Outcomes:
                      </h5>
                      <div className="space-y-2">
                        {useCase.outcomes.map((outcome, i) => (
                          <div
                            key={i}
                            className="text-sm text-slate-700"
                          >
                            • {outcome}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">
            See how Tasknova fits your specific use case
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg">
            Book a Personalized Demo
          </button>
        </div>
      </div>
    </section>
  );
}