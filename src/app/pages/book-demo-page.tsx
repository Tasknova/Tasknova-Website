import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Users, Briefcase, Mail, Phone, Building2, Target, CheckCircle2, Sparkles } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { handleDemoSubmit } from "../lib/demo-form-handler";

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees"
];

const departments = [
  "Sales",
  "Revenue Operations",
  "Sales Enablement",
  "Customer Success",
  "Marketing",
  "Executive Leadership",
  "Other"
];

const challenges = [
  "Improve sales rep performance",
  "Better forecast accuracy",
  "Scale coaching efforts",
  "Increase win rates",
  "Reduce rep ramp time",
  "Improve deal visibility",
  "Capture conversation insights",
  "Other"
];

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    companySize: "",
    department: "",
    challenge: "",
    currentTools: "",
    additionalInfo: ""
  });

  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleChallenge = (challenge: string) => {
    if (selectedChallenges.includes(challenge)) {
      setSelectedChallenges(selectedChallenges.filter(c => c !== challenge));
    } else {
      setSelectedChallenges([...selectedChallenges, challenge]);
    }
  };

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const fd = new FormData(e.currentTarget);
      fd.append("notes", selectedChallenges.join(", "));
      await handleDemoSubmit(fd);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center py-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-12 border border-slate-200">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
              <p className="text-xl text-slate-600 mb-6">
                We've received your demo request and our team will reach out within 24 hours to schedule your personalized demo.
              </p>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 mb-8 border border-cyan-200">
                <h3 className="font-bold mb-3">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Demo Confirmation</p>
                      <p className="text-sm text-slate-600">You'll receive a calendar invite within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Personalized Demo</p>
                      <p className="text-sm text-slate-600">45-minute walkthrough tailored to your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Free Trial Setup</p>
                      <p className="text-sm text-slate-600">Start testing Tasknova with your team immediately</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Return to Homepage
                </button>
              </a>
            </div>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-semibold">See Tasknova in Action</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Book Your Personalized{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Demo
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 max-w-3xl mx-auto"
              >
                Get a customized walkthrough of how Tasknova can transform your revenue operations. 
                Our team will show you exactly how to achieve your goals.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-1 space-y-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                  <h3 className="text-xl font-bold mb-4">What You'll See</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Live Product Tour</p>
                        <p className="text-sm text-slate-600">See Tasknova in action with real examples</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Use Case Discussion</p>
                        <p className="text-sm text-slate-600">Tailored to your specific challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">ROI Calculator</p>
                        <p className="text-sm text-slate-600">See projected impact on your metrics</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Q&A Session</p>
                        <p className="text-sm text-slate-600">Get all your questions answered</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Trusted By</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="font-bold">5,000+</p>
                        <p className="text-sm text-slate-300">Revenue teams</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="font-bold">42%</p>
                        <p className="text-sm text-slate-300">Avg. win rate increase</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="font-bold">98%</p>
                        <p className="text-sm text-slate-300">Customer satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                          Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company and Title */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                          Company Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-semibold text-slate-700 mb-2">
                          Job Title *
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            required
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                            placeholder="VP of Sales"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Size and Department */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-semibold text-slate-700 mb-2">
                          Company Size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                        >
                          <option value="">Select company size</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="department" className="block text-sm font-semibold text-slate-700 mb-2">
                          Department *
                        </label>
                        <select
                          id="department"
                          name="department"
                          required
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                        >
                          <option value="">Select department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        What are your main challenges? (Select all that apply) *
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {challenges.map((challenge) => (
                          <div
                            key={challenge}
                            onClick={() => toggleChallenge(challenge)}
                            className={`px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedChallenges.includes(challenge)
                                ? "border-cyan-500 bg-cyan-50 text-cyan-900"
                                : "border-slate-200 bg-white hover:border-cyan-300"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                selectedChallenges.includes(challenge)
                                  ? "border-cyan-500 bg-cyan-500"
                                  : "border-slate-300"
                              }`}>
                                {selectedChallenges.includes(challenge) && (
                                  <CheckCircle2 className="w-4 h-4 text-white" />
                                )}
                              </div>
                              <span className="text-sm font-medium">{challenge}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Current Tools */}
                    <div>
                      <label htmlFor="currentTools" className="block text-sm font-semibold text-slate-700 mb-2">
                        What tools are you currently using?
                      </label>
                      <input
                        type="text"
                        id="currentTools"
                        name="currentTools"
                        value={formData.currentTools}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                        placeholder="e.g., Salesforce, Gong, Outreach"
                      />
                    </div>

                    {/* Additional Info */}
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-semibold text-slate-700 mb-2">
                        Anything else you'd like us to know?
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                        placeholder="Tell us more about your goals and needs..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      {error && (
                        <p className="text-sm text-red-600 text-center mb-2">{error}</p>
                      )}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Submitting..." : "Book My Demo"}
                        <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <p className="text-xs text-slate-500 text-center mt-4">
                        By submitting this form, you agree to our Privacy Policy. We'll reach out within 24 hours.
                      </p>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
