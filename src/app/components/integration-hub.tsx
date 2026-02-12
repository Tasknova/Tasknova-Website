import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Calendar, Phone, Database, Mail, MessageSquare, 
  FileText, Zap, Video, Users, ArrowRight, CheckCircle2
} from "lucide-react";

import calendlyLogo from "../assets/calendly_logo.png";
import teamsLogo from "../assets/teams_logo.png";
import zapierLogo from "../assets/zapier_logo.png";

const integrationCategories = [
  {
    id: "crm",
    name: "CRM",
    icon: Database,
    color: "from-purple-500 to-pink-600",
    tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Microsoft Dynamics", "Freshsales"]
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: Calendar,
    color: "from-blue-500 to-cyan-600",
    tools: ["Google Calendar", "Outlook Calendar", "Calendly", "Microsoft Exchange"]
  },
  {
    id: "meeting",
    name: "Meeting",
    icon: Video,
    color: "from-green-500 to-emerald-600",
    tools: ["Zoom", "Google Meet", "Microsoft Teams", "Webex"]
  },
  {
    id: "dialers",
    name: "Dialers",
    icon: Phone,
    color: "from-orange-500 to-red-600",
    tools: ["Aircall", "RingCentral", "JustCall", "Dialpad", "Twilio"]
  },
  {
    id: "email",
    name: "Email",
    icon: Mail,
    color: "from-cyan-500 to-blue-600",
    tools: ["Gmail", "Outlook", "Office365", "Superhuman"]
  },
  {
    id: "communication",
    name: "Communication",
    icon: MessageSquare,
    color: "from-indigo-500 to-purple-600",
    tools: ["Slack", "Microsoft Teams Chat", "Intercom", "Drift"]
  },
  {
    id: "collaboration",
    name: "Collaboration",
    icon: FileText,
    color: "from-yellow-500 to-orange-600",
    tools: ["Notion", "ClickUp", "Asana", "Monday.com"]
  },
  {
    id: "automation",
    name: "Automation",
    icon: Zap,
    color: "from-pink-500 to-rose-600",
    tools: ["Zapier", "Make (Integromat)", "Workato", "Tray.io"]
  }
];

// Featured Integration Logos (from trust section for visual consistency)
const featuredIntegrations = [
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Asana", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" },
  { name: "Gmail", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" },
  { name: "Microsoft Teams", logo: teamsLogo },
  { name: "Calendly", logo: calendlyLogo },
  { name: "Zapier", logo: zapierLogo },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" }
];

export function IntegrationHub() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6"
          >
            50+ Native Integrations
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Works With Your<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Entire Tech Stack
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Seamlessly connect with the tools your revenue team already relies on. Set up in minutes, not weeks.
          </motion.p>
        </div>

        {/* Featured Integration Logos Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-20 max-w-6xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
              {featuredIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * index }}
                  whileHover={{ scale: 1.06, y: -6 }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="w-16 h-12 flex items-center justify-center mb-2">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="max-h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                    />
                  </div>
                  <span className="text-xs text-slate-400 text-center font-semibold group-hover:text-white transition-colors">
                    {integration.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Integration Categories Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Explore by Category</h3>
            <p className="text-slate-400">Click any category to see available integrations</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrationCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(isActive ? null : category.id)}
                  className="cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    animate={{
                      y: isActive ? -4 : 0
                    }}
                    className={`relative p-6 rounded-2xl transition-all duration-300 h-full ${
                      isActive
                        ? "bg-white shadow-[0px_20px_60px_rgba(0,0,0,0.3)]"
                        : "bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20"
                    }`}
                  >
                    {/* Gradient Border Effect */}
                    {isActive && (
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} p-[2px] -z-10`}>
                        <div className="w-full h-full bg-white rounded-2xl" />
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl mb-4 transition-all ${
                      isActive 
                        ? `bg-gradient-to-r ${category.color} shadow-lg` 
                        : `bg-gradient-to-r ${category.color} opacity-80 group-hover:opacity-100`
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Category Name */}
                    <h3 className={`font-bold text-lg mb-2 ${
                      isActive ? "text-slate-900" : "text-white"
                    }`}>
                      {category.name}
                    </h3>

                    {/* Tool Count */}
                    <p className={`text-sm ${
                      isActive ? "text-slate-600" : "text-slate-400"
                    }`}>
                      {category.tools.length} integrations
                    </p>

                    {/* Integration List - Expanded View */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-slate-200 pt-4 mt-4"
                      >
                        <div className="space-y-2">
                          {category.tools.map((tool, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-2 text-sm px-3 py-2 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors group/tool"
                            >
                              <CheckCircle2 className={`w-4 h-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                              <span className="font-medium">{tool}</span>
                              <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover/tool:opacity-100 transition-opacity" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-1 text-left">
              <h3 className="text-xl font-bold mb-2">Need a custom integration?</h3>
              <p className="text-slate-400">Our API makes it easy to build custom connections to any tool</p>
            </div>
            <Link
              to="/integrations"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg whitespace-nowrap inline-flex items-center"
            >
              View integrations
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}