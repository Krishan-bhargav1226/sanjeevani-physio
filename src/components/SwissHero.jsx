import React from "react";
import { clinic } from "../data/content";
import { ArrowUpRight, CheckCircle2, Sparkles, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SwissHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-bg overflow-hidden">
      
      {/* Background Animated Gradient Glow Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-0 w-[550px] h-[550px] bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-10 w-[480px] h-[480px] bg-secondary/15 rounded-full blur-3xl pointer-events-none"
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
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center space-x-3 bg-darkSection text-white px-5 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase shadow-xl border-2 border-white/20"
            >
              <img src="/images/logo.png" alt="Sanjeevani Logo" width="24" height="24" className="w-6 h-6 object-contain rounded-full bg-white p-0.5 shadow-sm" />
              <Sparkles className="w-4 h-4 text-amberGold" />
              <span className="text-shimmer">SANJEEVANI PHYSIOTHERAPY & SLIMMING CENTRE</span>
            </motion.div>
          </motion.div>

          {/* Massive Display Headline */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="heading-display text-textMain tracking-tight">
              Move better. <br />
              <span className="text-shimmer">
                Live stronger.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle & Doctor Intro Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed font-medium max-w-2xl">
                Scientific non-surgical joint recovery, spinal rehabilitation & body slimming care in Hisar Cantt under <strong className="text-textMain font-bold underline decoration-primary/40 underline-offset-4">{clinic.doctor} ({clinic.doctorCreds})</strong>.
              </p>

              {/* Action Buttons with Spring Hover Effects */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-primary-hover text-white text-base font-extrabold px-8 py-4 rounded-full shadow-2xl shadow-primary/30 transition-all border border-white/20 w-full sm:w-auto"
                  >
                    <span>Book Appointment</span>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <a
                    href={`tel:${clinic.phones[0]}`}
                    className="inline-flex items-center justify-center space-x-2 bg-surface hover:bg-slate-100 text-textMain border-2 border-slate-300 text-base font-bold px-7 py-4 rounded-full shadow-sm transition-all w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4 text-secondary" />
                    <span>Call: {clinic.phones[0]}</span>
                  </a>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                <motion.div whileHover={{ y: -3 }} className="flex items-center space-x-2.5 text-xs font-bold text-textMain bg-surface p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>8+ Yrs Experience</span>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="flex items-center space-x-2.5 text-xs font-bold text-textMain bg-surface p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>5000+ Recovered</span>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="flex items-center space-x-2.5 text-xs font-bold text-textMain bg-surface p-3.5 rounded-2xl border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>100% Non-Op Care</span>
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
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-primary shadow-md"
                  />
                  <div>
                    <h4 className="font-extrabold text-textMain text-base font-display">{clinic.doctor}</h4>
                    <p className="text-xs text-primary font-bold">{clinic.doctorCreds}</p>
                    <p className="text-[11px] text-muted font-medium">{clinic.doctorRole}</p>
                  </div>
                </div>

                <div className="bg-bg p-3.5 rounded-2xl border border-slate-200 text-xs text-textMain font-medium leading-relaxed">
                  "Evidence-based joint mobilization and state-of-the-art electrotherapy to help you live a active, pain-free life."
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Large Showcase Banner with Hover Scale */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 relative rounded-[32px] overflow-hidden border-4 border-surface shadow-2xl bg-darkSection group"
        >
          <img
            src="/images/hero_physio.png"
            alt="Sanjeevani Physiotherapy Clinic Interior"
            width="1200"
            height="480"
            className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkSection via-darkSection/30 to-transparent"></div>

          {/* Banner Caption Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white">
            <div className="glass-pill px-6 py-4 rounded-2xl border border-white/20 max-w-xl flex items-center space-x-4 shadow-xl">
              <img src="/images/logo.png" alt="Sanjeevani Emblem" width="48" height="48" className="w-12 h-12 object-contain rounded-full bg-white p-1 flex-shrink-0 shadow-lg" />
              <div>
                <h4 className="font-extrabold text-base text-white font-display">SANJEEVANI PHYSIOTHERAPY & SLIMMING CENTRE</h4>
                <p className="text-xs text-slate-200 mt-0.5 font-medium">Karan Singh Market, TCP-2, Near Krishna Devi Hospital, Hisar Cantt</p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-hover text-white font-extrabold text-xs px-6 py-3.5 rounded-full shadow-lg border border-white/20 transition-all hover:scale-105"
            >
              Book Direct Consultation
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
