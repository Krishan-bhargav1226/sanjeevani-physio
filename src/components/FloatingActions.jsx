import React, { useState, useEffect } from "react";
import { clinic } from "../data/content";
import { getWhatsAppInquiryUrl } from "../utils/whatsapp";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
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
          WhatsApp Chat
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
  );
}
