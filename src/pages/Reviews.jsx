import React from "react";
import LuxuryTestimonials from "../components/LuxuryTestimonials";
import SEO from "../components/SEO";
import { clinic } from "../data/content";
import { Star, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Reviews() {
  return (
    <div className="animate-fadeIn pt-28 md:pt-36 bg-bg min-h-screen">
      <SEO 
        title="Patient Outcomes & Verified Google Reviews" 
        description="Read verified Google reviews and non-surgical recovery stories from Sanjeevani Physiotherapy Centre Hisar (Dr. Sohan Lal)." 
      />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-darkSection text-white rounded-3xl p-8 sm:p-12 border-2 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-white/10">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 / 5.0 Rating (Verified Google Reviews)</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
                Real Patient Outcomes & Google Reviews
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Read how patients suffering from severe sciatica, slip disc, knee osteoarthritis, ACL tears, and sports injuries avoided surgery and regained their active lifestyle at Sanjeevani Physiotherapy Centre Hisar Cantt.
              </p>
              <div className="pt-2">
                <a
                  href={clinic.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-6 py-3 rounded-full shadow-lg transition-all"
                >
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Open Official Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white/10 p-6 rounded-3xl border border-white/20 text-center space-y-2 w-full max-w-xs">
                <span className="text-4xl font-extrabold text-amber-400 font-display">5.0 ★</span>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Google My Business Rating</p>
                <p className="text-[11px] text-emerald-300 font-semibold">180+ Verified Google Ratings</p>
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
