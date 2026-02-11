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
    description: "Accelerate Product-Led Growth and Optimize the Entire Customer Journey",
    challenges: [
      "Long and complex sales cycles - Multiple stakeholders require consistent messaging and coordination across conversations.",
      "High pressure product demonstrations - Demo execution directly impacts conversion success and deal momentum.",
      "Rising customer acquisition costs - Teams need higher conversion efficiency across trials, demos, and sales conversations.",
      "Churn risk from engagement gaps - Customer sentiment and adoption signals are often missed until renewal risk emerges."
    ],
    solutions: [
      {
        title: "Perfect Product Demos Every Time",
        description: "Record and analyze product demonstrations to identify messaging that resonates with buyers and eliminate demo execution inconsistencies. Create libraries of winning demo moments, identify objection handling strategies that convert, and standardize demo frameworks across teams."
      },
      {
        title: "Shorten Sales Cycles Through Buying Signal Intelligence",
        description: "Tasknova identifies stakeholder engagement patterns and deal momentum signals, allowing reps to focus on high-intent opportunities. Surface decision readiness indicators, track multi-stakeholder engagement levels, and highlight urgency and purchase signals."
      },
      {
        title: "Reduce Customer Acquisition Cost Through Conversion Intelligence",
        description: "Analyze thousands of trial and sales conversations to understand what drives customer conversion and replicate those behaviors across the team. Identify trial-to-paid conversion triggers, track messaging effectiveness across lifecycle stages, and optimize onboarding and activation conversations."
      },
      {
        title: "Prevent Churn With Proactive Sentiment Monitoring",
        description: "Detect engagement decline and sentiment shifts across customer conversations to prevent churn and improve renewals. Track adoption conversations and usage concerns, detect dissatisfaction signals early, and monitor executive engagement across accounts."
      }
    ],
    metrics: [
      { label: "Shorter sales cycles", value: "42%" },
      { label: "Higher demo-to-trial conversion", value: "35%", trend: "up" },
      { label: "Improved customer retention", value: "89%" },
      { label: "Reduction in acquisition cost", value: "28%" }
    ],
    caseStudy: {
      company: "CloudScale",
      industry: "B2B SaaS Platform",
      result: "Improved trial-to-paid conversion by 47% and reduced average sales cycle length by over 35 days using conversation intelligence."
    }
  },
  {
    name: "Real Estate",
    icon: Home,
    gradient: "from-purple-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NzAzMTE4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Close More Deals Faster Using AI Driven Client Interaction Intelligence",
    challenges: [
      "Managing multiple active clients simultaneously - Important client preferences and deal signals get lost across conversations.",
      "Timing follow ups effectively - Successful deals depend heavily on follow up timing and client engagement.",
      "High competition and response speed - Speed of response directly impacts deal success in competitive property markets.",
      "Tracking buyer intent accurately - Agents often struggle to distinguish between serious buyers and exploratory prospects."
    ],
    solutions: [
      {
        title: "Never Miss Critical Follow Ups",
        description: "Automatically capture buyer preferences, property requirements, and budget constraints from every client conversation. Generate follow up reminders based on urgency and intent, track viewing interest and client decision patterns, and preserve full client interaction history."
      },
      {
        title: "Understand Buyer Intent in Real Time",
        description: "Analyze tone, urgency, and decision signals to help agents prioritize serious buyers. Identify readiness to make offers, detect hesitation or negotiation signals, and highlight competitor property discussions."
      },
      {
        title: "Scale Top Agent Performance Across Teams",
        description: "Capture winning sales techniques from top performers and distribute proven deal closing strategies across agents. Extract negotiation talk tracks, standardize client discovery conversations, and train new agents using successful deal examples."
      },
      {
        title: "Respond Faster Than Market Competition",
        description: "Automatically transcribe property inquiries and viewing conversations so agents can instantly search and respond with relevant property options. Match client requirements with inventory faster, reduce missed inquiries and delayed responses, and improve client experience across touchpoints."
      }
    ],
    metrics: [
      { label: "Faster client response time", value: "67%" },
      { label: "Increase in deals closed", value: "31%", trend: "up" },
      { label: "Client satisfaction rating", value: "4.8 / 5" },
      { label: "Follow up completion rate", value: "94%" }
    ],
    caseStudy: {
      company: "Metro Realty Group",
      industry: "Residential Real Estate Firm",
      result: "Improved listing-to-closing ratio by 38% and reduced average days on market by over three weeks using AI driven engagement intelligence."
    }
  },
  {
    name: "HR and Recruitment Industry",
    icon: Users,
    gradient: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJlc291cmNlcyUyMEhSJTIwcmVjcnVpdG1lbnR8ZW58MXx8fHwxNzcwMzExODk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Transform Talent Acquisition and Candidate Engagement Using Conversation Intelligence",
    challenges: [
      "High volume recruiting with inconsistent evaluation quality - Hiring decisions rely heavily on subjective interviewer assessments.",
      "Identifying best-fit candidates beyond resumes - Cultural alignment and competency signals are difficult to measure consistently.",
      "Maintaining compliance during interviews - Organizations must ensure hiring conversations follow regulatory guidelines.",
      "Reducing time to hire in competitive talent markets - Delays in candidate evaluation and follow up reduce acceptance rates."
    ],
    solutions: [
      {
        title: "Identify High Quality Talent Faster",
        description: "Analyze interview conversations to detect competency signals, communication effectiveness, and culture fit indicators. Highlight candidate strengths and risk signals, standardize interview evaluation criteria, and support data driven hiring decisions."
      },
      {
        title: "Ensure Consistent and Compliant Interviews",
        description: "Automatically flag risky or non-compliant interview questions and enforce standardized evaluation frameworks. Monitor interview consistency across teams, reduce compliance exposure, and improve hiring fairness and transparency."
      },
      {
        title: "Improve Candidate Experience and Engagement",
        description: "Track candidate sentiment and responsiveness across interviews and communication touchpoints. Identify declining candidate interest early, improve follow up responsiveness, and enhance employer brand perception."
      },
      {
        title: "Coach Interviewers and Hiring Managers",
        description: "Identify characteristics that separate top interviewers from average interviewers and distribute best practices across hiring teams. Standardize interview techniques, improve candidate evaluation accuracy, and train hiring managers using real interview examples."
      }
    ],
    metrics: [
      { label: "Faster time to hire", value: "45%" },
      { label: "Candidate quality score", value: "4.7 / 5" },
      { label: "Offer acceptance rate", value: "86%", trend: "up" },
      { label: "Hiring manager satisfaction", value: "92%" }
    ],
    caseStudy: {
      company: "TechTalent Solutions",
      industry: "Recruitment Agency",
      result: "Reduced time to hire by over 50% and improved placement quality scores by more than 40% using interview conversation intelligence."
    }
  }
];

const faqs = [
  {
    question: "How Does Tasknova Adapt to Industry Terminology?",
    answer: "Tasknova Company Brain allows organizations to train AI models using industry specific vocabulary, sales frameworks, and compliance requirements."
  },
  {
    question: "Can Tasknova Support Multi-Industry Organizations?",
    answer: "Yes. Tasknova allows separate intelligence models for different business units or industries within the same organization."
  },
  {
    question: "What Integrations Work Best Per Industry?",
    answer: "Tasknova integrates with CRM systems, communication platforms, and workflow tools commonly used across SaaS, real estate, and recruitment organizations."
  },
  {
    question: "How Quickly Can Teams See Industry-Specific Results?",
    answer: "Most teams begin seeing measurable conversation insights within the first week and operational performance improvements within the first few months."
  },
  {
    question: "Does Tasknova Provide Industry Best Practices?",
    answer: "Yes. Tasknova provides customizable playbooks, training workflows, and coaching intelligence tailored to industry selling and engagement patterns."
  },
  {
    question: "Does Pricing Vary by Industry?",
    answer: "Tasknova pricing is based on platform modules and usage requirements rather than industry verticals."
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
              Revenue Intelligence Built for Your Industry's Unique Challenges
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600"
            >
              Tasknova delivers industry-specific intelligence models, workflows, and coaching insights that help SaaS, Real Estate, and HR teams transform customer conversations into measurable revenue outcomes.
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
              <h2 className="text-4xl font-bold mb-4">Industry FAQ</h2>
              <p className="text-xl text-slate-600">
                Frequently asked questions about industry-specific intelligence
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
              Ready to Transform Results in Your Industry?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join revenue teams already using Tasknova to improve deal execution, customer engagement, and predictable growth.
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