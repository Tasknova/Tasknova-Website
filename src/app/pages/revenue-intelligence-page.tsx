import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Brain, TrendingUp, Target, MessageSquare, Users, ArrowRight, CheckCircle2, ExternalLink, Clock, User, Tag
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase-client";

const SUPABASE_URL = "https://qdeqpgixanmuzonsoeou.supabase.co";

// Intelligence Education
const intelligenceGuides = [
  {
    title: "Conversation Intelligence",
    description: "Understanding how AI analyzes sales conversations to extract insights, detect buyer intent, and identify coaching opportunities. Goes beyond transcription to deliver execution intelligence that improves rep performance and deal outcomes.",
    icon: MessageSquare,
    gradient: "from-cyan-500 to-blue-600",
    outcomes: ["98% transcription accuracy", "Real-time sentiment analysis", "Automated coaching insights"],
    readTime: "15 min read",
    pdfUrl: `${SUPABASE_URL}/storage/v1/object/public/intelligence-guides/Conversation%20Intelligence.pdf`
  },
  {
    title: "Revenue Intelligence",
    description: "The practice of using conversation data, engagement signals, and performance patterns to predict revenue outcomes with precision. Connects what happens in customer interactions to forecast accuracy and pipeline health.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-600",
    outcomes: ["94% forecast accuracy", "Early deal risk detection", "Pipeline predictability"],
    readTime: "18 min read",
    pdfUrl: `${SUPABASE_URL}/storage/v1/object/public/intelligence-guides/Revenue%20Intelligence.pdf`
  },
  {
    title: "Coaching Intelligence",
    description: "AI-driven systems that identify skill gaps, extract winning behaviors from top performers, and generate personalized improvement plans. Scales manager effectiveness across entire revenue organizations.",
    icon: Users,
    gradient: "from-green-500 to-emerald-600",
    outcomes: ["40% faster ramp time", "Systematic skill development", "Scalable team coaching"],
    readTime: "12 min read",
    pdfUrl: `${SUPABASE_URL}/storage/v1/object/public/intelligence-guides/Coaching%20Intelligence.pdf`
  },
  {
    title: "Customer Intelligence",
    description: "Automated research and analysis that delivers deep customer context before every interaction. Combines firmographic data, conversation history, and buying signals into actionable pre-call briefs.",
    icon: Target,
    gradient: "from-blue-500 to-indigo-600",
    outcomes: ["Pre-call research automation", "Buyer signal detection", "Account relationship mapping"],
    readTime: "14 min read",
    pdfUrl: `${SUPABASE_URL}/storage/v1/object/public/intelligence-guides/Customer%20Intelligence.pdf`
  }
];

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  read_time: number;
  published_at: string;
}

// Gradient colors for blog categories
const categoryGradients: Record<string, string> = {
  "Conversation Intelligence": "from-cyan-500 to-blue-600",
  "AI Coaching": "from-green-500 to-emerald-600",
  "Revenue Operations": "from-purple-500 to-pink-600",
  "Deal Intelligence": "from-blue-500 to-indigo-600",
  "Customer Success": "from-orange-500 to-red-600",
  "Sales Intelligence": "from-indigo-500 to-purple-600",
  "Sales": "from-pink-500 to-rose-600",
  "Revenue Intelligence": "from-purple-500 to-pink-600",
  "default": "from-slate-500 to-slate-600"
};

export function RevenueIntelligencePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      if (!supabase) {
        console.warn("Supabase client not configured");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
        return;
      }

      setBlogs(data || []);
      setLoading(false);
    }

    fetchBlogs();
  }, []);
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
              Revenue Intelligence Guides
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto"
            >
              Forecasting, pipeline intelligence, and deal risk
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Explore Guides
                <Brain className="inline-block ml-2 w-5 h-5" />
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

      {/* INTELLIGENCE GUIDES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Master Revenue Intelligence
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-600 max-w-3xl mx-auto"
              >
                Deep dives into the intelligence layers that power modern revenue teams
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {intelligenceGuides.map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:shadow-2xl transition-all"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${guide.gradient} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold">
                        Guide
                      </span>
                      <span className="text-sm text-slate-500">{guide.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{guide.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{guide.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-slate-700 mb-2">Key Outcomes:</p>
                      {guide.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={guide.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r ${guide.gradient} text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Guide
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED BLOG ARTICLES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Expert articles and actionable strategies for revenue teams
              </p>
            </motion.div>
            
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-600 text-lg">No blog posts available yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, index) => {
                  const gradient = categoryGradients[blog.category] || categoryGradients.default;
                  return (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <Link to={`/resources/blog/${blog.slug}`}>
                        <div className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200 hover:shadow-xl transition-all h-full flex flex-col">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${gradient} mb-4 self-start`}>
                            <Tag className="w-5 h-5 text-white" />
                          </div>
                          
                          <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-3 self-start">
                            {blog.category}
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{blog.excerpt}</p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                            <div className="flex items-center gap-3 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span className="truncate">{blog.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{blog.read_time} min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link 
                to="/resources/blog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Turn Intelligence Into Revenue
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-purple-50 mb-10"
            >
              See how Tasknova's AI Revenue Intelligence Platform delivers the insights covered in these guides
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/book-demo">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg">
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

export default RevenueIntelligencePage;
