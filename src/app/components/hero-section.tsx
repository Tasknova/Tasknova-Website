import { ArrowRight, TrendingUp, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { GLSLHills } from "./ui/glsl-hills";
import { VapiVoiceAgent } from "./vapi-voice-agent";
import { GradientButton } from "./ui/gradient-button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const buzzwords = [
    "Revenue Intelligence",
    "Coaching",
    "Conversation Analytics",
    "Performance Automation",
    "Customer Intelligence",
  ];
  const [buzzIndex, setBuzzIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBuzzIndex((prev) => (prev + 1) % buzzwords.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* GLSL hills background */}
      <div className="absolute inset-0 pointer-events-none">
        <GLSLHills />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-20 container mx-auto px-4 pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
            <span className="text-sm font-medium">AI-Powered Revenue Intelligence Platform</span>
          </motion.div>

          {/* Main Headline with Letter Animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block">Transform Every Customer Interaction Into</span>
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent md:-ml-2">
              {buzzwords[buzzIndex]}
            </span>
          </motion.h1>

          {/* Inline voice agent control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center mb-10"
          >
            <VapiVoiceAgent inline className="w-full max-w-md" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GradientButton asChild className="group shadow-xl hover:shadow-2xl transition-all">
              <Link to="/book-demo" className="flex items-center gap-2">
                Book Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </GradientButton>

            <GradientButton
              asChild
              variant="variant"
              className="group shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/book-demo" className="flex items-center gap-2">
                Start Free Trial
                <span aria-hidden className="opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </Link>
            </GradientButton>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-sm text-slate-500 mt-6"
          >
            No credit card required • 14-day free trial • Setup in minutes
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Stat Card 1 */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  42%
                </div>
              </div>
              <p className="text-slate-600 font-medium">Average increase in win rates</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  3.5x
                </div>
              </div>
              <p className="text-slate-600 font-medium">Faster onboarding for new reps</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  94%
                </div>
              </div>
              <p className="text-slate-600 font-medium">Forecast accuracy improvement</p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md rounded-xl p-8 border border-cyan-500/20">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">AI Conversation Intelligence</p>
                  <p className="text-sm text-slate-600">Capture, transcribe, and analyze every interaction with company specific scoring</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">Automated Coaching</p>
                  <p className="text-sm text-slate-600">Personalized performance improvement plans built from real interaction data</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">Deal Risk Detection</p>
                  <p className="text-sm text-slate-600">Identify pipeline leakage, buyer hesitation, and execution gaps before deals are lost</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">Unified Intelligence</p>
                  <p className="text-sm text-slate-600">One intelligence layer connecting conversations, deals, performance, and customer context</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">Customer Intelligence</p>
                  <p className="text-sm text-slate-600">Understand every account before, during, and after conversations using AI generated company context, buyer signals, and lifecycle insights</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}