import { Check, X } from "lucide-react";

const comparisonData = [
  {
    category: "Primary Users",
    traditional: "Individual contributors",
    tasknova: "Revenue teams + Leadership",
    legacy: "Enterprise only"
  },
  {
    category: "Core Offering",
    traditional: "Note-taking & meeting summaries",
    tasknova: "Full revenue intelligence suite",
    legacy: "Complex analytics platforms"
  },
  {
    category: "Buying Model",
    traditional: "Per user licensing",
    tasknova: "Modular - buy what you need",
    legacy: "All-or-nothing enterprise contracts"
  },
  {
    category: "Implementation",
    traditional: "Self-serve setup",
    tasknova: "Guided onboarding + self-serve options",
    legacy: "6+ month implementations"
  },
  {
    category: "Pricing Flexibility",
    traditional: "Fixed tiers",
    tasknova: "Flexible modules & tiers",
    legacy: "Custom quotes only"
  },
  {
    category: "AI Capabilities",
    traditional: "Basic transcription",
    tasknova: "Advanced conversation intelligence + coaching",
    legacy: "Reporting-focused analytics"
  },
  {
    category: "Integration Ecosystem",
    traditional: "Limited",
    tasknova: "50+ native integrations",
    legacy: "Custom integration required"
  },
  {
    category: "Time to Value",
    traditional: "Same day",
    tasknova: "Within 1 week",
    legacy: "3-6 months"
  }
];

export function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Beyond Note Taking. Without Enterprise Complexity.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tasknova bridges the gap between simple meeting tools and heavy enterprise analytics platforms.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-4 mb-2">
              <div className="p-4"></div>
              <div className="p-4 text-center">
                <div className="text-sm font-semibold text-slate-500 mb-1">Traditional</div>
                <div className="font-bold">Note Tools</div>
              </div>
              <div className="p-4 text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-xl">
                <div className="text-sm font-semibold text-cyan-100 mb-1">The Modern Solution</div>
                <div className="font-bold text-white text-xl">Tasknova</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-sm font-semibold text-slate-500 mb-1">Legacy</div>
                <div className="font-bold">Revenue Platforms</div>
              </div>
            </div>

            {/* Data Rows */}
            <div className="space-y-2">
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-4 gap-4 bg-slate-50 rounded-xl overflow-hidden"
                >
                  <div className="p-4 font-semibold bg-white flex items-center">
                    {row.category}
                  </div>
                  <div className="p-4 text-sm text-slate-600 flex items-center justify-center text-center bg-white/50">
                    {row.traditional}
                  </div>
                  <div className="p-4 text-sm font-medium bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-500/20 flex items-center justify-center text-center">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      <span>{row.tasknova}</span>
                    </div>
                  </div>
                  <div className="p-4 text-sm text-slate-600 flex items-center justify-center text-center bg-white/50">
                    {row.legacy}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Summary */}
            <div className="grid grid-cols-4 gap-4 mt-2">
              <div className="p-4"></div>
              <div className="p-4 text-center">
                <X className="w-6 h-6 text-slate-400 mx-auto" />
                <p className="text-xs text-slate-500 mt-2">Limited enterprise value</p>
              </div>
              <div className="p-4 text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-b-xl">
                <Check className="w-6 h-6 text-white mx-auto" />
                <p className="text-xs text-white mt-2">Perfect balance of power & simplicity</p>
              </div>
              <div className="p-4 text-center">
                <X className="w-6 h-6 text-slate-400 mx-auto" />
                <p className="text-xs text-slate-500 mt-2">Too complex for most teams</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 mb-4">
            Get enterprise-grade intelligence without enterprise complexity
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
            See Tasknova in Action
          </button>
        </div>
      </div>
    </section>
  );
}
