import { Linkedin, Instagram, Mail } from "lucide-react";
import tasknovaLogo from "../assets/tasknova-logo-2.png";

const footerLinks = {
  Products: [
    "Tasknova Insight",
    "Tasknova Engage",
    "Tasknova Coach",
    "Platform Overview",
    "Integrations",
    "Pricing"
  ],
  Solutions: [
    "For Sales Teams",
    "For RevOps",
    "For Customer Success",
    "For Founders",
    "By Industry"
  ],
  Resources: [
    "Blog",
    "Case Studies",
    "Guides & eBooks",
    "ROI Calculator",
    "Product Tours",
    "Help Center"
  ],
  Company: [
    "About Us",
    "Careers",
    "Contact",
    "Partners",
    "Security",
    "Privacy Policy"
  ]
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/tasknova.io/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/tasknovaorg/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact.tasknova@gmail.com", label: "Email" }
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={tasknovaLogo} 
                alt="Tasknova Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Tasknova is an AI powered revenue intelligence platform that transforms customer conversations into company specific insights, coaching intelligence, and execution automation that drives predictable growth.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2026 Tasknova. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
