import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

import testimonial1 from "../assets/testimonial_1.png";
import testimonial2 from "../assets/testimonial_2.png";
import testimonial3 from "../assets/testimonial_3.png";

const testimonials = [
  {
    quote: "Tasknova reduced admin work, improved deal visibility, and accelerated sales velocity across our entire team.",
    author: "Aarav Sharma",
    role: "VP of Sales",
    company: "TechFlow Solutions",
    image: testimonial1
  },
  {
    quote: "The coaching insights helped us identify skill gaps and saw immediate improvements in team performance.",
    author: "Rohit Iyer",
    role: "Head of Revenue Operations",
    company: "CloudScale Inc",
    image: testimonial2
  },
  {
    quote: "A platform that connects all our revenue data with seamless integration into our existing stack.",
    author: "Karan Desai",
    role: "Chief Revenue Officer",
    company: "DataPrime Systems",
    image: testimonial3
  }
];

export function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved by Revenue Leaders Worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how teams like yours are achieving breakthrough results
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-10 h-10 text-cyan-500/20 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
