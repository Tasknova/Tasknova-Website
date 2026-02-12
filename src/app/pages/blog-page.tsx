import { motion } from "motion/react";
import { 
  FileText, Clock, User, ArrowRight, TrendingUp, MessageSquare, Users, Target
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

// Blog Articles
const blogArticles = [
  {
    category: "Conversation Intelligence",
    title: "10 Conversation Signals That Predict Deal Risk",
    excerpt: "Learn to identify the subtle patterns in customer conversations that indicate a deal is heading off track.",
    author: "David Park",
    readTime: "8 min",
    gradient: "from-cyan-500 to-blue-600",
    icon: MessageSquare
  },
  {
    category: "AI Coaching",
    title: "Why Generic Sales Training Fails (And What Works Instead)",
    excerpt: "Company-specific AI coaching delivers 3x better results than traditional one-size-fits-all programs.",
    author: "Jessica Walsh",
    readTime: "6 min",
    gradient: "from-green-500 to-emerald-600",
    icon: Users
  },
  {
    category: "Revenue Operations",
    title: "The Hidden Cost of Poor Data Quality in Your CRM",
    excerpt: "How conversation intelligence automatically improves CRM accuracy and forecast reliability.",
    author: "Alex Rivera",
    readTime: "10 min",
    gradient: "from-purple-500 to-pink-600",
    icon: TrendingUp
  },
  {
    category: "Deal Intelligence",
    title: "Stakeholder Mapping: The Missing Piece in Complex Sales",
    excerpt: "AI-powered stakeholder analysis reveals hidden buying committee dynamics.",
    author: "Sarah Chen",
    readTime: "12 min",
    gradient: "from-blue-500 to-indigo-600",
    icon: Target
  },
  {
    category: "Customer Success",
    title: "Churn Prediction: Reading Signals 90 Days Early",
    excerpt: "Identify at-risk accounts before renewal conversations even begin.",
    author: "Michelle Torres",
    readTime: "9 min",
    gradient: "from-orange-500 to-red-600",
    icon: MessageSquare
  },
  {
    category: "Enablement",
    title: "How to Build Winning Talk Tracks From Real Calls",
    excerpt: "Extract and replicate the exact language patterns top performers use.",
    author: "Kevin Zhang",
    readTime: "7 min",
    gradient: "from-cyan-400 to-blue-500",
    icon: Users
  },
  {
    category: "Pipeline Management",
    title: "Pipeline Health Beyond CRM Data",
    excerpt: "How engagement signals reveal pipeline quality before deals stall.",
    author: "Emily Johnson",
    readTime: "11 min",
    gradient: "from-green-500 to-emerald-600",
    icon: TrendingUp
  },
  {
    category: "Sales Execution",
    title: "Discovery Call Intelligence: What Questions Win Deals",
    excerpt: "Data from 500K+ discovery calls reveals the questions that drive qualification.",
    author: "Marcus Lee",
    readTime: "9 min",
    gradient: "from-purple-500 to-pink-600",
    icon: MessageSquare
  },
  {
    category: "Coaching",
    title: "The Manager's Guide to Scaling AI Coaching",
    excerpt: "How to coach 15+ reps without sacrificing quality or personal connection.",
    author: "Rachel Green",
    readTime: "12 min",
    gradient: "from-blue-500 to-indigo-600",
    icon: Users
  }
];

// Featured Article
const featuredArticle = {
  category: "Revenue Intelligence",
  title: "Revenue Intelligence Explained: How Modern Sales Teams Predict Deal Risk",
  description: "Learn how conversation signals reveal pipeline risk before it shows in CRM. This comprehensive guide covers sentiment analysis, stakeholder engagement tracking, and AI-powered forecasting techniques used by top-performing teams.",
  author: "Tasknova Research Team",
  readTime: "18 min read",
  tags: ["Revenue Intelligence", "Deal Risk", "Forecasting"]
};

// Categories
const categories = [
  "All Articles",
  "Conversation Intelligence",
  "AI Coaching",
  "Revenue Operations",
  "Deal Intelligence",
  "Customer Success",
  "Enablement"
];

export function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION */}
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
              Blog & Insights
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto"
            >
              Thought leadership and tactical content
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Latest Articles
                <FileText className="inline-block ml-2 w-5 h-5" />
              </button>
              <Link to="/resources">
                <button className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  View All Resources
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-4">
                  Featured Article
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredArticle.title}</h2>
                <p className="text-xl text-cyan-50 mb-6 leading-relaxed">{featuredArticle.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-cyan-50">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                    Read Article
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ARTICLE CATEGORIES */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    index === 0
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG ARTICLES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200 hover:shadow-xl transition-all group cursor-pointer"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${article.gradient} mb-4`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-3">
                      {article.category}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">{article.title}</h3>
                    <p className="text-slate-600 mb-6">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              See These Insights In Action
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-green-50 mb-10"
            >
              Discover how Tasknova turns conversation intelligence into actionable revenue insights
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/book-demo">
                <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg">
                  Book Demo
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/products">
                <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Explore Products
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

export default BlogPage;
