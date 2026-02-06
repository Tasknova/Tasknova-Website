import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, MessageSquare, GraduationCap, Zap, TrendingUp, Users, BarChart3, Mail, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: "insight",
    name: "Tasknova Insight",
    icon: Brain,
    tagline: "Turn conversations into competitive intelligence",
    description: "AI-powered conversation intelligence that captures, transcribes, and analyzes every customer interaction to surface actionable insights.",
    features: [
      { icon: Zap, text: "Real-time call transcription & recording" },
      { icon: TrendingUp, text: "Sentiment analysis & deal scoring" },
      { icon: BarChart3, text: "Revenue forecasting & risk alerts" },
      { icon: Target, text: "Topic tracking & keyword detection" }
    ],
    integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Microsoft Dynamics"],
    image: "https://images.unsplash.com/photo-1750816204148-5d02aff367cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFuYWx5dGljcyUyMHRyYW5zY3JpcHRpb24lMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NzAzNjU3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-cyan-500 to-blue-600",
    link: "/products/insight"
  },
  {
    id: "engage",
    name: "Tasknova Engage",
    icon: MessageSquare,
    tagline: "Orchestrate omnichannel customer engagement",
    description: "Track and optimize every touchpoint across calls, emails, and meetings. Understand engagement patterns and automate intelligent follow-ups.",
    features: [
      { icon: Mail, text: "Email intelligence & tracking" },
      { icon: MessageSquare, text: "Multi-channel interaction analytics" },
      { icon: TrendingUp, text: "Engagement scoring & health metrics" },
      { icon: Zap, text: "Automated follow-up recommendations" }
    ],
    integrations: ["Salesforce", "HubSpot", "Outreach", "SalesLoft", "Gmail", "Outlook"],
    image: "https://images.unsplash.com/photo-1762340275877-32d64414d8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGVuZ2FnZW1lbnQlMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzAzNjM2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-blue-500 to-indigo-600",
    link: "/products/engage"
  },
  {
    id: "coach",
    name: "Tasknova Coach",
    icon: GraduationCap,
    tagline: "Scale your best performers with AI coaching",
    description: "Automatically identify skill gaps, deliver personalized coaching insights, and accelerate rep performance with data-driven playbooks.",
    features: [
      { icon: Users, text: "AI-powered coaching recommendations" },
      { icon: BarChart3, text: "Performance benchmarking & tracking" },
      { icon: Target, text: "Skill gap analysis & training paths" },
      { icon: Brain, text: "Automated playbook creation" }
    ],
    integrations: ["Salesforce", "HubSpot", "Gong", "Chorus", "Zoom", "Microsoft Teams"],
    image: "https://images.unsplash.com/photo-1758691736508-a85d1f7d5a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FjaGluZyUyMHBlcmZvcm1hbmNlJTIwYW5hbHl0aWNzJTIwcGxhdGZvcm18ZW58MXx8fHwxNzcwMzY1NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
            One Platform. Three Powerful Products.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the module you need today, seamlessly expand as your revenue operations mature.
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
                
                {/* Fixed Size Image Container: 520px x 360px */}
                <div className="relative w-full lg:w-[520px] h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <img 
                    src={activeProduct.image} 
                    alt={activeProduct.name}
                    className="w-full h-full object-cover"
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