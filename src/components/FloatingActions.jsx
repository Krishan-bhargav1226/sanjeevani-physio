import React, { useState, useEffect } from "react";
import { clinic } from "../data/content";
import { getWhatsAppInquiryUrl } from "../utils/whatsapp";
import { Phone, MessageCircle, ArrowUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Mobile Bottom Sticky Quick Action Bar (Visible only on mobile sm:hidden) */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-darkSection/95 backdrop-blur-xl border-t-2 border-emerald-500/40 p-2 sm:hidden shadow-2xl">
        <div className="grid grid-cols-3 gap-1.5 items-center">
          
          <a
            href={`tel:${clinic.phones[0]}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-surface/10 hover:bg-surface/20 text-white transition-colors"
          >
            <Phone className="w-5 h-5 text-emerald-400 mb-0.5" />
            <span className="text-[10px] font-extrabold tracking-tight">कॉल करें</span>
          </a>

          <a
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-white mb-0.5" />
            <span className="text-[10px] font-extrabold tracking-tight">WhatsApp</span>
          </a>

          <Link
            to="/contact"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-primary hover:bg-primary-hover text-white shadow-md transition-colors"
          >
            <Calendar className="w-5 h-5 text-white mb-0.5" />
            <span className="text-[10px] font-extrabold tracking-tight">अपॉइंटमेंट</span>
          </Link>

        </div>
      </div>

      {/* 2. Desktop Floating Action Stack (Visible on sm and up) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col space-y-3">
        {/* WhatsApp Action */}
        <a
          href={getWhatsAppInquiryUrl()}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all group relative"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-darkSection text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            WhatsApp Chat ({clinic.phones[0]})
          </span>
        </a>

        {/* Phone Action */}
        <a
          href={`tel:${clinic.phones[0]}`}
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all group relative"
          aria-label="Call Doctor"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-full mr-3 bg-darkSection text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Call: {clinic.phones[0]}
          </span>
        </a>

        {/* Back to top */}
        {showTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-darkSection/80 hover:bg-darkSection text-white backdrop-blur-md flex items-center justify-center shadow-md hover:scale-110 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
