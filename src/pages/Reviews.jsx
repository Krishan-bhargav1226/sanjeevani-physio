import React from "react";
import LuxuryTestimonials from "../components/LuxuryTestimonials";
import SEO from "../components/SEO";
import { Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Reviews() {
  return (
    <div className="animate-fadeIn pt-28 md:pt-36 bg-bg min-h-screen">
      <SEO 
        title="Patient Outcomes & Verified Reviews" 
        description="Read 500+ verified patient reviews and non-surgical recovery stories from Sanjeevani Physiotherapy Centre Hisar." 
      />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-darkSection text-white rounded-3xl p-8 sm:p-12 border-2 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 / 5.0 Rating (500+ Patient Feedback)</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
                Real Patient Outcome Stories
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Read how patients suffering from severe sciatica, slip disc, knee osteoarthritis, and sports injuries avoided surgery and regained their active lifestyle.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white/10 p-6 rounded-3xl border border-white/20 text-center space-y-2">
                <span className="text-4xl font-extrabold text-amber-400 font-display">4.9 ★</span>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Overall Clinical Rating</p>
                <p className="text-[11px] text-slate-300">Based on Google Reviews & Patient Satisfaction Form</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Showcase */}
      <LuxuryTestimonials />

      {/* Consultation Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-slate-300 shadow-md text-center space-y-4 max-w-3xl mx-auto">
          <Award className="w-12 h-12 text-primary mx-auto" />
          <h3 className="text-2xl font-bold font-display text-textMain">Ready to start your non-surgical recovery?</h3>
          <p className="text-xs text-muted max-w-md mx-auto">
            Book your direct diagnostic exam with Dr. Sohan Lal at Sanjeevani Physiotherapy Centre Hisar.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-extrabold text-xs px-8 py-3.5 rounded-full shadow-lg transition-all"
            >
              Book Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
