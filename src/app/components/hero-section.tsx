import { ArrowRight, TrendingUp, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20 md:py-32">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
            <span className="text-sm">AI-Powered Revenue Intelligence Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            All in One AI Platform for{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Revenue Intelligence
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Coaching
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Conversation Analytics
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Performance Automation
            </span>
            , and{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Customer Intelligence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Tasknova transforms calls, demos, chats, emails, and customer signals into company specific intelligence that improves deal outcomes, strengthens coaching, and eliminates revenue execution gaps.
            Start with the product you need today. Expand into a complete revenue intelligence system as your team scales.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/book-demo">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg group"
              >
                Book Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-slate-200 hover:border-cyan-500 px-8 py-6 text-lg !text-slate-900 hover:!text-cyan-700 bg-white"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Subtext */}
          <p className="text-sm text-slate-500 mt-6">
            No credit card required • 14-day free trial • Setup in minutes
          </p>
        </div>

        {/* Stats Grid - Replace Large Image */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
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
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
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
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
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
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/20">
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
        </div>
      </div>
    </section>
  );
}