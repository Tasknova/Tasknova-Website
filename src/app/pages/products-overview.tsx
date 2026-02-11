import { motion } from "motion/react";
import { 
  Brain, Zap, Users, ArrowRight, CheckCircle2,
  BarChart3, TrendingUp, Target, Shield, HelpCircle, ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

const platformFlow = [
  {
    name: "Tasknova Insight",
    icon: Brain,
    gradient: "from-cyan-500 to-blue-600",
    description: "AI Conversation Intelligence Built Around Your Business",
    longDescription: "Tasknova Insight captures and analyzes customer conversations and maps them against your company's playbooks, ICPs, and sales standards.",
    capabilities: [
      "Automatic call recording and transcription",
      "Sentiment and emotion analysis",
      "Conversation pattern and buying signal detection",
      "Deal risk identification and forecasting signals"
    ]
  },
  {
    name: "Tasknova Engage",
    icon: Zap,
    gradient: "from-purple-500 to-pink-600",
    description: "Customer Interaction Intelligence Across Every Channel",
    longDescription: "Tasknova Engage tracks, analyzes, and optimizes customer engagement across calls, emails, and communication channels to improve follow ups and deal momentum.",
    capabilities: [
      "Omnichannel activity tracking",
      "Email sentiment and engagement intelligence",
      "Buyer intent and engagement scoring",
      "Automated follow up recommendations"
    ]
  },
  {
    name: "Tasknova Coach",
    icon: Users,
    gradient: "from-green-500 to-emerald-600",
    description: "Performance Intelligence and AI Coaching Platform",
    longDescription: "Tasknova Coach identifies performance gaps, extracts winning behaviors from top performers, and generates personalized coaching plans for revenue teams.",
    capabilities: [
      "Automated coaching insights",
      "Skill gap detection and improvement tracking",
      "Rep and team performance benchmarking",
      "Onboarding acceleration and AI practice simulations"
    ]
  }
];

const platformBenefits = [
  {
    icon: Brain,
    title: "One Unified Intelligence Engine",
    description: "All customer interaction data flows through a single AI engine, creating consistent insights across calls, messaging, and coaching workflows."
  },
  {
    icon: Target,
    title: "Eliminates Tool Fragmentation",
    description: "Replace multiple disconnected conversation, engagement, and coaching tools with one integrated platform that reduces operational complexity."
  },
  {
    icon: TrendingUp,
    title: "Improves Rep Performance Automatically",
    description: "Tasknova continuously identifies coaching opportunities and delivers prescriptive improvement recommendations based on real customer interactions."
  },
  {
    icon: Users,
    title: "Scales Learning Across Teams",
    description: "Winning behaviors from top performers are automatically extracted, standardized, and scaled across the entire revenue organization."
  }
];

const outcomes = [
  { metric: "40%", label: "Faster Rep Ramp Time" },
  { metric: "32%", label: "Higher Win Rates" },
  { metric: "80%", label: "Less Deal and Performance Review Time" },
  { metric: "$2.4M", label: "Average Annual Revenue Impact Per Team" }
];

const testimonials = [
  {
    quote: "Before Tasknova, we used separate tools for conversations, email engagement, and coaching. Tasknova unified everything and revealed execution insights we never had visibility into.",
    author: "Sarah Chen",
    role: "Chief Revenue Officer",
    company: "CloudMetrics",
    image: "saas executive"
  },
  {
    quote: "Our new reps reach quota significantly faster because AI coaching clearly shows them what top performers do differently and how to replicate those behaviors.",
    author: "David Park",
    role: "VP of Sales",
    company: "TechForward",
    image: "sales leader"
  }
];

const faqs = [
  {
    question: "Can I buy individual products or do I need the full platform?",
    answer: "Tasknova is designed as a modular platform. Teams can start with Insight, Engage, or Coach independently and expand into the full intelligence ecosystem when ready."
  },
  {
    question: "How long does it take to implement Tasknova?",
    answer: "Most teams are operational within 3 to 5 business days. Enterprise deployments with custom workflows typically complete within 1 to 2 weeks."
  },
  {
    question: "Does Tasknova integrate with our existing tech stack?",
    answer: "Tasknova integrates with major CRMs, meeting platforms, dialers, messaging tools, and collaboration software to create a unified intelligence layer without replacing existing systems."
  },
  {
    question: "What makes Tasknova different from conversation intelligence tools?",
    answer: "Traditional tools analyze conversations. Tasknova connects conversation data with revenue outcomes, engagement signals, coaching intelligence, and automation workflows using company specific intelligence models."
  },
  {
    question: "How does AI coaching work?",
    answer: "Tasknova analyzes rep interactions, compares performance against top performers and company standards, identifies skill gaps, and generates prescriptive improvement plans supported by real conversation examples."
  },
  {
    question: "Is our conversation data secure and private?",
    answer: "Tasknova follows enterprise grade security standards including encryption, role based access controls, and strict data ownership protections."
  },
  {
    question: "What ROI can teams expect?",
    answer: "Customers typically see improvements in win rates, onboarding speed, forecasting accuracy, and revenue expansion within the first six months."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes. Teams can start with a 14 day free trial with full product access and guided onboarding support."
  }
];

export function ProductsOverview() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold mb-6"
                >
                  Complete AI Revenue Intelligence Platform
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold mb-6"
                >
                  The Complete AI Revenue Intelligence Platform
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-slate-600 mb-8"
                >
                  Tasknova transforms customer conversations into company specific intelligence, engagement insights, and automated coaching that helps revenue teams improve execution and scale performance predictably.
                  Start with one product or deploy the full platform as your revenue operations mature.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/book-demo">
                    <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg">
                      Start Free Trial
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </Link>
                  <Link to="/book-demo">
                    <button className="px-8 py-4 border-2 border-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
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
                    src="https://images.unsplash.com/photo-1760611656007-f767a8082758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwMjg1OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Team collaboration"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Three Execution Products Powered by Four Intelligence Layers.</h2>
              <p className="text-xl text-slate-600">
                Tasknova combines conversation analytics, engagement intelligence, and performance coaching into one connected system designed to improve revenue execution across the entire customer lifecycle.
              </p>
            </div>

            {/* Visual Flow */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {platformFlow.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${product.gradient} mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                      <p className="text-slate-600 mb-6">{product.longDescription}</p>
                      <ul className="space-y-3">
                        {product.capabilities.map((capability, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{capability}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-6 w-full px-6 py-3 border-2 border-slate-300 rounded-lg font-semibold text-slate-700 hover:border-cyan-500 hover:text-cyan-600 transition-colors">
                        Learn More →
                      </button>
                    </div>
                    {/* Arrow connector (hidden on mobile) */}
                    {index < platformFlow.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-cyan-500" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Revenue Intelligence Layer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white"
            >
              <div className="text-center mb-8">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-3xl font-bold mb-3">The Intelligence Layer That Connects Execution to Revenue Outcomes</h3>
                <p className="text-slate-300 max-w-3xl mx-auto text-lg">
                  All Tasknova products feed into a unified intelligence engine that connects conversation data, engagement signals, rep behavior, and customer context to measurable revenue outcomes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
                <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30">
                  <h4 className="font-bold text-lg text-cyan-400 mb-3">Customer Intelligence Layer</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Account context intelligence</li>
                    <li>• Pre-call customer briefs</li>
                    <li>• Expansion and adoption signal detection</li>
                    <li>• Customer lifecycle insight tracking</li>
                  </ul>
                </div>
                <div className="p-5 rounded-lg bg-slate-800/50 border border-slate-700">
                  <h4 className="font-bold text-lg text-cyan-400 mb-3">Deal Health Intelligence</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Deal health visibility</li>
                    <li>• Forecasting accuracy improvement</li>
                    <li>• Risk identification</li>
                  </ul>
                </div>
                <div className="p-5 rounded-lg bg-slate-800/50 border border-slate-700">
                  <h4 className="font-bold text-lg text-cyan-400 mb-3">Performance Intelligence</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Performance improvement signals across teams</li>
                    <li>• Skill gap detection</li>
                    <li>• Coaching optimization</li>
                  </ul>
                </div>
                <div className="p-5 rounded-lg bg-slate-800/50 border border-slate-700">
                  <h4 className="font-bold text-lg text-cyan-400 mb-3">Strategic Intelligence</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Strategic insights for GTM optimization</li>
                    <li>• Market and competitive intelligence</li>
                    <li>• Revenue pattern analysis</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-slate-400">
                  Powered by <span className="font-semibold text-cyan-400">Tasknova Company Brain</span>, which customizes intelligence models using your product knowledge, ICP definitions, pricing, SLAs, and execution standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Tasknova Platform */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Built for Revenue Teams That Need More Than Point Solutions</h2>
              <p className="text-xl text-slate-600">
                Tasknova eliminates fragmentation with a unified intelligence approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {platformBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-cyan-100">
                        <Icon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Teams Achieve With Tasknova</h2>
              <p className="text-xl text-slate-600">
                Real outcomes from revenue teams using the complete platform
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-2">
                    {outcome.metric}
                  </div>
                  <div className="text-slate-600">{outcome.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Trusted by Modern Revenue Leaders</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-8 rounded-xl bg-slate-800 border border-slate-700"
                >
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">
                Everything you need to know about implementing and scaling Tasknova
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-slate-200 overflow-hidden"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Revenue Execution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of revenue teams using Tasknova to convert customer conversations into predictable growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-demo">
                <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg">
                  Start Free Trial
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/book-demo">
                <button className="px-8 py-4 border-2 border-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
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

export default ProductsOverview;