import React, { useState } from "react";
import { clinic } from "../data/content";
import { getWhatsAppBookingUrl, buildAppointmentMessage } from "../utils/whatsapp";
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, Copy, ExternalLink, Check } from "lucide-react";

export default function BookingSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    condition: "Knee Osteoarthritis & Pain",
    date: "",
    time: "Morning (10 AM - 12 PM)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      alert("कृपया अपना नाम और मोबाइल नंबर दर्ज करें। / Please enter your name and phone number.");
      return;
    }
    setSubmitted(true);

    const waUrl = getWhatsAppBookingUrl(form);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 400);
  };

  const handleCopyMessage = () => {
    const text = buildAppointmentMessage(form);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-darkSection rounded-[32px] overflow-hidden text-white shadow-2xl border-2 border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/15">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-widest text-secondary font-extrabold">Online Appointments</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                  Start your pain-free journey today.
                </h2>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  Book a direct 1-on-1 diagnostic consultation with Dr. Sohan Lal. Fast confirmation via WhatsApp or telephone.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/15 flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300 font-bold uppercase tracking-wider">Direct Helplines</p>
                      <p className="text-sm font-bold text-white">{clinic.phones[0]} / {clinic.phones[1]}</p>
                    </div>
                  </div>

                  <div className="bg-white/10 p-4 rounded-2xl border border-white/15 flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300 font-bold uppercase tracking-wider">Clinic Working Hours</p>
                      <p className="text-xs font-bold text-white">Mon - Sat: 9:00 AM – 8:00 PM</p>
                    </div>
                  </div>

                  <div className="bg-white/10 p-4 rounded-2xl border border-white/15 flex items-center space-x-4">
                    <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300 font-bold uppercase tracking-wider">Location</p>
                      <p className="text-xs text-white font-medium leading-normal">{clinic.addressShort}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15">
                <p className="text-xs text-slate-400">Chief Physiotherapist:</p>
                <p className="text-sm font-bold text-white">{clinic.doctor} ({clinic.doctorCreds})</p>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-white/15 shadow-inner h-48 w-full bg-white/5 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111666.9536840618!2d75.64214631248037!3d29.13945934446452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0b37%3A0x6b30fbc82b3d1b82!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(80%)" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sanjeevani Physiotherapy Location"
                ></iframe>
                {/* CSS Filter hack applied above to make map dark mode matching the aesthetic */}
              </div>
            </div>

            {/* Right Booking Form Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-surface text-textMain">
              {submitted ? (
                <div className="py-8 space-y-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-textMain">अपॉइंटमेंट अनुरोध तैयार है!</h3>
                    <p className="text-xs text-muted max-w-sm mx-auto font-medium leading-relaxed">
                      WhatsApp विंडो खुल रही है। यदि न खुले तो नीचे दिए गए बटन पर क्लिक करें।
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-bg/80 rounded-2xl p-5 border border-slate-200 text-xs space-y-2.5">
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-muted font-medium">मरीज़ का नाम:</span>
                      <span className="font-bold text-textMain">{form.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-muted font-medium">मोबाइल नंबर:</span>
                      <span className="font-bold text-textMain">{form.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-muted font-medium">तकलीफ़ / सेवा:</span>
                      <span className="font-bold text-primary">{form.condition}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-muted font-medium">पसंद की तारीख:</span>
                      <span className="font-bold text-textMain">{form.date || "यथाशीघ्र (ASAP)"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted font-medium">समय स्लॉट:</span>
                      <span className="font-bold text-textMain">{form.time}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a
                      href={getWhatsAppBookingUrl(form)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp में मैसेज भेजें</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="flex items-center justify-center space-x-1.5 bg-white text-textMain font-bold text-xs py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                        <span>{copied ? "कॉपी हो गया!" : "मैसेज कॉपी करें"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="flex items-center justify-center space-x-1.5 bg-bg text-textMain font-bold text-xs py-2.5 rounded-xl border border-slate-300 hover:bg-slate-200 transition-colors"
                      >
                        <span>नया फ़ॉर्म भरें</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-textMain">Book Diagnostic Consultation</h3>
                    <p className="text-xs text-muted font-medium mt-1">Select your preferred date & symptom details.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-name" className="block text-xs font-bold text-textMain mb-1">Patient Name *</label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-xs font-semibold text-textMain bg-white focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-phone" className="block text-xs font-bold text-textMain mb-1">Mobile Number *</label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. 99910XXXXX"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-xs font-semibold text-textMain bg-white focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="booking-condition" className="block text-xs font-bold text-textMain mb-1">Pain Condition / Specialty</label>
                    <select
                      id="booking-condition"
                      value={form.condition}
                      onChange={(e) => setForm({ ...form, condition: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-xs font-bold text-textMain bg-white focus:border-primary focus:outline-none"
                    >
                      <option value="Knee Osteoarthritis & Pain">Knee Osteoarthritis & Pain</option>
                      <option value="Cervical Spondylosis & Neck Pain">Cervical & Neck Pain</option>
                      <option value="Back Pain & Slip Disc">Back Pain & Slip Disc</option>
                      <option value="Sciatica Nerve Pain">Sciatica Nerve Pain</option>
                      <option value="Frozen Shoulder">Frozen Shoulder</option>
                      <option value="Stroke & Paralysis Rehab">Stroke & Paralysis Rehab</option>
                      <option value="Sports Injury">Sports Injury (ACL / Ligament)</option>
                      <option value="Slimming & Weight Loss">Slimming & Weight Loss</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-date" className="block text-xs font-bold text-textMain mb-1">Preferred Date</label>
                      <input
                        id="booking-date"
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-xs font-bold text-textMain bg-white focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-time" className="block text-xs font-bold text-textMain mb-1">Time Slot</label>
                      <select
                        id="booking-time"
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-xs font-bold text-textMain bg-white focus:border-primary focus:outline-none"
                      >
                        <option value="Morning (10 AM - 12 PM)">Morning (10 AM - 12 PM)</option>
                        <option value="Afternoon (12 PM - 2 PM)">Afternoon (12 PM - 2 PM)</option>
                        <option value="Evening (4 PM - 6 PM)">Evening (4 PM - 6 PM)</option>
                        <option value="Late Evening (6 PM - 8 PM)">Late Evening (6 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="booking-notes" className="block text-xs font-bold text-textMain mb-1">Symptom Details (Optional)</label>
                    <textarea
                      id="booking-notes"
                      rows="3"
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Mention how long you have had pain..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 text-xs font-medium text-textMain bg-white focus:border-primary focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white font-extrabold text-sm py-4 rounded-xl shadow-lg transition-all border border-white/20"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Confirm Appointment via WhatsApp</span>
                      <Send className="w-4 h-4 ml-1" />
                    </button>

                    <a
                      href={`tel:${clinic.phones[0]}`}
                      className="w-full flex items-center justify-center space-x-2 bg-bg text-textMain font-bold text-xs py-3.5 rounded-xl border border-slate-300 hover:bg-slate-200 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>Or Call Directly: {clinic.phones[0]}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
