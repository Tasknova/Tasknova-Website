import { motion } from "motion/react";
import { useState } from "react";
import { 
  Calendar, Phone, Database, Mail, MessageSquare, 
  FileText, Zap, Video, Users 
} from "lucide-react";

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

export function IntegrationHub() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Connects With Your Entire Tech Stack
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            50+ native integrations mean Tasknova works seamlessly with the tools your team already uses
          </p>
        </div>

        {/* Interactive Integration Categories */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrationCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(isActive ? null : category.id)}
                  className="cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.02 : 1
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`relative p-6 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.08)] border border-slate-200"
                        : `bg-gradient-to-r ${category.color} shadow-lg hover:shadow-xl`
                    }`}
                  >
                    {/* Icon and Title */}
                    <div className="flex flex-col items-center mb-4">
                      <div className={`p-3 rounded-lg mb-3 ${
                        isActive 
                          ? `bg-gradient-to-r ${category.color}` 
                          : "bg-white/20"
                      }`}>
                        <Icon className={`w-8 h-8 ${
                          isActive ? "text-white" : "text-white"
                        }`} />
                      </div>
                      <h3 className={`font-bold text-center ${
                        isActive ? "text-slate-900" : "text-white"
                      }`}>
                        {category.name}
                      </h3>
                    </div>

                    {/* Integration List - Only show when active */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="border-t border-slate-200 pt-4 mt-2"
                      >
                        <p className="text-xs text-slate-500 mb-3 font-semibold tracking-wide">
                          INTEGRATES WITH:
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {category.tools.map((tool, idx) => (
                            <div
                              key={idx}
                              className="text-xs px-3 py-2 bg-slate-50 text-slate-700 rounded-lg font-medium flex items-center gap-2"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                              {tool}
                            </div>
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
      </div>
    </section>
  );
}