import { useState } from "react";
import { motion } from "motion/react";
import { DollarSign, TrendingUp, Clock, Users, Target, BarChart3 } from "lucide-react";

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [avgDealSize, setAvgDealSize] = useState(25000);
  const [currentWinRate, setCurrentWinRate] = useState(20);
  const [avgDealsPerRep, setAvgDealsPerRep] = useState(12);
  const [avgRampTime, setAvgRampTime] = useState(6);

  // ROI Calculation Logic
  const calculateROI = () => {
    // Win rate improvement (average 8-12% increase)
    const winRateImprovement = 10; // percentage points
    const newWinRate = currentWinRate + winRateImprovement;
    
    // Additional deals won per year
    const additionalDealsPerRep = (avgDealsPerRep * (winRateImprovement / 100));
    const totalAdditionalDeals = additionalDealsPerRep * teamSize;
    
    // Revenue increase
    const additionalRevenue = totalAdditionalDeals * avgDealSize;
    
    // Ramp time reduction (average 40% faster)
    const rampTimeReduction = 0.4;
    const monthsSaved = avgRampTime * rampTimeReduction;
    const rampTimeSavings = (monthsSaved / 12) * (avgDealSize * avgDealsPerRep) * (teamSize * 0.3); // 30% of team are new reps
    
    // Productivity gains (15% more productive conversations)
    const productivityGain = additionalRevenue * 0.15;
    
    // Total annual value
    const totalAnnualValue = additionalRevenue + rampTimeSavings + productivityGain;
    
    // Cost (assuming $79/user/month for Professional plan)
    const annualCost = teamSize * 79 * 12;
    
    // ROI calculation
    const roi = ((totalAnnualValue - annualCost) / annualCost) * 100;
    
    // Payback period in months
    const monthlyValue = totalAnnualValue / 12;
    const monthlyCost = annualCost / 12;
    const paybackMonths = monthlyCost / (monthlyValue - monthlyCost);
    
    return {
      totalAnnualValue: Math.round(totalAnnualValue),
      annualCost: Math.round(annualCost),
      netBenefit: Math.round(totalAnnualValue - annualCost),
      roi: Math.round(roi),
      paybackMonths: Math.max(0.5, Math.min(12, paybackMonths)).toFixed(1),
      additionalDeals: Math.round(totalAdditionalDeals),
      newWinRate: Math.round(newWinRate),
      monthsSaved: monthsSaved.toFixed(1)
    };
  };

  const results = calculateROI();

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value.toLocaleString()}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6"
            >
              <BarChart3 className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold">ROI Calculator</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Calculate Your{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Savings
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              See how much revenue your team can gain with Tasknova's AI-powered platform
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200"
            >
              <h3 className="text-2xl font-bold mb-6">Your Team Metrics</h3>
              
              <div className="space-y-8">
                {/* Team Size */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-semibold text-slate-700 flex items-center gap-2">
                      <Users className="w-5 h-5 text-cyan-600" />
                      Number of Sales Reps
                    </label>
                    <span className="text-2xl font-bold text-cyan-600">{teamSize}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>1</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Average Deal Size */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-semibold text-slate-700 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-cyan-600" />
                      Average Deal Size
                    </label>
                    <span className="text-2xl font-bold text-cyan-600">{formatCurrency(avgDealSize)}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="200000"
                    step="5000"
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$5K</span>
                    <span>$100K</span>
                    <span>$200K</span>
                  </div>
                </div>

                {/* Current Win Rate */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-semibold text-slate-700 flex items-center gap-2">
                      <Target className="w-5 h-5 text-cyan-600" />
                      Current Win Rate
                    </label>
                    <span className="text-2xl font-bold text-cyan-600">{currentWinRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={currentWinRate}
                    onChange={(e) => setCurrentWinRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>10%</span>
                    <span>35%</span>
                    <span>60%</span>
                  </div>
                </div>

                {/* Deals Per Rep */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-semibold text-slate-700 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-cyan-600" />
                      Deals Closed Per Rep/Year
                    </label>
                    <span className="text-2xl font-bold text-cyan-600">{avgDealsPerRep}</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="50"
                    value={avgDealsPerRep}
                    onChange={(e) => setAvgDealsPerRep(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>4</span>
                    <span>25</span>
                    <span>50</span>
                  </div>
                </div>

                {/* Ramp Time */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-semibold text-slate-700 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-cyan-600" />
                      New Rep Ramp Time (Months)
                    </label>
                    <span className="text-2xl font-bold text-cyan-600">{avgRampTime}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="12"
                    value={avgRampTime}
                    onChange={(e) => setAvgRampTime(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>2</span>
                    <span>7</span>
                    <span>12</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Main ROI Card */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Your Projected ROI</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm opacity-90 mb-1">Annual Value</div>
                    <div className="text-4xl font-bold">{formatCurrency(results.totalAnnualValue)}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Annual Cost</div>
                    <div className="text-4xl font-bold">{formatCurrency(results.annualCost)}</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <div className="text-sm opacity-90 mb-2">Net Annual Benefit</div>
                  <div className="text-5xl font-bold mb-2">{formatCurrency(results.netBenefit)}</div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-white/20">
                      {results.roi}% ROI
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/20">
                      {results.paybackMonths} month payback
                    </span>
                  </div>
                </div>
              </div>

              {/* Impact Breakdown */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <h4 className="text-xl font-bold mb-6">Expected Impact</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 mb-1">Win Rate Improvement</div>
                      <div className="text-sm text-slate-600">
                        From <span className="font-bold text-cyan-600">{currentWinRate}%</span> to{" "}
                        <span className="font-bold text-cyan-600">{results.newWinRate}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 mb-1">Additional Deals Won</div>
                      <div className="text-sm text-slate-600">
                        <span className="font-bold text-cyan-600">{results.additionalDeals}</span> more deals per year
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 mb-1">Faster Ramp Time</div>
                      <div className="text-sm text-slate-600">
                        Save <span className="font-bold text-cyan-600">{results.monthsSaved} months</span> per new rep
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-slate-900 rounded-2xl p-8 text-white text-center">
                <h4 className="text-xl font-bold mb-3">Ready to unlock these results?</h4>
                <p className="text-slate-300 mb-6">Start your free trial and see the impact in 30 days</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/book-demo">
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto">
                      Book a Demo
                    </button>
                  </a>
                  <a href="/pricing">
                    <button className="px-6 py-3 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
                      View Pricing
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-slate-500 mt-8 max-w-3xl mx-auto"
          >
            * Results are estimated based on industry averages and typical Tasknova customer outcomes. 
            Actual results may vary based on your team's specific situation, implementation, and usage patterns.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
