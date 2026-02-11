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
    sectionTitle: "Capture Every Conversation With Complete Accuracy",
    description: "Automatically convert customer conversations into searchable, structured intelligence that eliminates manual note taking and preserves every deal signal.",
    features: [
      "98% transcription accuracy across 40+ languages",
      "Real time transcription during live calls",
      "Speaker identification and labeling",
      "Custom vocabulary trained on industry and product terms",
      "Searchable conversation intelligence library"
    ]
  },
  {
    icon: Brain,
    title: "Sentiment & Buyer Intelligence",
    sectionTitle: "Understand Customer Intent, Emotion, and Engagement",
    description: "Detect how customers feel, what they prioritize, and when deals gain or lose momentum using AI powered emotional and behavioral analysis.",
    features: [
      "Real time sentiment and emotion detection",
      "Engagement scoring across conversations",
      "Buying signal identification",
      "Objection pattern tracking",
      "Competitive mention detection"
    ]
  },
  {
    icon: BarChart3,
    title: "Conversation Performance Scoring",
    sectionTitle: "Measure Rep Execution Using Data, Not Assumptions",
    description: "Evaluate rep conversations against your talk tracks, discovery frameworks, and objection handling standards using Tasknova Company Brain scoring models.",
    features: [
      "Talk to listen ratio intelligence",
      "Discovery question depth tracking",
      "Dialogue quality analysis",
      "Sales methodology adherence scoring",
      "Benchmarking against top performers"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Deal Risk Detection",
    sectionTitle: "Identify Revenue Risks Before Deals Slip",
    description: "Tasknova continuously monitors conversations for execution gaps, missing signals, and pipeline risk indicators so managers can intervene early.",
    features: [
      "Missing stakeholder detection",
      "Engagement drop monitoring",
      "Competitor threat alerts",
      "Budget hesitation signals",
      "Timeline and urgency tracking"
    ]
  }
];

const outcomes = [
  {
    icon: Clock,
    metric: "80%",
    label: "Reduction in call review time",
    description: "Managers review conversations in minutes instead of hours"
  },
  {
    icon: TrendingDown,
    metric: "94%",
    label: "Greater visibility into customer objections",
    description: "Automatically categorize and track objections across deals"
  },
  {
    icon: Zap,
    metric: "40%",
    label: "More effective sales coaching",
    description: "Managers coach using real conversation evidence instead of generic feedback"
  }
];

const useCases = [
  {
    title: "Sales Team Performance",
    challenge: "Sales managers cannot review enough calls to coach consistently.",
    solution: "Tasknova analyzes every conversation and surfaces coaching insights automatically.",
    result: "35% improvement in team quota attainment."
  },
  {
    title: "Win and Loss Intelligence",
    challenge: "Teams struggle to understand why deals succeed or fail.",
    solution: "Tasknova compares conversation patterns across winning and losing deals to identify repeatable success behaviors.",
    result: "32% increase in win rates after insight driven coaching adoption."
  },
  {
    title: "Onboarding Acceleration",
    challenge: "New reps take months to learn winning sales behaviors.",
    solution: "Tasknova provides a searchable library of top performer calls and delivers real time coaching feedback.",
    result: "Ramp time reduced from six months to approximately three and a half months."
  }
];

const faqs = [
  {
    question: "How Accurate Is Tasknova Transcription?",
    answer: "Tasknova delivers up to 98% transcription accuracy across multiple languages and accents using adaptive speech models trained on sales and customer interaction datasets."
  },
  {
    question: "Does Insight Work With All Meeting Platforms?",
    answer: "Tasknova integrates with major video conferencing and dialer platforms and can ingest recordings from supported communication tools."
  },
  {
    question: "Can Teams Control What Gets Recorded?",
    answer: "Yes. Organizations can configure recording policies, participant notifications, and data capture rules to meet compliance and privacy requirements."
  },
  {
    question: "How Does Deal Risk Detection Work?",
    answer: "Tasknova analyzes engagement trends, stakeholder involvement, objection patterns, and conversation gaps to detect pipeline risks automatically."
  },
  {
    question: "Where Is Conversation Data Stored?",
    answer: "Data is securely stored using enterprise grade encryption and regional hosting options with strict access control policies."
  },
  {
    question: "How Long Does Implementation Take?",
    answer: "Most teams are operational within three to five business days with guided onboarding support."
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
                  Tasknova Insight transforms customer calls, demos, and meetings into company specific intelligence that reveals buying signals, coaching opportunities, and deal risks automatically.
                  Know exactly what happens inside every conversation without listening to hours of recordings.
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

      {/* Core Value Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Conversation Intelligence Built Around How Your Team Actually Sells
            </h2>
            <p className="text-xl text-slate-600">
              Tasknova Insight does not just transcribe calls. It analyzes conversations using your company playbooks, ICP definitions, and sales standards to deliver insights that improve deal execution and rep performance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Everything You Need to Turn Conversations Into Competitive Advantage</h2>
              <p className="text-xl text-slate-600">
                Comprehensive conversation intelligence capabilities powered by AI
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
                    className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="grid lg:grid-cols-[300px,1fr] gap-8">
                      <div>
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{capability.sectionTitle}</h3>
                        <p className="text-slate-600 mb-4">{capability.description}</p>
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

      {/* Differentiation Block */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Beyond Generic Conversation Analytics
              </h2>
              <p className="text-xl text-cyan-50 mb-8">
                Traditional tools analyze conversations using generic scoring. Tasknova Insight analyzes conversations using your company specific intelligence model.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="mb-6">
                <p className="text-lg text-cyan-50 mb-4">
                  Powered by <span className="font-bold text-white">Tasknova Company Brain</span>, Insight understands:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Your product positioning</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Your ICP and buyer personas</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Your pricing and negotiation standards</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Your discovery frameworks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Your objection handling playbooks</span>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-lg text-center text-white font-semibold">
                  This allows Tasknova to deliver coaching and deal intelligence that actually matches how your team sells.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Revenue Teams Achieve With Tasknova Insight</h2>
              <p className="text-xl text-slate-300">
                Real results from teams using conversation intelligence
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
              <h2 className="text-4xl font-bold mb-4">Real World Use Cases</h2>
              <p className="text-xl text-slate-600">
                How revenue teams use Tasknova Insight to improve execution
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
              Start Understanding Every Customer Conversation
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Gain full visibility into customer signals, rep performance, and deal health without manual call reviews.
              14 day free trial with full feature access.
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