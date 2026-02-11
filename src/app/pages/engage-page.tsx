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
    sectionTitle: "Understand Customer Intent Inside Every Email",
    description: "Analyze sentiment, urgency, and buying signals inside customer emails so reps know exactly when interest is rising or deals are at risk.",
    features: [
      "Real time email sentiment analysis",
      "Urgency and intent detection",
      "Buying signal identification",
      "Optimal send time recommendations",
      "Template performance tracking",
      "AI assisted response suggestions"
    ],
    outcome: "Know exactly when customers are engaged"
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Interaction Timeline",
    sectionTitle: "Never Lose Context Across Calls and Emails",
    description: "Combine calls, emails, and meetings into a single chronological customer timeline that preserves context and reveals engagement patterns across the entire journey.",
    features: [
      "Unified activity feed across channels",
      "Complete interaction history per account",
      "Multi touch journey mapping",
      "Engagement pattern recognition",
      "Channel preference detection",
      "Automated CRM activity logging"
    ],
    outcome: "Never lose context across touchpoints"
  },
  {
    icon: Target,
    title: "Follow Up Intelligence",
    sectionTitle: "Always Know the Next Best Action",
    description: "Tasknova Engage continuously monitors interaction patterns and recommends follow ups based on timing, urgency, and channel effectiveness.",
    features: [
      "AI powered next step recommendations",
      "Optimal follow up timing insights",
      "Channel preference guidance",
      "Automated task creation",
      "Follow up sequence triggers",
      "Priority deal alerts"
    ],
    outcome: "Never miss a critical follow-up"
  },
  {
    icon: BarChart3,
    title: "Engagement Scoring",
    sectionTitle: "Prioritize Deals Most Likely to Close",
    description: "Score accounts, contacts, and deals based on real engagement behavior so reps focus on opportunities with the highest probability of success.",
    features: [
      "Account level engagement scoring",
      "Contact level interaction tracking",
      "Response rate prediction",
      "Deal velocity indicators",
      "Stakeholder involvement signals",
      "Pipeline health scoring"
    ],
    outcome: "Focus on deals most likely to close"
  }
];

const outcomes = [
  {
    icon: Clock,
    metric: "10x",
    label: "Faster follow ups",
    description: "Respond to customer signals in minutes instead of hours"
  },
  {
    icon: TrendingUp,
    metric: "41%",
    label: "Higher conversion rates",
    description: "Engage at the perfect moment with the right message"
  },
  {
    icon: Target,
    metric: "67%",
    label: "Better deal prioritization",
    description: "Focus time on deals with the highest win probability"
  }
];

const useCases = [
  {
    title: "SDR Outbound Sequences",
    challenge: "Low response rates across multi channel outreach.",
    solution: "Track engagement across calls, email, and social channels to optimize timing and messaging.",
    result: "58% increase in meeting booking rate."
  },
  {
    title: "AE Deal Management",
    challenge: "Critical buying signals buried inside long email threads.",
    solution: "AI surfaces urgency signals, competitive mentions, and engagement shifts automatically.",
    result: "26% shorter sales cycles."
  },
  {
    title: "Customer Success Expansion",
    challenge: "Teams struggle to identify which accounts are ready for expansion.",
    solution: "Engagement scoring highlights expansion ready accounts based on interaction patterns.",
    result: "48% increase in expansion revenue."
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
  { name: "Microsoft Teams", category: "Collaboration" }
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
              Know What Customers Say and Signal Across Every Channel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-8"
            >
              Tasknova Engage delivers unified interaction intelligence that tracks, analyzes, and optimizes customer engagement across calls, emails, and meetings, so revenue teams act at the right moment, on the right signal, through the right channel.
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
                Engagement Intelligence That Goes Beyond Sequences and Automation
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Tasknova Engage does not just automate outreach. It understands customer intent, urgency, and engagement patterns using company specific intelligence models so teams engage with precision, not guesswork.
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
              <h2 className="text-4xl font-bold mb-4">Complete Visibility and Intelligence Across Every Customer Interaction</h2>
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
                        <h3 className="text-2xl font-bold mb-3">{capability.sectionTitle}</h3>
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

      {/* Differentiation Block */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">
                Not Another Sales Engagement Tool
              </h2>
              <p className="text-xl text-purple-100 mb-6 leading-relaxed">
                Sales engagement platforms focus on sending more messages. Tasknova Engage focuses on understanding when engagement actually matters.
              </p>
              <div className="inline-block px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-lg text-white leading-relaxed">
                  Powered by <span className="font-bold text-purple-300">Tasknova Company Brain</span>, Engage connects interaction data to revenue outcomes, rep performance, and deal execution context across the platform.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Teams Achieve With Engagement Intelligence</h2>
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
              <h2 className="text-4xl font-bold mb-4">Works Seamlessly With Your Existing Tools</h2>
              <p className="text-xl text-slate-600">
                Tasknova Engage integrates with your CRM, email, and collaboration platforms to deliver intelligence without disrupting workflows.
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
              Start Tracking and Acting on Every Customer Signal
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Gain complete visibility into customer engagement and act with confidence using AI powered interaction intelligence.
              14 day free trial. No credit card required.
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