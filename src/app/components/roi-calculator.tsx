import { useState } from "react";
import { motion } from "motion/react";
import { Clock, Phone, BarChart3, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export function ROICalculator() {
  const [salesReps, setSalesReps] = useState(25);
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [callsPerDay, setCallsPerDay] = useState(30);
  const [managerHoursPerWeek, setManagerHoursPerWeek] = useState(8);
  
  // Calculate ROI metrics
  const calculateROI = () => {
    // Hours saved per month calculation
    // Assume 5 mins saved per call review + 30 mins saved on coaching prep per rep per week
    const callsPerMonth = salesReps * callsPerDay * 20; // 20 working days
    const callReviewTimeSaved = (callsPerMonth * 5) / 60; // 5 mins per call converted to hours
    const coachingPrepTimeSaved = (salesReps * 30 * 4) / 60; // 30 mins per rep per week * 4 weeks
    const hoursSavedPerMonth = Math.round(callReviewTimeSaved + coachingPrepTimeSaved);
    
    // Productivity weeks calculation
    const productivityWeeks = (hoursSavedPerMonth / 40).toFixed(1);
    
    // Calls analyzed automatically
    const callsAnalyzed = callsPerMonth.toLocaleString();
    
    // Coaching bandwidth gained
    // Manager time freed up from call review
    const currentReviewTime = managerHoursPerWeek * 4; // monthly
    const newReviewTime = currentReviewTime * 0.3; // 70% reduction
    const timeSaved = currentReviewTime - newReviewTime;
    const bandwidthGainedPercent = Math.round((timeSaved / currentReviewTime) * 100);
    
    // Conversion effectiveness increase
    // Based on improved coaching and call quality
    const conversionIncrease = 14; // Industry benchmark
    
    return {
      hoursSaved: hoursSavedPerMonth,
      productivityWeeks,
      callsAnalyzed,
      bandwidthPercent: bandwidthGainedPercent,
      conversionIncrease
    };
  };

  const results = calculateROI();

  // Format hours with range
  const formatHours = (hours: number) => {
    if (hours < 1) {
      return `${Math.round(hours * 60)} min`;
    }
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  };

  return (
    <section id="roi-calculator" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Question 1 */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  How many sales reps do you have?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Measures total scale of AI insight and coaching impact.
                </p>
                <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      type="number"
                      value={salesReps}
                      onChange={(e) => setSalesReps(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 px-3 py-2 text-2xl font-bold text-slate-900 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                    <span className="text-slate-600">reps</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={salesReps}
                    onChange={(e) => setSalesReps(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>1</span>
                    <span>500</span>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  How much time does each rep spend talking to clients daily?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Used to calculate conversation analysis coverage and time savings.
                </p>
                <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      type="number"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
                      step="0.5"
                      className="w-20 px-3 py-2 text-2xl font-bold text-slate-900 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                    <span className="text-slate-600">hours per day</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="6"
                    step="0.5"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>30 min</span>
                    <span>6 hrs</span>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  How many calls does each rep make per day?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Helps estimate AI analysis volume and automation efficiency.
                </p>
                <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      type="number"
                      value={callsPerDay}
                      onChange={(e) => setCallsPerDay(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 px-3 py-2 text-2xl font-bold text-slate-900 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                    <span className="text-slate-600">calls per day</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="80"
                    value={callsPerDay}
                    onChange={(e) => setCallsPerDay(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>5</span>
                    <span>80</span>
                  </div>
                </div>
              </div>

              {/* Question 4 */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  How much time do managers spend reviewing calls or coaching reps weekly?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Used to calculate coaching automation and manager productivity gains.
                </p>
                <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      type="number"
                      value={managerHoursPerWeek}
                      onChange={(e) => setManagerHoursPerWeek(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 px-3 py-2 text-2xl font-bold text-slate-900 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500"
                    />
                    <span className="text-slate-600">hours per week</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={managerHoursPerWeek}
                    onChange={(e) => setManagerHoursPerWeek(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>1</span>
                    <span>20</span>
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
              {/* Metric 1 - Hours Saved */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-green-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {results.hoursSaved} Hours
                    </div>
                    <div className="text-lg font-bold text-slate-900 mb-3">
                      Saved Per Month
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Reduced manual call review and coaching preparation time
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-2 rounded-lg w-fit">
                      <Sparkles className="w-4 h-4" />
                      <span>Equivalent to {results.productivityWeeks} full-time productivity weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metric 2 - Calls Analyzed */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {results.callsAnalyzed}
                    </div>
                    <div className="text-lg font-bold text-slate-900 mb-3">
                      Calls Automatically Analyzed Monthly
                    </div>
                    <p className="text-sm text-slate-600">
                      Every customer interaction converted into actionable coaching insights
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric 3 - Coaching Bandwidth */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {results.bandwidthPercent}% More
                    </div>
                    <div className="text-lg font-bold text-slate-900 mb-3">
                      Coaching Bandwidth Gained
                    </div>
                    <p className="text-sm text-slate-600">
                      Spend more time coaching, less time reviewing calls
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric 4 - Conversion Increase */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      Potential {results.conversionIncrease}%
                    </div>
                    <div className="text-lg font-bold text-slate-900 mb-3">
                      Increase in Conversion Effectiveness
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Based on improved objection handling and call quality trends
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1.5 rounded-lg w-fit">
                      <Sparkles className="w-3 h-3" />
                      <span>AI Projection Estimate</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-center"
          >
            <a href="/book-demo">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl">
                Book a Demo & See Your Real Data
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
            <p className="text-slate-400 text-sm mt-4">
              ROI estimates based on SaaS industry benchmarks
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
