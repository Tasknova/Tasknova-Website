import { TrendingUp, Users, Zap, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Revenue Teams" },
  { icon: TrendingUp, value: "32%", label: "Avg. Revenue Increase" },
  { icon: Zap, value: "10M+", label: "Conversations Analyzed" },
  { icon: Target, value: "94%", label: "Customer Satisfaction" }
];

const logos = [
  { 
    name: "Salesforce", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
  },
  { 
    name: "HubSpot", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg"
  },
  { 
    name: "Zoom", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg"
  },
  { 
    name: "Slack", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
  },
  { 
    name: "Microsoft", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  { 
    name: "Google", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  { 
    name: "Asana", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg"
  }
];

export function TrustSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Trusted by modern revenue teams across industries
          </h2>
          <p className="text-slate-600">
            Teams rely on Tasknova to improve complex, high value customer interactions
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="mb-16 overflow-hidden relative">
          <style>
            {`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                animation: scroll 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 h-16 flex items-center justify-center transition-all duration-300"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 h-16 flex items-center justify-center transition-all duration-300"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}