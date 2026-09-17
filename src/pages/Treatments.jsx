import React from "react";
import TreatmentsSection from "../components/TreatmentsSection";
import SEO from "../components/SEO";
import { technologies, clinic } from "../data/content";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Treatments() {
  return (
    <div className="animate-fadeIn pt-28 md:pt-36 bg-bg min-h-screen">
      <SEO 
        title="Clinical Specialties & Non-Surgical Therapies" 
        description="Explore advanced joint mobilization, computerized traction, cold laser therapy, and stroke rehab at Sanjeevani Physiotherapy Hisar." 
      />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-darkSection text-white rounded-3xl p-8 sm:p-12 border-2 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5 text-secondary" />
              <span>Advanced Clinical Care</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Evidence-Based Non-Surgical Specialties
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Combining manual joint alignment, computerized electro-modalities, and active rehabilitation to treat root causes of pain.
            </p>
          </div>
        </div>
      </section>

      {/* Main Treatments Grid */}
      <TreatmentsSection />

      {/* Equipment & Technology Suite */}
      <section className="py-20 bg-surface border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Medical Instrumentation</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-textMain tracking-tight">
              High-Tech Therapy Suite
            </h2>
            <p className="text-sm text-muted">
              We utilize certified clinical modalities to relieve muscular spasms, decompress nerve roots, and trigger cellular healing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((t, idx) => (
              <div key={idx} className="bg-bg p-6 rounded-3xl border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-softAccent text-primary flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-extrabold text-base text-textMain font-display">{t.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">Need expert advice for your condition?</h3>
            <p className="text-xs sm:text-sm text-white/90">Book a direct diagnostic exam with Dr. Sohan Lal ({clinic.doctorCreds}).</p>
          </div>
          <Link
            to="/contact"
            className="bg-white text-darkSection font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full shadow-lg hover:bg-slate-100 transition-all whitespace-nowrap"
          >
            Book Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
