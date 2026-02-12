import { motion } from "motion/react";
import { 
  BookOpen, Brain, Headphones, FileText, Video, BarChart3,
  ArrowRight, Clock, User, TrendingUp, Target, Zap, CheckCircle2,
  Download, Award, Users, MessageSquare
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

// Resource Categories
const resourceCategories = [
  {
    id: "playbooks",
    icon: BookOpen,
    title: "Playbooks",
    description: "Step-by-step frameworks to improve sales execution and coaching outcomes.",
    gradient: "from-cyan-500 to-blue-600",
    count: "12 guides"
  },
  {
    id: "intelligence",
    icon: Brain,
    title: "Revenue Intelligence Guides",
    description: "Deep dives into forecasting accuracy, deal risk detection, and pipeline intelligence.",
    gradient: "from-purple-500 to-pink-600",
    count: "8 guides"
  },
  {
    id: "podcasts",
    icon: Headphones,
    title: "Podcasts / Expert Talks",
    description: "Conversations with sales leaders, RevOps experts, and growth practitioners.",
    gradient: "from-orange-500 to-red-600",
    count: "24 episodes"
  },
  {
    id: "blog",
    icon: FileText,
    title: "Blog & Insights",
    description: "Tactical insights on conversation intelligence, coaching, and AI in revenue teams.",
    gradient: "from-green-500 to-emerald-600",
    count: "180+ articles"
  },
  {
    id: "webinars",
    icon: Video,
    title: "Webinars & Product Walkthroughs",
    description: "Learn how high-performing teams use Tasknova.",
    gradient: "from-blue-500 to-indigo-600",
    count: "16 sessions"
  },
  {
    id: "reports",
    icon: BarChart3,
    title: "Industry Benchmark Reports",
    description: "Data-driven insights on sales execution trends and coaching effectiveness.",
    gradient: "from-cyan-400 to-blue-500",
    count: "4 reports"
  }
];

// Featured Content
const featuredContent = {
  main: {
    category: "Revenue Intelligence",
    title: "Revenue Intelligence Explained: How Modern Sales Teams Predict Deal Risk",
    description: "Learn how conversation signals reveal pipeline risk before it shows in CRM. This comprehensive guide covers sentiment analysis, stakeholder engagement tracking, and AI-powered forecasting techniques used by top-performing teams.",
    author: "Tasknova Research Team",
    readTime: "18 min read",
    image: "featured",
    tags: ["Revenue Intelligence", "Deal Risk", "Forecasting"]
  },
  secondary: [
    {
      category: "Coaching",
      title: "The Manager's Guide to Scaling AI Coaching",
      description: "How to coach 15+ reps without sacrificing quality or personal connection.",
      readTime: "12 min",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      category: "Conversation Intelligence",
      title: "What Top Performers Say Differently: Data From 2M+ Calls",
      description: "Analysis reveals the specific language patterns that correlate with higher win rates.",
      readTime: "15 min",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      category: "Customer Intelligence",
      title: "Pre-Call Research Automation: The Competitive Advantage",
      description: "How AI-generated customer briefs improve discovery call outcomes by 47%.",
      readTime: "10 min",
      gradient: "from-cyan-500 to-blue-600"
    }
  ]
};

// Playbooks
const playbooks = [
  {
    title: "Sales Execution Playbook",
    description: "Master discovery, objection handling, and demo execution",
    topics: [
      "Discovery frameworks",
      "Objection handling scripts",
      "Demo execution strategies",
      "Closing techniques"
    ],
    gradient: "from-cyan-500 to-blue-600",
    downloads: "8,400+",
    pages: 64
  },
  {
    title: "Coaching Playbook",
    description: "Build high-performing teams through systematic coaching",
    topics: [
      "Rep coaching frameworks",
      "Manager coaching systems",
      "Coaching ROI measurement",
      "Performance improvement plans"
    ],
    gradient: "from-green-500 to-emerald-600",
    downloads: "6,200+",
    pages: 52
  },
  {
    title: "RevOps Playbook",
    description: "Optimize revenue operations and forecasting accuracy",
    topics: [
      "Forecast accuracy improvement",
      "Pipeline intelligence",
      "Process optimization",
      "Data quality frameworks"
    ],
    gradient: "from-purple-500 to-pink-600",
    downloads: "5,800+",
    pages: 72
  },
  {
    title: "Customer Intelligence Playbook",
    description: "Leverage AI for deeper customer insights",
    topics: [
      "Pre-call research automation",
      "Buyer signal detection",
      "Stakeholder mapping",
      "Account intelligence"
    ],
    gradient: "from-blue-500 to-indigo-600",
    downloads: "7,100+",
    pages: 48
  }
];

// Blog Articles
const blogArticles = [
  {
    category: "Conversation Intelligence",
    title: "10 Conversation Signals That Predict Deal Risk",
    excerpt: "Learn to identify the subtle patterns in customer conversations that indicate a deal is heading off track.",
    author: "David Park",
    readTime: "8 min",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    category: "AI Coaching",
    title: "Why Generic Sales Training Fails (And What Works Instead)",
    excerpt: "Company-specific AI coaching delivers 3x better results than traditional one-size-fits-all programs.",
    author: "Jessica Walsh",
    readTime: "6 min",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    category: "Revenue Operations",
    title: "The Hidden Cost of Poor Data Quality in Your CRM",
    excerpt: "How conversation intelligence automatically improves CRM accuracy and forecast reliability.",
    author: "Alex Rivera",
    readTime: "10 min",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    category: "Deal Intelligence",
    title: "Stakeholder Mapping: The Missing Piece in Complex Sales",
    excerpt: "AI-powered stakeholder analysis reveals hidden buying committee dynamics.",
    author: "Sarah Chen",
    readTime: "12 min",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    category: "Customer Success",
    title: "Churn Prediction: Reading Signals 90 Days Early",
    excerpt: "Identify at-risk accounts before renewal conversations even begin.",
    author: "Michelle Torres",
    readTime: "9 min",
    gradient: "from-orange-500 to-red-600"
  },
  {
    category: "Enablement",
    title: "How to Build Winning Talk Tracks From Real Calls",
    excerpt: "Extract and replicate the exact language patterns top performers use.",
    author: "Kevin Zhang",
    readTime: "7 min",
    gradient: "from-cyan-400 to-blue-500"
  }
];

// Intelligence Education
const intelligenceEducation = [
  {
    title: "Conversation Intelligence",
    description: "Understanding how AI analyzes sales conversations to extract insights, detect buyer intent, and identify coaching opportunities. Goes beyond transcription to deliver execution intelligence that improves rep performance and deal outcomes.",
    icon: MessageSquare,
    gradient: "from-cyan-500 to-blue-600",
    outcomes: ["98% transcription accuracy", "Real-time sentiment analysis", "Automated coaching insights"]
  },
  {
    title: "Revenue Intelligence",
    description: "The practice of using conversation data, engagement signals, and performance patterns to predict revenue outcomes with precision. Connects what happens in customer interactions to forecast accuracy and pipeline health.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-600",
    outcomes: ["94% forecast accuracy", "Early deal risk detection", "Pipeline predictability"]
  },
  {
    title: "Coaching Intelligence",
    description: "AI-driven systems that identify skill gaps, extract winning behaviors from top performers, and generate personalized improvement plans. Scales manager effectiveness across entire revenue organizations.",
    icon: Users,
    gradient: "from-green-500 to-emerald-600",
    outcomes: ["40% faster ramp time", "Systematic skill development", "Scalable team coaching"]
  },
  {
    title: "Customer Intelligence",
    description: "Automated research and analysis that delivers deep customer context before every interaction. Combines firmographic data, conversation history, and buying signals into actionable pre-call briefs.",
    icon: Target,
    gradient: "from-blue-500 to-indigo-600",
    outcomes: ["Pre-call research automation", "Buyer signal detection", "Account relationship mapping"]
  }
];

// Testimonials
const testimonials = [
  {
    quote: "The resources from Tasknova transformed how we think about revenue intelligence. The playbooks alone saved us months of trial and error.",
    author: "Sarah Chen",
    role: "Chief Revenue Officer",
    company: "CloudMetrics"
  },
  {
    quote: "These aren't generic sales tips. Every guide is backed by real data from millions of conversations. That's the difference.",
    author: "Marcus Stevens",
    role: "VP of Sales",
    company: "TechForward"
  }
];

export function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6"
            >
              Tasknova Knowledge Hub
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Learn, Improve, and Scale<br />Revenue Performance
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto"
            >
              Explore expert playbooks, industry insights, and real-world strategies to improve sales execution, coaching, and customer intelligence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a href="#playbooks" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Explore Playbooks
              </a>
              <a href="#blog" className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Blog
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Gradient Orb */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />
      </section>

      {/* 2. RESOURCE CATEGORY NAVIGATION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
                  >
                    {/* Gradient Border on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10`} style={{ padding: '2px' }}>
                      <div className="w-full h-full bg-white rounded-2xl" />
                    </div>
                    
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.gradient} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-slate-600 mb-4">{category.description}</p>
                    <p className="text-sm font-semibold text-slate-500">{category.count}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Resources</h2>
              <p className="text-xl text-slate-600">Must-read guides from the Tasknova research team</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Main Featured */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:row-span-2 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
                    {featuredContent.main.category}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{featuredContent.main.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{featuredContent.main.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredContent.main.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredContent.main.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredContent.main.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                    Read Guide
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
              
              {/* Secondary Featured */}
              <div className="space-y-6">
                {featuredContent.secondary.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white border-2 border-slate-200 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold mb-3`}>
                      {item.category}
                    </div>
                    
                    <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-600 transition-colors">{item.title}</h4>
                    <p className="text-slate-600 text-sm mb-3">{item.description}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLAYBOOK GRID SECTION */}
      <section id="playbooks" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Revenue Execution Playbooks</h2>
              <p className="text-xl text-slate-600">Step-by-step frameworks proven across thousands of revenue teams</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {playbooks.map((playbook, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${playbook.gradient} text-white mb-4`}>
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm font-semibold">Playbook</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{playbook.title}</h3>
                  <p className="text-slate-600 mb-6">{playbook.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {playbook.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{playbook.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{playbook.pages} pages</span>
                      </div>
                    </div>
                    
                    <button className={`px-4 py-2 bg-gradient-to-r ${playbook.gradient} text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity`}>
                      Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. BLOG CONTENT GRID */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
              <p className="text-xl text-slate-600">Tactical advice for revenue teams from Tasknova experts</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border-2 border-slate-200 hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${article.gradient} text-white text-xs font-semibold mb-4`}>
                    {article.category}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">{article.title}</h3>
                  <p className="text-slate-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-slate-700 hover:border-cyan-500 hover:text-cyan-600 transition-colors">
                View All Articles
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VALUE EDUCATION SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Understanding Revenue Intelligence</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Learn the core concepts powering modern revenue execution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {intelligenceEducation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:shadow-xl transition-all"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.gradient} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-slate-700 mb-6 leading-relaxed">{item.description}</p>
                    
                    <div className="space-y-2">
                      {item.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUST SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">180+</div>
                <div className="text-slate-300">Educational Resources</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">50K+</div>
                <div className="text-slate-300">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">94%</div>
                <div className="text-slate-300">Find Content Valuable</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-slate-200 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Turn Insights Into Revenue Growth
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-50 mb-10"
            >
              See how Tasknova's Revenue Intelligence Platform helps teams execute with precision
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/book-demo">
                <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg">
                  Book Demo
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/products">
                <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Explore Product
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ResourcesPage;
