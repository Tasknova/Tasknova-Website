import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  FileText, Clock, User, ArrowRight, Tag
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase-client";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  hero_image_url: string | null;
  author: string;
  category: string;
  tags: string[];
  read_time: number;
  published_at: string;
}

// Gradient colors for categories
const categoryGradients: Record<string, string> = {
  "Conversation Intelligence": "from-cyan-500 to-blue-600",
  "AI Coaching": "from-green-500 to-emerald-600",
  "Revenue Operations": "from-purple-500 to-pink-600",
  "Deal Intelligence": "from-blue-500 to-indigo-600",
  "Customer Success": "from-orange-500 to-red-600",
  "Enablement": "from-cyan-400 to-blue-500",
  "Pipeline Management": "from-green-500 to-emerald-600",
  "Sales Execution": "from-purple-500 to-pink-600",
  "Coaching": "from-blue-500 to-indigo-600",
  "Sales Intelligence": "from-indigo-500 to-purple-600",
  "Sales": "from-pink-500 to-rose-600",
  "Revenue Intelligence": "from-cyan-500 to-blue-600",
  "default": "from-slate-500 to-slate-600"
};

export function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [categories, setCategories] = useState<string[]>(["All Articles"]);

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
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
        return;
      }

      setBlogs(data || []);
      
      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set((data || []).map(blog => blog.category))
      );
      setCategories(["All Articles", ...uniqueCategories]);
      
      setLoading(false);
    }

    fetchBlogs();
  }, []);

  const filteredBlogs = selectedCategory === "All Articles" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);
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
      {!loading && featuredBlog && (
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
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredBlog.title}</h2>
                  <p className="text-xl text-cyan-50 mb-6 leading-relaxed">{featuredBlog.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                      {featuredBlog.category}
                    </span>
                    {featuredBlog.tags && featuredBlog.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4 text-cyan-50">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        <span>{featuredBlog.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span>{featuredBlog.read_time} min read</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/resources/blog/${featuredBlog.slug}`}
                      className="px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center"
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
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
      )}

      {/* ARTICLE CATEGORIES */}
      {!loading && categories.length > 0 && (
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
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedCategory === category
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
      )}

      {/* BLOG ARTICLES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-600 text-lg">No blog posts found.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => {
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
                          <p className="text-slate-600 mb-6 flex-grow">{blog.excerpt}</p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                            <div className="flex items-center gap-3 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{blog.author}</span>
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
