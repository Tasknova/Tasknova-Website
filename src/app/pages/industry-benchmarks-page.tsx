import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  BarChart3, ExternalLink, TrendingUp, Users, Target, Award, ArrowRight, CheckCircle2
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase-client";

// Icon mapping
const iconMap: Record<string, any> = {
  BarChart3,
  Users,
  Target,
  Award
};

interface IndustryReport {
  id: string;
  title: string;
  slug: string;
  description: string;
  year: string;
  pages: number;
  downloads: string;
  gradient: string;
  icon: string;
  key_findings: string[];
  pdf_url: string;
}

// Stats
const benchmarkStats = [
  { label: "Sales Teams Surveyed", value: "1,200+", gradient: "from-cyan-500 to-blue-600" },
  { label: "Conversations Analyzed", value: "2M+", gradient: "from-purple-500 to-pink-600" },
  { label: "Coaching Sessions Studied", value: "500K+", gradient: "from-green-500 to-emerald-600" },
  { label: "Data Points Collected", value: "15M+", gradient: "from-blue-500 to-indigo-600" }
];

export function IndustryBenchmarksPage() {
  const [reports, setReports] = useState<IndustryReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      if (!supabase) {
        console.warn("Supabase client not configured");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("industry_reports")
        .select("*")
        .eq("is_published", true)
        .order("year", { ascending: false });

      if (error) {
        console.error("Error fetching reports:", error);
        setLoading(false);
        return;
      }

      setReports(data || []);
      setLoading(false);
    }

    fetchReports();
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
              Industry Benchmark Reports
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto"
            >
              Data-backed research and insights
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              {!loading && reports.length > 0 && (
                <a
                  href={reports[0].pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg inline-flex items-center gap-2"
                >
                  View Latest Report
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
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

      {/* BENCHMARK STATS */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {benchmarkStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REPORTS GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Research Reports</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Data-driven insights on sales execution trends and coaching effectiveness
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
                </div>
              ) : reports.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-slate-600 text-lg">No reports available yet.</p>
                </div>
              ) : (
                reports.map((report, index) => {
                  const Icon = iconMap[report.icon] || BarChart3;
                  return (
                    <motion.div
                      key={report.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:shadow-2xl transition-all group"
                    >
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Report Icon & Metadata */}
                        <div className="lg:w-1/4">
                          <div className={`inline-flex p-6 rounded-xl bg-gradient-to-r ${report.gradient} mb-4`}>
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                          <div className="space-y-2">
                            <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold">
                              {report.year} Report
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <ExternalLink className="w-4 h-4" />
                                <span>{report.downloads}</span>
                              </div>
                              <div>
                                {report.pages} pages
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Report Content */}
                        <div className="lg:w-3/4">
                          <h3 className="text-3xl font-bold mb-3">{report.title}</h3>
                          <p className="text-slate-600 mb-6 text-lg leading-relaxed">{report.description}</p>
                          
                          <div className="mb-6">
                            <p className="text-sm font-semibold text-slate-700 mb-3">Key Findings:</p>
                            <div className="grid md:grid-cols-2 gap-3">
                              {report.key_findings.map((finding, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-700">{finding}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <a
                            href={report.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r ${report.gradient} text-white font-semibold hover:opacity-90 transition-opacity group-hover:scale-105`}
                          >
                            View Report
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BENCHMARKS MATTER */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Industry Benchmarks Matter</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Data-driven insights help you understand where your team stands and what top performers do differently
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Compare Performance",
                  description: "See how your team's metrics stack up against industry standards",
                  gradient: "from-cyan-500 to-blue-600"
                },
                {
                  title: "Identify Gaps",
                  description: "Pinpoint specific areas where your team can improve execution",
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  title: "Justify Investment",
                  description: "Use benchmark data to build business cases for new tools and processes",
                  gradient: "from-purple-500 to-pink-600"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border-2 border-slate-200 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-4`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Turn Benchmarks Into Action
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-50 mb-10"
            >
              See how Tasknova helps teams achieve the performance levels documented in these reports
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/book-demo">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg">
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

export default IndustryBenchmarksPage;
