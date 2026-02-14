import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  BookOpen, Brain, FileText, BarChart3, Briefcase, ArrowRight,
  Clock, User, MapPin, ExternalLink, Download
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase-client";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  read_time: number;
  published_at: string;
};

type IndustryReport = {
  id: string;
  title: string;
  description: string;
  year: string;
  pages: number;
  downloads: string;
  pdf_url: string;
};

type JobOpening = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  gradient: string;
};

// Resource Categories
const resourceCategories = [
  {
    id: "playbooks",
    icon: BookOpen,
    title: "Playbooks",
    description: "Step-by-step frameworks to improve sales execution and coaching outcomes. Practical guides built from proven best practices.",
    gradient: "from-cyan-500 to-blue-600",
    link: "/resources/playbooks"
  },
  {
    id: "blog",
    icon: FileText,
    title: "Blog & Insights",
    description: "Expert articles on conversation intelligence, coaching, revenue operations, and AI in sales. Data-backed insights for modern revenue teams.",
    gradient: "from-green-500 to-emerald-600",
    link: "/resources/blog"
  },
  {
    id: "intelligence",
    icon: Brain,
    title: "Revenue Intelligence Guides",
    description: "Deep dives into conversation intelligence, revenue intelligence, coaching intelligence, and customer intelligence. Master the fundamentals.",
    gradient: "from-purple-500 to-pink-600",
    link: "/resources/intelligence"
  },
  {
    id: "reports",
    icon: BarChart3,
    title: "Industry Benchmark Reports",
    description: "Data-driven research on sales execution trends, coaching effectiveness, and revenue intelligence adoption. Benchmark your team's performance.",
    gradient: "from-blue-500 to-indigo-600",
    link: "/resources/benchmarks"
  },
  {
    id: "careers",
    icon: Briefcase,
    title: "Careers",
    description: "Join us in building the future of revenue intelligence. Explore open positions and learn about working at Tasknova.",
    gradient: "from-orange-500 to-red-600",
    link: "/resources/careers"
  }
];

export function ResourcesPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [report, setReport] = useState<IndustryReport | null>(null);

  useEffect(() => {
    // Fetch latest blogs
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(3);

      if (!error && data) {
        setBlogs(data);
      }
    };

    // Fetch featured report
    const fetchReport = async () => {
      const { data, error } = await supabase
        .from("industry_reports")
        .select("*")
        .eq("is_published", true)
        .limit(1)
        .single();

      if (!error && data) {
        setReport(data);
      }
    };

    fetchBlogs();
    fetchReport();
  }, []);

  const featuredJobs: JobOpening[] = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time",
      description: "Build the future of revenue intelligence with React, TypeScript, and backend services for AI features.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote (Global)",
      type: "Full-time",
      description: "Design intuitive experiences for conversation intelligence, coaching workflows, and data visualization.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

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
              Resources for Revenue Teams
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto"
            >
              Expert playbooks, insights, guides, and research to help your team execute with precision
            </motion.p>
          </div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />
      </section>

      {/* LATEST BLOG INSIGHTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2">Latest Insights</h2>
                <p className="text-xl text-slate-600">Expert articles on revenue intelligence and sales execution</p>
              </div>
              <Link to="/resources/blog">
                <button className="px-6 py-3 border-2 border-slate-300 rounded-xl font-semibold text-slate-700 hover:border-cyan-500 hover:text-cyan-600 transition-colors flex items-center gap-2">
                  View All Articles
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/resources/blog/${blog.slug}`}>
                    <div className="group h-full p-6 rounded-xl bg-white border-2 border-slate-200 hover:shadow-xl transition-all cursor-pointer">
                      <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold mb-4">
                        {blog.category}
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <User className="w-4 h-4" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span>{blog.read_time} min</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED INTELLIGENCE GUIDE */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2">Revenue Intelligence Education</h2>
                <p className="text-xl text-slate-600">Master the fundamentals of modern revenue intelligence</p>
              </div>
              <Link to="/resources/intelligence">
                <button className="px-6 py-3 border-2 border-slate-300 rounded-xl font-semibold text-slate-700 hover:border-purple-500 hover:text-purple-600 transition-colors flex items-center gap-2">
                  View All Guides
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }} />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold mb-4">
                    <Brain className="w-4 h-4" />
                    <span>Intelligence Guide</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Conversation Intelligence Explained</h3>
                  <p className="text-purple-100 mb-4 max-w-2xl">
                    A comprehensive guide to understanding how conversation intelligence captures, analyzes, and transforms sales conversations into actionable insights and coaching opportunities.
                  </p>
                  <ul className="space-y-2 text-purple-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>What conversation intelligence captures and why it matters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>How AI analyzes patterns across thousands of conversations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>Real-world impact on coaching, forecasting, and win rates</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <a 
                    href="https://qdeqpgixanmuzonsoeou.supabase.co/storage/v1/object/public/intelligence-guides/Conversation%20Intelligence.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap">
                      <ExternalLink className="w-5 h-5" />
                      View Guide
                    </button>
                  </a>
                  <div className="text-sm text-purple-200 text-center">PDF • 28 pages</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED INDUSTRY REPORT */}
      {report && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-2">Industry Research & Benchmarks</h2>
                  <p className="text-xl text-slate-600">Data-backed insights to benchmark your revenue team's performance</p>
                </div>
                <Link to="/resources/benchmarks">
                  <button className="px-6 py-3 border-2 border-slate-300 rounded-xl font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                    View All Reports
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                  }} />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold mb-4">
                      <BarChart3 className="w-4 h-4" />
                      <span>{report.year} Report</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{report.title}</h3>
                    <p className="text-blue-100 mb-4 max-w-2xl">
                      {report.description}
                    </p>
                    <div className="flex items-center gap-6 text-blue-100 text-sm">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{report.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>{report.downloads} downloads</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a 
                      href={report.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap">
                        <ExternalLink className="w-5 h-5" />
                        View Report
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CAREER OPPORTUNITIES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2">Join Our Team</h2>
                <p className="text-xl text-slate-600">Help us build the future of revenue intelligence</p>
              </div>
              <Link to="/resources/careers">
                <button className="px-6 py-3 border-2 border-slate-300 rounded-xl font-semibold text-slate-700 hover:border-orange-500 hover:text-orange-600 transition-colors flex items-center gap-2">
                  View All Positions
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredJobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to="/resources/careers">
                    <div className="group h-full p-8 rounded-2xl bg-white border-2 border-slate-200 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${job.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                      <div className="relative z-10">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${job.gradient} text-white mb-4`}>
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm font-semibold">{job.department}</span>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
                          {job.title}
                        </h3>
                        <p className="text-slate-600 mb-6">{job.description}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE CATEGORIES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore All Resources</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to improve sales execution, coaching, and revenue intelligence
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={category.link}>
                      <div className="group h-full p-8 rounded-2xl bg-white border-2 border-slate-200 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden">
                        {/* Gradient glow on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                        
                        <div className="relative z-10">
                          <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
                            {category.title}
                          </h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">
                            {category.description}
                          </p>
                          
                          <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                            <span>Explore</span>
                            <ArrowRight className="w-4 h-4 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Turn Knowledge Into Results
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-50 mb-10"
            >
              See how Tasknova's AI Revenue Intelligence Platform helps teams execute with precision
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/book-demo">
                <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg inline-flex items-center gap-2">
                  Book Demo
                  <ArrowRight className="w-5 h-5" />
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

export default ResourcesPage;
