import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mic, TrendingUp, AlertTriangle, BarChart3, 
  Mail, MessageSquare, Zap, Target,
  Users, Brain, BookOpen, LineChart,
  ChevronDown
} from "lucide-react";

const insightFeatures = [
  {
    id: "transcription",
    icon: Mic,
    title: "Call Transcription",
    description: "Automatically capture and transcribe every customer conversation with 98% accuracy across 40+ languages.",
    image: "https://images.unsplash.com/photo-1731487068413-e5509cf7338a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsJTIwcmVjb3JkaW5nJTIwaW50ZXJmYWNlJTIwd2F2ZWZvcm18ZW58MXx8fHwxNzcwMzY1NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "sentiment",
    icon: TrendingUp,
    title: "Sentiment Tracking",
    description: "AI-powered sentiment analysis identifies buyer intent, engagement levels, and conversation momentum in real-time.",
    image: "https://images.unsplash.com/photo-1666537072206-6a7a01ecb7d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW50aW1lbnQlMjBhbmFseXNpcyUyMGdyYXBoJTIwY2hhcnR8ZW58MXx8fHwxNzcwMzY1NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "alerts",
    icon: AlertTriangle,
    title: "Deal Risk Alerts",
    description: "Get instant notifications when deals show warning signs—missed objections, pricing concerns, or stakeholder gaps.",
    image: "https://images.unsplash.com/photo-1611741853473-810f7c7309ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJuaW5nJTIwZGFzaGJvYXJkJTIwcmlzayUyMGluZGljYXRvciUyMHJlZHxlbnwxfHx8fDE3NzAzNjU4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "scoring",
    icon: BarChart3,
    title: "Conversation Scoring",
    description: "Automatically score every interaction against your ideal customer profile and buying signals.",
    image: "https://images.unsplash.com/photo-1714449349503-ea9b1d6ed9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY29yZWNhcmQlMjByYXRpbmclMjBzeXN0ZW0lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwMzY1NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const engageFeatures = [
  {
    id: "email",
    icon: Mail,
    title: "Email Intelligence",
    description: "Track opens, clicks, and engagement patterns. AI suggests optimal send times and content personalization.",
    image: "https://images.unsplash.com/photo-1683117927786-f146451082fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGluYm94JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDI4NzUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "omnichannel",
    icon: MessageSquare,
    title: "Omnichannel Tracking",
    description: "Unified view of all customer touchpoints—calls, emails, meetings, and chats—in one timeline.",
    image: "https://images.unsplash.com/photo-1585905208683-e47c3b3d2bc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmlmaWVkJTIwdGltZWxpbmUlMjBjb21tdW5pY2F0aW9ufGVufDF8fHx8MTc3MDM2NTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "engagement-scoring",
    icon: Target,
    title: "Engagement Scoring",
    description: "Health metrics for every account based on response time, interaction frequency, and sentiment trends.",
    image: "https://images.unsplash.com/photo-1752842936785-39ee0a9b5286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBzY29yZSUyMG1ldGVyJTIwZ2F1Z2V8ZW58MXx8fHwxNzcwMzY1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "automation",
    icon: Zap,
    title: "Follow-up Automation",
    description: "Smart reminders and suggested next steps based on conversation context and customer behavior.",
    image: "https://images.unsplash.com/photo-1762330469300-2732c258c686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwcmVtaW5kZXIlMjBub3RpZmljYXRpb258ZW58MXx8fHwxNzcwMzY1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const coachFeatures = [
  {
    id: "coaching",
    icon: Users,
    title: "AI Coaching Insights",
    description: "Personalized coaching recommendations based on actual performance data and winning behaviors.",
    image: "https://images.unsplash.com/photo-1758875568756-37a9c5c1a4f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBjb2FjaGluZyUyMHNlc3Npb258ZW58MXx8fHwxNzcwMzY1NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "performance",
    icon: LineChart,
    title: "Performance Tracking",
    description: "Compare individual and team metrics against benchmarks. Identify top performers and skill gaps.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMG1ldHJpY3MlMjBjaGFydCUyMGdyYXBofGVufDF8fHx8MTc3MDM2NTQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "skill-gaps",
    icon: Target,
    title: "Skill Gap Analysis",
    description: "Automatically detect objection handling, discovery techniques, and closing skills that need improvement.",
    image: "https://images.unsplash.com/photo-1643706755594-d0e8d8d42a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVja2xpc3QlMjBza2lsbHMlMjBhc3Nlc3NtZW50fGVufDF8fHx8MTc3MDM2NTQ4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "playbooks",
    icon: BookOpen,
    title: "Learning Playbooks",
    description: "Auto-generated training content from your best calls. Turn winning behaviors into repeatable processes.",
    image: "https://images.unsplash.com/photo-1715929602089-552e57a48810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlkZWJvb2slMjBtYW51YWwlMjBkb2N1bWVudGF0aW9ufGVufDF8fHx8MTc3MDM2NTQ4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const showcases = [
  {
    id: "insight",
    title: "Tasknova Insight",
    subtitle: "Conversation Intelligence That Never Misses a Beat",
    gradient: "from-cyan-500 to-blue-600",
    features: insightFeatures,
    heroImage: "https://images.unsplash.com/photo-1758691736542-c437fea2c673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXJzYXRpb24lMjBpbnRlbGxpZ2VuY2UlMjBkYXNoYm9hcmQlMjBtb2Rlcm58ZW58MXx8fHwxNzcwMzYzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "engage",
    title: "Tasknova Engage",
    subtitle: "Orchestrate Every Customer Touchpoint",
    gradient: "from-blue-500 to-indigo-600",
    features: engageFeatures,
    heroImage: "https://images.unsplash.com/photo-1762340275877-32d64414d8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGVuZ2FnZW1lbnQlMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzAzNjM2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "coach",
    title: "Tasknova Coach",
    subtitle: "Scale Your Best Performers Across Your Team",
    gradient: "from-cyan-400 to-blue-500",
    features: coachFeatures,
    heroImage: "https://images.unsplash.com/photo-1758691736508-a85d1f7d5a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FjaGluZyUyMHBlcmZvcm1hbmNlJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDM2MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080"
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

        {/* Two Column Layout - 60/40 Split */}
        <div className="grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-center">
          
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
                  className="w-full h-auto object-cover aspect-[4/3]"
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