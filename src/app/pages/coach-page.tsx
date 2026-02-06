import { motion } from "motion/react";
import { 
  Users, Brain, Target, TrendingUp, CheckCircle2,
  ArrowRight, Award, BarChart3, Zap, Clock
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Brain,
    title: "AI Coaching Insights",
    description: "Recommend skill improvements automatically.",
    features: [
      "Automated performance analysis after every call",
      "Personalized improvement recommendations",
      "Skill-specific coaching suggestions",
      "Strength and weakness identification",
      "Progress tracking over time",
      "Automated coaching scorecards"
    ],
    outcome: "Scale coaching across your entire team"
  },
  {
    icon: Target,
    title: "Skill Gap Detection",
    description: "Identify weaknesses in discovery, objection handling, and negotiation.",
    features: [
      "15+ sales competency assessments",
      "Discovery skill evaluation",
      "Objection handling effectiveness",
      "Closing technique analysis",
      "Product knowledge scoring",
      "Soft skills measurement"
    ],
    outcome: "Pinpoint exact areas for improvement"
  },
  {
    icon: Award,
    title: "Coaching Playbooks",
    description: "Create training workflows based on real customer interactions.",
    features: [
      "Best practice library from top performers",
      "Winning call snippet creation",
      "Talk track extraction and templates",
      "Objection response guides",
      "Industry-specific playbooks",
      "Certification tracking"
    ],
    outcome: "Replicate success systematically"
  },
  {
    icon: BarChart3,
    title: "Performance Dashboards",
    description: "Track rep improvement trends.",
    features: [
      "Individual performance scorecards",
      "Team benchmarking and leaderboards",
      "Skill progression tracking",
      "Win rate correlation analysis",
      "Coaching effectiveness metrics",
      "Manager coaching activity tracking"
    ],
    outcome: "Measure coaching impact with data"
  }
];

const outcomes = [
  {
    icon: Clock,
    metric: "40%",
    label: "Faster onboarding",
    description: "New reps ramp to quota in weeks, not months, with AI-guided training"
  },
  {
    icon: Award,
    metric: "89%",
    label: "Standardized selling excellence",
    description: "Ensure consistent execution of best practices across your team"
  },
  {
    icon: TrendingUp,
    metric: "35%",
    label: "Increased win rates",
    description: "Teams coached with AI close significantly more deals"
  }
];

const useCases = [
  {
    title: "New Hire Ramp Acceleration",
    challenge: "New SDRs take 6+ months to hit quota",
    solution: "AI coaches new hires after every call, comparing performance to top reps",
    result: "Ramp time reduced to 2.5 months"
  },
  {
    title: "Objection Handling Mastery",
    challenge: "Reps struggle with pricing and competitor objections",
    solution: "Create playbook from 500+ successful objection handling moments",
    result: "52% improvement in objection conversion"
  },
  {
    title: "Scaling Top Performer Success",
    challenge: "Top 20% of reps outperform others 3x but can't scale their approach",
    solution: "Extract talk tracks and techniques from winners, distribute to team",
    result: "Bottom 50% improved performance by 42%"
  }
];

const coachingMetrics = [
  { label: "Coaching Moments Captured", value: "3.2x more than manual coaching" },
  { label: "Manager Time Saved", value: "15 hours/week per manager" },
  { label: "Rep Skill Improvement", value: "Measurable gains in 8 weeks" },
  { label: "Turnover Reduction", value: "62% lower first-year churn" }
];

export function CoachPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold mb-6"
            >
              Tasknova Coach
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Turn Conversation Data Into Coaching That Scales
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-8"
            >
              AI-powered coaching platform that transforms every customer conversation into personalized training for your revenue team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/pricing">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                  Start Free Trial
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/book-demo">
                <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-lg text-slate-700 hover:border-green-500 transition-colors">
                  Schedule Demo
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
              <p className="text-xl text-slate-600">
                Everything you need to build a world-class coaching program
              </p>
            </div>

            <div className="space-y-12">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="grid lg:grid-cols-[300px,1fr] gap-8">
                      <div>
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-slate-600 mb-4">{capability.description}</p>
                        <div className="inline-block px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold text-sm">
                          {capability.outcome}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                          Key Features:
                        </h4>
                        <ul className="space-y-3">
                          {capability.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Outcomes</h2>
              <p className="text-xl text-slate-300">
                What teams achieve with AI-powered coaching
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => {
                const Icon = outcome.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-xl bg-slate-800 border border-slate-700 text-center"
                  >
                    <div className="inline-flex p-4 rounded-xl bg-green-500/20 mb-4">
                      <Icon className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-5xl font-bold text-green-400 mb-2">{outcome.metric}</div>
                    <div className="text-xl font-semibold mb-3">{outcome.label}</div>
                    <p className="text-slate-400">{outcome.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Real-World Use Cases</h2>
              <p className="text-xl text-slate-600">
                How teams use Coach to accelerate performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white"
                >
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold opacity-90 mb-1">Challenge:</div>
                      <p className="text-white/90">{useCase.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold opacity-90 mb-1">Solution:</div>
                      <p className="text-white/90">{useCase.solution}</p>
                    </div>
                    <div className="pt-4 border-t border-white/20">
                      <div className="text-sm font-semibold mb-1">Result:</div>
                      <p className="text-xl font-bold">{useCase.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Metrics */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Coaching Impact Metrics</h2>
              <p className="text-xl text-slate-600">
                The measurable difference AI coaching makes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {coachingMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border border-slate-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-slate-600 mb-2">{metric.label}</div>
                      <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                    </div>
                    <Zap className="w-8 h-8 text-green-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Building a Coaching Culture Today
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              14-day free trial. No credit card required. Full access to all features.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pricing">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                  Start Free Trial
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/book-demo">
                <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-lg text-slate-700 hover:border-green-500 transition-colors">
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

export default CoachPage;