import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { 
  Database, Calendar, Video, Phone, Mail, MessageSquare,
  FileText, Zap, BarChart3, DollarSign, Users, Globe,
  CheckCircle2, ArrowRight, Search, Filter
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const logoIconMap: Record<string, string> = {
  "Salesforce": "logos:salesforce",
  "HubSpot": "logos:hubspot",
  "Pipedrive": "simple-icons:pipedrive",
  "Zoho CRM": "logos:zoho",
  "Copper": "simple-icons:copper",
  "Close": "simple-icons:close",
  "Google Calendar": "logos:google-calendar",
  "Outlook Calendar": "logos:microsoft-outlook",
  "Apple Calendar": "logos:apple",
  "Calendly": "logos:calendly",
  "Zoom": "logos:zoom",
  "Google Meet": "logos:google-meet",
  "Microsoft Teams": "logos:microsoft-teams",
  "Webex": "logos:webex",
  "GoToMeeting": "logos:gotomeeting",
  "Aircall": "logos:aircall",
  "RingCentral": "logos:ringcentral",
  "Dialpad": "logos:dialpad",
  "Twilio": "logos:twilio-icon",
  "Outreach Dialer": "logos:outreach",
  "Salesloft Dialer": "logos:salesloft",
  "Gmail": "logos:gmail",
  "Outlook": "logos:microsoft-outlook",
  "SendGrid": "logos:sendgrid-icon",
  "Mailchimp": "logos:mailchimp",
  "Intercom": "logos:intercom",
  "Outreach": "logos:outreach",
  "Salesloft": "logos:salesloft",
  "Apollo.io": "logos:apollographql",
  "Groove": "logos:groovehq",
  "Slack": "logos:slack-icon",
  "Discord": "logos:discord-icon",
  "Notion": "logos:notion-icon",
  "Confluence": "logos:confluence",
  "Google Docs": "logos:google-docs",
  "Evernote": "logos:evernote",
  "Zapier": "logos:zapier",
  "Make (Integromat)": "logos:make",
  "n8n": "logos:n8n",
  "Workato": "logos:workato",
  "Follow Up Boss": "simple-icons:followupboss",
  "dotloop": "simple-icons:dotloop",
  "Zillow": "logos:zillow",
  "Greenhouse": "logos:greenhouse",
  "Lever": "logos:lever",
  "Workday": "logos:workday",
  "BambooHR": "logos:bamboohr",
};

const integrationCategories = [
  {
    id: "crm",
    name: "CRM & Sales",
    icon: Database,
    color: "from-purple-500 to-pink-600",
    description: "Bi-directional sync with your CRM. Auto-log calls, meetings, emails, and enrich deal data with conversation insights.",
    integrations: [
      {
        name: "Salesforce",
        logo: "Salesforce",
        tier: "All Plans",
        features: [
          "Bi-directional contact & account sync",
          "Automatic activity logging (calls, meetings, emails)",
          "Opportunity scoring based on conversation data",
          "Custom field mapping",
          "Deal risk alerts pushed to Salesforce",
          "Revenue attribution reporting"
        ],
        setupTime: "15 minutes",
        popular: true
      },
      {
        name: "HubSpot",
        logo: "HubSpot",
        tier: "All Plans",
        features: [
          "Contact, company, and deal sync",
          "Email and call logging",
          "Workflow automation triggers",
          "Custom properties for conversation metrics",
          "Pipeline health scoring",
          "Integration with HubSpot sequences"
        ],
        setupTime: "10 minutes",
        popular: true
      },
      {
        name: "Pipedrive",
        logo: "Pipedrive",
        tier: "All Plans",
        features: [
          "Person and organization sync",
          "Activity auto-logging",
          "Deal stage automation based on conversations",
          "Custom fields for AI insights",
          "Pipeline visualization enhancements"
        ],
        setupTime: "12 minutes",
        popular: false
      },
      {
        name: "Zoho CRM",
        logo: "Zoho",
        tier: "Professional+",
        features: ["Contact sync", "Activity logging", "Deal updates", "Custom modules"],
        setupTime: "15 minutes",
        popular: false
      },
      {
        name: "Copper",
        logo: "Copper",
        tier: "Professional+",
        features: ["Google Workspace native sync", "Activity tracking", "Deal insights"],
        setupTime: "10 minutes",
        popular: false
      },
      {
        name: "Close",
        logo: "Close",
        tier: "Professional+",
        features: ["Contact sync", "Call logging", "Opportunity scoring"],
        setupTime: "12 minutes",
        popular: false
      }
    ]
  },
  {
    id: "calendar",
    name: "Calendar & Scheduling",
    icon: Calendar,
    color: "from-blue-500 to-cyan-600",
    description: "Automatic meeting detection and recording. Sync your calendar to trigger recordings and prep your team before calls.",
    integrations: [
      {
        name: "Google Calendar",
        logo: "Google",
        tier: "All Plans",
        features: [
          "Automatic meeting detection",
          "Recording triggers based on calendar events",
          "Pre-meeting briefings with conversation history",
          "Post-meeting summary emails",
          "Attendee tracking and engagement"
        ],
        setupTime: "5 minutes",
        popular: true
      },
      {
        name: "Outlook Calendar",
        logo: "Microsoft",
        tier: "All Plans",
        features: [
          "Microsoft 365 integration",
          "Auto-join meetings",
          "Recording automation",
          "Meeting prep summaries",
          "Teams calendar sync"
        ],
        setupTime: "8 minutes",
        popular: true
      },
      {
        name: "Apple Calendar",
        logo: "Apple",
        tier: "Professional+",
        features: ["iCloud calendar sync", "Meeting detection", "Recording triggers"],
        setupTime: "10 minutes",
        popular: false
      },
      {
        name: "Calendly",
        logo: "Calendly",
        tier: "All Plans",
        features: [
          "Booking automation",
          "Meeting type tracking",
          "Conversion analytics",
          "Automatic recording setup"
        ],
        setupTime: "5 minutes",
        popular: true
      }
    ]
  },
  {
    id: "meetings",
    name: "Video Conferencing",
    icon: Video,
    color: "from-green-500 to-emerald-600",
    description: "Record and transcribe meetings automatically. Works with all major video platforms with one-click bot joining.",
    integrations: [
      {
        name: "Zoom",
        logo: "Zoom",
        tier: "All Plans",
        features: [
          "Automatic meeting recording (bot or Zoom app)",
          "Cloud recording integration",
          "Breakout room support",
          "Screen share capture",
          "Participant analytics",
          "Recording management"
        ],
        setupTime: "5 minutes",
        popular: true
      },
      {
        name: "Google Meet",
        logo: "Google",
        tier: "All Plans",
        features: [
          "Auto-join and record",
          "Google Workspace integration",
          "Transcription in 40+ languages",
          "Recording library sync",
          "Participant tracking"
        ],
        setupTime: "8 minutes",
        popular: true
      },
      {
        name: "Microsoft Teams",
        logo: "Microsoft",
        tier: "All Plans",
        features: [
          "Teams bot integration",
          "Channel meeting support",
          "Recording and transcription",
          "SharePoint integration",
          "Compliance recording mode"
        ],
        setupTime: "10 minutes",
        popular: true
      },
      {
        name: "Webex",
        logo: "Webex",
        tier: "Professional+",
        features: ["Meeting recording", "Transcription", "Recording library"],
        setupTime: "12 minutes",
        popular: false
      },
      {
        name: "GoToMeeting",
        logo: "GoTo",
        tier: "Professional+",
        features: ["Auto-recording", "Transcription", "Analytics"],
        setupTime: "10 minutes",
        popular: false
      }
    ]
  },
  {
    id: "dialers",
    name: "Phone & Dialers",
    icon: Phone,
    color: "from-orange-500 to-red-600",
    description: "Capture and analyze every phone call. Integrate with your dialer for automatic logging and coaching.",
    integrations: [
      {
        name: "Aircall",
        logo: "Aircall",
        tier: "All Plans",
        features: [
          "Call recording integration",
          "Click-to-call from Tasknova",
          "Call disposition logging",
          "Call outcome tracking",
          "Talk time and sentiment analysis",
          "Voicemail transcription"
        ],
        setupTime: "10 minutes",
        popular: true
      },
      {
        name: "RingCentral",
        logo: "RingCentral",
        tier: "All Plans",
        features: ["Call recording sync", "SMS integration", "Call analytics", "CRM logging"],
        setupTime: "12 minutes",
        popular: false
      },
      {
        name: "Dialpad",
        logo: "Dialpad",
        tier: "Professional+",
        features: ["Voice intelligence integration", "Call transcription", "Real-time coaching"],
        setupTime: "10 minutes",
        popular: false
      },
      {
        name: "Twilio",
        logo: "Twilio",
        tier: "Enterprise",
        features: ["Custom telephony integration", "Recording API", "SMS/voice sync"],
        setupTime: "Custom",
        popular: false
      },
      {
        name: "Outreach Dialer",
        logo: "Outreach",
        tier: "Professional+",
        features: ["Sequence call integration", "Disposition sync", "Analytics"],
        setupTime: "15 minutes",
        popular: false
      },
      {
        name: "Salesloft Dialer",
        logo: "Salesloft",
        tier: "Professional+",
        features: ["Cadence integration", "Call recording", "Activity logging"],
        setupTime: "15 minutes",
        popular: false
      }
    ]
  },
  {
    id: "email",
    name: "Email & Communication",
    icon: Mail,
    color: "from-cyan-500 to-blue-600",
    description: "Track email opens, clicks, and replies. Measure email effectiveness and automate follow-ups.",
    integrations: [
      {
        name: "Gmail",
        logo: "Google",
        tier: "All Plans",
        features: [
          "Email tracking (opens, clicks, replies)",
          "Template performance analytics",
          "Send-time optimization",
          "Automatic email logging to CRM",
          "Conversation threading",
          "Attachment tracking"
        ],
        setupTime: "5 minutes",
        popular: true
      },
      {
        name: "Outlook",
        logo: "Microsoft",
        tier: "All Plans",
        features: [
          "Microsoft 365 integration",
          "Email tracking and analytics",
          "Template library",
          "Auto-logging",
          "Shared inbox support"
        ],
        setupTime: "8 minutes",
        popular: true
      },
      {
        name: "SendGrid",
        logo: "SendGrid",
        tier: "Professional+",
        features: ["Bulk email tracking", "Campaign analytics", "Webhook integration"],
        setupTime: "15 minutes",
        popular: false
      },
      {
        name: "Mailchimp",
        logo: "Mailchimp",
        tier: "Professional+",
        features: ["Marketing email tracking", "Audience sync", "Campaign ROI"],
        setupTime: "12 minutes",
        popular: false
      },
      {
        name: "Intercom",
        logo: "Intercom",
        tier: "Professional+",
        features: ["In-app message tracking", "Customer conversations", "Support ticket insights"],
        setupTime: "10 minutes",
        popular: false
      }
    ]
  },
  {
    id: "sales-engagement",
    name: "Sales Engagement Platforms",
    icon: Zap,
    color: "from-pink-500 to-rose-600",
    description: "Connect with your sales engagement tools for unified activity tracking and conversation intelligence.",
    integrations: [
      {
        name: "Outreach",
        logo: "Outreach",
        tier: "Professional+",
        features: [
          "Sequence activity sync",
          "Call and email logging",
          "Prospect engagement scoring",
          "Best practice playbook creation",
          "A/B test insights from conversations"
        ],
        setupTime: "15 minutes",
        popular: true
      },
      {
        name: "Salesloft",
        logo: "Salesloft",
        tier: "Professional+",
        features: ["Cadence integration", "Activity tracking", "Conversation insights", "Performance analytics"],
        setupTime: "15 minutes",
        popular: true
      },
      {
        name: "Apollo.io",
        logo: "Apollo",
        tier: "Professional+",
        features: ["Prospecting data enrichment", "Sequence tracking", "Email analytics"],
        setupTime: "10 minutes",
        popular: false
      },
      {
        name: "Groove",
        logo: "Groove",
        tier: "Enterprise",
        features: ["Workflow sync", "Activity logging", "Analytics integration"],
        setupTime: "20 minutes",
        popular: false
      }
    ]
  },
  {
    id: "collaboration",
    name: "Team Collaboration",
    icon: MessageSquare,
    color: "from-indigo-500 to-purple-600",
    description: "Push insights and alerts to where your team works. Get notified about deal risks and coaching opportunities.",
    integrations: [
      {
        name: "Slack",
        logo: "Slack",
        tier: "All Plans",
        features: [
          "Deal risk alerts to channels",
          "Call summary notifications",
          "Coaching moment alerts",
          "Meeting prep reminders",
          "Team performance updates",
          "Custom workflow automations"
        ],
        setupTime: "5 minutes",
        popular: true
      },
      {
        name: "Microsoft Teams",
        logo: "Microsoft",
        tier: "All Plans",
        features: ["Channel notifications", "Alert routing", "Summary sharing", "Bot commands"],
        setupTime: "8 minutes",
        popular: true
      },
      {
        name: "Discord",
        logo: "Discord",
        tier: "Professional+",
        features: ["Server notifications", "Webhook integration", "Summary posting"],
        setupTime: "10 minutes",
        popular: false
      }
    ]
  },
  {
    id: "productivity",
    name: "Productivity & Documentation",
    icon: FileText,
    color: "from-yellow-500 to-orange-600",
    description: "Save call summaries, notes, and insights to your knowledge base automatically.",
    integrations: [
      {
        name: "Notion",
        logo: "Notion",
        tier: "Professional+",
        features: ["Automatic page creation", "Call summary sync", "Meeting notes", "Searchable transcripts"],
        setupTime: "8 minutes",
        popular: true
      },
      {
        name: "Confluence",
        logo: "Confluence",
        tier: "Professional+",
        features: ["Wiki integration", "Documentation sync", "Team knowledge base"],
        setupTime: "12 minutes",
        popular: false
      },
      {
        name: "Google Docs",
        logo: "Google",
        tier: "All Plans",
        features: ["Document creation", "Transcript export", "Collaboration"],
        setupTime: "5 minutes",
        popular: false
      },
      {
        name: "Evernote",
        logo: "Evernote",
        tier: "Professional+",
        features: ["Note sync", "Call recording storage", "Tag management"],
        setupTime: "10 minutes",
        popular: false
      }
    ]
  },
  {
    id: "automation",
    name: "Automation & Workflows",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
    description: "Build custom workflows and automations with your favorite no-code tools.",
    integrations: [
      {
        name: "Zapier",
        logo: "Zapier",
        tier: "All Plans",
        features: [
          "Connect to 5,000+ apps",
          "Custom workflow automation",
          "Trigger actions from insights",
          "Multi-step zaps",
          "Webhook support"
        ],
        setupTime: "10 minutes",
        popular: true
      },
      {
        name: "Make (Integromat)",
        logo: "Make",
        tier: "Professional+",
        features: ["Visual automation builder", "Complex workflows", "API integration"],
        setupTime: "15 minutes",
        popular: false
      },
      {
        name: "n8n",
        logo: "n8n",
        tier: "Enterprise",
        features: ["Self-hosted automation", "Custom nodes", "Advanced workflows"],
        setupTime: "Custom",
        popular: false
      },
      {
        name: "Workato",
        logo: "Workato",
        tier: "Enterprise",
        features: ["Enterprise automation", "Complex integrations", "Recipe library"],
        setupTime: "Custom",
        popular: false
      }
    ]
  },
  {
    id: "industry-specific",
    name: "Industry-Specific",
    icon: Globe,
    color: "from-teal-500 to-cyan-600",
    description: "Specialized integrations for Real Estate, HR, and vertical-specific tools.",
    integrations: [
      // Real Estate
      {
        name: "Follow Up Boss",
        logo: "FollowUpBoss",
        tier: "Professional+",
        industry: "Real Estate",
        features: ["Lead sync", "Activity tracking", "Drip campaign integration", "Client conversation history"],
        setupTime: "12 minutes",
        popular: false
      },
      {
        name: "dotloop",
        logo: "dotloop",
        tier: "Professional+",
        industry: "Real Estate",
        features: ["Transaction tracking", "Document insights", "Deal timeline"],
        setupTime: "15 minutes",
        popular: false
      },
      {
        name: "Zillow",
        logo: "Zillow",
        tier: "Professional+",
        industry: "Real Estate",
        features: ["Lead capture", "Listing sync", "Inquiry tracking"],
        setupTime: "10 minutes",
        popular: false
      },
      // HR/Recruiting
      {
        name: "Greenhouse",
        logo: "Greenhouse",
        tier: "Professional+",
        industry: "HR",
        features: ["Interview recording", "Candidate scoring", "Hiring workflow sync", "Feedback automation"],
        setupTime: "15 minutes",
        popular: false
      },
      {
        name: "Lever",
        logo: "Lever",
        tier: "Professional+",
        industry: "HR",
        features: ["Candidate tracking", "Interview intelligence", "Hiring analytics"],
        setupTime: "15 minutes",
        popular: false
      },
      {
        name: "Workday",
        logo: "Workday",
        tier: "Enterprise",
        industry: "HR",
        features: ["HRIS integration", "Employee data sync", "Recruiting workflows"],
        setupTime: "Custom",
        popular: false
      },
      {
        name: "BambooHR",
        logo: "BambooHR",
        tier: "Professional+",
        industry: "HR",
        features: ["Applicant tracking", "Onboarding insights", "Employee data"],
        setupTime: "12 minutes",
        popular: false
      }
    ]
  }
];

export function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = selectedCategory
    ? integrationCategories.filter(cat => cat.id === selectedCategory)
    : integrationCategories;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold mb-6"
            >
              50+ Native Integrations
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Connect Your Entire Tech Stack
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-8"
            >
              Tasknova works seamlessly with the tools your team already uses. Set up in minutes, not days.
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-500 outline-none text-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "50+", label: "Native Integrations" },
              { value: "5,000+", label: "Apps via Zapier" },
              { value: "5 mins", label: "Average Setup Time" },
              { value: "99.9%", label: "Integration Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-50 sticky top-16 z-10 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === null
                  ? 'bg-cyan-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              All Categories
            </button>
            {integrationCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  id={category.id}
                >
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{category.name}</h2>
                        <p className="text-slate-600">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Integrations Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.integrations.map((integration, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="p-6 rounded-xl bg-white border-2 border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 gap-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-bold text-lg">{integration.name}</h3>
                              {integration.popular && (
                                <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded">
                                  Popular
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-slate-500">{integration.tier}</div>
                            {integration.industry && (
                              <div className="text-xs text-purple-600 font-semibold mt-1">
                                {integration.industry}
                              </div>
                            )}
                          </div>
                          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-slate-200 overflow-hidden">
                            {logoIconMap[integration.name] && (
                              <Icon
                                icon={logoIconMap[integration.name]}
                                className="w-10 h-10 text-slate-900"
                                aria-label={`${integration.name} logo`}
                              />
                            )}
                            {!logoIconMap[integration.name] && (
                              <div className={`w-full h-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white font-bold text-sm`}>
                                {integration.logo.slice(0, 2).toUpperCase()}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-2 mb-4">
                          {integration.features.slice(0, 4).map((feature, fi) => (
                            <li key={fi} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {integration.features.length > 4 && (
                            <li className="text-sm text-cyan-600 font-semibold">
                              +{integration.features.length - 4} more features
                            </li>
                          )}
                        </ul>

                        {/* Footer */}
                        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                          <div className="text-xs text-slate-500">
                            Setup: {integration.setupTime}
                          </div>
                          <button className="text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors">
                            Learn More →
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Need a Custom Integration?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Use our REST API to build custom workflows and integrations with unlimited flexibility
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: BarChart3, label: "RESTful API", description: "Well-documented endpoints" },
                { icon: Zap, label: "Webhooks", description: "Real-time event notifications" },
                { icon: FileText, label: "SDKs", description: "Python, Node.js, Ruby libraries" }
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="p-6 rounded-xl bg-slate-800">
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">{feature.label}</h3>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                View API Documentation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:border-white transition-colors">
                Request Integration
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default IntegrationsPage;
