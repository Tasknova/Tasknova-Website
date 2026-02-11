import { motion } from "motion/react";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    name: "Starter",
    price: "$49",
    period: "per user/month",
    description: "Perfect for small teams getting started with conversation intelligence",
    isPopular: false,
    features: [
      { name: "Up to 10 users", included: true },
      { name: "Call recording & transcription", included: true },
      { name: "Basic sentiment analysis", included: true },
      { name: "Email tracking (500/month)", included: true },
      { name: "5 CRM integrations", included: true },
      { name: "30-day data retention", included: true },
      { name: "Email support", included: true },
      { name: "Advanced AI coaching", included: false },
      { name: "Custom playbooks", included: false },
      { name: "API access", included: false },
      { name: "Dedicated CSM", included: false }
    ],
    cta: "Start Free Trial",
    gradient: "from-slate-500 to-slate-600"
  },
  {
    name: "Professional",
    price: "$89",
    period: "per user/month",
    description: "Most popular for growing teams scaling their revenue operations",
    isPopular: true,
    features: [
      { name: "Up to 50 users", included: true },
      { name: "Unlimited call recording & transcription", included: true },
      { name: "Advanced sentiment & conversation scoring", included: true },
      { name: "Unlimited email intelligence", included: true },
      { name: "All integrations (50+)", included: true },
      { name: "1-year data retention", included: true },
      { name: "Priority support (24/7)", included: true },
      { name: "Advanced AI coaching insights", included: true },
      { name: "Custom playbooks & training", included: true },
      { name: "Deal risk alerts", included: true },
      { name: "API access (limited)", included: false },
      { name: "Dedicated CSM", included: false }
    ],
    cta: "Start Free Trial",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    description: "For large teams needing advanced security, customization, and support",
    isPopular: false,
    features: [
      { name: "Unlimited users", included: true },
      { name: "Everything in Professional, plus:", included: true },
      { name: "Unlimited data retention", included: true },
      { name: "White-label options", included: true },
      { name: "Advanced security (SSO, SAML)", included: true },
      { name: "Custom integrations", included: true },
      { name: "Unlimited API access", included: true },
      { name: "Dedicated CSM & onboarding", included: true },
      { name: "Custom SLAs", included: true },
      { name: "Audit logs & compliance reports", included: true },
      { name: "Multi-region data hosting", included: true }
    ],
    cta: "Contact Sales",
    gradient: "from-purple-500 to-indigo-600"
  }
];

const modules = [
  {
    name: "Tasknova Insight",
    startingPrice: "$39/user/month",
    description: "Conversation intelligence for calls and meetings"
  },
  {
    name: "Tasknova Engage",
    startingPrice: "$29/user/month",
    description: "Omnichannel engagement tracking and automation"
  },
  {
    name: "Tasknova Coach",
    startingPrice: "$35/user/month",
    description: "AI-powered coaching and performance analytics"
  }
];

export function PricingPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Flexible Pricing That Grows With You
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Start with one product or get the full platform. No long-term contracts. Cancel anytime.
          </p>
        </div>

        {/* Module Pricing */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-cyan-600" />
              <h3 className="text-2xl font-bold">Modular Approach</h3>
            </div>
            <p className="text-slate-600 mb-6">
              Buy products individually or bundle them for maximum value. Mix and match based on your needs.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {modules.map((module, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200"
                >
                  <h4 className="font-bold mb-1">{module.name}</h4>
                  <p className="text-2xl font-bold text-cyan-600 mb-2">
                    {module.startingPrice}
                  </p>
                  <p className="text-sm text-slate-600">{module.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
              <p className="font-semibold">
                Bundle all 3 products and save 25% • Full platform from $79/user/month
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl ${
                tier.isPopular 
                  ? 'bg-white shadow-2xl scale-105 border-2 border-cyan-500' 
                  : 'bg-white shadow-lg border border-slate-200'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-slate-600 text-sm mb-6 min-h-[40px]">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    {tier.period !== "contact sales" && (
                      <span className="text-slate-600">/{tier.period}</span>
                    )}
                  </div>
                  {tier.period === "contact sales" && (
                    <span className="text-slate-600">{tier.period}</span>
                  )}
                </div>

                {/* CTA */}
                <Link to={tier.cta === "Contact Sales" ? "/contact" : "/book-demo"}>
                  <button 
                    className={`w-full mb-8 px-6 py-4 rounded-xl font-semibold transition-all ${\n                      tier.isPopular\n                        ? `bg-gradient-to-r ${tier.gradient} text-white hover:opacity-90 shadow-lg`
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'\n                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </Link>

                {/* Features */}
                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-slate-700' : 'text-slate-400'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>✓ SOC 2 Type II Certified</span>
            <span>✓ GDPR Compliant</span>
            <span>✓ 99.9% Uptime SLA</span>
            <span>✓ 24/7 Support</span>
          </div>
        </div>

        {/* FAQ Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-slate-900 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">
              Not sure which plan is right for you?
            </h3>
            <p className="text-slate-300 mb-6">
              Book a call with our team to discuss your specific needs and get a personalized recommendation.
            </p>
            <Link to="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Schedule Pricing Consultation
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}