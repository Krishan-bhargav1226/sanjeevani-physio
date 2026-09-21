import React from "react";
import SwissHero from "../components/SwissHero";
import StatsSection from "../components/StatsSection";
import DoctorPhilosophy from "../components/DoctorPhilosophy";
import TreatmentsSection from "../components/TreatmentsSection";
import WellnessJourney from "../components/WellnessJourney";
import BookingSection from "../components/BookingSection";
import LuxuryTestimonials from "../components/LuxuryTestimonials";
import FAQAccordion from "../components/FAQAccordion";
import SEO from "../components/SEO";
import { painConditions } from "../data/content";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="animate-fadeIn flex flex-col">
      <SEO 
        title="Non-Surgical Spine & Joint Recovery Clinic" 
        description="Sanjeevani Physiotherapy & Slimming Centre Hisar under Dr. Sohan Lal (BPT, MPTh Sports, CMT) - Expert care for Slip Disc, Sciatica, Knee Pain & Stroke Rehab." 
      />

      {/* 1. Hero Banner */}
      <div className="order-1">
        <SwissHero />
      </div>

      {/* 2. Key Statistics Banner (Immediate Proof) */}
      <div className="order-2 md:order-2">
        <StatsSection />
      </div>

      {/* 3. Interactive Appointment Booking Section (2nd/3rd Position on Mobile) */}
      <div className="order-3 md:order-8">
        <BookingSection />
      </div>

      {/* 4. Meet Dr. Sohan Lal & Clinical Philosophy */}
      <div className="order-4 md:order-3">
        <DoctorPhilosophy />
      </div>

      {/* 5. Comprehensive Pain Conditions Grid with Images */}
      <section className="py-24 bg-bg relative order-5 md:order-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Specialized Conditions</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-textMain tracking-tight">
              Evidence-based care for chronic joint & spine dysfunctions.
            </h2>
            <p className="text-sm text-muted font-medium">
              We specialize in root-cause biomechanical repair without reliance on lifelong medications or high-risk surgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painConditions.map((cond, i) => (
              <motion.div
                key={cond.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-3xl overflow-hidden border border-secondary/15 shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Banner Header */}
                  <div className="relative h-44 overflow-hidden bg-darkSection">
                    <img
                      src={cond.image}
                      alt={cond.name}
                      width="400"
                      height="200"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkSection/95 via-darkSection/30 to-transparent"></div>
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center font-bold text-xs shadow-md">
                        0{i + 1}
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-400 bg-darkSection/90 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30">
                        {cond.recoveryRate}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-lg font-extrabold font-display text-white leading-tight">
                        {cond.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <p className="text-[11px] font-extrabold text-textMain uppercase tracking-wider">Common Symptoms:</p>
                      <ul className="space-y-1.5 text-xs text-muted">
                        {cond.symptoms.map((sym, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-1.5 font-bold">•</span>
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-bg/90 p-3.5 rounded-2xl border border-slate-200 text-xs text-textMain font-medium leading-relaxed">
                      <strong className="text-primary font-bold">Non-Surgical Solution:</strong> {cond.solution}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center space-x-2 bg-darkSection hover:bg-primary text-white text-xs font-bold py-3 rounded-2xl transition-all shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span>Book Consultation for {cond.shortName}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Clinical Treatments & Therapies Showcase */}
      <div className="order-6 md:order-5">
        <TreatmentsSection />
      </div>

      {/* 7. 4-Step Recovery Process */}
      <div className="order-7 md:order-6">
        <WellnessJourney />
      </div>

      {/* 8. Verified Patient Outcome Testimonials */}
      <div className="order-8 md:order-7">
        <LuxuryTestimonials />
      </div>

      {/* 9. Frequently Asked Questions */}
      <div className="order-9 md:order-8">
        <FAQAccordion />
      </div>

    </div>
  );
}
