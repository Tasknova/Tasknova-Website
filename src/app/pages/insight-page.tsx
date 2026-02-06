import { motion } from "motion/react";
import { 
  Brain, Video, FileText, TrendingDown, CheckCircle2,
  ArrowRight, BarChart3, AlertTriangle, Zap, Clock, HelpCircle, ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Video,
    title: "AI Call Transcription",
    description: "Automatically convert conversations into searchable text.",
    features: [
      "98% transcription accuracy across 40+ languages",
      "Real-time transcription during live calls",
      "Speaker identification and labeling",
      "Custom vocabulary for industry terms",
      "Searchable conversation library"
    ],
    outcome: "Eliminate manual note-taking"
  },
  {
    icon: Brain,
    title: "Sentiment Analysis",
    description: "Detect customer tone, intent, and engagement patterns.",
    features: [
      "Real-time emotion detection (positive, neutral, negative)",
      "Customer engagement scoring",
      "Buying signal identification",
      "Objection pattern recognition",
      "Competitive mention tracking"
    ],
    outcome: "Understand customer emotions automatically"
  },
  {
    icon: BarChart3,
    title: "Conversation Scoring",
    description: "Evaluate rep performance based on talk tracks and objection handling.",
    features: [
      "Talk-to-listen ratio analysis",
      "Question frequency tracking",
      "Monologue vs. dialogue balance",
      "Best practice adherence scoring",
      "Performance benchmarking against top performers"
    ],
    outcome: "Data-driven coaching insights"
  },
  {
    icon: AlertTriangle,
    title: "Deal Risk Detection",
    description: "Identify warning signals early in the sales cycle.",
    features: [
      "Missing stakeholder alerts",
      "Engagement drop detection",
      "Competitor threat identification",
      "Budget concern flagging",
      "Timeline risk monitoring"
    ],
    outcome: "Proactive deal management"
  }
];

const outcomes = [
  {
    icon: Clock,
    metric: "80%",
    label: "Reduce call review time",
    description: "Managers spend minutes, not hours, reviewing team calls"
  },
  {
    icon: TrendingDown,
    metric: "94%",
    label: "Improve visibility into customer objections",
    description: "Automatically categorize and track every objection across your pipeline"
  },
  {
    icon: Zap,
    metric: "40%",
    label: "Enable data-driven sales coaching",
    description: "Coach reps with specific conversation examples, not generic advice"
  }
];

const useCases = [
  {
    title: "Sales Team Performance",
    challenge: "Sales managers can't listen to every call to coach effectively",
    solution: "AI analyzes every conversation and surfaces coaching opportunities automatically",
    result: "35% improvement in team quota attainment"
  },
  {
    title: "Win/Loss Analysis",
    challenge: "Don't understand why deals are won or lost",
    solution: "Compare conversation patterns between wins and losses to identify success factors",
    result: "32% increase in win rate after implementing insights"
  },
  {
    title: "Onboarding Acceleration",
    challenge: "New reps take 6+ months to ramp",
    solution: "New hires learn from library of top performer calls and get real-time feedback",
    result: "Ramp time reduced to 3.5 months"
  }
];

const faqs = [
  {
    question: "How accurate is the AI transcription?",
    answer: "Our transcription accuracy is 98% across 40+ languages. We use advanced speech-to-text models with custom vocabulary support for industry-specific terms, ensuring high accuracy even with technical jargon."
  },
  {
    question: "Does Insight work with all video conferencing platforms?",
    answer: "Yes! Insight integrates with Zoom, Google Meet, Microsoft Teams, Webex, and GoToMeeting. Our bot automatically joins meetings based on your calendar, or you can use native integrations like Zoom Cloud Recording."
  },
  {
    question: "Can I control what gets recorded?",
    answer: "Absolutely. You have full control with selective recording, auto-record rules based on calendar events, and privacy controls. Participants are always notified when recording is enabled, ensuring compliance."
  },
  {
    question: "How does deal risk detection work?",
    answer: "Our AI analyzes conversation patterns including stakeholder engagement, sentiment shifts, competitor mentions, timeline discussions, and buying signals. It compares these patterns against thousands of won and lost deals to calculate risk scores."
  },
  {
    question: "Where is conversation data stored?",
    answer: "All data is encrypted at rest and in transit, stored in SOC 2 compliant data centers. You can choose data residency (US, EU, UK) and have full ownership with export/delete capabilities anytime."
  },
  {
    question: "How long does setup take?",
    answer: "Most teams are recording their first calls within 30 minutes. Calendar integration takes 5 minutes, CRM sync takes 10-15 minutes, and our onboarding wizard guides you through the entire process."
  }
];

export function InsightPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold mb-6"
                >
                  Tasknova Insight
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold mb-6"
                >
                  Understand Every Customer Conversation Without Manual Reviews
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-slate-600 mb-8"
                >
                  AI-powered conversation intelligence that turns every call into actionable insights for your revenue team.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Link to="/pricing">
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                      Start Free Trial
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </Link>
                  <Link to="/book-demo">
                    <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-lg text-slate-700 hover:border-cyan-500 transition-colors">
                      Schedule Demo
                    </button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjB2aWRlbyUyMGNhbGx8ZW58MXx8fHwxNzcwMzExNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Video conference call"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent" />
                </div>
              </motion.div>
            </div>
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
                Everything you need to transform conversations into competitive advantage
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
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-slate-600 mb-4">{capability.description}</p>
                        <div className="inline-block px-4 py-2 rounded-lg bg-cyan-100 text-cyan-700 font-semibold text-sm">
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
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Outcomes</h2>
              <p className="text-xl text-slate-300">
                What revenue teams achieve with Tasknova Insight
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
                    <div className="inline-flex p-4 rounded-xl bg-cyan-500/20 mb-4">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-5xl font-bold text-cyan-400 mb-2">{outcome.metric}</div>
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
                How teams use Insight to drive revenue performance
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
                  className="p-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white"
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

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">
                Everything you need to know about Tasknova Insight
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <HelpCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                      <h3 className="font-bold text-lg">{faq.question}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === index ? "auto" : 0,
                      opacity: expandedFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-14">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </motion.div>
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
              Start Understanding Your Conversations Today
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              14-day free trial. No credit card required. Full access to all features.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pricing">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                  Start Free Trial
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/book-demo">
                <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-lg text-slate-700 hover:border-cyan-500 transition-colors">
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

export default InsightPage;