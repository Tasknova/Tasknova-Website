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
    subtitle: "Drive Predictable Revenue Growth With Conversation Intelligence",
    challenges: [
      {
        title: "Lack of visibility into rep performance",
        description: "Leaders cannot scale themselves to review every conversation and coach consistently."
      },
      {
        title: "Inconsistent sales execution",
        description: "Top performers follow different techniques than the rest of the team."
      },
      {
        title: "Unreliable forecasting",
        description: "Pipeline reviews rely on assumptions instead of real customer signals."
      }
    ],
    solutions: [
      {
        icon: BarChart3,
        title: "Conversation Intelligence",
        description: "Automatically analyze every sales conversation to uncover talk patterns, objections, and competitive mentions.",
        features: [
          "Rep performance scorecards across 20+ metrics",
          "Talk-to-listen ratio intelligence",
          "Objection detection and categorization",
          "Sentiment and engagement scoring"
        ]
      },
      {
        icon: Users,
        title: "Performance Coaching",
        description: "Scale coaching using AI powered insights and real examples from top performers.",
        features: [
          "Automated coaching recommendations",
          "Talk track extraction from winning calls",
          "Skill gap identification",
          "One-on-one preparation automation"
        ]
      },
      {
        icon: Target,
        title: "Pipeline and Deal Intelligence",
        description: "Forecast with confidence using conversation driven deal insights.",
        features: [
          "Deal risk scoring from conversation patterns",
          "Buying signal detection",
          "Stakeholder engagement tracking",
          "Win and loss pattern analysis"
        ]
      }
    ],
    outcomes: [
      { metric: "32%", label: "Higher team quota attainment" },
      { metric: "94%", label: "Forecast accuracy" },
      { metric: "40%", label: "Faster new rep ramp time" }
    ],
    testimonial: {
      quote: "Tasknova gave me visibility into every deal conversation. I coach with real examples instead of generic advice.",
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
    subtitle: "Eliminate Tool Sprawl and Automate Revenue Operations",
    challenges: [
      {
        title: "Disconnected systems",
        description: "Revenue data scattered across CRM, dialers, email, and meeting tools."
      },
      {
        title: "Manual reporting",
        description: "Teams spend hours each week building reports instead of analyzing insights."
      },
      {
        title: "Poor data quality",
        description: "Inconsistent activity logging creates blind spots and inaccurate forecasts."
      }
    ],
    solutions: [
      {
        icon: Zap,
        title: "Unified Revenue Intelligence",
        description: "Create a single source of truth by connecting conversation data across all channels to revenue outcomes.",
        features: [
          "Automatic activity capture and CRM synchronization",
          "Omnichannel interaction tracking",
          "Revenue attribution by activity type",
          "Unified data model across tools"
        ]
      },
      {
        icon: BarChart3,
        title: "Automation Workflows",
        description: "Eliminate manual data entry and reporting using intelligent automation.",
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
        description: "Monitor execution and productivity using real-time performance dashboards.",
        features: [
          "Activity to revenue correlation analysis",
          "Rep productivity benchmarking",
          "Channel effectiveness tracking",
          "GTM motion performance insights"
        ]
      }
    ],
    outcomes: [
      { metric: "75%", label: "Reduction in manual reporting" },
      { metric: "100%", label: "Activity capture accuracy" },
      { metric: "$127K", label: "Average annual value delivered" }
    ],
    testimonial: {
      quote: "We replaced four disconnected tools with Tasknova and improved our data accuracy from 60% to 98%.",
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
    subtitle: "Reduce Churn and Expand Accounts Using Conversation Intelligence",
    challenges: [
      {
        title: "Missed churn signals",
        description: "Teams only discover risk when it is too late."
      },
      {
        title: "Limited visibility into customer sentiment",
        description: "Insights remain buried inside calls and check-ins."
      },
      {
        title: "Unclear expansion opportunities",
        description: "Upsell and cross-sell signals are not identified consistently."
      }
    ],
    solutions: [
      {
        icon: Heart,
        title: "Interaction Sentiment Monitoring",
        description: "Track customer health using sentiment analysis across every interaction.",
        features: [
          "Sentiment scoring on all customer conversations",
          "Engagement trend tracking over time",
          "Early warning detection for negative sentiment",
          "Automated health scoring"
        ]
      },
      {
        icon: Target,
        title: "Customer Engagement Intelligence",
        description: "Identify accounts ready for expansion based on engagement behavior.",
        features: [
          "Account engagement scoring",
          "Feature adoption discussion tracking",
          "Expansion signal identification",
          "Champion relationship monitoring"
        ]
      },
      {
        icon: Shield,
        title: "Churn Prevention Intelligence",
        description: "Detect risk early using conversation based warning signals.",
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
      { metric: "118%", label: "Net revenue retention" }
    ],
    testimonial: {
      quote: "We identify at-risk accounts nearly 90 days earlier and improved our renewal rate from 82% to 94%.",
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
              AI Revenue Intelligence Solutions for Every Revenue Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600"
            >
              Tasknova delivers purpose-built intelligence for Sales Leaders, Revenue Operations, and Customer Success teams by transforming customer conversations into actionable insights, coaching, and execution signals.
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
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    How Tasknova Helps {solution.title}
                  </h3>
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
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    Outcomes for {solution.title}
                  </h3>
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
              Ready to Transform How Your Team Performs?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of revenue teams using Tasknova to gain visibility, improve execution, and scale predictable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-demo">
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