import { ArrowRight, TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const caseStudies = [
  {
    id: "proptech",
    company: "PropTech Realty Group",
    tagline: "PropTech Realty Group",
    industry: "Commercial Real Estate",
    employeeCount: "320 employees, 180-person sales team",
    logo: "PTR",
    gradient: "from-cyan-500 to-blue-600",
    
    challenge: "Inconsistent follow-up across 40+ agents, 3-week average response time to leads, and difficulty tracking multi-property tours and client preferences",
    
    solution: "Implemented Tasknova Insight for client conversation tracking and Engage for automated follow-up across email, text, and calls",
    
    quote: "Tasknova transformed how we nurture high-value clients. Every agent now knows exactly what was discussed in previous tours.",
    
    author: "Sarah Mitchell",
    authorTitle: "VP of Sales Operations",
    
    results: [
      { label: "Faster lead response", value: "73%", icon: Clock },
      { label: "Additional deals closed", value: "$8.4M", icon: DollarSign },
      { label: "Client retention rate", value: "91%", icon: Target },
      { label: "Conversion rate increase", value: "47%", icon: TrendingUp }
    ]
  },
  
  {
    id: "talentforge",
    company: "TalentForge",
    tagline: "TalentForge Recruitment",
    industry: "Executive Search & Staffing",
    employeeCount: "150 employees, 85-person recruitment team",
    logo: "TF",
    gradient: "from-blue-500 to-indigo-600",
    
    challenge: "High candidate drop-off rates (45%), inconsistent client communication, and 8+ hour weekly admin burden per recruiter managing notes and follow-ups",
    
    solution: "Deployed Tasknova Insight + Coach to standardize candidate screening and Engage for automated interview scheduling and follow-up",
    
    quote: "We can finally scale our white-glove service. Tasknova captures every candidate nuance so handoffs between recruiters are seamless.",
    
    author: "David Park",
    authorTitle: "Chief Operating Officer",
    
    results: [
      { label: "Drop in candidate ghosting", value: "68%", icon: Target },
      { label: "Time saved per recruiter/week", value: "12 hrs", icon: Clock },
      { label: "Increase in placements", value: "$2.1M", icon: DollarSign },
      { label: "Client satisfaction score", value: "96%", icon: TrendingUp }
    ]
  },
  
  {
    id: "cloudscale",
    company: "CloudScale",
    tagline: "CloudScale Technologies",
    industry: "SaaS & Cloud Infrastructure",
    employeeCount: "250 employees, 75-person sales team",
    logo: "CS",
    gradient: "from-cyan-400 to-blue-500",
    
    challenge: "Inconsistent sales methodology across 5 global offices, 6-month average rep ramp time, and 58% forecast accuracy",
    
    solution: "Implemented Tasknova Insight for conversation intelligence and Coach for standardized training across all offices",
    
    quote: "Tasknova gave us visibility we never had. Now every manager can coach like our top performer.",
    
    author: "Michael Chen",
    authorTitle: "Head of Revenue Operations",
    
    results: [
      { label: "Reduction in ramp time", value: "42%", icon: Clock },
      { label: "Additional ARR in 12 months", value: "$3.2M", icon: DollarSign },
      { label: "New forecast accuracy", value: "94%", icon: Target },
      { label: "Win rate improvement", value: "35%", icon: TrendingUp }
    ]
  }
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Teams. Real Results.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how revenue teams transformed their performance with Tasknova
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-12">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0">
        {/* LEFT - Case Study Content */}
        <div className="p-10 lg:p-12">
          {/* Company Header */}
          <div className="flex items-start gap-4 mb-8">
            {/* Company Logo */}
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white font-bold text-xl">{study.logo}</span>
            </div>
            
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-1">{study.tagline}</h3>
              <p className="text-slate-600">{study.industry}</p>
              <p className="text-sm text-slate-500">{study.employeeCount}</p>
            </div>
          </div>

          {/* The Challenge */}
          <div className="mb-6">
            <h4 className="font-semibold text-slate-900 mb-2">The Challenge</h4>
            <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
          </div>

          {/* The Solution */}
          <div className="mb-6">
            <h4 className="font-semibold text-slate-900 mb-2">The Solution</h4>
            <p className="text-slate-600 leading-relaxed">{study.solution}</p>
          </div>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold group">
            Read Full Case Study
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* RIGHT - Results */}
        <div className={`bg-gradient-to-br ${study.gradient} p-10 lg:p-12 text-white flex flex-col justify-center`}>
          <h4 className="text-2xl font-bold mb-8">The Results</h4>
          
          <div className="space-y-6">
            {study.results.map((result, idx) => {
              const Icon = result.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">{result.value}</div>
                    <div className="text-white/90">{result.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}