import { motion } from "motion/react";
import { 
  Brain, TrendingUp, Target, MessageSquare, Users, ArrowRight, CheckCircle2, BarChart3
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

// Intelligence Education
const intelligenceGuides = [
  {
    title: "Conversation Intelligence",
    description: "Understanding how AI analyzes sales conversations to extract insights, detect buyer intent, and identify coaching opportunities. Goes beyond transcription to deliver execution intelligence that improves rep performance and deal outcomes.",
    icon: MessageSquare,
    gradient: "from-cyan-500 to-blue-600",
    outcomes: ["98% transcription accuracy", "Real-time sentiment analysis", "Automated coaching insights"],
    readTime: "15 min read"
  },
  {
    title: "Revenue Intelligence",
    description: "The practice of using conversation data, engagement signals, and performance patterns to predict revenue outcomes with precision. Connects what happens in customer interactions to forecast accuracy and pipeline health.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-600",
    outcomes: ["94% forecast accuracy", "Early deal risk detection", "Pipeline predictability"],
    readTime: "18 min read"
  },
  {
    title: "Coaching Intelligence",
    description: "AI-driven systems that identify skill gaps, extract winning behaviors from top performers, and generate personalized improvement plans. Scales manager effectiveness across entire revenue organizations.",
    icon: Users,
    gradient: "from-green-500 to-emerald-600",
    outcomes: ["40% faster ramp time", "Systematic skill development", "Scalable team coaching"],
    readTime: "12 min read"
  },
  {
    title: "Customer Intelligence",
    description: "Automated research and analysis that delivers deep customer context before every interaction. Combines firmographic data, conversation history, and buying signals into actionable pre-call briefs.",
    icon: Target,
    gradient: "from-blue-500 to-indigo-600",
    outcomes: ["Pre-call research automation", "Buyer signal detection", "Account relationship mapping"],
    readTime: "14 min read"
  }
];

// Deep Dive Topics
const deepDiveTopics = [
  {
    category: "Forecasting",
    title: "How to Achieve 95%+ Forecast Accuracy",
    description: "Learn the conversation signals and engagement patterns that predict deal outcomes with precision.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    category: "Deal Risk",
    title: "10 Conversation Signals That Predict Deal Risk",
    description: "Identify the subtle patterns in customer conversations that indicate a deal is heading off track.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    category: "Pipeline Intelligence",
    title: "Pipeline Health Beyond CRM Data",
    description: "How engagement signals reveal pipeline quality before deals stall.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    category: "Buyer Intent",
    title: "Reading Buyer Intent From Conversations",
    description: "AI-powered analysis that detects buying signals and objection patterns.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    category: "Win/Loss Analysis",
    title: "What Winners Say Differently: Data From 2M+ Calls",
    description: "Analysis reveals the specific language patterns that correlate with higher win rates.",
    gradient: "from-orange-500 to-red-600"
  },
  {
    category: "Stakeholder Mapping",
    title: "AI-Powered Stakeholder Intelligence",
    description: "Automatically map buying committees and identify missing relationships.",
    gradient: "from-cyan-400 to-blue-500"
  }
];

export function RevenueIntelligencePage() {
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
                    
                    <button className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r ${guide.gradient} text-white font-semibold hover:opacity-90 transition-opacity`}>
                      Read Guide
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE TOPICS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Deep Dive Topics</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive guides on specific revenue intelligence use cases
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deepDiveTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-50 border-2 border-slate-200 hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${topic.gradient} text-white text-xs font-semibold mb-3`}>
                    {topic.category}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-600 transition-colors">{topic.title}</h3>
                  <p className="text-slate-600 mb-4">{topic.description}</p>
                  
                  <div className="flex items-center gap-2 text-cyan-600 font-semibold">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
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
