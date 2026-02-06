import { motion } from "motion/react";
import { 
  Zap, Mail, MessageSquare, Calendar, CheckCircle2,
  ArrowRight, BarChart3, Target, TrendingUp, Clock, HelpCircle
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Mail,
    title: "Email Intelligence",
    description: "Analyze sentiment, urgency, and buying signals.",
    features: [
      "Real-time email sentiment analysis",
      "Urgency and intent detection",
      "Buying signal identification",
      "Optimal send time recommendations",
      "Template performance tracking",
      "Automated response suggestions"
    ],
    outcome: "Know exactly when customers are engaged"
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Interaction Timeline",
    description: "Combine calls and emails into one unified customer record.",
    features: [
      "Unified activity feed across all channels",
      "Chronological interaction history",
      "Multi-touchpoint journey mapping",
      "Engagement pattern recognition",
      "Channel preference detection",
      "Automated CRM logging"
    ],
    outcome: "Never lose context across touchpoints"
  },
  {
    icon: Target,
    title: "Follow-up Recommendations",
    description: "Suggest next best actions automatically.",
    features: [
      "AI-powered next step suggestions",
      "Optimal timing recommendations",
      "Channel preference guidance",
      "Automated task creation",
      "Follow-up sequence triggers",
      "Priority deal alerts"
    ],
    outcome: "Never miss a critical follow-up"
  },
  {
    icon: BarChart3,
    title: "Engagement Scoring",
    description: "Prioritize high-potential deals and leads.",
    features: [
      "Account engagement scoring",
      "Contact-level engagement tracking",
      "Response rate prediction",
      "Deal velocity indicators",
      "Stakeholder involvement metrics",
      "Pipeline health scoring"
    ],
    outcome: "Focus on deals most likely to close"
  }
];

const outcomes = [
  {
    icon: Clock,
    metric: "10x",
    label: "Faster follow-ups",
    description: "Respond to customer signals within minutes, not hours or days"
  },
  {
    icon: TrendingUp,
    metric: "41%",
    label: "Increased conversion rate",
    description: "Convert more leads by engaging at the perfect moment"
  },
  {
    icon: Target,
    metric: "67%",
    label: "Better deal prioritization",
    description: "Reps focus their time on deals with highest win probability"
  }
];

const useCases = [
  {
    title: "SDR Outbound Sequences",
    challenge: "Low response rates and inefficient multi-channel outreach",
    solution: "Track engagement across email, calls, and LinkedIn to optimize sequence timing",
    result: "58% increase in meeting booking rate"
  },
  {
    title: "AE Deal Management",
    challenge: "Missing buying signals buried in email threads",
    solution: "AI surfaces urgency signals and competitor mentions automatically",
    result: "26% shorter sales cycles"
  },
  {
    title: "CS Account Expansion",
    challenge: "Don't know which accounts are ready for upsell",
    solution: "Engagement scoring identifies expansion-ready accounts based on interaction patterns",
    result: "48% increase in expansion revenue"
  }
];

const integrations = [
  { name: "Gmail", category: "Email" },
  { name: "Outlook", category: "Email" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Outreach", category: "Sales Engagement" },
  { name: "Salesloft", category: "Sales Engagement" },
  { name: "Slack", category: "Collaboration" },
  { name: "Teams", category: "Collaboration" }
];

export function EngagePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold mb-6"
            >
              Tasknova Engage
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Know What Customers Say Across Every Channel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-8"
            >
              Unified interaction intelligence that tracks, analyzes, and optimizes every customer touchpoint across calls, emails, and meetings.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/pricing">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                  Start Free Trial
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/book-demo">
                <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-lg text-slate-700 hover:border-purple-500 transition-colors">
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
                Complete visibility and intelligence across every customer interaction
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
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-slate-600 mb-4">{capability.description}</p>
                        <div className="inline-block px-4 py-2 rounded-lg bg-purple-100 text-purple-700 font-semibold text-sm">
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
                              <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
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
                What teams achieve with omnichannel engagement intelligence
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
                    <div className="inline-flex p-4 rounded-xl bg-purple-500/20 mb-4">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-5xl font-bold text-purple-400 mb-2">{outcome.metric}</div>
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
                How teams use Engage to improve customer interactions
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
                  className="p-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white"
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

      {/* Integrations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Works With Your Existing Tools</h2>
              <p className="text-xl text-slate-600">
                Seamlessly integrates with your email, CRM, and sales engagement platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl bg-white border border-slate-200 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-3 flex items-center justify-center text-white font-bold">
                    {integration.name.slice(0, 2)}
                  </div>
                  <div className="font-semibold">{integration.name}</div>
                  <div className="text-sm text-slate-500">{integration.category}</div>
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
              Start Tracking Every Customer Interaction Today
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              14-day free trial. No credit card required. Full access to all features.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pricing">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                  Start Free Trial
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/book-demo">
                <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-lg text-slate-700 hover:border-purple-500 transition-colors">
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

export default EngagePage;