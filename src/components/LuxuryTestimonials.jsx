import React from "react";
import { testimonials, clinic } from "../data/content";
import { Star, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import TiltCard from "./TiltCard";

export default function LuxuryTestimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface border-y border-secondary/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Patient Stories</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-textMain tracking-tight">
              Real outcomes from patients who chose non-surgical care.
            </h2>
          </div>

          <a
            href={clinic.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-extrabold text-xs px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all flex-shrink-0"
          >
            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>View Google Profile (5.0 ★)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TiltCard key={item.id}>
              <div
                className="h-full bg-bg rounded-3xl p-6 sm:p-8 border border-secondary/15 shadow-sm space-y-6 flex flex-col justify-between"
              >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
                    {item.source || "Google Review"}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-textMain leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="flex items-center space-x-3.5 pt-4 border-t border-slate-200/60">
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-darkSection to-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md border-2 border-white">
                    {item.initials || item.name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-0.5">
                    <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-extrabold text-textMain text-sm font-display truncate">{item.name}</h4>
                    {item.date && <span className="text-[10px] text-slate-400 font-semibold truncate">• {item.date}</span>}
                  </div>
                  <p className="text-xs text-muted truncate">
                    <span className="font-bold text-primary">{item.condition}</span> • {item.city}
                  </p>
                </div>
              </div>
            </div>
            </TiltCard>
          ))}
        </div>

        {/* Rating Callout */}
        <div className="mt-12 bg-darkSection text-white p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-black text-amber-400 text-xl font-display border border-white/15">
              5.0 ★
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base text-white">Verified Google Business Profile</p>
              <p className="text-xs text-slate-300">Sanjeevani Physiotherapy Centre • Hisar Cantt</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={clinic.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold px-6 py-3 rounded-full transition-all shadow-lg"
            >
              <span>Read Original GMB Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex bg-primary hover:bg-primary-hover text-white text-xs font-bold px-6 py-3 rounded-full transition-all"
            >
              Start Recovery
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
