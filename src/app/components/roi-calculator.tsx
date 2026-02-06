import { useState } from "react";
import { motion } from "motion/react";
import { DollarSign, Users, Phone, Mail, Video, BarChart3 } from "lucide-react";

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [actionsPerUser, setActionsPerUser] = useState(500);

  // Pricing: Pay-per-action model
  const PRICE_PER_1000_ACTIONS = 5; // $5 per 1,000 actions
  const BASE_FEE_PER_USER = 15; // $15 base fee per user
  
  // Calculate monthly cost
  const calculateCost = () => {
    const totalActions = teamSize * actionsPerUser;
    const actionCost = (totalActions / 1000) * PRICE_PER_1000_ACTIONS;
    const baseFee = teamSize * BASE_FEE_PER_USER;
    const monthlyTotal = actionCost + baseFee;
    const annualTotal = monthlyTotal * 12;
    
    // Calculate per-user monthly cost
    const perUserMonthlyCost = monthlyTotal / teamSize;
    
    // Calculate savings vs traditional pricing
    const traditionalCost = teamSize * 89; // $89/user traditional pricing
    const monthlySavings = traditionalCost - monthlyTotal;
    const annualSavings = monthlySavings * 12;
    
    return {
      monthlyTotal: Math.round(monthlyTotal),
      annualTotal: Math.round(annualTotal),
      baseFee: Math.round(baseFee),
      actionCost: Math.round(actionCost),
      perUserMonthlyCost: Math.round(perUserMonthlyCost),
      traditionalCost: Math.round(traditionalCost),
      monthlySavings: Math.max(0, Math.round(monthlySavings)),
      annualSavings: Math.max(0, Math.round(annualSavings)),
      totalActions: totalActions
    };
  };

  const results = calculateCost();

  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  const formatNumber = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toLocaleString();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6"
            >
              <BarChart3 className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold">Pricing Calculator</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Pay Only for{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                What You Use
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Simple, transparent pricing based on your actual usage
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
              <h3 className="text-2xl font-bold mb-8">Configure Your Plan</h3>
              
              <div className="space-y-8">
                {/* Team Size */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-semibold text-slate-700 flex items-center gap-2">
                      <Users className="w-5 h-5 text-cyan-600" />
                      Team Members
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

                {/* Monthly Actions Per User */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-semibold text-slate-700 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-cyan-600" />
                      Actions Per User/Month
                    </label>
                    <span className="text-2xl font-bold text-cyan-600">{formatNumber(actionsPerUser)}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="100"
                    value={actionsPerUser}
                    onChange={(e) => setActionsPerUser(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>100</span>
                    <span>1K</span>
                    <span>2K</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    Calls, emails, meetings, and other activities
                  </p>
                </div>

                {/* What counts as an action */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">What counts as an action?</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Phone className="w-4 h-4 text-cyan-600" />
                      <span>Sales calls</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Mail className="w-4 h-4 text-cyan-600" />
                      <span>Emails sent</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Video className="w-4 h-4 text-cyan-600" />
                      <span>Meetings</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <BarChart3 className="w-4 h-4 text-cyan-600" />
                      <span>Activities logged</span>
                    </div>
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
              {/* Main Pricing Card */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Your Monthly Cost</h3>
                </div>
                
                <div className="mb-6">
                  <div className="text-6xl font-bold mb-2">{formatCurrency(results.monthlyTotal)}</div>
                  <div className="text-xl opacity-90">
                    {formatCurrency(results.perUserMonthlyCost)}/user
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Base fee ({teamSize} users × $15)</span>
                    <span className="font-semibold">{formatCurrency(results.baseFee)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Usage ({formatNumber(results.totalActions)} actions)</span>
                    <span className="font-semibold">{formatCurrency(results.actionCost)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-white/20">
                    <span className="font-semibold">Annual cost</span>
                    <span className="font-bold text-xl">{formatCurrency(results.annualTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Savings Comparison */}
              {results.monthlySavings > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                  <h4 className="text-xl font-bold mb-4 text-slate-900">Your Savings</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                      <div className="text-sm text-slate-600 mb-1">vs Traditional Pricing</div>
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        {formatCurrency(results.monthlySavings)}<span className="text-lg">/mo</span>
                      </div>
                      <div className="text-sm text-slate-600">
                        {formatCurrency(results.annualSavings)} annual savings
                      </div>
                    </div>

                    <div className="text-sm text-slate-500">
                      Traditional fixed pricing: {formatCurrency(results.traditionalCost)}/month
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing Model Info */}
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h4 className="text-lg font-bold mb-4">Simple Pricing Model</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold">$15/user</span> base fee per month
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold">$5 per 1,000 actions</span> for all activities
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold">No hidden fees</span> or overage charges
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <a href="/book-demo">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                      Start Free Trial
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
            * Estimated pricing based on your inputs. Final pricing may vary based on actual usage. 
            All plans include unlimited storage, 24/7 support, and access to all features.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
