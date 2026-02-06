import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How long does it take to implement Tasknova?",
    answer: "Most teams are fully operational within 3-5 business days. Our Professional plan includes guided onboarding where we connect your CRM, calendar, and meeting tools, configure your workspace, and train your team. For Enterprise customers, we provide white-glove onboarding with dedicated implementation specialists, typically completing setup in 1-2 weeks depending on customization requirements."
  },
  {
    question: "Which CRMs and tools does Tasknova integrate with?",
    answer: "Tasknova offers 50+ native integrations including: Salesforce, HubSpot, Pipedrive, Zoho, Copper (CRM); Zoom, Google Meet, Microsoft Teams, Webex (meetings); Gmail, Outlook, SendGrid (email); Slack, Microsoft Teams (communication); and Zapier, Make.com (automation). We also provide a REST API for custom integrations. Enterprise customers can request priority integration development for their specific tools."
  },
  {
    question: "Is my data secure and compliant?",
    answer: "Yes. Tasknova is SOC 2 Type II certified, GDPR compliant, and CCPA ready. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We offer enterprise-grade security features including SSO/SAML, role-based access controls, audit logs, and multi-region data hosting. Our infrastructure is hosted on AWS with 99.9% uptime SLA. We never train our AI models on your proprietary data without explicit consent."
  },
  {
    question: "Can I use Tasknova for specific products only, or do I need the full platform?",
    answer: "You have complete flexibility. You can start with just Tasknova Insight (conversation intelligence), Engage (omnichannel tracking), or Coach (AI coaching) individually, starting at $29-39/user/month. Or bundle all three for 25% savings. Many customers start with one product and expand as they see ROI. There's no requirement to purchase the full platform, and you can add or remove products as your needs evolve."
  },
  {
    question: "What languages does Tasknova support?",
    answer: "Tasknova's AI transcription supports 40+ languages with 98% accuracy, including English, Spanish, French, German, Italian, Portuguese, Dutch, Swedish, Danish, Norwegian, Finnish, Polish, Russian, Japanese, Mandarin Chinese, Korean, Arabic, Hebrew, and more. Sentiment analysis and conversation intelligence features currently support 25 languages, with ongoing expansion. Contact us for specific language requirements."
  },
  {
    question: "How does Tasknova's AI coaching work?",
    answer: "Our AI analyzes every customer conversation against your defined success criteria and industry best practices. It identifies patterns in top performers (talk-listen ratio, question types, objection handling, closing techniques) and automatically generates personalized coaching recommendations for each rep. Managers receive weekly coaching scorecards highlighting skill gaps, improvement trends, and suggested focus areas. The AI also creates custom training playbooks from your best calls."
  },
  {
    question: "What's included in the 14-day free trial?",
    answer: "Your free trial includes full access to your chosen plan (Starter or Professional) with no feature limitations. You'll get: unlimited call recording and transcription, all integrations, AI coaching insights, email tracking, and priority support. No credit card required to start. If you don't cancel before day 14, we'll charge the card you provide at the end of the trial. You can cancel anytime with no penalties."
  },
  {
    question: "Can Tasknova handle our complex sales process with multiple stakeholders?",
    answer: "Absolutely. Tasknova excels at tracking complex B2B sales cycles. We automatically map multi-stakeholder relationships, track engagement across all contacts within an account, identify champion vs. blocker signals, surface missing stakeholder coverage, and aggregate sentiment across all interactions. Our deal rooms provide a complete view of every touchpoint with every stakeholder throughout your entire sales cycle."
  },
  {
    question: "How does pricing work as our team grows?",
    answer: "Pricing scales with your team size. You're billed monthly or annually (20% discount) based on the number of active users. You can add or remove seats anytime—we'll prorate charges for the current billing period. For teams over 100 users, we offer volume discounts starting at 15%. Enterprise customers receive custom pricing with committed user minimums and guaranteed rate locks."
  },
  {
    question: "What kind of ROI can we expect from Tasknova?",
    answer: "Our customers typically see measurable ROI within 3-6 months. Average results include: 28-35% improvement in win rates, 12+ hours saved per rep per week, 32% increase in forecast accuracy, 40% faster new rep ramp time, and 22% reduction in customer churn. Many customers achieve full payback on their Tasknova investment within 4-5 months through increased deal velocity and higher quota attainment. We offer a free ROI calculator to model potential returns for your specific situation."
  },
  {
    question: "What level of support do you provide?",
    answer: "Support varies by plan: Starter includes email support (24-hour response time). Professional includes priority 24/7 support via email, chat, and phone (4-hour response time), plus access to our customer community and knowledge base. Enterprise includes a dedicated Customer Success Manager, custom SLAs (1-hour critical response), quarterly business reviews, and priority feature requests. All plans include free onboarding training."
  },
  {
    question: "Can we migrate our historical conversation data into Tasknova?",
    answer: "Yes. We provide data migration services for Enterprise customers, including historical call recordings, transcripts, and CRM activity data. Our team will work with you to map your existing data structure to Tasknova's format. For Professional plans, we offer self-service data import tools for the most common formats. Historical data counts against your plan's retention limits (30 days for Starter, 1 year for Professional, unlimited for Enterprise)."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about Tasknova. Can't find an answer? Chat with our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Chat with Sales
            </button>
            <button className="px-6 py-3 border-2 border-slate-300 rounded-lg font-semibold text-slate-700 hover:border-cyan-500 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
