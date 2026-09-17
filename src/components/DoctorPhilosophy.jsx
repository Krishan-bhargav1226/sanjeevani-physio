import React from "react";
import { clinic } from "../data/content";
import { Award, GraduationCap, HeartPulse, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DoctorPhilosophy() {
  return (
    <section id="about" className="py-24 bg-darkSection text-white relative overflow-hidden">
      
      {/* Subtle Glow background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Doctor Photo Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="rounded-[32px] overflow-hidden border-4 border-white/10 shadow-2xl bg-navy-900">
                <img
                  src="/images/doctor_profile.png"
                  alt={`${clinic.doctor} Physiotherapist`}
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 glass-pill p-4 rounded-2xl border border-emerald-500/40 flex items-center space-x-3 shadow-2xl">
                  <img src="/images/logo.png" alt="Sanjeevani Logo" className="w-11 h-11 object-contain rounded-full bg-white p-0.5 shadow-md flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-black text-white text-base font-display">{clinic.doctor} ({clinic.doctorRoleHindi})</h4>
                    <p className="text-xs text-emerald-400 font-extrabold">{clinic.doctorCreds}</p>
                    <p className="text-[11px] text-slate-300 font-medium">Chief Physiotherapist & Sports Rehab Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-secondary font-bold">Clinical Philosophy</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
                Care engineered around your body's natural movement.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              With over 8+ years of dedicated clinical practice, Dr. Sohan Lal leads Sanjeevani Physiotherapy Centre with a commitment to evidence-based non-surgical recovery. We focus on diagnosing the root biomechanical cause rather than just masking symptoms.
            </p>

            {/* Qualifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-pill p-4 rounded-2xl border border-white/10 flex items-start space-x-3">
                <GraduationCap className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">BPT, MPTh (Sports)</h4>
                  <p className="text-[11px] text-slate-300">Master in Sports Rehabilitation</p>
                </div>
              </div>

              <div className="glass-pill p-4 rounded-2xl border border-white/10 flex items-start space-x-3">
                <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Certified Manual Therapist (CMT)</h4>
                  <p className="text-[11px] text-slate-300">Joint & Spine Mobilization Expert</p>
                </div>
              </div>

              <div className="glass-pill p-4 rounded-2xl border border-white/10 flex items-start space-x-3">
                <HeartPulse className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Neuro Rehab Specialist</h4>
                  <p className="text-[11px] text-slate-300">Stroke & Paralysis Recovery</p>
                </div>
              </div>

              <div className="glass-pill p-4 rounded-2xl border border-white/10 flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">1-on-1 Personalized Care</h4>
                  <p className="text-[11px] text-slate-300">Direct Doctor Consultation</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-lg transition-all"
              >
                <span>Consult Dr. Sohan Lal</span>
                <ArrowUpRight className="w-4 h-4 text-softAccent" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
