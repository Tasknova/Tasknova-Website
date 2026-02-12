import { motion } from "motion/react";
import { 
  Briefcase, MapPin, Clock, ArrowRight, Users, Heart, Zap, TrendingUp, 
  Globe, Coffee, Laptop, Award, Target, Lightbulb, Shield
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

// Open Positions
const openPositions = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build the future of revenue intelligence with React, TypeScript, and Python. Work on AI-powered conversation analysis and coaching systems.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Design intuitive experiences for sales teams. Focus on conversation intelligence UI, coaching workflows, and data visualization.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    description: "Help revenue leaders discover how Tasknova transforms sales execution. Build pipeline and qualify opportunities.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    title: "Machine Learning Engineer",
    department: "AI/ML",
    location: "Remote (US)",
    type: "Full-time",
    description: "Develop conversation intelligence models that extract insights from sales calls. Work with NLP, sentiment analysis, and predictive analytics.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US/Canada)",
    type: "Full-time",
    description: "Partner with revenue teams to drive adoption, measure ROI, and ensure customers achieve their goals with Tasknova.",
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Technical Writer",
    department: "Product",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Create documentation, guides, and educational content that helps teams master revenue intelligence.",
    gradient: "from-cyan-400 to-blue-500"
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
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-8 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:shadow-xl transition-all group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${position.gradient} text-white text-sm font-semibold`}>
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
                    
                    <div className="lg:w-auto">
                      <button className={`px-8 py-4 rounded-lg bg-gradient-to-r ${position.gradient} text-white font-semibold hover:opacity-90 transition-all group-hover:scale-105 whitespace-nowrap`}>
                        Apply Now
                        <ArrowRight className="inline-block ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Don't See Your Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-100 to-white border-2 border-slate-200 text-center"
            >
              <h3 className="text-2xl font-bold mb-3">Don't see your role?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                We're always looking for talented people. Send us your resume and let us know what you'd bring to Tasknova.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Send General Application
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </motion.div>
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
