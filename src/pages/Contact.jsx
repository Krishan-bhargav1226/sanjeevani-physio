import React from "react";
import BookingSection from "../components/BookingSection";
import FAQAccordion from "../components/FAQAccordion";
import SEO from "../components/SEO";
import { Calendar } from "lucide-react";

export default function Contact() {
  return (
    <div className="animate-fadeIn pt-28 md:pt-36 bg-bg min-h-screen">
      <SEO 
        title="Book Appointment & Contact Clinic" 
        description="Book direct consultation with Dr. Sohan Lal at Sanjeevani Physiotherapy & Slimming Centre Hisar Cantt. Call 9991070620." 
      />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4">
        <div className="bg-darkSection text-white rounded-3xl p-8 sm:p-12 border-2 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <Calendar className="w-3.5 h-3.5 text-secondary" />
              <span>Direct Clinic Consultation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Book Your Diagnostic Exam
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Visit our clinic in Hisar Cantt or confirm your time slot instantly via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <BookingSection className="pt-2 sm:pt-4 pb-12 sm:pb-16" />

      {/* FAQ Accordion */}
      <FAQAccordion />
    </div>
  );
}
