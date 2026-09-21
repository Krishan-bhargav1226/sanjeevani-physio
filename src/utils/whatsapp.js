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
    : "As Soon As Possible (ASAP)";
  const timeSlot = time || "Morning (10 AM - 12 PM)";
  const userNotes = notes && notes.trim() ? notes.trim() : "None";

  return `🏥 *${clinic.name} ${clinic.tagline}*
📋 *New Appointment Request*

👤 *Patient Name:* ${name.trim()}
📞 *Mobile Number:* ${phone.trim()}
🩺 *Condition / Specialty:* ${selectedCondition}
📅 *Preferred Date:* ${formattedDate}
⏰ *Time Slot:* ${timeSlot}
📝 *Symptom Details / Notes:* ${userNotes}

---
👨‍⚕️ *Chief Specialist:* ${clinic.doctorEnglish} (${clinic.doctorCreds})
📍 *Address:* ${clinic.address}
📞 *Helpline:* ${clinic.phones.join(" / ")}

_Please confirm my appointment slot. Thank you!_`;
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
    `Hello ${clinic.doctorEnglish}, I would like to inquire about consultation and appointment booking at Sanjeevani Physiotherapy Centre.`;
  const phoneNumber = clinic.whatsapp || `91${clinic.phones[0]}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
