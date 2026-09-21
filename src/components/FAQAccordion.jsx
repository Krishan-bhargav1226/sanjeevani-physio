import React, { useState } from "react";
import { faqs, clinic } from "../data/content";
import { getWhatsAppInquiryUrl } from "../utils/whatsapp";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-bg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">Frequently Asked Questions</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-textMain tracking-tight">
            Everything you need to know about our treatment care.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-surface rounded-2xl border border-secondary/15 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-bold text-textMain text-base font-display">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                    isOpen ? "bg-primary text-white rotate-180" : "bg-bg text-muted"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-surface p-6 rounded-3xl border border-secondary/15 space-y-3">
          <h4 className="font-bold text-textMain text-sm">Have more questions about your condition?</h4>
          <p className="text-xs text-muted">Speak directly with Dr. Sohan Lal or clinic staff:</p>
          <div className="flex items-center justify-center space-x-4 pt-1">
            <a
              href={`tel:${clinic.phones[0]}`}
              className="inline-flex items-center space-x-2 bg-darkSection text-white font-semibold text-xs px-4 py-2 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{clinic.phones[0]}</span>
            </a>
            <a
              href={getWhatsAppInquiryUrl("Hello, I would like to ask a question regarding physiotherapy treatment.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-primary text-white font-semibold text-xs px-4 py-2 rounded-full"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
