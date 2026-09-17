import { clinic } from "../data/content";

/**
 * Generates a clean, professional, bilingual (Hindi/English) formatted WhatsApp message for appointment booking.
 */
export function buildAppointmentMessage({ name, phone, condition, service, date, time, notes }) {
  const selectedCondition = condition || service || "General Physiotherapy Consultation";
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-IN", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "As soon as possible (यथाशीघ्र)";
  const timeSlot = time || "Morning (10 AM - 12 PM)";
  const userNotes = notes && notes.trim() ? notes.trim() : "None";

  return `🏥 *${clinic.name} ${clinic.tagline}*
📋 *नया अपॉइंटमेंट अनुरोध (New Appointment Request)*

👤 *मरीज़ का नाम (Patient Name):* ${name.trim()}
📞 *मोबाइल नंबर (Mobile):* ${phone.trim()}
🩺 *तकलीफ़ / सेवा (Condition):* ${selectedCondition}
📅 *पसंद की तारीख (Preferred Date):* ${formattedDate}
⏰ *समय स्लॉट (Time Slot):* ${timeSlot}
📝 *तकलीफ़ विवरण (Notes):* ${userNotes}

---
👨‍⚕️ *मुख्य चिकित्सक:* ${clinic.doctor} (${clinic.doctorCreds})
📍 *पता:* ${clinic.address}
📞 *हेल्पलाइन:* ${clinic.phones.join(" / ")}

_कृपया मेरा अपॉइंटमेंट स्लॉट कन्फर्म करें। धन्यवाद!_`;
}

/**
 * Returns a wa.me URL with properly encoded message.
 */
export function getWhatsAppBookingUrl(formData) {
  const text = buildAppointmentMessage(formData);
  const phoneNumber = clinic.whatsapp || `91${clinic.phones[0]}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Returns a wa.me URL for quick inquiry.
 */
export function getWhatsAppInquiryUrl(customText) {
  const text =
    customText ||
    `नमस्ते ${clinic.doctor}, मैं संजीवनी फिजियोथेरेपी सेंटर से परामर्श व अपॉइंटमेंट के संबंध में जानकारी चाहता/चाहती हूं।`;
  const phoneNumber = clinic.whatsapp || `91${clinic.phones[0]}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
