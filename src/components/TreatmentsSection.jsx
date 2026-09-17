import React, { useEffect, useState } from "react";
import { services, painConditions } from "../data/content";
import { Zap, Activity, Dumbbell, Trophy, Brain, Flame, CheckCircle2, ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function TreatmentsSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [activePainTab, setActivePainTab] = useState(painConditions[0].id);

  const activePain = painConditions.find((p) => p.id === activePainTab) || painConditions[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    if (selectedService) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  const getServiceIcon = (id) => {
    switch (id) {
      case "manual": return <Activity className="w-5 h-5 text-primary" />;
      case "electro": return <Zap className="w-5 h-5 text-primary" />;
      case "exercise": return <Dumbbell className="w-5 h-5 text-primary" />;
      case "sports": return <Trophy className="w-5 h-5 text-primary" />;
      case "stroke": return <Brain className="w-5 h-5 text-primary" />;
      case "slimming": return <Flame className="w-5 h-5 text-primary" />;
      default: return <Activity className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="treatments" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-extrabold">Clinical Specialties</p>
          <h2 className="heading-title text-textMain">
            Evidence-based physiotherapy engineered for lasting pain relief.
          </h2>
          <p className="text-base text-muted font-medium">
            Combining hands-on joint mobilization, electrotherapy technology, and personalized active rehabilitation.
          </p>
        </motion.div>

        {/* 1. Interactive Pain Diagnostics Tabs */}
        <div className="bg-surface rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-xl mb-16 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-primary">Symptom Diagnostic Finder</span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-textMain mt-1">Select your pain condition:</h3>
          </div>

          {/* Condition Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {painConditions.map((cond) => {
              const isSelected = cond.id === activePainTab;
              return (
                <button
                  key={cond.id}
                  type="button"
                  onClick={() => setActivePainTab(cond.id)}
                  className={`px-5 py-3 rounded-full text-xs font-extrabold whitespace-nowrap transition-all border ${isSelected
                      ? "bg-primary text-white border-primary shadow-md scale-105"
                      : "bg-bg text-textMain border-slate-300 hover:bg-slate-200"
                    }`}
                >
                  {cond.shortName}
                </button>
              );
            })}
          </div>

          {/* Active Condition Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center border-t border-slate-200">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xl font-bold font-display text-textMain">{activePain.name}</h4>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider font-extrabold text-muted">Common Symptoms:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePain.symptoms.map((s, idx) => (
                    <div key={idx} className="flex items-center text-xs text-textMain font-bold bg-bg p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-darkSection text-white p-5 rounded-2xl shadow-md space-y-1">
                <p className="text-xs font-bold text-secondary uppercase tracking-wider">Sanjeevani Care Plan:</p>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">{activePain.solution}</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-4 border-surface shadow-lg bg-darkSection">
                <img
                  src="/images/spine_treatment.png"
                  alt={activePain.name}
                  className="w-full h-60 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <TiltCard key={service.id}>
              <div
                className="h-full bg-surface rounded-3xl p-8 border-2 border-slate-200 shadow-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-bg border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[10px] font-extrabold text-primary bg-softAccent px-3 py-1 rounded-full uppercase tracking-wider border border-secondary/30">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-display text-textMain group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-muted mt-0.5">{service.englishTitle}</p>
                  </div>

                  <p className="text-xs text-muted leading-relaxed font-medium line-clamp-3">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-extrabold text-primary hover:text-darkSection flex items-center space-x-1"
                  >
                    <span>Learn details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to="/contact"
                    className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-sm"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkSection/80 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedService(null);
          }}
        >
          <div className="bg-surface rounded-3xl max-w-xl w-full p-8 shadow-2xl relative border-2 border-slate-200">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-textMain hover:bg-slate-200"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-softAccent flex items-center justify-center">
                {getServiceIcon(selectedService.id)}
              </div>
              <div>
                <h3 id="service-modal-title" className="text-2xl font-bold font-display text-textMain">{selectedService.title}</h3>
                <p className="text-xs text-primary font-bold">{selectedService.englishTitle}</p>
              </div>
            </div>

            <p className="text-xs text-textMain font-medium leading-relaxed mb-6">
              {selectedService.desc}
            </p>

            <div className="bg-bg p-5 rounded-2xl border border-slate-200 space-y-3 mb-6">
              <p className="text-xs font-extrabold text-textMain uppercase">Key Clinical Features:</p>
              <div className="space-y-2">
                {selectedService.features.map((f, i) => (
                  <div key={i} className="flex items-center text-xs text-textMain font-bold">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2 rounded-full text-xs font-bold text-textMain hover:bg-slate-100"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setSelectedService(null)}
                className="bg-primary hover:bg-primary-hover text-white text-xs font-extrabold px-6 py-2.5 rounded-full shadow-md"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
