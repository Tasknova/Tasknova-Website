import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mic, TrendingUp, AlertTriangle, BarChart3, 
  Mail, MessageSquare, Zap, Target,
  Users, Brain, BookOpen, LineChart,
  ChevronDown
} from "lucide-react";
import image1 from "../assets/image_1.jpeg";
import image2 from "../assets/image_2.jpeg";
import image3 from "../assets/image_3.png";
import image4 from "../assets/image_4.png";
import image5 from "../assets/image_5.png";
import image6 from "../assets/image_6.jpeg";
import image7 from "../assets/image_7.png";
import image8 from "../assets/image_8.jpeg";
import image9 from "../assets/image_9.png";
import image10 from "../assets/image_10.jpeg";
import image11 from "../assets/image_11.jpeg";
import image12 from "../assets/image_12.jpeg";
import insightHero from "../assets/Tasknova_insights.jpeg";
import engageHero from "../assets/tasknova_engage.jpeg";
import coachingHero from "../assets/Tasknova_coaching.jpeg";

const insightFeatures = [
  {
    id: "transcription",
    icon: Mic,
    title: "Call Transcription",
    description: "Automatically capture and transcribe every customer conversation with 98% accuracy across 40+ languages.",
    image: image1
  },
  {
    id: "sentiment",
    icon: TrendingUp,
    title: "Sentiment Tracking",
    description: "AI-powered sentiment analysis identifies buyer intent, engagement levels, and conversation momentum in real-time.",
    image: image2
  },
  {
    id: "alerts",
    icon: AlertTriangle,
    title: "Deal Risk Alerts",
    description: "Get instant notifications when deals show warning signs—missed objections, pricing concerns, or stakeholder gaps.",
    image: image3
  },
  {
    id: "scoring",
    icon: BarChart3,
    title: "Conversation Scoring",
    description: "Automatically score every interaction against your ideal customer profile and buying signals.",
    image: image4
  }
];

const engageFeatures = [
  {
    id: "email",
    icon: Mail,
    title: "Email Intelligence",
    description: "Track opens, clicks, and engagement patterns. AI suggests optimal send times and content personalization.",
    image: image5
  },
  {
    id: "omnichannel",
    icon: MessageSquare,
    title: "Omnichannel Tracking",
    description: "Unified view of all customer touchpoints—calls, emails, meetings, and chats—in one timeline.",
    image: image6
  },
  {
    id: "engagement-scoring",
    icon: Target,
    title: "Engagement Scoring",
    description: "Health metrics for every account based on response time, interaction frequency, and sentiment trends.",
    image: image7
  },
  {
    id: "automation",
    icon: Zap,
    title: "Follow-up Automation",
    description: "Smart reminders and suggested next steps based on conversation context and customer behavior.",
    image: image8
  }
];

const coachFeatures = [
  {
    id: "coaching",
    icon: Users,
    title: "AI Coaching Insights",
    description: "Personalized coaching recommendations based on actual performance data and winning behaviors.",
    image: image9
  },
  {
    id: "performance",
    icon: LineChart,
    title: "Performance Tracking",
    description: "Compare individual and team metrics against benchmarks. Identify top performers and skill gaps.",
    image: image10
  },
  {
    id: "skill-gaps",
    icon: Target,
    title: "Skill Gap Analysis",
    description: "Automatically detect objection handling, discovery techniques, and closing skills that need improvement.",
    image: image11
  },
  {
    id: "playbooks",
    icon: BookOpen,
    title: "Learning Playbooks",
    description: "Auto-generated training content from your best calls. Turn winning behaviors into repeatable processes.",
    image: image12
  }
];

const showcases = [
  {
    id: "insight",
    title: "Tasknova Insight",
    subtitle: "Conversation Intelligence That Never Misses a Beat",
    gradient: "from-cyan-500 to-blue-600",
    features: insightFeatures,
    heroImage: insightHero
  },
  {
    id: "engage",
    title: "Tasknova Engage",
    subtitle: "Orchestrate Every Customer Touchpoint",
    gradient: "from-blue-500 to-indigo-600",
    features: engageFeatures,
    heroImage: engageHero
  },
  {
    id: "coach",
    title: "Tasknova Coach",
    subtitle: "Scale Your Best Performers Across Your Team",
    gradient: "from-cyan-400 to-blue-500",
    features: coachFeatures,
    heroImage: coachingHero
  }
];

export function FeatureShowcase() {
  return (
    <div className="bg-slate-50">
      {showcases.map((showcase, showcaseIndex) => (
        <ShowcaseSection 
          key={showcase.id} 
          showcase={showcase} 
          isEven={showcaseIndex % 2 === 0}
        />
      ))}
    </div>
  );
}

function ShowcaseSection({ showcase, isEven }: { showcase: typeof showcases[0], isEven: boolean }) {
  const [activeFeature, setActiveFeature] = useState(showcase.features[0].id);
  const currentFeature = showcase.features.find(f => f.id === activeFeature) || showcase.features[0];

  return (
    <section className={`py-20 ${isEven ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{showcase.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{showcase.subtitle}</p>
        </div>

        {/* Two Column Layout - 45/55 Split */}
        <div className="grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Feature Content */}
          <div className="relative">
            {/* Background Accent - Subtle Radial Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${showcase.gradient} opacity-5 blur-3xl rounded-full transform -translate-y-24 pointer-events-none`} />
            
            {/* Feature Accordion Block */}
            <div className="space-y-4 relative z-10 max-w-[520px]">
              {showcase.features.map((feature) => {
                const FeatureIcon = feature.icon;
                const isActive = activeFeature === feature.id;
                
                return (
                  <motion.button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full text-left rounded-2xl transition-all duration-200 overflow-hidden ${
                      isActive
                        ? `bg-gradient-to-r ${showcase.gradient} text-white shadow-2xl`
                        : "bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg"
                    }`}
                    whileHover={{ scale: isActive ? 1 : 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Accordion Header */}
                    <div className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${
                          isActive 
                            ? 'bg-white/20' 
                            : 'bg-slate-100'
                        }`}>
                          <FeatureIcon className={`w-6 h-6 ${
                            isActive ? 'text-white' : 'text-slate-700'
                          }`} />
                        </div>
                        <span className="font-semibold text-xl">{feature.title}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className={`w-5 h-5 ${
                          isActive ? 'text-white' : 'text-slate-400'
                        }`} />
                      </motion.div>
                    </div>

                    {/* Accordion Content (Expanded State) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-white/95 leading-relaxed text-lg">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            {/* Trust Indicators - Metric Highlight Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[520px]"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${showcase.gradient}`} />
                <div>
                  <p className="text-xl font-bold text-slate-900">98%</p>
                  <p className="text-xs text-slate-600">Transcription</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${showcase.gradient}`} />
                <div>
                  <p className="text-xl font-bold text-slate-900">40+</p>
                  <p className="text-xs text-slate-600">Languages</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${showcase.gradient}`} />
                <div>
                  <p className="text-xl font-bold text-slate-900">Real-time</p>
                  <p className="text-xs text-slate-600">Insights</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50">
              {/* Image Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${showcase.gradient} opacity-10 z-10 pointer-events-none`} />
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeFeature}
                  src={currentFeature.image} 
                  alt={currentFeature.title}
                  className="w-full h-auto"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
            
            {/* Floating Accent Elements */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${showcase.gradient} opacity-20 rounded-full blur-2xl`} />
            <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${showcase.gradient} opacity-15 rounded-full blur-3xl`} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}