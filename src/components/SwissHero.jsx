import React from "react";
import { clinic, services, specializedTherapies } from "../data/content";
import { ArrowUpRight, CheckCircle2, Sparkles, Phone, ShieldCheck, HeartPulse, Activity, Zap, Dumbbell, Trophy, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SwissHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const getTherapyIcon = (id) => {
    switch (id) {
      case "manual": return <Activity className="w-4 h-4 text-emerald-400" />;
      case "exercise": return <Dumbbell className="w-4 h-4 text-emerald-400" />;
      case "electro": return <Zap className="w-4 h-4 text-amber-400" />;
      case "sports": return <Trophy className="w-4 h-4 text-sky-400" />;
      case "stroke": return <Brain className="w-4 h-4 text-indigo-400" />;
      default: return <Activity className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="hero" className="relative pt-32 sm:pt-36 pb-16 lg:pt-40 lg:pb-24 bg-bg overflow-hidden">
      
      {/* Background Animated Gradient Glow Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-10 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-secondary/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl space-y-6"
        >
          {/* Top Kicker Floating Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center space-x-2.5 bg-darkSection text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-black tracking-wide shadow-xl border-2 border-emerald-500/40"
            >
              <img src="/images/logo.png" alt="Sanjeevani Logo" width="24" height="24" className="w-5 h-5 sm:w-6 sm:h-6 object-contain rounded-full bg-white p-0.5 shadow-sm" />
              <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-white font-extrabold">{clinic.name}</span>
              <span className="text-emerald-400 font-bold hidden sm:inline">• {clinic.tagline}</span>
            </motion.div>
          </motion.div>

          {/* Main Display Headline */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="heading-display text-textMain tracking-tight">
              Sanjeevani Physiotherapy & Slimming Centre <br />
              <span className="text-shimmer text-2xl sm:text-4xl md:text-5xl block mt-1 font-extrabold">
                Non-Surgical Spine & Joint Care Specialist
              </span>
            </h1>
          </motion.div>

          {/* Subtitle & Doctor Intro Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm sm:text-lg lg:text-xl text-muted leading-relaxed font-medium max-w-2xl">
                Evidence-based non-surgical recovery for neck, back, spine & joint pain by <strong className="text-textMain font-bold underline decoration-primary/40 underline-offset-4">{clinic.doctor} ({clinic.doctorCreds})</strong> in Hisar Cantt.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-primary-hover text-white text-sm sm:text-base font-extrabold px-7 py-4 rounded-full shadow-2xl shadow-primary/30 transition-all border border-white/20 w-full sm:w-auto"
                  >
                    <span>Book Appointment</span>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </Link>
                </motion.div>

                <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a
                      href={`tel:${clinic.phones[0]}`}
                      className="inline-flex items-center justify-center space-x-1.5 bg-surface hover:bg-slate-100 text-textMain border-2 border-slate-300 text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-3.5 rounded-full shadow-sm transition-all w-full"
                    >
                      <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{clinic.phones[0]}</span>
                    </a>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a
                      href={`tel:${clinic.phones[1]}`}
                      className="inline-flex items-center justify-center space-x-1.5 bg-surface hover:bg-slate-100 text-textMain border-2 border-slate-300 text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-3.5 rounded-full shadow-sm transition-all w-full"
                    >
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{clinic.phones[1]}</span>
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3">
                <motion.div whileHover={{ y: -2 }} className="flex items-center space-x-2 text-xs font-extrabold text-textMain bg-surface p-3 rounded-2xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>8+ Years Experience</span>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="flex items-center space-x-2 text-xs font-extrabold text-textMain bg-surface p-3 rounded-2xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>5000+ Happy Patients</span>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="flex items-center space-x-2 text-xs font-extrabold text-textMain bg-surface p-3 rounded-2xl border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>100% Non-Surgical</span>
                </motion.div>
              </div>

            </div>

            {/* Doctor Card with Hover Tilt & Glow */}
            <motion.div variants={itemVariants} className="lg:col-span-5 hidden lg:block">
              <motion.div 
                whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(2, 132, 199, 0.25)" }}
                className="bg-surface p-6 rounded-3xl border-2 border-secondary/30 shadow-xl space-y-4 relative transition-all"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/doctor_profile.png"
                    alt="Dr Sohan Lal Physiotherapist"
                    width="64"
                    height="64"
                    loading="eager"
                    decoding="async"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-primary shadow-md"
                  />
                  <div>
                    <h4 className="font-black text-textMain text-base font-display">{clinic.doctor}</h4>
                    <p className="text-xs text-primary font-bold">{clinic.doctorCreds}</p>
                    <p className="text-xs text-secondary font-extrabold">{clinic.doctorRole}</p>
                  </div>
                </div>

                <div className="bg-bg p-3.5 rounded-2xl border border-slate-200 text-xs text-textMain font-semibold leading-relaxed">
                  "Our mission is to eliminate root-cause pain and restore natural mobility without invasive surgery."
                </div>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* 13 Specialized Therapies Pill Strip */}
          <motion.div variants={itemVariants} className="pt-6">
            <div className="bg-darkSection p-4 sm:p-5 rounded-3xl border-2 border-emerald-500/30 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>13 Specialized Treatments & Therapies</span>
                </span>
                <span className="text-[10px] text-slate-300 font-bold hidden sm:inline">Sterile Non-Surgical Protocols</span>
              </div>

              <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
                {specializedTherapies.map((th) => (
                  <Link
                    key={th.id}
                    to="/treatments"
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-2xl border border-white/15 transition-all text-white whitespace-nowrap group flex-shrink-0"
                  >
                    <Zap className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold">{th.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Large Showcase Banner with Hover Scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 sm:mt-14 relative rounded-[28px] sm:rounded-[32px] overflow-hidden border-4 border-surface shadow-2xl bg-darkSection group"
        >
          <img
            src="/images/hero_physio.png"
            alt="Sanjeevani Physiotherapy Clinic Interior"
            width="1200"
            height="480"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="w-full h-[320px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkSection via-darkSection/40 to-transparent"></div>

          {/* Banner Caption Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
            <div className="glass-pill p-3.5 sm:px-6 sm:py-4 rounded-2xl border border-white/20 max-w-xl flex items-center space-x-3 sm:space-x-4 shadow-xl w-full sm:w-auto">
              <img src="/images/logo.png" alt="Sanjeevani Emblem" width="48" height="48" className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full bg-white p-1 flex-shrink-0 shadow-lg" />
              <div>
                <h4 className="font-extrabold text-xs sm:text-base text-white font-display">Sanjeevani Physiotherapy & Slimming Centre</h4>
                <p className="text-[11px] sm:text-xs text-slate-200 mt-0.5 font-medium">{clinic.address}</p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-hover text-white font-extrabold text-xs px-5 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-lg border border-white/20 transition-all hover:scale-105 w-full sm:w-auto text-center"
            >
              Book Direct Consultation
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
