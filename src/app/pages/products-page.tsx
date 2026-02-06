import { motion } from "motion/react";
import { 
  Brain, Zap, Users, BarChart3, MessageSquare, Target,
  CheckCircle2, ArrowRight, Play, Video, Mail, Phone,
  Calendar, FileText, TrendingUp, Award, Clock, DollarSign
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const products = [
  {
    id: "insight",
    name: "Tasknova Insight",
    tagline: "AI Revenue Intelligence Platform",
    description: "Capture, analyze, and act on every customer conversation with enterprise-grade conversation intelligence.",
    price: "$39/user/month",
    gradient: "from-cyan-500 to-blue-600",
    icon: Brain,
    heroImage: "conversation intelligence dashboard",
    keyMetrics: [
      { value: "98%", label: "Transcription Accuracy" },
      { value: "40+", label: "Languages Supported" },
      { value: "15 hrs", label: "Saved per Rep/Week" },
      { value: "35%", label: "Win Rate Increase" }
    ],
    capabilities: [
      {
        icon: Video,
        title: "Automatic Call Recording",
        description: "Capture every call from Zoom, Teams, Google Meet, and dialers automatically. Never miss important details.",
        features: [
          "Multi-platform recording (Zoom, Teams, Meet, Webex)",
          "Automatic recording triggers based on calendar events",
          "Selective recording with privacy controls",
          "HD video and crystal-clear audio capture"
        ]
      },
      {
        icon: FileText,
        title: "AI-Powered Transcription",
        description: "Industry-leading transcription with speaker identification, timestamps, and searchable text.",
        features: [
          "98% accuracy across 40+ languages",
          "Automatic speaker detection and labeling",
          "Custom vocabulary for industry terms",
          "Real-time transcription during live calls"
        ]
      },
      {
        icon: Brain,
        title: "Conversation Intelligence",
        description: "Uncover hidden insights with AI analysis of talk patterns, sentiment, objections, and competitor mentions.",
        features: [
          "Sentiment analysis (positive/neutral/negative scoring)",
          "Talk-to-listen ratio tracking",
          "Question frequency and type analysis",
          "Competitor mention detection with context"
        ]
      },
      {
        icon: Target,
        title: "Deal Intelligence",
        description: "Automatic identification of deal risks, buying signals, and next-best actions for every opportunity.",
        features: [
          "Deal risk scoring based on conversation patterns",
          "Buying signal detection (urgency, budget, authority)",
          "Automated MEDDIC/BANT qualification scoring",
          "Next step recommendations powered by AI"
        ]
      },
      {
        icon: BarChart3,
        title: "Performance Analytics",
        description: "Team and individual performance dashboards with benchmarking against top performers.",
        features: [
          "Rep scorecards with 20+ conversation metrics",
          "Team leaderboards and peer comparisons",
          "Trend analysis over time",
          "Custom KPI tracking and alerts"
        ]
      },
      {
        icon: TrendingUp,
        title: "Revenue Intelligence",
        description: "Connect conversation data to revenue outcomes. Understand what drives wins and losses.",
        features: [
          "Win/loss pattern analysis",
          "Revenue attribution by activity type",
          "Pipeline health scoring",
          "Forecast accuracy improvements (avg. 32%)"
        ]
      }
    ],
    useCases: [
      {
        industry: "SaaS",
        scenario: "Product-Led Growth Teams",
        challenge: "Difficulty understanding why trials convert or churn",
        solution: "Analyze all product demo calls and trial check-ins to identify patterns in successful conversions",
        outcome: "45% improvement in trial-to-paid conversion"
      },
      {
        industry: "Real Estate",
        scenario: "Residential Brokerages",
        challenge: "Inconsistent client communication and follow-up across 50+ agents",
        solution: "Record all client calls and property showings, ensuring no buyer/seller details are missed",
        outcome: "28% faster time-to-close, 35% higher client satisfaction"
      },
      {
        industry: "HR Tech",
        scenario: "Recruiting & Talent Platforms",
        challenge: "Sales team unable to articulate ROI to CHRO buyers effectively",
        solution: "Identify winning talk tracks from top performers and replicate across team",
        outcome: "52% increase in enterprise deal closures"
      }
    ],
    integrations: ["Salesforce", "HubSpot", "Zoom", "Google Meet", "Teams", "Gong", "Outreach", "Salesloft"],
    testimonial: {
      quote: "Tasknova Insight helped us understand exactly why we were losing deals. Within 60 days, we adjusted our pitch and saw a 38% jump in win rate.",
      author: "Marcus Stevens",
      role: "VP Sales",
      company: "CloudMetrics (SaaS)"
    }
  },
  {
    id: "engage",
    name: "Tasknova Engage",
    tagline: "Omnichannel Engagement Intelligence",
    description: "Track and optimize every customer touchpoint across calls, emails, meetings, and messages in one unified platform.",
    price: "$29/user/month",
    gradient: "from-purple-500 to-pink-600",
    icon: Zap,
    heroImage: "omnichannel engagement tracking",
    keyMetrics: [
      { value: "10x", label: "Faster Response Times" },
      { value: "67%", label: "More Touchpoints Tracked" },
      { value: "41%", label: "Increase in Reply Rates" },
      { value: "100%", label: "Interaction Visibility" }
    ],
    capabilities: [
      {
        icon: Mail,
        title: "Email Intelligence",
        description: "Track email opens, clicks, and engagement. Know when prospects are most engaged.",
        features: [
          "Real-time open and click tracking",
          "Optimal send time recommendations",
          "Email template performance analytics",
          "Automated follow-up triggers based on engagement"
        ]
      },
      {
        icon: MessageSquare,
        title: "Multi-Channel Activity Tracking",
        description: "Capture interactions across email, calls, LinkedIn, SMS, and more in one timeline.",
        features: [
          "Unified activity feed across all channels",
          "Automatic logging to CRM",
          "Channel preference detection per prospect",
          "Response time tracking and benchmarking"
        ]
      },
      {
        icon: Calendar,
        title: "Meeting Intelligence",
        description: "Automatically schedule, track, and analyze all customer meetings with context.",
        features: [
          "Smart meeting scheduling with calendar sync",
          "Pre-meeting briefings with conversation history",
          "Post-meeting summary and action items",
          "Meeting cadence analysis and recommendations"
        ]
      },
      {
        icon: Phone,
        title: "Dialer Integration",
        description: "Connect your dialer to track calls, log outcomes, and measure call effectiveness.",
        features: [
          "Click-to-call from any platform",
          "Automatic call logging and disposition",
          "Call outcome tracking (connected, voicemail, no answer)",
          "Best time to call predictions based on historical data"
        ]
      },
      {
        icon: Target,
        title: "Sequence Automation",
        description: "Create intelligent outbound sequences that adapt based on prospect behavior.",
        features: [
          "Multi-channel sequences (email + call + LinkedIn)",
          "A/B testing for message variants",
          "Automatic sequence pause on engagement",
          "Performance analytics by sequence step"
        ]
      },
      {
        icon: BarChart3,
        title: "Engagement Analytics",
        description: "Understand which channels, messages, and cadences drive the most pipeline.",
        features: [
          "Channel effectiveness comparison",
          "Message performance heatmaps",
          "Engagement scoring by account",
          "Touchpoint attribution to revenue"
        ]
      }
    ],
    useCases: [
      {
        industry: "SaaS",
        scenario: "Outbound SDR Teams",
        challenge: "Low response rates and inability to track multi-channel outreach effectiveness",
        solution: "Implement multi-touch sequences across email, LinkedIn, and phone with automatic tracking",
        outcome: "3x increase in meeting bookings, 58% higher response rates"
      },
      {
        industry: "Real Estate",
        scenario: "Commercial Real Estate Firms",
        challenge: "Lost opportunities due to slow follow-up with property inquiries",
        solution: "Automatic lead routing and engagement tracking with instant SMS/email triggers",
        outcome: "10x faster response time, 44% more property tours booked"
      },
      {
        industry: "HR Tech",
        scenario: "Enterprise HRIS Sales",
        challenge: "Long sales cycles with multiple stakeholders, unclear engagement levels",
        solution: "Track all touchpoints across 8-12 stakeholders, identify disengaged champions",
        outcome: "26% shorter sales cycles, 89% forecast accuracy"
      }
    ],
    integrations: ["Salesforce", "HubSpot", "Outreach", "Salesloft", "Gmail", "Outlook", "LinkedIn", "Aircall"],
    testimonial: {
      quote: "We went from blind outreach to surgical precision. Engage shows us exactly when and how to reach each prospect.",
      author: "Rachel Kim",
      role: "Director of Sales Development",
      company: "TalentSync (HR Tech)"
    }
  },
  {
    id: "coach",
    name: "Tasknova Coach",
    tagline: "AI-Powered Sales Coaching Platform",
    description: "Scale your best performers with AI coaching that identifies skill gaps and delivers personalized training in real-time.",
    price: "$35/user/month",
    gradient: "from-green-500 to-emerald-600",
    icon: Users,
    heroImage: "ai coaching dashboard",
    keyMetrics: [
      { value: "40%", label: "Faster Rep Ramp" },
      { value: "62%", label: "Reduction in Turnover" },
      { value: "89%", label: "Coaching Adoption" },
      { value: "3.2x", label: "More Coaching Moments" }
    ],
    capabilities: [
      {
        icon: Brain,
        title: "AI Coaching Insights",
        description: "Automatically analyze every call and generate personalized coaching recommendations.",
        features: [
          "Skill gap identification across 15+ competencies",
          "Personalized coaching plans for each rep",
          "Automated coaching scorecards",
          "Improvement tracking over time"
        ]
      },
      {
        icon: Award,
        title: "Best Practice Playbooks",
        description: "Automatically create playbooks from your top performers' winning calls.",
        features: [
          "Winning call library with searchable moments",
          "Talk track extraction from best calls",
          "Objection handling guide generation",
          "Industry-specific playbook templates"
        ]
      },
      {
        icon: Video,
        title: "Call Review & Feedback",
        description: "Streamline 1-on-1 coaching with annotated call reviews and timestamp-specific feedback.",
        features: [
          "Video/audio annotation tools",
          "Timestamp-specific comments",
          "Call snippet sharing",
          "Coaching feedback loop tracking"
        ]
      },
      {
        icon: TrendingUp,
        title: "Performance Benchmarking",
        description: "Compare rep performance against team averages and top performers.",
        features: [
          "Individual vs. team benchmark dashboards",
          "20+ conversation skill metrics",
          "Win rate correlation analysis",
          "Peer comparison reports"
        ]
      },
      {
        icon: Target,
        title: "Real-Time Coaching",
        description: "Get live battle cards and talking points during customer calls.",
        features: [
          "Real-time competitor mention alerts",
          "Objection handling suggestions during calls",
          "Next-best-question recommendations",
          "Live sentiment monitoring"
        ]
      },
      {
        icon: Clock,
        title: "Onboarding Acceleration",
        description: "Reduce new hire ramp time with structured learning paths and AI feedback.",
        features: [
          "Automated onboarding curriculum",
          "Certification tracking",
          "Practice call scoring",
          "Time-to-productivity analytics"
        ]
      }
    ],
    useCases: [
      {
        industry: "SaaS",
        scenario: "High-Growth Startups",
        challenge: "Doubling sales team every quarter but maintaining quality is impossible",
        solution: "Automated coaching identifies gaps in new hires and delivers just-in-time training",
        outcome: "New reps hit quota 40% faster, 62% drop in first-year turnover"
      },
      {
        industry: "Real Estate",
        scenario: "Luxury Property Brokerages",
        challenge: "Inconsistent client experience across agents, difficulty scaling top performer success",
        solution: "Extract winning approaches from top agents and create coaching playbooks",
        outcome: "35% increase in average sale price, 28% more listings closed"
      },
      {
        industry: "HR Tech",
        scenario: "Global HR Software Company",
        challenge: "Sales team struggles with complex product and ROI conversations with CHROs",
        solution: "AI identifies successful ROI discussions and coaches reps on financial justification",
        outcome: "52% improvement in enterprise deal win rate"
      }
    ],
    integrations: ["Salesforce", "HubSpot", "Zoom", "Gong", "LMS platforms", "Slack", "Teams"],
    testimonial: {
      quote: "Coach is like having our top performer coaching everyone, 24/7. Our new hires are now productive in weeks, not months.",
      author: "David Park",
      role: "Chief Revenue Officer",
      company: "PropertyFlow (Real Estate Tech)"
    }
  }
];

const bundleBenefits = [
  {
    icon: DollarSign,
    title: "25% Savings",
    description: "Bundle all three products and save $25-30 per user per month"
  },
  {
    icon: Zap,
    title: "Unified Platform",
    description: "Single sign-on, shared data model, and seamless workflows across all products"
  },
  {
    icon: BarChart3,
    title: "Complete Visibility",
    description: "Full revenue intelligence from first touch to closed-won and beyond"
  },
  {
    icon: Clock,
    title: "Faster ROI",
    description: "Integrated products deliver results 2x faster than standalone tools"
  }
];

export function ProductsPage() {
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
              Three Products. One Powerful Platform.
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Revenue Intelligence Built for Modern Teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-8"
            >
              Choose individual products or the full platform. Start with what you need, scale as you grow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-slate-700 hover:border-cyan-500 transition-colors">
                Compare Products
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      {products.map((product, index) => {
        const Icon = product.icon;
        return (
          <section
            key={product.id}
            className={index % 2 === 0 ? "py-20 bg-white" : "py-20 bg-slate-50"}
          >
            <div className="container mx-auto px-4">
              {/* Product Header */}
              <div className="max-w-6xl mx-auto mb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${product.gradient} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-3">{product.name}</h2>
                    <p className="text-xl text-cyan-600 font-semibold mb-4">{product.tagline}</p>
                    <p className="text-lg text-slate-600 mb-6">{product.description}</p>
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-3xl font-bold">{product.price}</span>
                      <span className="text-slate-600">or save 25% with annual billing</span>
                    </div>
                    <div className="flex gap-4">
                      <button className={`px-6 py-3 bg-gradient-to-r ${product.gradient} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                        Start Free Trial
                      </button>
                      <button className="px-6 py-3 border-2 border-slate-300 rounded-lg font-semibold text-slate-700 hover:border-cyan-500 transition-colors">
                        Watch Demo
                      </button>
                    </div>
                  </motion.div>

                  {/* Key Metrics */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6"
                  >
                    {product.keyMetrics.map((metric, i) => (
                      <div key={i} className="p-6 rounded-xl bg-white shadow-lg border border-slate-200">
                        <div className={`text-4xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-2`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="max-w-7xl mx-auto mb-16">
                <h3 className="text-3xl font-bold text-center mb-12">Core Capabilities</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {product.capabilities.map((capability, i) => {
                    const CapIcon = capability.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow"
                      >
                        <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${product.gradient} mb-4`}>
                          <CapIcon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold mb-2">{capability.title}</h4>
                        <p className="text-sm text-slate-600 mb-4">{capability.description}</p>
                        <ul className="space-y-2">
                          {capability.features.map((feature, fi) => (
                            <li key={fi} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Industry Use Cases */}
              <div className="max-w-6xl mx-auto mb-12">
                <h3 className="text-2xl font-bold text-center mb-8">Industry Use Cases</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {product.useCases.map((useCase, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-xl bg-slate-900 text-white"
                    >
                      <div className="text-cyan-400 font-semibold text-sm mb-2">{useCase.industry}</div>
                      <h4 className="font-bold mb-3">{useCase.scenario}</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-slate-400">Challenge:</span>
                          <p className="text-slate-300 mt-1">{useCase.challenge}</p>
                        </div>
                        <div>
                          <span className="text-slate-400">Solution:</span>
                          <p className="text-slate-300 mt-1">{useCase.solution}</p>
                        </div>
                        <div>
                          <span className="text-cyan-400">Outcome:</span>
                          <p className="font-semibold mt-1">{useCase.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-r ${product.gradient} text-white`}>
                  <p className="text-xl mb-4 italic">"{product.testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20" />
                    <div>
                      <div className="font-semibold">{product.testimonial.author}</div>
                      <div className="text-sm opacity-90">{product.testimonial.role}, {product.testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Bundle Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get the Full Platform</h2>
            <p className="text-xl text-slate-300">
              Bundle Insight + Engage + Coach for complete revenue intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {bundleBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-xl bg-cyan-500/20 mb-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="inline-block p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="text-5xl font-bold mb-2">$79<span className="text-2xl text-slate-400">/user/month</span></div>
              <p className="text-slate-400 mb-6">Full platform • Save $24/user/month</p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductsPage;
