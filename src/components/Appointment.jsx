import { useState } from "react";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { clinic, therapyOptions } from "../data/content";
import { getWhatsAppBookingUrl } from "../utils/whatsapp";

const initialForm = { name: "", phone: "", service: "", message: "" };

export default function Appointment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid 10-digit mobile number";
    if (!form.service) next.service = "Please select a specialty";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const url = getWhatsAppBookingUrl({
      name: form.name,
      phone: form.phone,
      service: form.service,
      notes: form.message,
    });
    window.open(url, "_blank");
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <p className="text-secondary font-medium text-sm">Contact Us</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-dark mt-2">
            Book Your Appointment Today
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-md">
            Call us, send a message on WhatsApp, or fill out the form below —
            our clinical team will get back to you shortly.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-accent text-primary grid place-items-center shrink-0">
                <Phone size={19} />
              </div>
              <div>
                <p className="font-medium text-ink">Call Us</p>
                {clinic.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="block text-sm text-muted hover:text-primary"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-accent text-primary grid place-items-center shrink-0">
                <MapPin size={19} />
              </div>
              <div>
                <p className="font-medium text-ink">Location</p>
                <p className="text-sm text-muted max-w-xs">{clinic.address}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-accent text-primary grid place-items-center shrink-0">
                <Clock size={19} />
              </div>
              <div>
                <p className="font-medium text-ink">Clinic Hours</p>
                <p className="text-sm text-muted">Monday – Saturday: 9:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <div className="rounded-2xl overflow-hidden border border-accent h-52">
              <iframe
                title="Sanjeevani Physiotherapy Centre location"
                className="w-full h-full"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  clinic.mapQuery
                )}&z=16&output=embed`}
              />
            </div>
            <a
              href={clinic.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-md transition-all"
            >
              <MapPin size={16} />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>

        <div className="bg-surface rounded-3xl shadow-card p-8 sm:p-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 size={52} className="text-secondary" />
              <h3 className="font-display font-semibold text-xl text-primary-dark mt-4">
                Thank You!
              </h3>
              <p className="text-muted mt-2 max-w-xs">
                Your appointment request has been sent via WhatsApp. We will contact you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-primary underline"
              >
                Submit New Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="font-display font-semibold text-xl text-primary-dark">
                Appointment Form
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your Name"
                    className="mt-1.5 w-full rounded-xl border border-accent bg-bg px-4 py-3 text-sm focus:border-secondary outline-none"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-ink">
                    Mobile Number
                  </label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="98XXXXXXXX"
                    inputMode="numeric"
                    className="mt-1.5 w-full rounded-xl border border-accent bg-bg px-4 py-3 text-sm focus:border-secondary outline-none"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="text-sm font-medium text-ink">
                    Select Specialty
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className="mt-1.5 w-full rounded-xl border border-accent bg-bg px-4 py-3 text-sm focus:border-secondary outline-none"
                  >
                    <option value="">-- Select Specialty --</option>
                    {therapyOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500 mt-1">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-ink">
                    Symptom Details / Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    rows={3}
                    placeholder="Describe your pain condition or symptoms..."
                    className="mt-1.5 w-full rounded-xl border border-accent bg-bg px-4 py-3 text-sm focus:border-secondary outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Appointment via WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
