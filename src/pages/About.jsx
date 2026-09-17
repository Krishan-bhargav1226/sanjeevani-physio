import React from "react";
import DoctorPhilosophy from "../components/DoctorPhilosophy";
import WellnessJourney from "../components/WellnessJourney";
import SEO from "../components/SEO";
import { doctorBio } from "../data/content";
import { Award, CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="animate-fadeIn pt-28 md:pt-36 bg-bg min-h-screen">
      <SEO 
        title="Dr. Sohan Lal Profile & Clinical Background" 
        description="Learn about Dr. Sohan Lal (BPT, MPTh Sports, CMT) - Chief Physiotherapist with 8+ years experience in non-surgical joint & spine care in Hisar." 
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-darkSection text-white rounded-3xl p-8 sm:p-12 border-2 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                <UserCheck className="w-3.5 h-3.5 text-secondary" />
                <span>Lead Physiotherapist</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
                {doctorBio.name}
              </h1>
              <p className="text-secondary font-bold text-sm sm:text-base">
                {doctorBio.qualifications}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                {doctorBio.aboutText}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-200">
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-secondary mr-1.5" /> 8+ Yrs Clinical Experience</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-secondary mr-1.5" /> 5000+ Recovered Patients</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-secondary mr-1.5" /> Hisar Cantt Practice</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  src="/images/doctor_profile.png"
                  alt="Dr Sohan Lal"
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl object-cover border-4 border-white/20 shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3.5 rounded-2xl shadow-xl flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <span className="text-xs font-extrabold">Top Rated Physiotherapist</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications & Milestone Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Clinical Credentials</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-textMain tracking-tight">
              Certifications & Clinical Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doctorBio.certifications.map((cert, idx) => (
              <div key={idx} className="bg-bg p-5 rounded-2xl border border-slate-200 flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-textMain leading-relaxed">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Philosophy */}
      <DoctorPhilosophy />

      {/* 4 Step Wellness Journey */}
      <WellnessJourney />

      {/* Consultation Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-darkSection text-white rounded-3xl p-8 sm:p-12 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold font-display">Schedule a diagnostic consultation with Dr. Sohan Lal</h3>
            <p className="text-xs text-slate-300">Visit Sanjeevani Physiotherapy & Slimming Centre in Hisar Cantt.</p>
          </div>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-hover text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full shadow-lg transition-all"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
