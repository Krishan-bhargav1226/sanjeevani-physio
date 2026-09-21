import React, { useState, useEffect } from "react";
import { clinic } from "../data/content";
import { getWhatsAppInquiryUrl } from "../utils/whatsapp";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setShowTop(current > 250);
      setScrollPercent(totalHeight > 0 ? (current / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col space-y-3 items-center pointer-events-auto">
      {/* WhatsApp Action */}
      <a
        href={getWhatsAppInquiryUrl()}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative border-2 border-white/20"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-darkSection text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:inline-block">
          WhatsApp Chat ({clinic.phones[0]})
        </span>
      </a>

      {/* Phone Action */}
      <a
        href={`tel:${clinic.phones[0]}`}
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative border-2 border-white/20"
        aria-label="Call Doctor"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-full mr-3 bg-darkSection text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:inline-block">
          Call: {clinic.phones[0]}
        </span>
      </a>

      {/* Back to top with Circular Progress Ring */}
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-darkSection text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all group relative border-2 border-white/20"
          aria-label="Back to top"
        >
          <svg className="w-full h-full absolute inset-0 -rotate-90 p-0.5" viewBox="0 0 36 36">
            <path
              className="text-white/10"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-emerald-400 transition-all duration-150"
              strokeDasharray={`${scrollPercent}, 100`}
              strokeWidth="3"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <ArrowUp className="w-4 h-4 text-emerald-400 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}
