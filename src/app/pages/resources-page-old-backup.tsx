import { motion } from "motion/react";
import { 
  FileText, Video, BookOpen, Headphones, Code, Download,
  TrendingUp, Users, Target, Zap, Calendar, Search,
  ArrowRight, PlayCircle, CheckCircle2, Star, Mail
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const resourceCategories = [
  { id: "all", name: "All Resources", icon: FileText },
  { id: "guides", name: "Guides & Ebooks", icon: BookOpen },
  { id: "webinars", name: "Webinars", icon: Video },
  { id: "case-studies", name: "Case Studies", icon: Target },
  { id: "templates", name: "Templates", icon: Download },
  { id: "podcasts", name: "Podcasts", icon: Headphones },
  { id: "api-docs", name: "API Docs", icon: Code }
];

const featuredResources = [
  {
    type: "Ebook",
    title: "The Complete Guide to Revenue Intelligence in 2026",
    description: "72-page comprehensive guide covering conversation intelligence, forecasting, and AI coaching best practices",
    image: "revenue intelligence guide",
    category: "guides",
    tags: ["Revenue Operations", "Sales Strategy", "AI"],
    readTime: "45 min read",
    downloads: "12,400+",
    rating: 4.9
  },
  {
    type: "Webinar",
    title: "How to Scale Sales Coaching with AI: Live Workshop",
    description: "Watch our VP of Sales demonstrate how to reduce rep ramp time by 40% using AI-powered coaching",
    image: "sales coaching webinar",
    category: "webinars",
    tags: ["Sales Coaching", "AI", "Management"],
    duration: "52 minutes",
    views: "8,200+",
    rating: 4.8
  },
  {
    type: "Case Study",
    title: "How CloudMetrics Added $4.8M ARR in 9 Months",
    description: "SaaS company's journey from 58% to 94% forecast accuracy and 32% win rate improvement",
    image: "cloudmetrics case study",
    category: "case-studies",
    tags: ["SaaS", "Success Story", "ROI"],
    readTime: "12 min read",
    downloads: "5,600+",
    rating: 5.0
  }
];

const guides = [
  {
    title: "The Modern Sales Stack: 2026 Buyer's Guide",
    description: "Compare 50+ sales tools across conversation intelligence, CRM, engagement, and analytics",
    pages: 64,
    downloads: "9,800+",
    category: "guides",
    tags: ["Sales Stack", "Tool Comparison", "Buying Guide"],
    difficulty: "Beginner"
  },
  {
    title: "Real Estate Sales Playbook: Luxury Market Edition",
    description: "Proven strategies from top brokers to sell $5M+ properties faster",
    pages: 48,
    downloads: "4,200+",
    category: "guides",
    tags: ["Real Estate", "Luxury Sales", "Playbook"],
    difficulty: "Intermediate"
  },
  {
    title: "HR Tech Sales: How to Sell to CHROs",
    description: "Win more enterprise HR deals with insights from 500+ closed-won conversations",
    pages: 52,
    downloads: "6,100+",
    category: "guides",
    tags: ["HR Tech", "Enterprise Sales", "CHRO"],
    difficulty: "Advanced"
  },
  {
    title: "The Science of Sales Conversations: Data-Driven Talk Tracks",
    description: "Analysis of 2M+ conversations reveals what top performers say differently",
    pages: 88,
    downloads: "15,300+",
    category: "guides",
    tags: ["Conversation Intelligence", "Data Science", "Best Practices"],
    difficulty: "Intermediate"
  },
  {
    title: "Building a Repeatable Outbound Motion",
    description: "Framework for SDR teams to achieve 15%+ reply rates consistently",
    pages: 42,
    downloads: "11,200+",
    category: "guides",
    tags: ["Outbound", "SDR", "Framework"],
    difficulty: "Beginner"
  },
  {
    title: "Product-Led Growth Meets Sales-Led: The Hybrid Model",
    description: "How to blend PLG and SLG for maximum conversion and expansion",
    pages: 56,
    downloads: "7,900+",
    category: "guides",
    tags: ["PLG", "SaaS", "Growth"],
    difficulty: "Advanced"
  }
];

const webinars = [
  {
    title: "Live: Quarterly Revenue Intelligence Benchmark Report",
    date: "Feb 12, 2026",
    time: "2:00 PM EST",
    speakers: ["Sarah Chen, CRO at CloudMetrics", "David Park, VP Sales at Tasknova"],
    description: "Latest benchmarks from 5,000+ revenue teams: win rates, ramp times, and AI adoption",
    category: "webinars",
    tags: ["Benchmarks", "Industry Trends", "Data"],
    isUpcoming: true,
    registrations: "1,200+"
  },
  {
    title: "Real Estate Tech Stack Deep Dive",
    date: "Jan 28, 2026",
    duration: "48 minutes",
    speakers: ["Michael Rodriguez, Broker/Owner at Prestige Properties"],
    description: "How a 52-agent brokerage uses technology to close 44% more listings",
    category: "webinars",
    tags: ["Real Estate", "Tech Stack", "Case Study"],
    isUpcoming: false,
    views: "3,400+"
  },
  {
    title: "AI Coaching: From Theory to Practice",
    date: "Jan 15, 2026",
    duration: "55 minutes",
    speakers: ["Jessica Walsh, VP of Sales Enablement at TechForward"],
    description: "Step-by-step implementation of AI coaching for 120-person sales team",
    category: "webinars",
    tags: ["AI Coaching", "Implementation", "Enablement"],
    isUpcoming: false,
    views: "5,800+"
  },
  {
    title: "Recruiting Intelligence: Data-Driven Hiring",
    date: "Jan 8, 2026",
    duration: "42 minutes",
    speakers: ["Jennifer Kim, Head of TA at DataCorp"],
    description: "Cut time-to-hire by 52% with interview intelligence and analytics",
    category: "webinars",
    tags: ["HR", "Recruiting", "Analytics"],
    isUpcoming: false,
    views: "2,900+"
  }
];

const caseStudies = [
  {
    company: "CloudMetrics",
    industry: "SaaS - Cloud Analytics",
    companySize: "Series B, 250 employees",
    challenge: "58% forecast accuracy, 6-month rep ramp, inconsistent execution",
    solution: "Full Tasknova platform deployment across 75-person revenue team",
    results: [
      "94% forecast accuracy (up from 58%)",
      "$4.8M additional ARR in 9 months",
      "40% faster rep ramp time",
      "32% win rate improvement"
    ],
    roi: "4.2x ROI in first year",
    testimonial: {
      quote: "Tasknova transformed us from gut-feel forecasting to data-driven precision.",
      author: "Sarah Chen, Chief Revenue Officer"
    },
    category: "case-studies",
    tags: ["SaaS", "Enterprise", "Forecast Accuracy"]
  },
  {
    company: "Prestige Properties Group",
    industry: "Real Estate - Luxury Residential",
    companySize: "52 agents, $180M annual volume",
    challenge: "Slow lead response (2+ hours), inconsistent follow-up, lost opportunities",
    solution: "Tasknova Engage for instant routing + Insight for client conversations",
    results: [
      "10x faster lead response (5 mins)",
      "44% more listings closed",
      "$3.8M additional commission revenue",
      "35% higher client satisfaction"
    ],
    roi: "ROI in 31 days",
    testimonial: {
      quote: "We went from losing leads to competitors to being the fastest responders in our market.",
      author: "Michael Rodriguez, Broker/Owner"
    },
    category: "case-studies",
    tags: ["Real Estate", "Lead Response", "ROI"]
  },
  {
    company: "TechForward Inc.",
    industry: "HR Tech - Talent Management",
    companySize: "1,200 employees, 180 hires/year",
    challenge: "6-week time-to-hire, 18% first-year turnover, inconsistent interviews",
    solution: "Tasknova Insight for interview recording + Coach for interviewer training",
    results: [
      "21 days time-to-hire (down from 42)",
      "11% turnover (down from 18%)",
      "87% offer acceptance rate",
      "$340K annual cost savings"
    ],
    roi: "ROI in 42 days",
    testimonial: {
      quote: "Our interview process went from chaos to calibrated in 6 weeks.",
      author: "Jennifer Walsh, VP of Talent Acquisition"
    },
    category: "case-studies",
    tags: ["HR", "Recruiting", "Time-to-Hire"]
  },
  {
    company: "DataPrime Systems",
    industry: "SaaS - Data Infrastructure",
    companySize: "Series C, 420 employees",
    challenge: "Complex technical sales, long cycles (12+ months), 42% first-year rep churn",
    solution: "Tasknova Coach for technical training + Insight for deal intelligence",
    results: [
      "62% reduction in rep churn",
      "8.5 months avg sales cycle (down from 12)",
      "$5.6M incremental revenue",
      "89% message consistency"
    ],
    roi: "5.8x ROI in first year",
    testimonial: {
      quote: "New reps now handle technical objections like veterans within 90 days.",
      author: "Robert Martinez, VP of Sales Enablement"
    },
    category: "case-studies",
    tags: ["SaaS", "Technical Sales", "Churn Reduction"]
  }
];

const templates = [
  {
    title: "Sales Call Checklist: 47-Point Pre/During/Post Template",
    description: "Never forget a critical step in your sales calls again",
    format: "PDF + Notion",
    downloads: "18,400+",
    category: "templates",
    tags: ["Sales Process", "Checklists", "Best Practices"]
  },
  {
    title: "Deal Review Template for Revenue Leaders",
    description: "Structured framework to review at-risk deals with your team",
    format: "Google Docs + Slides",
    downloads: "9,200+",
    category: "templates",
    tags: ["Deal Review", "Management", "Framework"]
  },
  {
    title: "Onboarding Scorecard: 30/60/90 Day Ramp Plan",
    description: "Track new rep progress with measurable milestones",
    format: "Excel + Google Sheets",
    downloads: "12,600+",
    category: "templates",
    tags: ["Onboarding", "Ramp", "Metrics"]
  },
  {
    title: "Interview Scorecard: Competency-Based Hiring",
    description: "Standardize interviews and reduce bias with structured evaluation",
    format: "PDF + ATS-compatible",
    downloads: "7,800+",
    category: "templates",
    tags: ["Recruiting", "Interviews", "HR"]
  },
  {
    title: "Email Sequence Template Library (14 Sequences)",
    description: "Proven outbound sequences for SDRs, AEs, and CSMs",
    format: "Word + Outreach/Salesloft",
    downloads: "21,300+",
    category: "templates",
    tags: ["Email", "Sequences", "Outbound"]
  },
  {
    title: "Real Estate Client Intake Form",
    description: "Capture buyer/seller preferences systematically",
    format: "PDF + Digital Form",
    downloads: "4,900+",
    category: "templates",
    tags: ["Real Estate", "Clients", "Process"]
  }
];

const podcasts = [
  {
    title: "Revenue Intelligence Podcast",
    episodes: 142,
    description: "Weekly conversations with revenue leaders about what's working in sales, CS, and marketing",
    hosts: ["David Park", "Sarah Chen"],
    latestEpisode: {
      title: "How to Build a Revenue Operations Function from Scratch",
      guest: "Marcus Stevens, VP RevOps at ScaleUp",
      duration: "48 minutes",
      released: "Feb 1, 2026"
    },
    category: "podcasts",
    tags: ["Revenue", "Leadership", "Strategy"],
    subscribers: "24,000+"
  },
  {
    title: "The Real Estate Tech Show",
    episodes: 68,
    description: "Exploring how technology is transforming residential and commercial real estate",
    hosts: ["Michael Rodriguez"],
    latestEpisode: {
      title: "AI in Property Valuations: Hype or Reality?",
      guest: "Linda Carter, Chief Innovation Officer at PropTech Ventures",
      duration: "38 minutes",
      released: "Jan 29, 2026"
    },
    category: "podcasts",
    tags: ["Real Estate", "PropTech", "Innovation"],
    subscribers: "8,500+"
  },
  {
    title: "Future of Work: HR Tech & Talent",
    episodes: 95,
    description: "Deep dives into recruiting, HR technology, and the employee experience",
    hosts: ["Jennifer Walsh", "Robert Kim"],
    latestEpisode: {
      title: "Skills-Based Hiring: Moving Beyond Resumes",
      guest: "Alex Thompson, CHRO at TalentFirst",
      duration: "52 minutes",
      released: "Jan 26, 2026"
    },
    category: "podcasts",
    tags: ["HR", "Recruiting", "Future of Work"],
    subscribers: "16,200+"
  }
];

export function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold mb-6"
            >
              Free Resources for Revenue Teams
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Learn. Grow. Win.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-8"
            >
              Guides, webinars, templates, and insights from the world's best revenue teams
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-500 outline-none text-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white sticky top-16 z-10 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {resourceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  <FileText className="w-16 h-16" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded">
                      {resource.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{resource.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>{resource.readTime || resource.duration}</span>
                    <span>{resource.downloads || resource.views}</span>
                  </div>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    {resource.type === "Webinar" ? "Watch Now" : "Download Free"}
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Ebooks */}
      {(selectedCategory === "all" || selectedCategory === "guides") && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <BookOpen className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold">Guides & Ebooks</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">{guide.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">{guide.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>{guide.pages} pages</span>
                    <span>{guide.downloads} downloads</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      guide.difficulty === "Beginner" ? "bg-green-100 text-green-700" :
                      guide.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  <button className="w-full px-4 py-2 border-2 border-cyan-500 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                    Download Free
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Webinars */}
      {(selectedCategory === "all" || selectedCategory === "webinars") && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <Video className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold">Webinars & Workshops</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border-2 hover:shadow-lg transition-shadow ${
                    webinar.isUpcoming ? "border-cyan-500 bg-cyan-50" : "border-slate-200 bg-white"
                  }`}
                >
                  {webinar.isUpcoming && (
                    <div className="inline-block px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full mb-4">
                      Upcoming Live
                    </div>
                  )}
                  <h3 className="font-bold text-lg mb-2">{webinar.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{webinar.description}</p>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{webinar.date} {webinar.time && `• ${webinar.time}`}</span>
                    </div>
                    {!webinar.isUpcoming && (
                      <div className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{webinar.speakers.join(" & ")}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className={`w-full px-4 py-3 rounded-lg font-semibold transition-colors ${
                    webinar.isUpcoming
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90"
                      : "border-2 border-slate-300 text-slate-700 hover:border-cyan-500"
                  }`}>
                    {webinar.isUpcoming ? "Register Now" : "Watch Recording"}
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {(selectedCategory === "all" || selectedCategory === "case-studies") && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <Target className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold">Customer Success Stories</h2>
            </div>
            <div className="space-y-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="grid lg:grid-cols-[2fr,1fr]">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                          {study.company.slice(0, 2)}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">{study.company}</h3>
                          <p className="text-sm text-slate-600">{study.industry} • {study.companySize}</p>
                        </div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <div>
                          <span className="font-semibold text-sm text-slate-500">Challenge:</span>
                          <p className="text-slate-700">{study.challenge}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-slate-500">Solution:</span>
                          <p className="text-slate-700">{study.solution}</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-slate-50 border-l-4 border-cyan-500 mb-6">
                        <p className="text-slate-700 italic mb-2">"{study.testimonial.quote}"</p>
                        <p className="font-semibold text-sm">{study.testimonial.author}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                      <h4 className="font-bold text-lg mb-6">Results</h4>
                      <div className="space-y-4 mb-6">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-white/20">
                        <div className="text-sm opacity-90 mb-2">Return on Investment</div>
                        <div className="text-3xl font-bold mb-6">{study.roi}</div>
                        <button className="w-full px-4 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                          Read Full Story
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Templates */}
      {(selectedCategory === "all" || selectedCategory === "templates") && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <Download className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold">Templates & Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {templates.map((template, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <Download className="w-8 h-8 text-cyan-600 mb-4" />
                  <h3 className="font-bold mb-2">{template.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{template.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>{template.format}</span>
                    <span>{template.downloads}</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                    Download Template
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Podcasts */}
      {(selectedCategory === "all" || selectedCategory === "podcasts") && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <Headphones className="w-8 h-8 text-cyan-600" />
              <h2 className="text-3xl font-bold">Podcasts</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {podcasts.map((podcast, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-4">
                    <Headphones className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{podcast.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{podcast.description}</p>
                  <div className="text-sm text-slate-500 mb-4">
                    <div>Hosted by {podcast.hosts.join(" & ")}</div>
                    <div>{podcast.episodes} episodes • {podcast.subscribers} subscribers</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50 mb-4">
                    <div className="text-xs text-slate-500 mb-1">Latest Episode:</div>
                    <div className="font-semibold text-sm mb-1">{podcast.latestEpisode.title}</div>
                    <div className="text-xs text-slate-600">
                      {podcast.latestEpisode.guest} • {podcast.latestEpisode.duration}
                    </div>
                  </div>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Listen Now
                    <PlayCircle className="inline-block ml-2 w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Get Weekly Revenue Intelligence Insights
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join 24,000+ revenue leaders receiving our weekly newsletter with actionable strategies
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 outline-none"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ResourcesPage;