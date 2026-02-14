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

export default function TermsAndServicesPage() {
  usePageMeta(
    "Tasknova Terms & Services",
    "Review the legal terms governing Tasknova platform usage."
  );

  const sections = [
    {
      title: "Acceptance of Terms",
      body: [
        "By accessing or using Tasknova, you agree to these Terms & Services. If you use Tasknova on behalf of an organization, you represent that you have authority to bind that organization." 
      ]
    },
    {
      title: "Platform Services Overview",
      body: [
        "Tasknova provides AI conversation intelligence, revenue intelligence, coaching intelligence, automation bots, and integrations with CRM, email, meeting, and analytics services.",
        "Features may evolve over time, and certain capabilities may require specific subscriptions or integrations." 
      ]
    },
    {
      title: "User Responsibilities",
      body: [
        "Use the platform lawfully and in compliance with applicable recording and data privacy laws.",
        "Maintain the confidentiality of account credentials and restrict access to authorized users.",
        "You retain ownership of your conversation and customer data; you grant Tasknova permission to process it for delivering services." 
      ]
    },
    {
      title: "Subscription & Pricing",
      body: [
        "Pricing may be custom or usage-based for automation and integrations. Billing terms are defined in order forms or subscription agreements.",
        "You agree to pay applicable fees and taxes, and to provide accurate billing information." 
      ]
    },
    {
      title: "Intellectual Property",
      body: [
        "Tasknova owns the platform, software, models, and related intellectual property. Customers own their conversation content and data.",
        "No rights are granted beyond those expressly provided in these terms." 
      ]
    },
    {
      title: "Platform Availability",
      body: [
        "Tasknova aims for high availability but does not guarantee uninterrupted access.",
        "Maintenance windows or unforeseen outages may occur; we will use reasonable efforts to restore service." 
      ]
    },
    {
      title: "Limitation of Liability",
      body: [
        "To the maximum extent permitted by law, Tasknova is not liable for indirect, incidental, consequential, or punitive damages arising from use of the platform.",
        "Aggregate liability is limited to the fees paid for the applicable subscription period, unless prohibited by law." 
      ]
    },
    {
      title: "Termination",
      body: [
        "Either party may terminate for material breach if not cured within a reasonable period.",
        "Tasknova may suspend or terminate access for misuse, legal risk, or non-payment. Data removal will follow applicable retention and export options." 
      ]
    },
    {
      title: "Governing Law",
      body: [
        "These terms are governed by the laws of the applicable jurisdiction specified in your order form or agreement." 
      ]
    },
    {
      title: "Contact Information",
      body: [
        "For questions about these terms, contact support@tasknova.io or your account representative." 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Services</h1>
            <p className="text-lg text-slate-600">
              Legal agreement governing Tasknova platform usage.
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
