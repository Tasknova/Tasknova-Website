import { motion } from "motion/react";
import { 
  Target, Heart, Zap, Users, TrendingUp, Shield, 
  CheckCircle2, ArrowRight, Lightbulb, Award, ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

// Core Values
const coreValues = [
  {
    icon: Shield,
    title: "Transparency",
    description: "We believe in open communication, honest feedback, and clear expectations with customers, partners, and team members.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "We continuously explore new approaches to revenue intelligence, asking hard questions about how sales teams can execute better.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We iterate relentlessly on our product, our processes, and ourselves to deliver better outcomes for revenue teams.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Heart,
    title: "Customer Impact",
    description: "Every feature, every decision, every line of code exists to help revenue teams close more deals and coach more effectively.",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: Zap,
    title: "Execution Excellence",
    description: "We don't just talk about execution intelligence—we practice it. Speed, precision, and accountability drive everything we do.",
    gradient: "from-blue-500 to-indigo-600"
  }
];

// Tasknova Principles
const principles = [
  {
    title: "Focus on real execution data",
    description: "Generic insights don't drive behavior change. We build intelligence models trained on your company's actual conversations, playbooks, and success patterns so coaching and deal insights reflect how your team really sells.",
    icon: Target
  },
  {
    title: "AI should augment, not replace humans",
    description: "Revenue execution requires human judgment, relationship skills, and strategic thinking. AI should make managers better coaches and reps more effective—not eliminate the human element from sales.",
    icon: Users
  },
  {
    title: "Coaching drives predictable revenue",
    description: "Technology can't close deals—people do. Consistent, data-driven coaching is the most reliable path to repeatable revenue growth. Our platform exists to make coaching scalable and measurable.",
    icon: Award
  },
  {
    title: "Intelligence should be actionable",
    description: "Dashboards full of metrics don't improve execution. Intelligence is only valuable when it tells you exactly what to do next: which deal needs attention, which rep needs coaching, which skill to improve.",
    icon: CheckCircle2
  }
];

// Vision & Mission
const visionMission = {
  vision: {
    title: "Our Vision",
    description: "Help revenue teams make better decisions using real conversation intelligence.",
    icon: Target,
    gradient: "from-cyan-500 to-blue-600"
  },
  mission: {
    title: "Our Mission",
    description: "Turn customer interactions into measurable coaching and revenue outcomes.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-600"
  }
};

export function AboutCompany() {
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. COMPANY STORY BLOCK */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6"
            >
              About Tasknova
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              Reimagining Revenue Execution With AI
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-xl text-slate-300 leading-relaxed"
            >
              <p>
                Sales teams have access to more data than ever before—CRM dashboards, email analytics, conversation recordings—yet revenue remains unpredictable, reps struggle to improve, and managers lack time to coach effectively.
              </p>
              
              <p>
                <strong className="text-white">The problem isn't lack of data. It's the absence of actionable execution intelligence.</strong>
              </p>
              
              <p>
                Tasknova exists to solve this. We believe that every customer conversation contains signals about deal health, coaching opportunities, and revenue risk. Our AI Revenue Intelligence Platform turns those conversations into precise, company-specific insights that help teams execute with confidence.
              </p>
              
              <p>
                We're building the future of revenue execution—where AI doesn't replace human judgment, but amplifies it. Where coaching becomes scalable. Where forecasting becomes predictable. Where every conversation drives measurable improvement.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />
      </section>

      {/* 2. VISION & MISSION CARDS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {Object.values(visionMission).map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:shadow-2xl transition-all"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.gradient} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                    <p className="text-xl text-slate-700 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Our Core Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-600 max-w-3xl mx-auto"
              >
                The principles that guide how we build products, serve customers, and grow as a team
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.slice(0, 3).map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:shadow-xl transition-all group"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Second Row - 2 columns centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
              {coreValues.slice(3).map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:shadow-xl transition-all group"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TASKNOVA PRINCIPLES SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                What We Believe
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-300"
              >
                The foundational principles that shape how we approach revenue intelligence
              </motion.p>
            </div>
            
            <div className="space-y-4">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                const isExpanded = expandedPrinciple === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedPrinciple(isExpanded ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">{principle.title}</h3>
                      </div>
                      <ChevronDown className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-lg text-slate-300 leading-relaxed pl-16">
                          {principle.description}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP / CULTURE PREVIEW PLACEHOLDER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-16 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-slate-200"
            >
              <Users className="w-16 h-16 mx-auto mb-6 text-cyan-600" />
              <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                We're a distributed team of engineers, designers, and revenue operators building the future of sales execution intelligence.
              </p>
              <p className="text-slate-500 italic">
                Team profiles and culture content coming soon
              </p>
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
              Ready to Transform Your Revenue Execution?
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

export default AboutCompany;
