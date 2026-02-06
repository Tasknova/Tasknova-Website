import { motion } from "motion/react";
import { 
  Shield, Lock, Eye, FileCheck, Server, Users,
  CheckCircle2, Globe, Database, AlertCircle 
} from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "SOC 2 Type II Certified",
    description: "Independently audited security controls for confidentiality, integrity, and availability of customer data"
  },
  {
    icon: Lock,
    title: "Enterprise Encryption",
    description: "TLS 1.3 in transit, AES-256 at rest. All data encrypted with customer-specific keys"
  },
  {
    icon: Eye,
    title: "GDPR & CCPA Compliant",
    description: "Full compliance with global data privacy regulations including right to deletion and data portability"
  },
  {
    icon: FileCheck,
    title: "Regular Penetration Testing",
    description: "Quarterly third-party security audits and continuous vulnerability assessments"
  },
  {
    icon: Server,
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade infrastructure on AWS with multi-region redundancy and automated failover"
  },
  {
    icon: Users,
    title: "SSO & SAML 2.0",
    description: "Single sign-on with Okta, Azure AD, Google Workspace, and other identity providers"
  },
  {
    icon: Database,
    title: "Data Residency Options",
    description: "Choose where your data is stored: US, EU, UK, Canada, Australia, or Singapore regions"
  },
  {
    icon: AlertCircle,
    title: "Real-time Monitoring",
    description: "24/7 security operations center with automated threat detection and incident response"
  }
];

const complianceLogos = [
  { name: "SOC 2 Type II", certified: true },
  { name: "GDPR", certified: true },
  { name: "CCPA", certified: true },
  { name: "HIPAA", certified: true },
  { name: "ISO 27001", certified: true },
  { name: "Privacy Shield", certified: true }
];

const dataProtection = [
  {
    title: "Your Data is YOUR Data",
    points: [
      "We never train AI models on your proprietary data without explicit opt-in consent",
      "You maintain complete ownership of all conversation data and analytics",
      "Export your data anytime in standard formats (JSON, CSV, or via API)",
      "Delete all data permanently within 30 days of account closure"
    ]
  },
  {
    title: "Role-Based Access Controls",
    points: [
      "Granular permissions for viewing recordings, transcripts, and analytics",
      "Admin controls for data retention policies and user access",
      "Audit logs track all access to sensitive customer data",
      "Automatic session timeout and forced re-authentication options"
    ]
  },
  {
    title: "AI Ethics & Transparency",
    points: [
      "Clear disclosure of AI-generated insights and recommendations",
      "No hidden scoring or black-box algorithms affecting your team",
      "Bias detection and mitigation in conversation analysis",
      "Human-in-the-loop review for all high-stakes recommendations"
    ]
  }
];

export function SecuritySection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Enterprise-Grade Security You Can Trust
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your customer data is your most valuable asset. We protect it with the highest security standards in the industry.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-colors"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance Badges */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Certified & Compliant
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {complianceLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-cyan-500 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>
                <span className="text-sm text-center">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Protection Details */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {dataProtection.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700"
              >
                <h4 className="text-xl font-bold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Infrastructure Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-cyan-400 mb-1">6</div>
                <div className="text-sm text-slate-300">Global Data Centers</div>
              </div>
              <div>
                <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
                <div className="text-sm text-slate-300">Uptime SLA</div>
              </div>
              <div>
                <Lock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-cyan-400 mb-1">256-bit</div>
                <div className="text-sm text-slate-300">AES Encryption</div>
              </div>
              <div>
                <Server className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                <div className="text-sm text-slate-300">Security Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-300 mb-6">
            Need more details on our security practices?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
              Download Security Whitepaper
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:border-white transition-colors">
              Request Compliance Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
