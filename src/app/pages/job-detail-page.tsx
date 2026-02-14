import { useEffect, useMemo, useState, FormEvent, ChangeEvent } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { supabase } from "../lib/supabase-client";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Clock,
  MapPin,
  Shield,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { fallbackOpenPositions } from "./careers-page";

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

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experienceYears: string;
  portfolioUrl: string;
  coverLetter: string;
  whyTasknova: string;
  noticePeriod: string;
};

const defaultForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  experienceYears: "",
  portfolioUrl: "",
  coverLetter: "",
  whyTasknova: "",
  noticePeriod: ""
};

const responsibilitiesByDepartment: Record<string, string[]> = {
  Engineering: [
    "Ship reliable, well-tested features across the stack with tight feedback loops",
    "Collaborate with Product and Design to shape technical scope and tradeoffs",
    "Elevate code quality through reviews, pairing, and observability best practices"
  ],
  Design: [
    "Design end-to-end user journeys that balance clarity, speed, and delight",
    "Prototype and validate solutions with revenue leaders and frontline users",
    "Maintain a cohesive visual language across surfaces and states"
  ],
  Sales: [
    "Engage revenue leaders to uncover pains across pipeline, coaching, and execution",
    "Own outbound, discovery, and qualification to build predictable pipeline",
    "Partner with Product to relay market signals and feature gaps"
  ],
  "Customer Success": [
    "Guide customers from implementation through adoption and measurable ROI",
    "Create playbooks that drive repeatable outcomes across segments",
    "Surface product insights and shape success metrics with leadership"
  ]
};

const skillsByDepartment: Record<string, string[]> = {
  Engineering: [
    "Expertise with TypeScript/React; familiarity with modern backend services",
    "Strong debugging, instrumentation, and performance tuning skills",
    "Pragmatic approach to shipping fast without sacrificing reliability"
  ],
  Design: [
    "Depth in product discovery, interaction design, and systems thinking",
    "Proficiency with modern design tools and rapid prototyping",
    "A portfolio showing shipped work in complex, data-rich products"
  ],
  Sales: [
    "Proven success in outbound motions and consultative discovery",
    "Clear storytelling that links product capabilities to revenue outcomes",
    "Process discipline with CRM hygiene and forecasting accuracy"
  ],
  "Customer Success": [
    "Experience driving adoption and renewals with mid-market/enterprise accounts",
    "Ability to translate product capabilities into customer-specific playbooks",
    "Excellent communication and stakeholder management"
  ]
};

export default function JobDetailPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<JobOpening | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | ""; message: string }>({ type: "", message: "" });
  const [isApplying, setIsApplying] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormState>(defaultForm);

  useEffect(() => {
    async function fetchJob() {
      if (!jobId) {
        setJob(null);
        setLoading(false);
        return;
      }

      if (!supabase) {
        const fallback = fallbackOpenPositions.find((j) => j.id === jobId) || fallbackOpenPositions[0];
        setJob(fallback || null);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("job_openings")
        .select("id, title, department, location, type, description, gradient, about, responsibilities, skills, is_active")
        .eq("id", jobId)
        .eq("is_active", true)
        .single();

      if (error || !data) {
        const fallback = fallbackOpenPositions.find((j) => j.id === jobId) || fallbackOpenPositions[0];
        setJob(fallback || null);
      } else {
        setJob({
          id: data.id,
          title: data.title,
          department: data.department || "",
          location: data.location || "",
          type: data.type || "",
          description: data.description || "",
          gradient: data.gradient || "from-cyan-500 to-blue-600",
          about: data.about || undefined,
          responsibilities: (data.responsibilities as string[] | null) || undefined,
          skills: (data.skills as string[] | null) || undefined
        });
      }

      setLoading(false);
    }

    fetchJob();
  }, [jobId]);

  const responsibilities = useMemo(() => {
    if (!job) return [];
    if (job.responsibilities && job.responsibilities.length > 0) return job.responsibilities;
    return responsibilitiesByDepartment[job.department] || [
      "Own outcomes with clear priorities and crisp communication",
      "Collaborate cross-functionally to deliver value fast",
      "Measure impact and iterate with data-driven decisions"
    ];
  }, [job]);

  const skills = useMemo(() => {
    if (!job) return [];
    if (job.skills && job.skills.length > 0) return job.skills;
    return skillsByDepartment[job.department] || [
      "Clear communication and stakeholder alignment",
      "Bias for action with a product mindset",
      "Comfort with fast-paced, high-ownership environments"
    ];
  }, [job]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!job) return;

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

      const path = `${job.id}/${Date.now()}-${resumeFile.name}`;
      const { error: uploadError } = await supabase.storage.from("resumes").upload(path, resumeFile, { upsert: true });
      if (uploadError) {
        throw uploadError;
      }

      const { data: publicUrlData } = supabase.storage.from("resumes").getPublicUrl(path);
      const resumeUrl = publicUrlData.publicUrl;

      const { error: insertError } = await supabase.from("job_applicants").insert({
        job_id: job.id,
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
      setFormData(defaultForm);
      setResumeFile(null);
    } catch (err) {
      console.error("Application submission failed:", err);
      const message = err instanceof Error ? err.message : "Unable to submit application.";
      setSubmitStatus({ type: "error", message });
    } finally {
      setIsApplying(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center text-slate-600">Loading role...</div>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <p className="text-lg text-slate-600 mb-6">We couldn't find that role.</p>
          <Link to="/resources/careers" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className={`pt-28 pb-16 bg-gradient-to-br ${job.gradient || "from-cyan-500 to-blue-600"} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '28px 28px'
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col gap-6">
            <Link to="/resources/careers" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-sm font-semibold">
                <Briefcase className="w-4 h-4" />
                {job.department || "Tasknova"}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-sm">
                <MapPin className="w-4 h-4" />
                {job.location || "Remote"}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-sm">
                <Clock className="w-4 h-4" />
                {job.type || "Full-time"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl">{job.title}</h1>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl">{job.description}</p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight / 2, behavior: "smooth" })}
                className="px-7 py-3 rounded-lg bg-white text-cyan-700 font-semibold shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                Apply Now
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <a
                href="#role-details"
                className="px-7 py-3 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                View Role Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Role Details */}
      <section id="role-details" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <h2 className="text-2xl font-bold">About Tasknova</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {job.about || "Tasknova is building the operating system for revenue execution. We combine conversation intelligence, coaching workflows, and real-time guidance so revenue teams can run every motion with precision."}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-cyan-600" />
                <h3 className="text-xl font-bold">Role Overview</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">{job.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-cyan-600" />
                  <h3 className="text-xl font-bold">Responsibilities</h3>
                </div>
                <ul className="space-y-3 text-slate-700 list-disc list-inside">
                  {responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <h3 className="text-xl font-bold">Skills Required</h3>
                </div>
                <ul className="space-y-3 text-slate-700 list-disc list-inside">
                  {skills.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700">
              <h3 className="text-xl font-bold mb-2">Role Snapshot</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{job.department || "Tasknova"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location || "Remote"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{job.type || "Full-time"}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-6 w-full px-4 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:-translate-y-0.5 transition-transform"
              >
                Apply Now
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-semibold mb-2">Why Tasknova</h4>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>Remote-first team across timezones</li>
                <li>High ownership, high impact environment</li>
                <li>Building category-defining revenue tech</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply-form" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-600" />
            <h2 className="text-2xl font-bold">Apply for this role</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            {submitStatus.type === "success" ? (
              <div className="space-y-4">
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-green-800">
                  <p className="font-semibold">Application submitted successfully.</p>
                  <p className="text-sm text-green-700">Thank you! We'll review your application and get back to you soon.</p>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <Link
                    to="/resources/careers"
                    className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Back to Roles
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus({ type: "", message: "" })}
                    className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90"
                  >
                    Submit Another
                  </button>
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
                    <label className="block text-sm font-semibold mb-1" htmlFor="location">Location / Timezone</label>
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
                  <Link
                    to="/resources/careers"
                    className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </Link>
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
      </section>

      <Footer />
    </div>
  );
}
