import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, MessageSquare, GraduationCap, Zap, TrendingUp, Users, BarChart3, Mail, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import insightImage from "../assets/Tasknova_insights.jpeg";
import engageImage from "../assets/tasknova_engage.jpeg";
import coachingImage from "../assets/Tasknova_coaching.jpeg";

const products = [
  {
    id: "insight",
    name: "Tasknova Insight",
    icon: Brain,
    tagline: "Turn conversations into competitive intelligence",
    description: "AI powered conversation intelligence that captures, analyzes, and scores every customer interaction against your company playbook.",
    features: [
      { icon: Zap, text: "Real time call transcription and recording" },
      { icon: TrendingUp, text: "Sentiment analysis and deal scoring" },
      { icon: BarChart3, text: "Revenue forecasting and risk alerts" },
      { icon: Target, text: "Topic tracking and keyword detection" }
    ],
    integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Microsoft Dynamics"],
    image: insightImage,
    gradient: "from-cyan-500 to-blue-600",
    link: "/products/insight"
  },
  {
    id: "engage",
    name: "Tasknova Engage",
    icon: MessageSquare,
    tagline: "Orchestrate every customer touchpoint",
    description: "Track, analyze, and optimize customer engagement across email, messaging, and outreach channels using AI driven engagement intelligence.",
    features: [
      { icon: Mail, text: "Email and engagement tracking" },
      { icon: MessageSquare, text: "Omnichannel communication insights" },
      { icon: Zap, text: "Follow up automation and scheduling" },
      { icon: TrendingUp, text: "Engagement scoring and buyer intent detection" }
    ],
    integrations: ["Salesforce", "HubSpot", "Outreach", "SalesLoft", "Gmail", "Outlook"],
    image: engageImage,
    gradient: "from-blue-500 to-indigo-600",
    link: "/products/engage"
  },
  {
    id: "coach",
    name: "Tasknova Coach",
    icon: GraduationCap,
    tagline: "Scale top performers across your entire team",
    description: "AI driven coaching intelligence that identifies performance gaps and generates personalized improvement plans.",
    features: [
      { icon: BarChart3, text: "Rep level performance analytics" },
      { icon: Target, text: "Skill gap detection and benchmarking" },
      { icon: Users, text: "Winning behavior replication" },
      { icon: Brain, text: "AI mock call practice and coaching insights" }
    ],
    integrations: ["Salesforce", "HubSpot", "Gong", "Chorus", "Zoom", "Microsoft Teams"],
    image: coachingImage,
    gradient: "from-cyan-400 to-blue-500",
    link: "/products/coach"
  }
];

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState("insight");
  const activeProduct = products.find(p => p.id === activeTab) || products[0];
  const Icon = activeProduct.icon;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            One Platform. Three Intelligence Products.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the module you need today. Seamlessly expand as your revenue operations mature.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product) => {
            const ProductIcon = product.icon;
            const isActive = activeTab === product.id;
            return (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`relative flex flex-col gap-3 px-6 py-4 rounded-xl transition-all ${
                  isActive
                    ? "bg-white text-slate-900 shadow-2xl scale-105 border-2 border-slate-200"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700"
                }`}
              >
                {/* Header with Icon and Name */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    isActive 
                      ? `bg-gradient-to-r ${product.gradient}` 
                      : "bg-slate-200"
                  }`}>
                    <ProductIcon className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-slate-600"
                    }`} />
                  </div>
                  <span className="font-semibold">{product.name}</span>
                </div>

                {/* CRM Integrations - Only show when active */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-200 pt-3 mt-1"
                  >
                    <p className="text-xs text-slate-500 mb-2 font-medium">INTEGRATES WITH:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.integrations.map((integration, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md font-medium"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-[1200px] mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <div className="max-w-[480px]">
                <div className={`inline-flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r ${activeProduct.gradient} mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">{activeProduct.name}</h3>
                <p className="text-xl text-slate-600 mb-4">{activeProduct.tagline}</p>
                <p className="text-slate-600 mb-6">{activeProduct.description}</p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {activeProduct.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${activeProduct.gradient}`}>
                          <FeatureIcon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700">{feature.text}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <Link to={activeProduct.link}>
                  <Button className={`bg-gradient-to-r ${activeProduct.gradient} hover:opacity-90 text-white`}>
                    Explore {activeProduct.name}
                  </Button>
                </Link>
              </div>

              {/* Right - Image (Fixed Size Container) */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative lg:ml-auto"
              >
                {/* Decorative Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activeProduct.gradient} opacity-20 rounded-2xl blur-2xl`} />
                
                {/* Image Container - Auto height to preserve aspect ratio */}
                <div className="relative w-full lg:w-[520px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <img 
                    src={activeProduct.image} 
                    alt={activeProduct.name}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}