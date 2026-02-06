import { motion } from "motion/react";
import { 
  Cloud, Home, Users, TrendingUp, Target, CheckCircle2,
  ArrowRight, BarChart3, Zap, Clock, DollarSign, Award,
  Building2, MapPin, Calendar, Phone, Mail, FileText,
  UserCheck, Briefcase, GraduationCap
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const industries = [
  {
    id: "saas",
    name: "SaaS Industry",
    tagline: "Accelerate ARR Growth with Revenue Intelligence",
    description: "Built for SaaS sales teams selling complex software. Shorten sales cycles, improve win rates, and scale your GTM motion.",
    icon: Cloud,
    gradient: "from-cyan-500 to-blue-600",
    heroImage: "saas dashboard",
    stats: [
      { value: "2,300+", label: "SaaS Companies" },
      { value: "45%", label: "Avg ARR Growth" },
      { value: "6.2 months", label: "Avg Payback Period" },
      { value: "32%", label: "Higher Win Rates" }
    ],
    challenges: [
      {
        icon: Clock,
        title: "Long Sales Cycles",
        description: "Complex B2B deals with 8-12 stakeholders taking 6+ months to close",
        impact: "Lost deals due to momentum loss and champion changes"
      },
      {
        icon: Target,
        title: "Low Trial Conversion",
        description: "Freemium and PLG models struggle to convert trials to paid at scale",
        impact: "High CAC, unpredictable revenue, difficulty forecasting"
      },
      {
        icon: Users,
        title: "Rapid Team Scaling",
        description: "Doubling sales teams quarterly but maintaining quality is impossible",
        impact: "Inconsistent execution, long ramp times (6+ months)"
      },
      {
        icon: BarChart3,
        title: "Poor Forecast Accuracy",
        description: "Pipeline visibility limited to CRM data, missing conversation context",
        impact: "58% average forecast accuracy, board surprises"
      }
    ],
    solutions: [
      {
        title: "Conversation Intelligence for Product Demos",
        description: "Record and analyze every product demo to understand what drives conversions",
        features: [
          "Automatic demo recording across Zoom, Teams, and Meet",
          "Feature mention tracking - see which features resonate most",
          "Objection analysis - identify common blockers by deal stage",
          "Winning demo playbook creation from top performers",
          "Trial follow-up sequence automation based on demo insights"
        ],
        outcome: "45% improvement in demo-to-trial conversion"
      },
      {
        title: "Multi-Stakeholder Deal Tracking",
        description: "Map complex buying committees and track engagement across all decision-makers",
        features: [
          "Automatic stakeholder identification and relationship mapping",
          "Engagement scoring for each contact (champion, supporter, blocker)",
          "Missing stakeholder alerts (no contact with IT, finance, etc.)",
          "Sentiment tracking per stakeholder over time",
          "Buying committee health score"
        ],
        outcome: "28% shorter sales cycles for enterprise deals"
      },
      {
        title: "AI-Powered Rep Coaching",
        description: "Scale your best performers with automated coaching and onboarding",
        features: [
          "New hire ramp acceleration with AI feedback",
          "Product knowledge assessment from call analysis",
          "Objection handling training from winning calls",
          "Talk track optimization for different buyer personas",
          "Certification tracking and skill development"
        ],
        outcome: "40% faster time to quota for new reps"
      },
      {
        title: "Revenue Attribution & Forecasting",
        description: "Connect conversation data to revenue outcomes for accurate forecasting",
        features: [
          "Deal risk scoring based on conversation patterns",
          "Win/loss analysis with conversation insights",
          "Pipeline health monitoring with leading indicators",
          "Activity-based forecasting (calls, emails, meetings)",
          "Churn prediction for customer success teams"
        ],
        outcome: "94% forecast accuracy (up from 58%)"
      }
    ],
    useCases: [
      {
        icon: Zap,
        title: "Product-Led Growth (PLG)",
        scenario: "Convert more free users to paid customers",
        approach: "Analyze trial onboarding calls and activation patterns to identify conversion triggers",
        results: ["52% higher trial-to-paid conversion", "3.2x more product qualified leads (PQLs)", "21% reduction in time-to-value"]
      },
      {
        icon: Building2,
        title: "Enterprise Sales",
        scenario: "Win more complex, multi-stakeholder deals",
        approach: "Track all touchpoints across buying committee, identify deal risks early",
        results: ["35% improvement in win rate", "28% shorter sales cycles", "$420K average deal size increase"]
      },
      {
        icon: TrendingUp,
        title: "Customer Success & Expansion",
        scenario: "Reduce churn and increase expansion revenue",
        approach: "Monitor customer health through conversations, identify expansion signals",
        results: ["22% churn reduction", "48% increase in upsell/cross-sell", "Net Revenue Retention of 118%"]
      }
    ],
    integrations: [
      "Salesforce", "HubSpot", "Pipedrive", "Intercom", "Segment",
      "Stripe", "ChartMogul", "ProfitWell", "Slack", "Notion"
    ],
    testimonial: {
      quote: "Tasknova helped us understand why our enterprise deals were stalling. We identified missing economic buyer engagement in 40% of our pipeline and course-corrected, resulting in $2.1M in recovered deals.",
      author: "Sarah Chen",
      role: "Chief Revenue Officer",
      company: "CloudMetrics",
      logo: "CloudMetrics",
      companySize: "Series B SaaS, $15M ARR",
      results: ["$2.1M recovered pipeline", "32% win rate increase", "4.2 month payback"]
    },
    caseStudyStats: [
      { label: "Team Size", value: "75 reps" },
      { label: "Implementation", value: "4 days" },
      { label: "Time to ROI", value: "67 days" },
      { label: "ARR Impact", value: "+$4.8M" }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Close More Deals with Intelligence & Speed",
    description: "Purpose-built for residential and commercial real estate teams. Never miss a lead, follow up faster, and close more properties.",
    icon: Home,
    gradient: "from-orange-500 to-red-600",
    heroImage: "real estate dashboard",
    stats: [
      { value: "1,200+", label: "Brokerages & Teams" },
      { value: "38%", label: "More Listings Closed" },
      { value: "10x", label: "Faster Lead Response" },
      { value: "28%", label: "Higher Sale Prices" }
    ],
    challenges: [
      {
        icon: Clock,
        title: "Slow Lead Response Times",
        description: "New inquiries wait hours or days for agent follow-up, especially after hours",
        impact: "78% of leads choose agents who respond within 5 minutes"
      },
      {
        icon: Phone,
        title: "Inconsistent Client Communication",
        description: "Missed calls, forgotten follow-ups, and lack of documentation across agents",
        impact: "Lost opportunities and poor client experiences"
      },
      {
        icon: Target,
        title: "Difficulty Scaling Top Agents",
        description: "Best agents hit capacity limits, hard to replicate their success across team",
        impact: "Revenue concentrated in few agents, unpredictable growth"
      },
      {
        icon: BarChart3,
        title: "No Visibility into Agent Activity",
        description: "Brokers can't see what agents are doing daily or coach effectively",
        impact: "Underperforming agents go unnoticed for months"
      }
    ],
    solutions: [
      {
        title: "Instant Lead Response & Routing",
        description: "Never miss a lead with automatic routing, instant notifications, and follow-up tracking",
        features: [
          "Automatic lead routing based on territory, specialty, or availability",
          "Instant SMS/email alerts to agents for new inquiries",
          "Click-to-call from lead notification",
          "Automated follow-up sequences for unresponsive leads",
          "Lead response time tracking and leaderboards"
        ],
        outcome: "10x faster lead response (5 minutes vs 2+ hours)"
      },
      {
        title: "Client Conversation Intelligence",
        description: "Record all showings, calls, and meetings to never forget client preferences",
        features: [
          "Automatic call recording for all client conversations",
          "AI extraction of buyer/seller preferences (budget, timeline, must-haves)",
          "Property showing notes and client feedback capture",
          "Automated CRM updates with conversation summaries",
          "Client sentiment tracking throughout buying/selling journey"
        ],
        outcome: "35% higher client satisfaction scores"
      },
      {
        title: "Agent Performance & Coaching",
        description: "Give brokers visibility into agent activity and tools to coach effectively",
        features: [
          "Activity dashboards: calls made, showings completed, listings added",
          "Winning approach extraction from top agents",
          "Objection handling coaching (pricing, market concerns, competition)",
          "New agent onboarding acceleration",
          "Commission-based performance tracking"
        ],
        outcome: "New agents productive 60% faster"
      },
      {
        title: "Listing & Buyer Journey Tracking",
        description: "Complete visibility into every interaction from first inquiry to close",
        features: [
          "Timeline view of all touchpoints per property/buyer",
          "Multi-channel interaction tracking (calls, texts, emails, showings)",
          "Automated showing scheduling and reminders",
          "Negotiation conversation analysis",
          "Close rate analysis by property type, price range, location"
        ],
        outcome: "28% improvement in time-to-close"
      }
    ],
    useCases: [
      {
        icon: Home,
        title: "Residential Real Estate",
        scenario: "Boutique brokerage with 50 agents struggling with lead follow-up",
        approach: "Implement instant lead routing, automated follow-up sequences, and call recording",
        results: ["10x faster response time", "44% more listings", "38% higher close rate"]
      },
      {
        icon: Building2,
        title: "Commercial Real Estate",
        scenario: "Commercial firm losing deals to competitors with better responsiveness",
        approach: "Multi-stakeholder tracking for complex property deals, automated engagement",
        results: ["6 hours avg response time → 45 minutes", "$2.3M in recovered deals", "28% more property tours"]
      },
      {
        icon: MapPin,
        title: "Property Management",
        scenario: "Property management company struggling with tenant communication",
        approach: "Centralize all tenant interactions, automate maintenance follow-ups, track satisfaction",
        results: ["89% tenant satisfaction", "35% faster issue resolution", "22% reduction in turnover"]
      }
    ],
    integrations: [
      "Zillow", "Realtor.com", "MLS systems", "dotloop", "Skyslope",
      "Follow Up Boss", "LionDesk", "BoomTown", "KVCore", "Calendly"
    ],
    testimonial: {
      quote: "Our agents were missing 60% of inbound calls after hours. Tasknova's instant routing and automated follow-up recovered those leads. We closed $3.8M more in our first year.",
      author: "Michael Rodriguez",
      role: "Broker/Owner",
      company: "Prestige Properties Group",
      logo: "Prestige",
      companySize: "52 agents, residential luxury market",
      results: ["$3.8M additional closings", "10x faster response", "44% more listings"]
    },
    caseStudyStats: [
      { label: "Agent Count", value: "52 agents" },
      { label: "Setup Time", value: "2 days" },
      { label: "Time to ROI", value: "31 days" },
      { label: "GCI Impact", value: "+$285K" }
    ]
  },
  {
    id: "hr-tech",
    name: "HR Industry",
    tagline: "Transform HR & Recruiting with Data-Driven Intelligence",
    description: "Empower HR teams, recruiting agencies, and HR tech companies to hire faster, engage better, and prove ROI.",
    icon: Users,
    gradient: "from-purple-500 to-indigo-600",
    heroImage: "hr tech dashboard",
    stats: [
      { value: "900+", label: "HR Teams & Agencies" },
      { value: "52%", label: "Faster Time-to-Hire" },
      { value: "67%", label: "Better Candidate Experience" },
      { value: "41%", label: "Higher Offer Acceptance" }
    ],
    challenges: [
      {
        icon: Clock,
        title: "Long Hiring Cycles",
        description: "Roles stay open for 45+ days due to slow interview scheduling and feedback loops",
        impact: "Lost top candidates, frustrated hiring managers, revenue impact"
      },
      {
        icon: UserCheck,
        title: "Poor Candidate Experience",
        description: "Candidates ghost after bad interview experiences or slow follow-up",
        impact: "Damaged employer brand, lower offer acceptance rates"
      },
      {
        icon: Target,
        title: "Inconsistent Interview Quality",
        description: "Hiring managers ask illegal questions or fail to assess key competencies",
        impact: "Bad hires, compliance risks, high turnover (42% first-year)"
      },
      {
        icon: BarChart3,
        title: "No Recruiting Metrics",
        description: "HR teams can't prove their impact or identify bottlenecks in hiring funnel",
        impact: "Difficulty justifying headcount, tools, or process improvements"
      }
    ],
    solutions: [
      {
        title: "Interview Intelligence for Hiring Teams",
        description: "Record, transcribe, and analyze interviews to improve hiring decisions and compliance",
        features: [
          "Automatic interview recording and transcription",
          "Competency-based scoring for each candidate",
          "Illegal question detection and compliance alerts",
          "Interview notes automation (no more manual write-ups)",
          "Hiring team collaboration with timestamp comments",
          "Interview question library and best practices"
        ],
        outcome: "52% faster time-to-hire, 89% interviewer satisfaction"
      },
      {
        title: "Candidate Experience Optimization",
        description: "Track every candidate touchpoint and ensure timely, high-quality communication",
        features: [
          "Automated interview scheduling with calendar sync",
          "Candidate communication tracking (response times, touchpoints)",
          "Post-interview feedback collection",
          "Candidate sentiment analysis from conversations",
          "Automated status updates and follow-ups",
          "Offer negotiation conversation insights"
        ],
        outcome: "67% improvement in candidate NPS, 41% higher offer acceptance"
      },
      {
        title: "Recruiter Performance & Coaching",
        description: "Give recruiting leaders visibility and tools to improve team effectiveness",
        features: [
          "Recruiter activity dashboards (calls, screens, submittals)",
          "Time-to-fill tracking by recruiter and role type",
          "Sourcing effectiveness analysis",
          "Phone screen best practices from top recruiters",
          "New recruiter onboarding acceleration",
          "Commission/placement tracking for agencies"
        ],
        outcome: "New recruiters hit productivity 60% faster"
      },
      {
        title: "HR Tech Sales Intelligence",
        description: "For HR software companies - sell more effectively to CHRO and HR leaders",
        features: [
          "ROI conversation coaching for sellers",
          "Buyer persona identification (CHRO, VP HR, TA Leader)",
          "Compliance question handling",
          "Product demo optimization",
          "Win/loss analysis for HR tech sales",
          "Long sales cycle tracking (8-12 month deals)"
        ],
        outcome: "52% higher win rate for enterprise HR tech deals"
      }
    ],
    useCases: [
      {
        icon: Users,
        title: "Corporate HR Teams",
        scenario: "Enterprise company struggling with inconsistent interview quality",
        approach: "Implement interview recording, competency scoring, and interviewer training",
        results: ["52% faster time-to-hire", "First-year turnover reduced 18% → 11%", "Zero compliance incidents"]
      },
      {
        icon: Briefcase,
        title: "Recruiting Agencies",
        scenario: "Staffing firm needing to prove value and improve recruiter productivity",
        approach: "Track all candidate interactions, measure recruiter effectiveness, optimize workflows",
        results: ["35% more placements per recruiter", "$420K additional revenue", "92% client retention"]
      },
      {
        icon: GraduationCap,
        title: "HR Tech Companies",
        scenario: "HRIS vendor struggling to close enterprise deals with CHROs",
        approach: "Analyze winning sales conversations, coach reps on ROI justification",
        results: ["52% higher win rate", "$1.8M additional ARR", "28% shorter sales cycles"]
      }
    ],
    integrations: [
      "Greenhouse", "Lever", "Workday", "BambooHR", "ADP",
      "LinkedIn Recruiter", "Indeed", "ZipRecruiter", "Calendly", "Zoom"
    ],
    testimonial: {
      quote: "We were losing great candidates because our interview process took 6 weeks. Tasknova automated scheduling and feedback collection. Now we hire in 21 days and our offer acceptance rate is 87%.",
      author: "Jennifer Walsh",
      role: "VP of Talent Acquisition",
      company: "TechForward Inc.",
      logo: "TechForward",
      companySize: "1,200 employees, 180 hires/year",
      results: ["6 weeks → 21 days time-to-hire", "87% offer acceptance", "18% → 11% turnover"]
    },
    caseStudyStats: [
      { label: "Hiring Volume", value: "180/year" },
      { label: "Deployment", value: "3 days" },
      { label: "Time to ROI", value: "42 days" },
      { label: "Cost Savings", value: "$340K/year" }
    ]
  }
];

export function SolutionsPage() {
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
              Industry-Specific Solutions
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Built for Your Industry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600"
            >
              Tasknova is purpose-built for SaaS, Real Estate, and HR teams with industry-specific features and best practices
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      {industries.map((industry, index) => {
        const Icon = industry.icon;
        return (
          <section
            key={industry.id}
            className={index % 2 === 0 ? "py-20 bg-white" : "py-20 bg-slate-50"}
          >
            <div className="container mx-auto px-4">
              {/* Industry Header */}
              <div className="max-w-6xl mx-auto mb-16">
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${industry.gradient} mb-6`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{industry.name}</h2>
                  <p className="text-2xl text-cyan-600 font-semibold mb-4">{industry.tagline}</p>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">{industry.description}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                  {industry.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-xl bg-white shadow-lg border border-slate-200 text-center"
                    >
                      <div className={`text-4xl font-bold bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="max-w-6xl mx-auto mb-16">
                <h3 className="text-3xl font-bold text-center mb-12">Common Challenges We Solve</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {industry.challenges.map((challenge, i) => {
                    const ChallengeIcon = challenge.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-xl bg-white border border-slate-200"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${industry.gradient} flex-shrink-0`}>
                            <ChallengeIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-2">{challenge.title}</h4>
                            <p className="text-sm text-slate-600 mb-2">{challenge.description}</p>
                            <p className="text-sm text-red-600 font-semibold">Impact: {challenge.impact}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Solutions */}
              <div className="max-w-7xl mx-auto mb-16">
                <h3 className="text-3xl font-bold text-center mb-12">How Tasknova Solves It</h3>
                <div className="space-y-8">
                  {industry.solutions.map((solution, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg"
                    >
                      <div className="grid lg:grid-cols-[2fr,3fr] gap-8">
                        <div>
                          <h4 className="text-2xl font-bold mb-3">{solution.title}</h4>
                          <p className="text-slate-600 mb-4">{solution.description}</p>
                          <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${industry.gradient} text-white font-semibold`}>
                            {solution.outcome}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm text-slate-500 uppercase tracking-wide mb-4">
                            Key Features:
                          </h5>
                          <ul className="space-y-3">
                            {solution.features.map((feature, fi) => (
                              <li key={fi} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="max-w-6xl mx-auto mb-16">
                <h3 className="text-3xl font-bold text-center mb-12">Use Cases</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {industry.useCases.map((useCase, i) => {
                    const UseCaseIcon = useCase.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`p-6 rounded-xl bg-gradient-to-br ${industry.gradient} text-white`}
                      >
                        <UseCaseIcon className="w-10 h-10 mb-4 opacity-90" />
                        <h4 className="font-bold text-lg mb-3">{useCase.title}</h4>
                        <p className="text-sm mb-3 opacity-90">{useCase.scenario}</p>
                        <div className="text-sm mb-4">
                          <span className="font-semibold">Approach:</span> {useCase.approach}
                        </div>
                        <div className="pt-4 border-t border-white/20">
                          <div className="font-semibold text-sm mb-2">Results:</div>
                          {useCase.results.map((result, ri) => (
                            <div key={ri} className="text-sm mb-1">• {result}</div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Customer Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <div className="bg-slate-900 rounded-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-[1fr,400px]">
                    <div className="p-8 lg:p-12">
                      <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4">
                        Customer Success Story
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-6">{industry.testimonial.company}</h3>
                      <p className="text-slate-300 mb-4">{industry.testimonial.companySize}</p>
                      <p className="text-xl text-white italic mb-6">"{industry.testimonial.quote}"</p>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20" />
                        <div>
                          <div className="font-semibold text-white">{industry.testimonial.author}</div>
                          <div className="text-sm text-slate-400">{industry.testimonial.role}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {industry.testimonial.results.map((result, ri) => (
                          <div key={ri} className={`px-4 py-2 rounded-lg bg-gradient-to-r ${industry.gradient} text-white text-sm font-semibold`}>
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`p-8 lg:p-12 bg-gradient-to-br ${industry.gradient}`}>
                      <h4 className="text-white font-bold text-lg mb-6">By The Numbers</h4>
                      <div className="space-y-6">
                        {industry.caseStudyStats.map((stat, si) => (
                          <div key={si}>
                            <div className="text-white/70 text-sm mb-1">{stat.label}</div>
                            <div className="text-3xl font-bold text-white">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                      <button className="mt-8 w-full px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                        Read Full Case Study
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              See Tasknova in Action for Your Industry
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Book a personalized demo tailored to your specific use case
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Schedule Industry Demo
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:border-white transition-colors">
                Download Solution Brief
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SolutionsPage;
