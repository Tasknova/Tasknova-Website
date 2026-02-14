import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  Download, CheckCircle2, ArrowRight, FileText, Users, TrendingUp, Target, Eye
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase-client";
import type { LucideIcon } from "lucide-react";

type Playbook = {
  id: string;
  title: string;
  slug: string;
  description: string;
  topics: string[];
  pages: number;
  downloads: number;
  gradient: string;
  file_url: string | null;
};

const iconMap: Record<string, LucideIcon> = {
  "sales-playbook": Target,
  "coaching-playbook": Users,
  "revops-playbook": TrendingUp,
  "customer-intelligence-playbook": FileText
};

// Fallback data
const fallbackPlaybooks: Playbook[] = [
  {
    id: "fallback-1",
    title: "Sales Playbook",
    slug: "sales-playbook",
    description: "Master discovery, objection handling, and demo execution",
    topics: ["Discovery frameworks", "Objection handling scripts", "Demo execution strategies", "Closing techniques"],
    gradient: "from-cyan-500 to-blue-600",
    downloads: 8400,
    pages: 64,
    file_url: null
  },
  {
    id: "fallback-2",
    title: "Coaching Playbook",
    slug: "coaching-playbook",
    description: "Build high-performing teams through systematic coaching",
    topics: ["Rep coaching frameworks", "Manager coaching systems", "Coaching ROI measurement", "Performance improvement plans"],
    gradient: "from-green-500 to-emerald-600",
    downloads: 6200,
    pages: 52,
    file_url: null
  },
  {
    id: "fallback-3",
    title: "RevOps Playbook",
    slug: "revops-playbook",
    description: "Optimize revenue operations and forecasting accuracy",
    topics: ["Forecast accuracy improvement", "Pipeline intelligence", "Process optimization", "Data quality frameworks"],
    gradient: "from-purple-500 to-pink-600",
    downloads: 5800,
    pages: 72,
    file_url: null
  },
  {
    id: "fallback-4",
    title: "Customer Intelligence Playbook",
    slug: "customer-intelligence-playbook",
    description: "Leverage AI for deeper customer insights",
    topics: ["Pre-call research automation", "Buyer signal detection", "Stakeholder mapping", "Account intelligence"],
    gradient: "from-blue-500 to-indigo-600",
    downloads: 7100,
    pages: 48,
    file_url: null
  }
];

export function PlaybooksPage() {
  const [playbooks, setPlaybooks] = useState<Playbook[]>(fallbackPlaybooks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlaybooks() {
      if (!supabase) {
        console.warn("Supabase client not configured; using fallback playbooks.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("playbooks")
        .select("id, title, slug, description, topics, pages, downloads, gradient, file_url")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Failed to load playbooks:", error);
        setPlaybooks(fallbackPlaybooks);
      } else if (data && data.length > 0) {
        setPlaybooks(
          data.map((p) => ({
            id: p.id,
            title: p.title,
            slug: p.slug,
            description: p.description || "",
            topics: (p.topics as string[]) || [],
            pages: p.pages || 0,
            downloads: p.downloads || 0,
            gradient: p.gradient || "from-cyan-500 to-blue-600",
            file_url: p.file_url || null
          }))
        );
      } else {
        setPlaybooks(fallbackPlaybooks);
      }
      setLoading(false);
    }

    fetchPlaybooks();
  }, []);

  const handleView = (url: string | null) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (url: string | null, title: string) => {
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/\s+/g, "-").toLowerCase()}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

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
              Revenue Execution Playbooks
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto"
            >
              Step-by-step frameworks proven across thousands of revenue teams
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button
                type="button"
                onClick={() => {
                  playbooks.forEach((p) => {
                    if (p.file_url) handleDownload(p.file_url, p.title);
                  });
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Download All Playbooks
                <Download className="inline-block ml-2 w-5 h-5" />
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

      {/* PLAYBOOKS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <p className="text-center text-slate-600">Loading playbooks...</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {playbooks.map((playbook, index) => {
                  const Icon = iconMap[playbook.slug] || FileText;
                  return (
                    <motion.div
                      key={playbook.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:shadow-2xl transition-all group"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${playbook.gradient}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Download className="w-4 h-4" />
                          <span>{playbook.downloads.toLocaleString()}+</span>
                        </div>
                      </div>
                      
                      <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-3">
                        Playbook
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">{playbook.title}</h3>
                      <p className="text-slate-600 mb-6">{playbook.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {playbook.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                        <span className="text-sm text-slate-500">
                          <FileText className="inline-block w-4 h-4 mr-1" />
                          {playbook.pages} pages
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleView(playbook.file_url)}
                            disabled={!playbook.file_url}
                            className="px-4 py-2 rounded-lg border-2 border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Eye className="inline-block w-4 h-4 mr-1" />
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDownload(playbook.file_url, playbook.title)}
                            disabled={!playbook.file_url}
                            className={`px-4 py-2 rounded-lg bg-gradient-to-r ${playbook.gradient} text-white font-semibold hover:opacity-90 transition-opacity group-hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
                          >
                            <Download className="inline-block w-4 h-4 mr-1" />
                            Download
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY PLAYBOOKS MATTER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Playbooks Matter</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Repeatable revenue doesn't come from guesswork. It comes from proven frameworks that every team member can execute consistently.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Faster Ramp Time",
                  description: "New reps reach productivity 40% faster with structured frameworks",
                  gradient: "from-cyan-500 to-blue-600"
                },
                {
                  title: "Consistent Execution",
                  description: "Every rep uses the same proven approaches that top performers follow",
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  title: "Scalable Coaching",
                  description: "Managers can coach to specific frameworks instead of generic advice",
                  gradient: "from-purple-500 to-pink-600"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-4`}>
                    <CheckCircle2 className="w-6 h-6 text-white" />
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
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Improve Your Team's Execution?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-50 mb-10"
            >
              See how Tasknova helps revenue teams execute with precision using AI-powered intelligence
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

export default PlaybooksPage;
