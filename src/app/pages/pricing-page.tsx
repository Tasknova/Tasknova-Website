import { motion } from "motion/react";
import { 
  Check, X, ArrowRight, Sparkles, HelpCircle, Zap,
  Shield, Users, BarChart3, Clock, DollarSign, Target, TrendingUp,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ROICalculator } from "../components/roi-calculator";

const pricingPlans = [
  {
    name: "Startup Pack",
    price: {
      monthly: 12,
      annual: 12
    },
    description: "Best for early-stage teams and pilot deployments",
    gradient: "from-slate-500 to-slate-600",
    popular: false,
    cta: "Start 14-Day Free Trial",
    limits: {
      users: "Up to 5 users",
      recordings: "50 recordings/month",
      storage: "14-day retention",
      transcription: "5 hours/user/month"
    },
    features: [
      { category: "Agents Included", items: [
        { name: "Voice Agent", included: true },
        { name: "Meeting Agent", included: true },
        { name: "Automatic recording and transcription", included: true },
        { name: "Basic interaction analysis", included: true },
        { name: "Conversation summaries", included: true },
        { name: "Action item extraction", included: true }
      ]},
      { category: "Integrations", items: [
        { name: "Calendar integration", included: true },
        { name: "Zoom, Meet, Teams", included: true },
        { name: "Basic CRM sync", included: true }
      ]},
      { category: "Support", items: [
        { name: "Email support", included: true },
        { name: "Knowledge base access", included: true }
      ]},
      { category: "Intelligence Layer Pricing (Optional Add-On)", items: [
        { name: "Conversation Intelligence Layer +$30/user/month", included: false },
        { name: "Engagement Intelligence Layer +$30/user/month", included: false },
        { name: "Coaching Intelligence Layer +$30/user/month", included: false }
      ]}
    ]
  },
  {
    name: "Starter",
    price: {
      monthly: 49,
      annual: 39
    },
    description: "Perfect for small teams getting started with conversation intelligence",
    gradient: "from-slate-500 to-slate-600",
    popular: false,
    cta: "Start 14-Day Free Trial",
    limits: {
      users: "Up to 10 users",
      recordings: "100 recordings/month",
      storage: "30-day data retention",
      transcription: "10 hours/user/month"
    },
    features: [
      { category: "Recording & Transcription", items: [
        { name: "Call & meeting recording", included: true },
        { name: "AI transcription (40+ languages)", included: true },
        { name: "Speaker identification", included: true },
        { name: "Real-time transcription", included: false }
      ]},
      { category: "Conversation Intelligence", items: [
        { name: "Basic sentiment analysis", included: true },
        { name: "Talk-to-listen ratio", included: true },
        { name: "Keyword tracking", included: true },
        { name: "Advanced conversation scoring", included: false },
        { name: "Competitor mention detection", included: false }
      ]},
      { category: "Engagement Tracking", items: [
        { name: "Email tracking (500/month)", included: true },
        { name: "Calendar integration", included: true },
        { name: "Basic activity logging", included: true },
        { name: "Multi-channel sequences", included: false }
      ]},
      { category: "Coaching & Analytics", items: [
        { name: "Individual dashboards", included: true },
        { name: "Call library", included: true },
        { name: "AI coaching insights", included: false },
        { name: "Custom playbooks", included: false },
        { name: "Performance benchmarking", included: false }
      ]},
      { category: "Integrations", items: [
        { name: "5 CRM integrations", included: true },
        { name: "Zoom, Meet, Teams", included: true },
        { name: "Gmail/Outlook", included: true },
        { name: "Zapier (100 tasks/month)", included: true },
        { name: "All integrations", included: false }
      ]},
      { category: "Security & Support", items: [
        { name: "SOC 2 compliant", included: true },
        { name: "Email support (24hr response)", included: true },
        { name: "Knowledge base access", included: true },
        { name: "Priority support", included: false },
        { name: "Dedicated CSM", included: false },
        { name: "SSO/SAML", included: false }
      ]}
    ]
  },
  {
    name: "Professional",
    price: {
      monthly: 89,
      annual: 71
    },
    description: "Most popular for growing teams scaling their revenue operations",
    gradient: "from-cyan-500 to-blue-600",
    popular: true,
    cta: "Start 14-Day Free Trial",
    limits: {
      users: "Up to 100 users",
      recordings: "Unlimited recordings",
      storage: "1-year data retention",
      transcription: "Unlimited transcription"
    },
    features: [
      { category: "Recording & Transcription", items: [
        { name: "Call & meeting recording", included: true },
        { name: "AI transcription (40+ languages)", included: true },
        { name: "Speaker identification", included: true },
        { name: "Real-time transcription", included: true }
      ]},
      { category: "Conversation Intelligence", items: [
        { name: "Advanced sentiment analysis", included: true },
        { name: "Talk-to-listen ratio", included: true },
        { name: "Keyword tracking", included: true },
        { name: "Advanced conversation scoring", included: true },
        { name: "Competitor mention detection", included: true }
      ]},
      { category: "Engagement Tracking", items: [
        { name: "Unlimited email tracking", included: true },
        { name: "Calendar integration", included: true },
        { name: "Omnichannel activity logging", included: true },
        { name: "Multi-channel sequences", included: true }
      ]},
      { category: "Coaching & Analytics", items: [
        { name: "Individual & team dashboards", included: true },
        { name: "Call library with search", included: true },
        { name: "AI coaching insights", included: true },
        { name: "Custom playbooks", included: true },
        { name: "Performance benchmarking", included: true }
      ]},
      { category: "Integrations", items: [
        { name: "All 50+ integrations", included: true },
        { name: "Zoom, Meet, Teams", included: true },
        { name: "Gmail/Outlook", included: true },
        { name: "Zapier (unlimited)", included: true },
        { name: "API access (rate limited)", included: true }
      ]},
      { category: "Security & Support", items: [
        { name: "SOC 2 compliant", included: true },
        { name: "Priority 24/7 support (4hr SLA)", included: true },
        { name: "Onboarding training", included: true },
        { name: "Quarterly business reviews", included: true },
        { name: "Dedicated CSM", included: false },
        { name: "SSO/SAML", included: false }
      ]}
    ]
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Custom",
      annual: "Custom"
    },
    description: "For large teams needing advanced security, customization, and dedicated support",
    gradient: "from-purple-500 to-indigo-600",
    popular: false,
    cta: "Contact Sales",
    limits: {
      users: "Unlimited users",
      recordings: "Unlimited recordings",
      storage: "Unlimited retention",
      transcription: "Unlimited transcription"
    },
    features: [
      { category: "Everything in Professional, Plus:", items: [
        { name: "Unlimited users & data retention", included: true },
        { name: "Custom onboarding & training", included: true },
        { name: "Dedicated Customer Success Manager", included: true },
        { name: "Custom SLAs (1hr critical response)", included: true }
      ]},
      { category: "Advanced Features", items: [
        { name: "White-label options", included: true },
        { name: "Custom AI model training", included: true },
        { name: "Advanced role-based permissions", included: true },
        { name: "Custom integrations", included: true },
        { name: "Multi-region data hosting", included: true }
      ]},
      { category: "Enterprise Security", items: [
        { name: "SSO/SAML 2.0", included: true },
        { name: "SCIM provisioning", included: true },
        { name: "Audit logs & compliance reports", included: true },
        { name: "Data residency options (US, EU, UK)", included: true },
        { name: "Custom security reviews", included: true },
        { name: "BAA for HIPAA compliance", included: true }
      ]},
      { category: "API & Customization", items: [
        { name: "Unlimited API access", included: true },
        { name: "Custom webhooks", included: true },
        { name: "Dedicated sandbox environment", included: true },
        { name: "Priority feature requests", included: true }
      ]}
    ]
  }
];

const addOns = [
  {
    name: "Additional Storage",
    price: "$199/month",
    description: "Extend data retention beyond plan limits. Add 1 year of additional storage.",
    icon: BarChart3
  },
  {
    name: "Professional Services",
    price: "$2,500",
    description: "Custom integrations, workflow setup, and advanced configuration by our team.",
    icon: Users
  },
  {
    name: "Advanced Training",
    price: "$1,500",
    description: "On-site or virtual training for managers and admins. 2-day program.",
    icon: Target
  },
  {
    name: "Premium Support",
    price: "$499/month",
    description: "Upgrade to 1-hour SLA, dedicated Slack channel, and priority bug fixes.",
    icon: Shield
  }
];

const modules = [
  {
    name: "Tasknova Insight",
    tagline: "Conversation Intelligence",
    price: { monthly: 30, annual: 30 },
    description: "AI-powered recording, transcription, and conversation analytics",
    features: [
      "Unlimited recording & transcription",
      "Sentiment & conversation scoring",
      "Deal intelligence & risk alerts",
      "Revenue intelligence dashboards",
      "CRM integration"
    ],
    ideal: "Sales teams, customer success, support"
  },
  {
    name: "Tasknova Engage",
    tagline: "Omnichannel Engagement",
    price: { monthly: 30, annual: 30 },
    description: "Track and optimize every customer touchpoint across all channels",
    features: [
      "Email tracking & analytics",
      "Multi-channel activity logging",
      "Sequence automation",
      "Engagement scoring",
      "Best time to contact"
    ],
    ideal: "SDRs, BDRs, outbound sales"
  },
  {
    name: "Tasknova Coach",
    tagline: "AI Sales Coaching",
    price: { monthly: 30, annual: 30 },
    description: "Scale your best performers with AI coaching and performance analytics",
    features: [
      "AI coaching recommendations",
      "Performance benchmarking",
      "Best practice playbooks",
      "Call review & feedback",
      "Onboarding acceleration"
    ],
    ideal: "Sales managers, enablement teams"
  }
];

const faqs = [
  {
    question: "What Is The Startup Pack?",
    answer: "Startup Pack includes Tasknova Voice Agent and Meeting Agent with foundational interaction analysis. Teams can activate intelligence layers later as revenue operations mature."
  },
  {
    question: "How does the 14-day free trial work?",
    answer: "Your trial includes full access to your chosen plan with no feature limitations and no credit card required. You can invite your entire team, connect all your tools, and experience the full platform. If you love it, simply add payment info before day 14. If not, no charges—ever."
  },
  {
    question: "Can I switch plans or cancel anytime?",
    answer: "Yes! You can upgrade, downgrade, or cancel anytime with no penalties. Upgrades take effect immediately. Downgrades apply at your next billing cycle. If you cancel, you keep access through the end of your paid period, and we'll export all your data."
  },
  {
    question: "What's the difference between monthly and annual billing?",
    answer: "Annual billing saves you 20% compared to monthly. For example, Professional is $89/user/month when billed monthly, or $71/user/month ($852/year) when billed annually—saving you $216 per user per year."
  },
  {
    question: "Do you offer discounts for non-profits or startups?",
    answer: "Yes! We offer 25% off for registered non-profits and qualified early-stage startups (pre-Series A, <$1M ARR). Contact sales@tasknova.com with documentation for approval."
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "For Starter plans, you'll receive a notification at 80% usage with an option to upgrade. If you exceed limits, we'll continue service and automatically upgrade you to the next tier on your next billing date. We never cut off access mid-month."
  },
  {
    question: "Can I mix and match products or must I buy the full platform?",
    answer: "You have complete flexibility! Purchase Insight, Engage, or Coach individually starting at $29-39/user/month. Or bundle all three for the full platform price ($79/month) and save 25%. Many customers start with one product and expand over time."
  },
  {
    question: "Is there a contract or commitment required?",
    answer: "No long-term contracts for monthly plans—cancel anytime. Annual plans require 12-month commitment but save you 20%. Enterprise customers can negotiate custom terms including multi-year agreements with rate locks."
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes! Teams with 50+ users get 10% off, 100+ users get 15% off, and 200+ users get 20% off. Enterprise pricing for 500+ users is fully customized. Contact sales for a quote."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, Amex, Discover) and ACH bank transfers for annual plans over $10K. Enterprise customers can request invoicing with NET 30 terms."
  },
  {
    question: "Are there any setup fees or hidden costs?",
    answer: "No setup fees, ever. What you see is what you pay. The only additional costs are optional add-ons (extra storage, professional services, premium support) which are clearly listed and always opt-in."
  },
  {
    question: "What's included in onboarding?",
    answer: "All plans include self-serve onboarding with guided setup, video tutorials, and knowledge base access. Professional plans get 1 live onboarding call with our team to configure integrations and workflows. Enterprise gets white-glove onboarding with a dedicated CSM over 2-4 weeks."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied within your first 30 days (including the 14-day trial), we'll refund 100% of your payment—no questions asked."
  }
];

export function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold mb-6"
            >
              Transparent Pricing. No Surprises.
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Plans That Grow With Your Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-8"
            >
              Start with agents and expand into full revenue intelligence as your team scales.
              Start with a 14-day free trial. No credit card required. Cancel anytime.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className={`font-semibold ${billingPeriod === "monthly" ? "text-slate-900" : "text-slate-400"}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
                className="relative w-16 h-8 bg-cyan-600 rounded-full transition-colors"
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  billingPeriod === "annual" ? "translate-x-9" : "translate-x-1"
                }`} />
              </button>
              <span className={`font-semibold ${billingPeriod === "annual" ? "text-slate-900" : "text-slate-400"}`}>
                Annual
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Save 20%
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl ${
                  plan.popular 
                    ? 'bg-white shadow-2xl scale-105 border-2 border-cyan-500 z-10' 
                    : 'bg-white shadow-lg border border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      {typeof plan.price[billingPeriod] === "number" ? (
                        <>
                          <span className="text-5xl font-bold">${plan.price[billingPeriod]}</span>
                          <span className="text-slate-600">/user/month</span>
                        </>
                      ) : (
                        <span className="text-5xl font-bold">{plan.price[billingPeriod]}</span>
                      )}
                    </div>
                    {typeof plan.price[billingPeriod] === "number" && billingPeriod === "annual" && (
                      <div className="text-sm text-green-600 font-semibold mt-2">
                        ${plan.price[billingPeriod] * 12}/user/year • Save ${(plan.price.monthly - plan.price[billingPeriod]) * 12}/year
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <button 
                    className={`w-full mb-6 px-6 py-4 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white hover:opacity-90 shadow-lg`
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>

                  {/* Limits */}
                  <div className="mb-6 p-4 rounded-lg bg-slate-50">
                    <h4 className="font-semibold text-sm text-slate-500 uppercase tracking-wide mb-3">
                      Plan Limits
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Users:</span>
                        <span className="font-semibold">{plan.limits.users}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Recordings:</span>
                        <span className="font-semibold">{plan.limits.recordings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Storage:</span>
                        <span className="font-semibold">{plan.limits.storage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Transcription:</span>
                        <span className="font-semibold">{plan.limits.transcription}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features by Category */}
                  <div className="space-y-6">
                    {plan.features.map((category, catIndex) => (
                      <div key={catIndex}>
                        <h4 className="font-semibold text-sm text-slate-900 mb-3">
                          {category.category}
                        </h4>
                        <ul className="space-y-2">
                          {category.items.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              {feature.included ? (
                                <Check className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                              ) : (
                                <X className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                              )}
                              <span className={`text-sm ${
                                feature.included ? 'text-slate-700' : 'text-slate-400'
                              }`}>
                                {feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Layer Pricing Model */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Intelligence Layer Pricing Model</h2>
              <p className="text-lg text-slate-600">
                Tasknova is built as a modular intelligence platform. Teams can start with agents and activate intelligence layers as needed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border-2 border-cyan-500 bg-cyan-50"
              >
                <div className="text-cyan-600 font-bold text-sm uppercase tracking-wide mb-2">Layer</div>
                <h3 className="text-xl font-bold mb-2">Conversation Intelligence</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Analyze conversations, detect buying signals, and generate deal insights
                </p>
                <div className="text-3xl font-bold text-cyan-600">$30<span className="text-base text-slate-600 font-normal">/user/month</span></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl border-2 border-purple-500 bg-purple-50"
              >
                <div className="text-purple-600 font-bold text-sm uppercase tracking-wide mb-2">Layer</div>
                <h3 className="text-xl font-bold mb-2">Engagement Intelligence</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Track customer interaction patterns and optimize engagement timing
                </p>
                <div className="text-3xl font-bold text-purple-600">$30<span className="text-base text-slate-600 font-normal">/user/month</span></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl border-2 border-green-500 bg-green-50"
              >
                <div className="text-green-600 font-bold text-sm uppercase tracking-wide mb-2">Layer</div>
                <h3 className="text-xl font-bold mb-2">Coaching Intelligence</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Generate personalized coaching insights and performance analytics
                </p>
                <div className="text-3xl font-bold text-green-600">$30<span className="text-base text-slate-600 font-normal">/user/month</span></div>
              </motion.div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 text-center">
              <p className="text-lg font-semibold text-slate-900">
                Bundle all 3 layers for maximum performance optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-600" />
                <h2 className="text-3xl font-bold">Or Choose Individual Products</h2>
              </div>
              <p className="text-lg text-slate-600">
                Start with what you need. Add more products anytime. Bundle for 25% savings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-1">{module.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-3">{module.tagline}</p>
                  <p className="text-sm text-slate-600 mb-4">{module.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">${module.price[billingPeriod]}</span>
                      <span className="text-slate-600">/user/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-xs text-slate-500 mb-4">
                    Ideal for: {module.ideal}
                  </div>

                  <button className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg font-semibold text-slate-700 hover:border-cyan-500 transition-colors">
                    Start Free Trial
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Bundle All 3 & Save 25%</h3>
              <p className="mb-4">Full platform from <span className="text-3xl font-bold">$67</span>/user/month</p>
              <button className="px-8 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                Get Full Platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Optional Add-Ons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => {
                const Icon = addon.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-cyan-100">
                        <Icon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold">{addon.name}</h3>
                          <span className="text-cyan-600 font-bold">{addon.price}</span>
                        </div>
                        <p className="text-sm text-slate-600">{addon.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <DollarSign className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              See Your Potential ROI
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Most customers achieve full payback in 4-5 months. Calculate your expected return.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Clock, value: "4.2 months", label: "Average Payback Period" },
                { icon: TrendingUp, value: "385%", label: "3-Year ROI" },
                { icon: DollarSign, value: "$127K", label: "Avg. Annual Value per Team" }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="p-6 rounded-xl bg-slate-800">
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Calculate Your ROI
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <HelpCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                      <h3 className="font-bold">{faq.question}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === index ? "auto" : 0,
                      opacity: expandedFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-14">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Join 5,000+ revenue teams growing with Tasknova. Start your free trial today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Start 14-Day Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 rounded-xl font-semibold text-slate-700 hover:border-cyan-500 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PricingPage;