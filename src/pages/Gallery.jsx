import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: "/images/hero_physio.png", title: "Main Clinic Rehabilitation Suite", category: "Facility", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/images/spine_treatment.png", title: "Computerized Traction Unit", category: "Spine Therapy", span: "col-span-1" },
    { src: "/images/sports_rehab.png", title: "Active Exercise & K-Taping Suite", category: "Sports Rehab", span: "col-span-1" },
    { src: "/images/doctor_profile.png", title: "Dr. Sohan Lal Consultation Lounge", category: "Consultation", span: "col-span-1 md:col-span-2" },
  ];

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-bg relative">
      <SEO 
        title="Sanjeevani Clinic Facilities & Infrastructure Gallery" 
        description="Take a visual tour of Sanjeevani Physiotherapy Centre in Hisar Cantt — sanitized, comfortable, and state-of-the-art facility." 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Banner */}
        <div className="bg-darkSection text-white rounded-3xl p-8 sm:p-12 mb-12 border-2 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <Building2 className="w-3.5 h-3.5 text-secondary" />
              <span>Modern Clinical Facility</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              State-of-the-Art Rehabilitation Environment
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              A premium, sanitized, fully equipped clinical center designed for patient comfort, safety, and swift physical recovery.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group shadow-md border-2 border-surface ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkSection/90 via-darkSection/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-darkSection/80 px-2.5 py-0.5 rounded-full border border-white/10">
                    {img.category}
                  </span>
                  <h4 className="text-white font-bold text-base sm:text-lg font-display">{img.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
