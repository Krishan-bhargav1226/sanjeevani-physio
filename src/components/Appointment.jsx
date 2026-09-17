import { useState } from "react";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { clinic } from "../data/content";
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
    if (form.name.trim().length < 2) next.name = "कृपया अपना पूरा नाम लिखें";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      next.phone = "कृपया सही 10 अंकों का मोबाइल नंबर लिखें";
    if (!form.service) next.service = "कृपया एक सेवा चुनें";
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
          <p className="text-secondary font-medium text-sm">संपर्क करें</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-dark mt-2">
            आज ही अपॉइंटमेंट बुक करें
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-md">
            फ़ोन करें, व्हाट्सएप पर संदेश भेजें या नीचे दिया गया फ़ॉर्म भरें —
            हमारी टीम जल्द ही आपसे संपर्क करेगी।
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-accent text-primary grid place-items-center shrink-0">
                <Phone size={19} />
              </div>
              <div>
                <p className="font-medium text-ink">कॉल करें</p>
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
                <p className="font-medium text-ink">पता</p>
                <p className="text-sm text-muted max-w-xs">{clinic.address}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-accent text-primary grid place-items-center shrink-0">
                <Clock size={19} />
              </div>
              <div>
                <p className="font-medium text-ink">समय</p>
                <p className="text-sm text-muted">सोमवार – शनिवार, सुबह 9 — शाम 8</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-accent h-52">
            <iframe
              title="Sanjeevani Physiotherapy Centre location"
              className="w-full h-full"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                clinic.mapQuery
              )}&z=15&output=embed`}
            />
          </div>
        </div>

        <div className="bg-surface rounded-3xl shadow-card p-8 sm:p-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 size={52} className="text-secondary" />
              <h3 className="font-display font-semibold text-xl text-primary-dark mt-4">
                धन्यवाद!
              </h3>
              <p className="text-muted mt-2 max-w-xs">
                आपका अनुरोध व्हाट्सएप पर भेज दिया गया है, हम जल्द ही संपर्क करेंगे।
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-primary underline"
              >
                नया अनुरोध भेजें
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="font-display font-semibold text-xl text-primary-dark">
                अपॉइंटमेंट फ़ॉर्म
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    पूरा नाम
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="आपका नाम"
                    className="mt-1.5 w-full rounded-xl border border-accent bg-bg px-4 py-3 text-sm focus:border-secondary outline-none"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-ink">
                    मोबाइल नंबर
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
                    सेवा चुनें
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className="mt-1.5 w-full rounded-xl border border-accent bg-bg px-4 py-3 text-sm focus:border-secondary outline-none"
                  >
                    <option value="">-- चुनें --</option>
                    <option>मैनुअल थेरेपी</option>
                    <option>एक्सरसाइज थेरेपी</option>
                    <option>इलेक्ट्रोथेरेपी</option>
                    <option>स्पोर्ट्स इंजरी रिहैबिलिटेशन</option>
                    <option>लकवा (स्ट्रोक) रिहैबिलिटेशन</option>
                    <option>पोस्चर करेक्शन</option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500 mt-1">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-ink">
                    संदेश (वैकल्पिक)
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    rows={3}
                    placeholder="अपनी तकलीफ़ के बारे में बताएं"
                    className="mt-1.5 w-full rounded-xl border border-accent bg-bg px-4 py-3 text-sm focus:border-secondary outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
                >
                  व्हाट्सएप पर अपॉइंटमेंट भेजें
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
