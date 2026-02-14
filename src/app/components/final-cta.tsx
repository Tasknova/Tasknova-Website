import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const benefits = [
  "Start with one product, expand when ready",
  "No long-term contracts required",
  "Implementation support included",
  "30-day money-back guarantee"
];

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Customer Conversations Into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Predictable Revenue Growth
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of revenue teams using AI intelligence to close more deals, 
            coach better, and scale faster.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link to="/book-demo">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-7 text-lg group shadow-2xl"
              >
                Book Your Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-slate-400">
            No credit card required • 14 day trial • Setup in minutes
          </p>

          {/* Stats Bar */}
          <div className="mt-12 pt-12 border-t border-slate-700">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">98%</div>
                <div className="text-sm text-slate-400">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">10M+</div>
                <div className="text-sm text-slate-400">Conversations Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">32%</div>
                <div className="text-sm text-slate-400">Avg. Revenue Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}