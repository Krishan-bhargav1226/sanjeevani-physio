import React from "react";
import { clinic, onlineConsultation } from "../data/content";
import { getWhatsAppOnlineConsultUrl } from "../utils/whatsapp";
import { Video, FileText, Activity, MessageCircle, Phone, ArrowUpRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function OnlineConsultationBanner({ className = "" }) {
  const getIcon = (name) => {
    switch (name) {
      case "Video":
        return <Video className="w-5 h-5 text-emerald-400" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-primary-light" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case "MessageCircle":
        return <MessageCircle className="w-5 h-5 text-secondary-light" />;
      default:
        return <Video className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="online-consultation" className={`py-12 sm:py-16 md:py-20 bg-bg relative overflow-hidden ${className}`}>
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-darkSection via-[#07243b] to-darkSection rounded-[32px] p-6 sm:p-10 md:p-14 text-white shadow-2xl border-2 border-emerald-500/30 relative overflow-hidden">
          
          {/* Subtle Ambient Light Orb inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            
            {/* Top Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-emerald-400/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <Video className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tele-Rehabilitation • All India & Outstation</span>
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                  Can't Visit Hisar? <br className="hidden sm:block" />
                  <span className="text-shimmer bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                    Consult Dr. Sohan Lal Online.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
                  Connect 1-on-1 via secure HD Video Call (WhatsApp Video / Google Meet). Get clinical evaluation, MRI/X-ray review, posture diagnosis, and a customized home exercise recovery plan.
                </p>
              </div>

              {/* Quick Call Action */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-center space-x-3 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 uppercase tracking-wider font-extrabold">Chief Specialist</p>
                    <p className="text-xs font-bold text-white">{clinic.doctor} ({clinic.doctorCreds})</p>
                    <p className="text-[10px] text-emerald-400 font-mono">Reg. No: HSCP/PT/2025/3714</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {onlineConsultation.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 space-y-3 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-400/50 transition-all shadow-md">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* How It Works 4-Step Process */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>How Online Physiotherapy Works:</span>
                </span>
                <span className="text-[11px] text-slate-300 font-medium">Simple 4-Step Process</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {onlineConsultation.steps.map((st, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                    <span className="text-xs font-black text-emerald-400 font-mono bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      {st.step}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white font-display">{st.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is it for pills */}
            <div className="space-y-2.5">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-extrabold">
                Recommended For:
              </p>
              <div className="flex flex-wrap gap-2">
                {onlineConsultation.suitableFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-200 border border-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons Bottom Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm px-7 py-4 rounded-full shadow-xl shadow-emerald-950/40 border border-emerald-300/30 transition-all hover:scale-105"
              >
                <Video className="w-4 h-4 text-white" />
                <span>Book Online Video Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>

              <a
                href={getWhatsAppOnlineConsultUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm px-6 py-4 rounded-full border border-white/20 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Video Consult Inquiry</span>
              </a>

              <a
                href={`tel:${clinic.phones[0]}`}
                className="inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-bold text-xs px-5 py-4 rounded-full border border-white/10 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Helpline: {clinic.phones[0]}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
