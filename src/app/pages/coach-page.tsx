import { motion } from "motion/react";
import { 
  Users, Brain, Target, TrendingUp, CheckCircle2,
  ArrowRight, Award, BarChart3, Zap, Clock
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import coachingHero from "../assets/Tasknova_coaching.jpeg";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Brain,
    title: "AI Coaching Insights",
    sectionTitle: "Automate Coaching Without Losing Personalization",
    description: "Tasknova analyzes every customer interaction and automatically generates skill level coaching recommendations based on real performance patterns.",
    features: [
      "Automated performance analysis after every conversation",
      "Personalized rep improvement recommendations",
      "Skill specific coaching suggestions",
      "Strength and weakness identification",
      "Performance improvement tracking over time",
      "Automated coaching scorecards"
    ],
    outcome: "Scale coaching across your entire team"
  },
  {
    icon: Target,
    title: "Skill Gap Detection",
    sectionTitle: "Identify Exactly Where Reps Need Improvement",
    description: "Evaluate rep performance across critical sales competencies and highlight skill gaps that impact deal outcomes.",
    features: [
      "Assessment across 15+ sales competency areas",
      "Discovery and qualification skill evaluation",
      "Objection handling effectiveness analysis",
      "Closing and negotiation performance tracking",
      "Product knowledge and positioning scoring",
      "Communication and soft skill evaluation"
    ],
    outcome: "Pinpoint exact areas for improvement"
  },
  {
    icon: Award,
    title: "Coaching Playbooks",
    sectionTitle: "Turn Winning Behaviors Into Repeatable Playbooks",
    description: "Tasknova extracts best practices directly from top performer conversations and converts them into structured coaching workflows and training content.",
    features: [
      "Best practice libraries built from real interactions",
      "Winning call snippet creation",
      "Talk track extraction and reusable templates",
      "Objection response guides",
      "Industry specific coaching playbooks",
      "Certification and training milestone tracking"
    ],
    outcome: "Replicate success systematically"
  },
  {
    icon: BarChart3,
    title: "Performance Dashboards",
    sectionTitle: "Measure Coaching Impact Using Real Performance Data",
    description: "Track rep improvement trends, coaching effectiveness, and performance correlation with revenue outcomes across individuals and teams.",
    features: [
      "Individual rep performance scorecards",
      "Team benchmarking and leaderboards",
      "Skill progression tracking",
      "Win rate and performance correlation analysis",
      "Coaching effectiveness measurement",
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
    description: "New hires ramp significantly faster with real conversation based coaching"
  },
  {
    icon: Award,
    metric: "89%",
    label: "Standardized execution",
    description: "Ensure consistent selling behaviors across teams and geographies"
  },
  {
    icon: TrendingUp,
    metric: "35%",
    label: "Higher win rates",
    description: "Reps coached using real interaction intelligence close more deals"
  }
];

const useCases = [
  {
    title: "New Hire Ramp Acceleration",
    challenge: "New SDRs and AEs take months to reach quota due to inconsistent training and limited real world practice.",
    solution: "Tasknova delivers AI coaching after every call and compares performance against top performers.",
    result: "Ramp time reduced to approximately two and a half months."
  },
  {
    title: "Objection Handling Mastery",
    challenge: "Reps struggle with pricing, competitor positioning, and objection response consistency.",
    solution: "Tasknova builds coaching playbooks from hundreds of successful objection handling conversations.",
    result: "52% improvement in objection conversion effectiveness."
  },
  {
    title: "Scaling Top Performer Success",
    challenge: "Top performing reps significantly outperform others but their techniques are difficult to replicate across teams.",
    solution: "Tasknova extracts talk tracks, discovery patterns, and communication techniques from top performers and distributes them across the team.",
    result: "Bottom performing reps improved performance by over 40%."
  }
];

const coachingMetrics = [
  { 
    metric: "3.2x",
    label: "More coaching moments captured compared to manual coaching"
  },
  { 
    metric: "15 hours",
    label: "Manager time saved weekly through automated coaching insights"
  },
  { 
    metric: "8 weeks",
    label: "Average time to measurable skill improvement"
  },
  { 
    metric: "62%",
    label: "Lower first year rep turnover"
  }
];

export function CoachPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                Turn Customer Conversations Into Coaching That Scales Across Your Team
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-600 mb-8"
              >
                Tasknova Coach transforms real customer interactions into company specific coaching intelligence that helps revenue teams improve skills faster, replicate winning behaviors, and build consistent execution across the organization.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/book-demo">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={coachingHero}
                  alt="Tasknova Coach dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Value Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">
                Coaching Intelligence Built From Real Deal Execution
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Tasknova Coach does not rely on generic training content. It uses real customer conversations, rep performance data, and company specific selling standards to deliver personalized coaching that drives measurable improvement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Everything You Need to Build a Scalable, Data Driven Coaching Program</h2>
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
                        <h3 className="text-2xl font-bold mb-3">{capability.sectionTitle}</h3>
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

      {/* Differentiation Block */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">
                Beyond Traditional Sales Training Platforms
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Most training platforms deliver static learning content. Tasknova Coach delivers dynamic coaching intelligence built from real conversations and execution data.
              </p>
              <div className="text-left bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                <p className="text-lg text-white mb-4 font-semibold">
                  Powered by <span className="text-green-300">Tasknova Company Brain</span>, Coach understands:
                </p>
                <ul className="space-y-3 text-green-50">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Your sales methodology and playbooks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Your product positioning and messaging standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Your ICP and buyer journey expectations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Your objection handling frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Your performance benchmarks for top performers</span>
                  </li>
                </ul>
                <p className="text-lg text-green-100 mt-6 italic">
                  This ensures coaching recommendations match how your team actually sells.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPANY BRAIN & PROJECT BRAIN INSERT START */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Powered by Tasknova Intelligence Architecture</h3>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Company Brain</strong> customizes scoring, coaching, and engagement intelligence based on your company strategy, sales methodology, and customer journey expectations.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Project Brain</strong> continuously learns from real customer interactions and execution patterns to improve insight accuracy over time.
            </p>
          </div>
        </div>
      </section>
      {/* COMPANY BRAIN & PROJECT BRAIN INSERT END */}

      {/* Outcomes */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Teams Achieve With Coaching Intelligence</h2>
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
              <h2 className="text-4xl font-bold mb-4">Real World Use Cases</h2>
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
              <h2 className="text-4xl font-bold mb-4">Measurable Coaching Results That Drive Revenue Performance</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {coachingMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-white border border-slate-200 text-center"
                >
                  <div className="text-5xl font-bold text-green-600 mb-3">{item.metric}</div>
                  <div className="text-lg text-slate-700">{item.label}</div>
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
              Start Building a High Performance Coaching Culture
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Transform every customer conversation into a coaching opportunity and scale best practices across your revenue team.
              14 day free trial. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-demo">
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