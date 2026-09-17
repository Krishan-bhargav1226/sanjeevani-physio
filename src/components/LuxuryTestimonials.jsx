import React from "react";
import { testimonials } from "../data/content";
import { Star, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import TiltCard from "./TiltCard";

export default function LuxuryTestimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface border-y border-secondary/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">Patient Stories</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-textMain tracking-tight">
            Real outcomes from patients who chose non-surgical care.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <TiltCard key={item.id}>
              <div
                className="h-full bg-bg rounded-3xl p-8 border border-secondary/15 shadow-sm space-y-6 flex flex-col justify-between"
              >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-softAccent px-2.5 py-0.5 rounded-full flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Verified Outcome
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-textMain leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-11 h-11 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-bold text-textMain text-sm font-display">{item.name}</h4>
                  <p className="text-xs text-muted">
                    <span className="font-semibold text-primary">{item.condition}</span> • {item.city} ({item.age})
                  </p>
                </div>
              </div>
            </div>
            </TiltCard>
          ))}
        </div>

        {/* Rating Callout */}
        <div className="mt-12 bg-darkSection text-white p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-extrabold text-amber-400 font-display">4.9 ★</span>
            <div>
              <p className="font-bold text-sm text-white">Rated 4.9/5 by 500+ Patients in Hisar</p>
              <p className="text-xs text-slate-300">Google Verified Reviews & Clinical Feedback</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-6 py-3 rounded-full transition-all"
          >
            Start Your Recovery
          </Link>
        </div>

      </div>
    </section>
  );
}
