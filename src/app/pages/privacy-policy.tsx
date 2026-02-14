import { useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = description;
      document.head.appendChild(metaTag);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title, description]);
}

export default function PrivacyPolicyPage() {
  usePageMeta(
    "Tasknova Privacy Policy",
    "Learn how Tasknova collects, uses, and protects customer and visitor data."
  );

  const sections = [
    {
      title: "Introduction",
      body: [
        "Tasknova is committed to protecting your privacy. This policy explains how we collect, use, and safeguard personal and usage data across our website, platform, and integrations.",
        "By accessing Tasknova services, you consent to the practices described in this policy."
      ]
    },
    {
      title: "Information We Collect",
      body: [
        "Personal identification data such as name, email, role, and company details provided during sign-up or demo requests.",
        "Usage analytics including pages viewed, feature interactions, device identifiers, and session metadata.",
        "Communication data from support requests, product feedback, and in-app messaging.",
        "Call and conversation intelligence data captured or synchronized through connected meeting and voice platforms, where authorized.",
        "Integration data from CRMs, meeting tools, and email platforms to enable syncing, analytics, and automation."
      ]
    },
    {
      title: "How We Use Information",
      body: [
        "Deliver core platform functionality, reporting, and automation.",
        "Generate AI-driven insights, recommendations, and coaching intelligence.",
        "Improve product performance, reliability, and user experience.",
        "Monitor security, detect fraud, and prevent misuse.",
        "Provide customer support and communicate product updates."
      ]
    },
    {
      title: "Data Protection & Security",
      body: [
        "We employ encryption in transit and at rest where supported by underlying services.",
        "Role-based access controls and least-privilege principles govern internal data access.",
        "Security practices follow industry best efforts, including periodic reviews and monitoring."
      ]
    },
    {
      title: "Third-Party Integrations",
      body: [
        "Tasknova connects with CRM systems, meeting platforms, email integrations, and analytics tools to sync relevant data.",
        "Data shared with third-party services is limited to what is necessary to deliver the requested functionality and remains subject to those providers' terms." 
      ]
    },
    {
      title: "Data Retention",
      body: [
        "Data is retained for as long as needed to deliver services, comply with legal obligations, or as configured by customers.",
        "Customers may request deletion of eligible data or configure retention where features allow." 
      ]
    },
    {
      title: "User Rights",
      body: [
        "You may request access, correction, or deletion of your personal information, subject to verification and legal limits.",
        "You may opt out of certain communications and, where supported, limit specific data processing." 
      ]
    },
    {
      title: "Cookies & Tracking",
      body: [
        "Tasknova uses cookies and similar technologies for analytics, performance, and essential functionality.",
        "You can manage cookie preferences through your browser settings or available consent tools." 
      ]
    },
    {
      title: "Policy Updates",
      body: [
        "We may update this Privacy Policy to reflect product, legal, or operational changes. Material updates will be communicated through the site or via email where appropriate." 
      ]
    },
    {
      title: "Contact Information",
      body: [
        "For privacy questions or requests, contact our support team at support@tasknova.io or reach us via your account representative." 
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <header className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold text-cyan-600 mb-3">Last updated: Feb 14, 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-600">
              How Tasknova collects, uses, and protects customer and visitor data.
            </p>
          </header>

          <div className="max-w-4xl mx-auto space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                {section.body.map((paragraph, index) => (
                  <p key={index} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
