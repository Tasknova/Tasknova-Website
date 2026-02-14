import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Heart,
  Zap,
  TrendingUp,
  Globe,
  Coffee,
  Laptop,
  Award,
  Target,
  Lightbulb,
  Shield,
  X
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase-client";

type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  gradient?: string;
  about?: string;
  responsibilities?: string[];
  skills?: string[];
};

// Fallback open positions (used if backend fetch fails)
export const fallbackOpenPositions: JobOpening[] = [
  {
    id: "fallback-1",
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build the future of revenue intelligence with React, TypeScript, and backend services for AI features.",
    gradient: "from-cyan-500 to-blue-600",
    about: "Tasknova is building the operating system for revenue execution—combining conversation intelligence, coaching workflows, and real-time guidance so revenue teams can run every motion with precision.",
    responsibilities: [
      "Own end-to-end delivery with high code quality and observability",
      "Partner with Product and Design to shape scope and tradeoffs",
      "Ship iteratively with strong testing and instrumentation"
    ],
    skills: [
      "Expertise with TypeScript/React and modern backend services",
      "Strong debugging, performance tuning, and observability",
      "Pragmatic approach to shipping fast with reliability"
    ]
  },
  {
    id: "fallback-2",
    title: "Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Design intuitive experiences for conversation intelligence, coaching workflows, and data visualization.",
    gradient: "from-purple-500 to-pink-600",
    about: "Tasknova is building the operating system for revenue execution—combining conversation intelligence, coaching workflows, and real-time guidance so revenue teams can run every motion with precision.",
    responsibilities: [
      "Design end-to-end user journeys that balance clarity, speed, and delight",
      "Prototype and validate solutions with revenue leaders and frontline users",
      "Maintain a cohesive visual language across surfaces and states"
    ],
    skills: [
      "Depth in product discovery, interaction design, and systems thinking",
      "Proficiency with modern design tools and rapid prototyping",
      "A portfolio showing shipped work in complex, data-rich products"
    ]
  },
  {
    id: "fallback-3",
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    description: "Help revenue leaders discover how Tasknova transforms sales execution. Build pipeline and qualify opportunities.",
    gradient: "from-green-500 to-emerald-600",
    about: "Tasknova is building the operating system for revenue execution—combining conversation intelligence, coaching workflows, and real-time guidance so revenue teams can run every motion with precision.",
    responsibilities: [
      "Engage revenue leaders to uncover pains across pipeline, coaching, and execution",
      "Own outbound, discovery, and qualification to build predictable pipeline",
      "Partner with Product to relay market signals and feature gaps"
    ],
    skills: [
      "Proven success in outbound motions and consultative discovery",
      "Clear storytelling that links product capabilities to revenue outcomes",
      "Process discipline with CRM hygiene and forecasting accuracy"
    ]
  },
  {
    id: "fallback-4",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US/Canada)",
    type: "Full-time",
    description: "Drive adoption, ROI measurement, and renewals for enterprise revenue teams using Tasknova.",
    gradient: "from-orange-500 to-red-600",
    about: "Tasknova is building the operating system for revenue execution—combining conversation intelligence, coaching workflows, and real-time guidance so revenue teams can run every motion with precision.",
    responsibilities: [
      "Drive adoption, ROI measurement, and renewals for enterprise revenue teams",
      "Create playbooks that drive repeatable outcomes across segments",
      "Surface product insights and shape success metrics with leadership"
    ],
    skills: [
      "Experience driving adoption and renewals with mid-market/enterprise accounts",
      "Ability to translate product capabilities into customer-specific playbooks",
      "Excellent communication and stakeholder management"
    ]
  },
  {
    id: "fallback-5",
    title: "Machine Learning Engineer",
    department: "AI/ML",
    location: "Remote (US)",
    type: "Full-time",
    description: "Develop conversation intelligence models, sentiment analysis, and predictive analytics for revenue teams.",
    gradient: "from-blue-500 to-indigo-600",
    about: "Tasknova is building the operating system for revenue execution—combining conversation intelligence, coaching workflows, and real-time guidance so revenue teams can run every motion with precision.",
    responsibilities: [
      "Design, train, and evaluate ML models for conversation intelligence",
      "Collaborate with product to ship AI features safely and quickly",
      "Instrument and monitor models for performance and drift"
    ],
    skills: [
      "Experience with NLP/LLM techniques and production ML systems",
      "Proficiency in Python and modern ML tooling",
      "Strong intuition for data quality, evaluation, and observability"
    ]
  },
  {
    id: "fallback-6",
    title: "Technical Writer",
    department: "Product",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Create documentation, guides, and educational content that helps teams master revenue intelligence.",
    gradient: "from-cyan-400 to-blue-500",
    about: "Tasknova is building the operating system for revenue execution—combining conversation intelligence, coaching workflows, and real-time guidance so revenue teams can run every motion with precision.",
    responsibilities: [
      "Produce clear documentation, guides, and learning paths",
      "Collaborate with product and support to clarify complex features",
      "Maintain consistent voice and structure across assets"
    ],
    skills: [
      "Excellent technical writing and structuring complex topics",
      "Ability to translate technical details into user-friendly guidance",
      "Familiarity with docs tooling and versioning"
    ]
  }
];

// Company Benefits
const benefits = [
  {
    icon: Globe,
    title: "Remote-First Culture",
    description: "Work from anywhere. We believe talent isn't location-dependent.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness stipend.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Laptop,
    title: "Equipment & Setup",
    description: "Latest MacBook, $1,500 home office budget, and co-working space allowance.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Equity & Growth",
    description: "Meaningful equity stake and clear career progression paths.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: Coffee,
    title: "Flexible Time Off",
    description: "Unlimited PTO, company holidays, and mental health days.",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: Lightbulb,
    title: "Learning & Development",
    description: "$2,000/year learning budget for courses, conferences, and books.",
    gradient: "from-cyan-400 to-blue-500"
  }
];

// Company Values (reused from about page for consistency)
const companyValues = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Open communication, honest feedback, and clear expectations."
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "We continuously explore new approaches and ask hard questions."
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We iterate relentlessly to deliver better outcomes."
  },
  {
    icon: Heart,
    title: "Customer Impact",
    description: "Every decision exists to help revenue teams succeed."
  },
  {
    icon: Zap,
    title: "Execution Excellence",
    description: "Speed, precision, and accountability drive everything we do."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Best ideas come from diverse perspectives working together."
  }
];

export function CareersPage() {
  const [positions, setPositions] = useState<JobOpening[]>(fallbackOpenPositions);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | ""; message: string }>({ type: "", message: "" });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experienceYears: "",
    portfolioUrl: "",
    coverLetter: "",
    whyTasknova: "",
    noticePeriod: ""
  });

  useEffect(() => {
    async function loadJobs() {
      if (!supabase) {
        console.warn("Supabase client not configured; using fallback jobs.");
        setLoadingJobs(false);
        return;
      }

      const { data, error } = await supabase
        .from("job_openings")
        .select("id, title, department, location, type, description, gradient, about, responsibilities, skills, is_active")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Failed to load jobs:", error);
        setPositions(fallbackOpenPositions);
      } else if (data && data.length > 0) {
        setPositions(
          data.map((job) => ({
            id: job.id,
            title: job.title,
            department: job.department || "",
            location: job.location || "",
            type: job.type || "",
            description: job.description || "",
            gradient: job.gradient || "from-cyan-500 to-blue-600",
            about: job.about || undefined,
            responsibilities: (job.responsibilities as string[] | null) || undefined,
            skills: (job.skills as string[] | null) || undefined
          }))
        );
      } else {
        setPositions(fallbackOpenPositions);
      }
      setLoadingJobs(false);
    }

    loadJobs();
  }, []);

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setIsApplying(false);
    setSubmitStatus({ type: "", message: "" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    if (!supabase) {
      setSubmitStatus({ type: "error", message: "Supabase client is not configured." });
      return;
    }

    if (!resumeFile) {
      setSubmitStatus({ type: "error", message: "Please attach your resume." });
      return;
    }

    const { fullName, email, phone, location, experienceYears, whyTasknova, noticePeriod } = formData;
    if (!fullName || !email || !phone || !location || !experienceYears || !whyTasknova || !noticePeriod) {
      setSubmitStatus({ type: "error", message: "Please complete all required fields before submitting." });
      return;
    }

    const experience = Number(experienceYears);
    if (Number.isNaN(experience)) {
      setSubmitStatus({ type: "error", message: "Years of experience must be a valid number." });
      return;
    }

    try {
      setSubmitStatus({ type: "", message: "" });
      setIsApplying(true);

      const path = `${selectedJob.id}/${Date.now()}-${resumeFile.name}`;
      const { error: uploadError } = await supabase.storage.from("resumes").upload(path, resumeFile, { upsert: true });
      if (uploadError) {
        throw uploadError;
      }

      const { data: publicUrlData } = supabase.storage.from("resumes").getPublicUrl(path);
      const resumeUrl = publicUrlData.publicUrl;

      const { error: insertError } = await supabase.from("job_applicants").insert({
        job_id: selectedJob.id,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        experience_years: experience,
        portfolio_url: formData.portfolioUrl,
        resume_url: resumeUrl,
        cover_letter: formData.coverLetter,
        answers: {
          why_tasknova: formData.whyTasknova,
          notice_period: formData.noticePeriod,
          preferred_location: formData.location
        }
      });

      if (insertError) {
        throw insertError;
      }

      setSubmitStatus({ type: "success", message: "Application submitted successfully." });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        experienceYears: "",
        portfolioUrl: "",
        coverLetter: "",
        whyTasknova: "",
        noticePeriod: ""
      });
      setResumeFile(null);
    } catch (err) {
      console.error("Application submission failed:", err);
      const message = err instanceof Error ? err.message : "Unable to submit application.";
      setSubmitStatus({ type: "error", message });
    } finally {
      setIsApplying(false);
    }
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
              Tasknova Careers
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Build the Future of Revenue Intelligence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto"
            >
              Join a team that's transforming how revenue teams execute, coach, and win with AI-powered intelligence
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a href="#open-positions" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg">
                View Open Positions
                <Briefcase className="inline-block ml-2 w-5 h-5" />
              </a>
              <Link to="/resources/about">
                <button className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Learn About Us
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />
      </section>

      {/* WHY TASKNOVA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Work at Tasknova?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We're building breakthrough AI technology that solves real problems for revenue teams. Every day, you'll work on challenges that matter.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Real Impact",
                  description: "Your work directly helps thousands of revenue teams execute better, coach smarter, and close more deals.",
                  gradient: "from-cyan-500 to-blue-600",
                  icon: Target
                },
                {
                  title: "Cutting-Edge Tech",
                  description: "Work with the latest AI, ML, and NLP technologies solving complex conversation intelligence problems.",
                  gradient: "from-purple-500 to-pink-600",
                  icon: Zap
                },
                {
                  title: "Fast Growth",
                  description: "Join a high-growth startup where your contributions shape the product and company direction.",
                  gradient: "from-green-500 to-emerald-600",
                  icon: TrendingUp
                }
              ].map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:shadow-xl transition-all"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${reason.gradient} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide how we work, build, and grow together
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200 hover:shadow-lg transition-all"
                  >
                    <Icon className="w-8 h-8 text-cyan-600 mb-3" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS & PERKS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We invest in your success, health, and happiness
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:shadow-xl transition-all group"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join our team and help shape the future of revenue intelligence
              </p>
            </motion.div>

            {loadingJobs ? (
              <p className="text-center text-slate-600">Loading roles...</p>
            ) : (
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-8 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:shadow-xl transition-all group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${position.gradient || "from-cyan-500 to-blue-600"} text-white text-sm font-semibold`}>
                            {position.department}
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{position.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{position.type}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">
                          {position.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">{position.description}</p>
                      </div>

                      <div className="lg:w-auto flex flex-col sm:flex-row gap-3">
                        <Link
                          to={`/resources/careers/${position.id}`}
                          className="px-6 py-4 rounded-lg border-2 border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap text-center"
                        >
                          View Details
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleApplyClick(position)}
                          className={`px-8 py-4 rounded-lg bg-gradient-to-r ${position.gradient || "from-cyan-500 to-blue-600"} text-white font-semibold hover:opacity-90 transition-all group-hover:scale-105 whitespace-nowrap`}
                        >
                          Apply Now
                          <ArrowRight className="inline-block ml-2 w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Don't See Your Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-100 to-white border-2 border-slate-200 text-center"
            >
              <h3 className="text-2xl font-bold mb-3">Don't see your role?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                We're always looking for talented people. Choose a relevant role above and tell us how you can help Tasknova win.
              </p>
              <button
                type="button"
                onClick={() => positions[0] && handleApplyClick(positions[0])}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Start Your Application
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APPLY MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => {
                setSelectedJob(null);
                setSubmitStatus({ type: "", message: "" });
                setResumeFile(null);
              }}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
              aria-label="Close apply form"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-sm font-semibold text-cyan-600 mb-2">Applying for</p>
            <h3 className="text-2xl font-bold mb-1">{selectedJob.title}</h3>
            <p className="text-slate-600 mb-4">{selectedJob.department} · {selectedJob.location} · {selectedJob.type}</p>

            {submitStatus.type === "success" ? (
              <div className="space-y-4">
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-green-800">
                  <p className="font-semibold">Application submitted successfully.</p>
                  <p className="text-sm text-green-700">Thank you! We'll review your application and get back to you soon.</p>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedJob(null);
                      setSubmitStatus({ type: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Close
                  </button>
                  <a
                    href="#open-positions"
                    className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90"
                  >
                    Back to Roles
                  </a>
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Alex Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="+1 555 000 1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="location">Preferred Location / Timezone</label>
                    <input
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Remote - EST"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="experienceYears">Years of Experience</label>
                    <input
                      id="experienceYears"
                      name="experienceYears"
                      type="number"
                      min="0"
                      required
                      value={formData.experienceYears}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="portfolioUrl">LinkedIn / Portfolio</label>
                    <input
                      id="portfolioUrl"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="https://linkedin.com/in/you"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="coverLetter">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Share your relevant experience and impact."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="whyTasknova">Why Tasknova?</label>
                    <textarea
                      id="whyTasknova"
                      name="whyTasknova"
                      rows={2}
                      required
                      value={formData.whyTasknova}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="What excites you about this role?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="noticePeriod">Notice Period / Start Date</label>
                    <textarea
                      id="noticePeriod"
                      name="noticePeriod"
                      rows={2}
                      required
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="e.g., 2 weeks notice"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="resume">Resume (PDF)</label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept="application/pdf"
                    required
                    onChange={(e) => setResumeFile(e.target.files ? e.target.files[0] : null)}
                    className="w-full rounded-lg border border-dashed border-slate-300 px-3 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <p className="text-xs text-slate-500 mt-1">We store your resume securely in our resumes bucket.</p>
                </div>

                {submitStatus.message && (
                  <div className={`rounded-lg px-4 py-3 text-sm ${submitStatus.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedJob(null);
                      setSubmitStatus({ type: "", message: "" });
                      setResumeFile(null);
                    }}
                    className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isApplying}
                    className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 disabled:opacity-60"
                  >
                    {isApplying ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

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
              Ready to Make an Impact?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-50 mb-10"
            >
              Join us in building the future of revenue intelligence
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a href="#open-positions">
                <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg">
                  View Openings
                  <Briefcase className="inline-block ml-2 w-5 h-5" />
                </button>
              </a>
              <Link to="/resources/about">
                <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Learn More About Us
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

export default CareersPage;
