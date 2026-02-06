import { motion } from "motion/react";
import { 
  Layers, Home, Users, ArrowRight, CheckCircle2,
  TrendingUp, Clock, DollarSign, Target, HelpCircle, ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const industries = [
  {
    name: "SaaS Industry",
    icon: Layers,
    gradient: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwdGVjaG5vbG9neSUyMHNvZnR3YXJlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDMxMTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Accelerate product-led growth and optimize the entire customer journey",
    challenges: [
      "Long sales cycles with multiple stakeholders",
      "Complex product demos that need perfect execution",
      "High customer acquisition costs requiring efficiency",
      "Churn prevention through proactive engagement"
    ],
    solutions: [
      {
        title: "Perfect Product Demos Every Time",
        description: "Record and analyze demo calls to identify what resonates. Create a library of winning demo moments and objection handling techniques."
      },
      {
        title: "Shorten Sales Cycles by 40%",
        description: "AI identifies buying signals and stakeholder engagement patterns, helping reps prioritize hot deals and know exactly when to push for close."
      },
      {
        title: "Reduce CAC Through Better Conversion",
        description: "Analyze thousands of calls to understand what converts free trial users to paid customers. Replicate success across your team."
      },
      {
        title: "Prevent Churn Before It Happens",
        description: "Detect sentiment shifts and engagement drops in customer conversations. Get alerts when accounts show risk signals."
      }
    ],
    metrics: [
      { label: "Shorter Sales Cycle", value: "42%" },
      { label: "Demo-to-Trial Conversion", value: "35%", trend: "up" },
      { label: "Customer Retention", value: "89%" },
      { label: "CAC Reduction", value: "28%" }
    ],
    caseStudy: {
      company: "CloudScale",
      industry: "B2B SaaS Platform",
      result: "Increased trial-to-paid conversion by 47% and reduced average sales cycle from 89 to 52 days using conversation intelligence."
    }
  },
  {
    name: "Real Estate",
    icon: Home,
    gradient: "from-purple-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NzAzMTE4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Close more deals faster with AI-powered insights from every client interaction",
    challenges: [
      "Managing dozens of active clients simultaneously",
      "Remembering specific preferences and requirements",
      "Following up at the perfect time",
      "Competitive market requiring faster response times"
    ],
    solutions: [
      {
        title: "Never Miss a Follow-Up",
        description: "Automatically capture buyer preferences, budget constraints, and must-haves from every conversation. Get intelligent reminders for perfect-timing follow-ups."
      },
      {
        title: "Understand Buyer Intent Immediately",
        description: "AI analyzes tone, urgency, and buying signals to tell you which prospects are ready to make offers vs. just browsing."
      },
      {
        title: "Scale Your Best Agent's Performance",
        description: "Record top performer calls, extract winning techniques, and coach the entire team on what actually closes deals in your market."
      },
      {
        title: "Respond Faster Than Competition",
        description: "Auto-transcribe property inquiries and viewing calls. Instantly search past conversations to match clients with perfect properties."
      }
    ],
    metrics: [
      { label: "Faster Response Time", value: "67%" },
      { label: "More Deals Closed", value: "31%", trend: "up" },
      { label: "Client Satisfaction", value: "4.8/5" },
      { label: "Follow-Up Completion", value: "94%" }
    ],
    caseStudy: {
      company: "Metro Realty Group",
      industry: "Residential Real Estate",
      result: "Increased listings-to-closings ratio by 38% and reduced average days-on-market by 23 days using AI engagement tracking."
    }
  },
  {
    name: "HR Industry",
    icon: Users,
    gradient: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJlc291cmNlcyUyMEhSJTIwcmVjcnVpdG1lbnR8ZW58MXx8fHwxNzcwMzExODk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Transform talent acquisition and employee engagement with conversation intelligence",
    challenges: [
      "High-volume recruiting requiring consistent quality",
      "Identifying best-fit candidates beyond resumes",
      "Maintaining compliance in hiring conversations",
      "Reducing time-to-hire in competitive markets"
    ],
    solutions: [
      {
        title: "Identify Top Talent Faster",
        description: "AI analyzes interview conversations for competency signals, culture fit indicators, and red flags that humans might miss."
      },
      {
        title: "Ensure Consistent, Compliant Interviews",
        description: "Automatically flag compliance risks in interview questions. Standardize evaluation criteria across all interviewers and positions."
      },
      {
        title: "Improve Candidate Experience",
        description: "Track response times, interview sentiment, and candidate engagement. Get alerts when top candidates show declining interest."
      },
      {
        title: "Coach Interviewers to Excellence",
        description: "Analyze what separates great interviewers from average ones. Share best practices and train hiring managers on effective techniques."
      }
    ],
    metrics: [
      { label: "Faster Time-to-Hire", value: "45%" },
      { label: "Candidate Quality Score", value: "4.7/5" },
      { label: "Offer Acceptance Rate", value: "86%", trend: "up" },
      { label: "Hiring Manager Satisfaction", value: "92%" }
    ],
    caseStudy: {
      company: "TechTalent Solutions",
      industry: "Recruitment Agency",
      result: "Reduced time-to-hire by 51% and increased placement quality scores by 43% using AI-powered interview intelligence."
    }
  }
];

const faqs = [
  {
    question: "How does Tasknova handle industry-specific terminology?",
    answer: "Our AI is trained on industry-specific vocabulary and can be customized with your own glossary. For SaaS, we understand product terminology; for Real Estate, property types and market terms; for HR, compliance and competency frameworks."
  },
  {
    question: "Can I use Tasknova across multiple industries?",
    answer: "Absolutely! Many enterprise customers operate in multiple verticals. You can configure different workspaces with industry-specific settings, templates, and analytics for each business unit."
  },
  {
    question: "What integrations work best for my industry?",
    answer: "SaaS: Salesforce, HubSpot, Intercom, ProductBoard. Real Estate: MLS systems, Zillow, Follow Up Boss, kvCORE. HR: Greenhouse, Lever, Workday, BambooHR. We also offer custom API integrations."
  },
  {
    question: "How quickly can I see results specific to my industry?",
    answer: "Most customers see measurable improvements within 30-45 days. The AI learns your industry patterns quickly, but the real transformation happens as your team adopts data-driven conversation strategies."
  },
  {
    question: "Do you offer industry-specific training and best practices?",
    answer: "Yes! Each industry gets dedicated onboarding, use-case playbooks, and access to our vertical-specific community. Professional and Enterprise plans include quarterly strategy sessions with industry experts."
  },
  {
    question: "How does pricing differ by industry?",
    answer: "Pricing is consistent across industries, based on team size and feature needs. However, we offer specialized bundles—SaaS teams often need demo analytics, Real Estate needs mobile-first features, HR needs compliance tools."
  }
];

export default function SolutionsByIndustry() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
              Solutions by Industry
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Built for Your Industry's Unique Challenges
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600"
            >
              Purpose-built solutions for SaaS, Real Estate, and HR teams with industry-specific insights, workflows, and best practices.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industries Detail */}
      {industries.map((industry, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 0 ? '' : 'lg:order-2'}
                >
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${industry.gradient} text-white mb-6`}>
                    <industry.icon className="w-5 h-5" />
                    <span className="font-semibold">{industry.name}</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{industry.description}</h2>
                  
                  <div className="space-y-3 mb-8">
                    <h3 className="font-semibold text-slate-900">Common Challenges:</h3>
                    {industry.challenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`p-1 rounded-full bg-gradient-to-r ${industry.gradient} flex-shrink-0 mt-1`}>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-600">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 0 ? '' : 'lg:order-1'}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-auto"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} opacity-20`} />
                  </div>
                </motion.div>
              </div>

              {/* Solutions Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {industry.solutions.map((solution, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-slate-600">{solution.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {industry.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-xl bg-white border border-slate-200 text-center"
                  >
                    <div className={`text-4xl font-bold bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-600">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl bg-gradient-to-r ${industry.gradient} text-white`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/20">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold opacity-90 mb-1">Success Story</div>
                    <h3 className="text-2xl font-bold mb-2">{industry.caseStudy.company}</h3>
                    <div className="text-sm opacity-90 mb-3">{industry.caseStudy.industry}</div>
                    <p className="text-lg">{industry.caseStudy.result}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Industry-Specific Questions</h2>
              <p className="text-xl text-slate-600">
                Common questions about using Tasknova in your industry
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
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your {" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Industry Results?
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join hundreds of teams in your industry already using Tasknova to close more deals, faster.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-lg text-slate-700 hover:border-cyan-500 transition-colors bg-white">
                Schedule Industry Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}