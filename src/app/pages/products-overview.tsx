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
    description: "AI-powered call intelligence that captures and analyzes customer conversations.",
    capabilities: [
      "Automatic call recording & transcription",
      "Sentiment & emotion detection",
      "Conversation pattern analysis",
      "Deal risk identification"
    ]
  },
  {
    name: "Tasknova Engage",
    icon: Zap,
    gradient: "from-purple-500 to-pink-600",
    description: "Unified interaction intelligence across calls and emails.",
    capabilities: [
      "Omnichannel activity tracking",
      "Email sentiment analysis",
      "Engagement scoring",
      "Follow-up recommendations"
    ]
  },
  {
    name: "Tasknova Coach",
    icon: Users,
    gradient: "from-green-500 to-emerald-600",
    description: "AI coaching and performance optimization platform.",
    capabilities: [
      "Automated coaching insights",
      "Skill gap detection",
      "Performance benchmarking",
      "Onboarding acceleration"
    ]
  }
];

const platformBenefits = [
  {
    icon: Brain,
    title: "One Unified Intelligence Engine",
    description: "All your conversation data flows through a single AI engine, creating consistent insights across every touchpoint."
  },
  {
    icon: Target,
    title: "Eliminates Tool Fragmentation",
    description: "Replace 3-5 disconnected tools with one integrated platform. Reduce costs and complexity."
  },
  {
    icon: TrendingUp,
    title: "Improves Rep Performance Automatically",
    description: "AI identifies coaching moments and delivers personalized recommendations without manual intervention."
  },
  {
    icon: Users,
    title: "Scales Learning Across Teams",
    description: "Extract best practices from top performers and replicate them across your entire organization."
  }
];

const outcomes = [
  { metric: "40%", label: "Faster Rep Ramp Time" },
  { metric: "32%", label: "Higher Win Rates" },
  { metric: "80%", label: "Less Review Time" },
  { metric: "$2.4M", label: "Avg Annual Value Added" }
];

const testimonials = [
  {
    quote: "Before Tasknova, we had three separate tools for calls, emails, and coaching. The platform unified everything and gave us insights we never had before.",
    author: "Sarah Chen",
    role: "Chief Revenue Officer",
    company: "CloudMetrics",
    image: "saas executive"
  },
  {
    quote: "Our new reps hit quota 40% faster because the AI coaching shows them exactly what top performers do differently.",
    author: "David Park",
    role: "VP of Sales",
    company: "TechForward",
    image: "sales leader"
  }
];

const faqs = [
  {
    question: "Can I buy individual products or do I need the full platform?",
    answer: "You have complete flexibility. Purchase Insight, Engage, or Coach individually starting at $29-39/user/month. Or bundle all three for the full platform price and save 25%. Many customers start with one product and expand over time."
  },
  {
    question: "How long does it take to implement Tasknova?",
    answer: "Most teams are up and running within 24-48 hours. Our onboarding includes automated integrations with your CRM, calendar, and communication tools. Professional plans include dedicated setup assistance."
  },
  {
    question: "Does Tasknova work with our existing tech stack?",
    answer: "Yes! Tasknova integrates with 50+ tools including Salesforce, HubSpot, Zoom, Teams, Gmail, Outlook, and all major sales engagement platforms. We also offer a robust API for custom integrations."
  },
  {
    question: "What's the difference between Tasknova and other conversation intelligence tools?",
    answer: "Tasknova is the only platform that combines conversation intelligence (Insight), omnichannel engagement tracking (Engage), and AI coaching (Coach) in one unified system. This eliminates tool fragmentation and provides deeper insights by connecting all customer interaction data."
  },
  {
    question: "How does AI coaching actually work?",
    answer: "Our AI analyzes every customer conversation and compares it to best practices from your top performers. It automatically identifies skill gaps, suggests improvements, and creates personalized coaching plans for each rep—scaling what would take managers hours into seconds."
  },
  {
    question: "Is our conversation data secure and private?",
    answer: "Absolutely. Tasknova is SOC 2 Type II certified, GDPR compliant, and offers enterprise-grade security including SSO/SAML, data encryption at rest and in transit, and granular access controls. You own your data and can export or delete it anytime."
  },
  {
    question: "What kind of ROI can we expect?",
    answer: "Most customers see ROI within 4-5 months. On average, teams experience 32% higher win rates, 40% faster rep ramp time, and 80% reduction in call review time. Annual value delivered averages $127K per team."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day free trial with full access to all features in your chosen plan. No credit card required. You can invite your entire team and test all integrations before making a decision."
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
                  Tasknova transforms customer conversations into actionable insights, engagement intelligence, and automated coaching — helping revenue teams scale performance predictably.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/pricing">
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
              <h2 className="text-4xl font-bold mb-4">Platform Architecture</h2>
              <p className="text-xl text-slate-600">
                Three integrated products. One powerful intelligence layer.
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
                      <p className="text-slate-600 mb-6">{product.description}</p>
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
              className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center"
            >
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-bold mb-3">Revenue Intelligence Layer</h3>
              <p className="text-slate-300 max-w-3xl mx-auto">
                All three products feed into a unified intelligence engine that connects conversation data to revenue outcomes, forecasting, and strategic insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Tasknova Platform */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Tasknova Platform</h2>
              <p className="text-xl text-slate-600">
                Built for modern revenue teams who need more than point solutions
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
              <h2 className="text-4xl font-bold mb-4">Platform Outcomes</h2>
              <p className="text-xl text-slate-600">
                What teams achieve with the complete Tasknova platform
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
                Answers to common questions about Tasknova
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
              Ready to Transform Your Revenue Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 5,000+ revenue teams using Tasknova to scale performance predictably
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pricing">
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