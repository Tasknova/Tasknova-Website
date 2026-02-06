import { motion } from "motion/react";
import { 
  Users, BarChart3, Heart, TrendingUp, Target, Zap,
  CheckCircle2, ArrowRight, Shield, Clock, DollarSign
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

const solutions = [
  {
    id: "sales-leaders",
    icon: Users,
    gradient: "from-cyan-500 to-blue-600",
    title: "Sales Leaders",
    subtitle: "Drive predictable revenue growth with conversation intelligence",
    challenges: [
      {
        title: "Lack of visibility into rep performance",
        description: "Can't scale yourself to listen to every call and coach effectively"
      },
      {
        title: "Inconsistent sales execution",
        description: "Top performers use different techniques than everyone else"
      },
      {
        title: "Unreliable forecasting",
        description: "Pipeline reviews based on gut feel, not conversation data"
      }
    ],
    solutions: [
      {
        icon: BarChart3,
        title: "Conversation Analytics",
        description: "Automatically analyze every sales conversation for talk patterns, objections, and competitor mentions",
        features: [
          "Rep performance scorecards with 20+ metrics",
          "Talk-to-listen ratio tracking",
          "Objection identification and categorization",
          "Sentiment and engagement scoring"
        ]
      },
      {
        icon: Users,
        title: "Performance Coaching",
        description: "Scale your coaching with AI-powered insights and best practice playbooks",
        features: [
          "Automated coaching recommendations",
          "Top performer talk track extraction",
          "Skill gap identification",
          "1-on-1 meeting preparation automation"
        ]
      },
      {
        icon: Target,
        title: "Pipeline Intelligence",
        description: "Forecast with confidence using conversation-based deal insights",
        features: [
          "Deal risk scoring from conversation patterns",
          "Buying signal detection",
          "Stakeholder engagement tracking",
          "Win/loss pattern analysis"
        ]
      }
    ],
    outcomes: [
      { metric: "32%", label: "Higher team quota attainment" },
      { metric: "94%", label: "Forecast accuracy" },
      { metric: "40%", label: "Faster new rep ramp" }
    ],
    testimonial: {
      quote: "Tasknova gave me visibility into every deal conversation. I can now coach with specific examples instead of generic advice.",
      author: "Marcus Stevens",
      role: "VP of Sales",
      company: "CloudMetrics"
    }
  },
  {
    id: "revops",
    icon: BarChart3,
    gradient: "from-purple-500 to-indigo-600",
    title: "RevOps Teams",
    subtitle: "Eliminate tool sprawl and automate revenue operations",
    challenges: [
      {
        title: "Disconnected tools",
        description: "Data scattered across CRM, dialers, email, and meeting tools"
      },
      {
        title: "Manual reporting",
        description: "Spend hours each week pulling together revenue reports"
      },
      {
        title: "Poor data quality",
        description: "Reps don't log activities consistently in CRM"
      }
    ],
    solutions: [
      {
        icon: Zap,
        title: "Unified Revenue Intelligence",
        description: "One platform that connects conversation data across all channels to revenue outcomes",
        features: [
          "Automatic activity capture and CRM sync",
          "Omnichannel interaction tracking",
          "Revenue attribution by activity type",
          "Unified data model across tools"
        ]
      },
      {
        icon: BarChart3,
        title: "Automation Workflows",
        description: "Eliminate manual data entry and reporting with intelligent automation",
        features: [
          "Auto-logging of calls, emails, and meetings",
          "Workflow triggers based on conversation insights",
          "Automated deal updates and alerts",
          "Custom report generation"
        ]
      },
      {
        icon: TrendingUp,
        title: "Performance Analytics",
        description: "Real-time dashboards connecting activities to revenue performance",
        features: [
          "Activity-to-revenue correlation analysis",
          "Rep productivity benchmarking",
          "Channel effectiveness tracking",
          "GTM motion performance insights"
        ]
      }
    ],
    outcomes: [
      { metric: "75%", label: "Reduction in manual reporting" },
      { metric: "100%", label: "Activity capture accuracy" },
      { metric: "$127K", label: "Avg annual value delivered" }
    ],
    testimonial: {
      quote: "We replaced 4 disconnected tools with Tasknova and our data quality went from 60% to 98%.",
      author: "Sarah Chen",
      role: "Director of Revenue Operations",
      company: "DataPrime Systems"
    }
  },
  {
    id: "customer-success",
    icon: Heart,
    gradient: "from-green-500 to-emerald-600",
    title: "Customer Success Teams",
    subtitle: "Reduce churn and expand accounts with conversation intelligence",
    challenges: [
      {
        title: "Missed churn signals",
        description: "Don't know which customers are at risk until it's too late"
      },
      {
        title: "Poor interaction visibility",
        description: "Can't track customer sentiment across check-ins and support calls"
      },
      {
        title: "Limited expansion opportunities",
        description: "Don't identify upsell/cross-sell signals consistently"
      }
    ],
    solutions: [
      {
        icon: Heart,
        title: "Interaction Sentiment Monitoring",
        description: "Track customer health through conversation sentiment analysis",
        features: [
          "Sentiment scoring on every customer interaction",
          "Engagement trend tracking over time",
          "Red flag detection (negative sentiment spikes)",
          "Health score automation based on conversations"
        ]
      },
      {
        icon: Target,
        title: "Customer Engagement Analytics",
        description: "Understand which accounts are engaged and ready for expansion",
        features: [
          "Account engagement scoring",
          "Feature adoption discussion tracking",
          "Expansion signal identification",
          "Champion relationship monitoring"
        ]
      },
      {
        icon: Shield,
        title: "Churn Prevention",
        description: "Get ahead of churn with early warning signals from conversations",
        features: [
          "Competitor mention detection",
          "Usage concern identification",
          "Budget discussion alerts",
          "Executive sponsor engagement tracking"
        ]
      }
    ],
    outcomes: [
      { metric: "22%", label: "Churn reduction" },
      { metric: "48%", label: "Increase in expansion revenue" },
      { metric: "118%", label: "Net Revenue Retention" }
    ],
    testimonial: {
      quote: "We now identify at-risk accounts 90 days earlier and our renewal rate improved from 82% to 94%.",
      author: "Jennifer Walsh",
      role: "VP of Customer Success",
      company: "TechForward Inc."
    }
  }
];

export function SolutionsByTeam() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold mb-6"
            >
              Solutions by Team
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              AI Revenue Intelligence Solutions For Every Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600"
            >
              Purpose-built solutions for Sales Leaders, RevOps, and Customer Success teams
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        return (
          <section
            key={solution.id}
            className={index % 2 === 0 ? "py-20 bg-white" : "py-20 bg-slate-50"}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.gradient} mb-6`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-xl text-slate-600">{solution.subtitle}</p>
                </motion.div>

                {/* Challenges */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">Common Challenges</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {solution.challenges.map((challenge, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-xl bg-white border border-slate-200"
                      >
                        <h4 className="font-bold mb-2">{challenge.title}</h4>
                        <p className="text-sm text-slate-600">{challenge.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">Tasknova Solution</h3>
                  <div className="space-y-8">
                    {solution.solutions.map((sol, i) => {
                      const SolIcon = sol.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow"
                        >
                          <div className="grid lg:grid-cols-[250px,1fr] gap-6">
                            <div>
                              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${solution.gradient} mb-4`}>
                                <SolIcon className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="text-xl font-bold mb-2">{sol.title}</h4>
                              <p className="text-sm text-slate-600">{sol.description}</p>
                            </div>
                            <div>
                              <ul className="space-y-3">
                                {sol.features.map((feature, fi) => (
                                  <li key={fi} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-8 text-center">Outcomes</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {solution.outcomes.map((outcome, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-6"
                      >
                        <div className={`text-5xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent mb-2`}>
                          {outcome.metric}
                        </div>
                        <div className="text-slate-600">{outcome.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl bg-gradient-to-r ${solution.gradient} text-white`}
                >
                  <p className="text-xl mb-6 italic">"{solution.testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20" />
                    <div>
                      <div className="font-semibold">{solution.testimonial.author}</div>
                      <div className="text-sm opacity-90">{solution.testimonial.role}, {solution.testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Team's Performance?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join 5,000+ revenue teams using Tasknova to drive predictable growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pricing">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                  Start Free Trial
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/book-demo">
                <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold text-lg hover:border-white transition-colors">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SolutionsByTeam;