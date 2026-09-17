// Central structured data store for Sanjeevani Physiotherapy & Slimming Centre

export const clinic = {
  name: "Sanjeevani",
  nameHindi: "संजीवनी फिजियोथेरेपी सेंटर",
  tagline: "Physiotherapy & Slimming Centre",
  taglineHindi: "दर्द मुक्त जीवन की ओर एक कदम",
  subTaglineHindi: "सही इलाज • सही देखभाल • बेहतर परिणाम",
  doctor: "डॉ सोहन लाल",
  doctorEnglish: "Dr. Sohan Lal",
  doctorCreds: "BPT, MPTh (Sports), CMT",
  doctorRole: "Chief Physiotherapist & Sports Rehab Specialist",
  doctorRoleHindi: "फिजियोथेरेपिस्ट",
  doctorExperience: "8+ Years Clinical Experience",
  phones: ["9991070620", "9992458240"],
  whatsapp: "919991070620",
  address: "Karan Singh Market, TCP-2, Near Krishna Devi Memorial Hospital, Hisar Cantt – 125006",
  addressHindi: "नजदीक कृष्णा देवी मेमोरियल अस्पताल, करण सिंह मार्केट, टीसीपी-2, हिसार कैंट – 125006",
  addressShort: "Hisar Cantt, Haryana",
  mapQuery: "Sanjeevani Physiotherapy Hisar Cantt",
  workingHours: "Monday – Saturday: 9:00 AM – 8:00 PM (Sunday Closed / Emergency on Call)",
};

export const stats = [
  { value: "8+", label: "Years Experience", labelHindi: "8+ वर्ष का अनुभव", description: "Dedicated non-surgical clinical practice" },
  { value: "5000+", label: "Recovered Patients", labelHindi: "5000+ संतुष्ट मरीज़", description: "Pain-free lives restored in Hisar" },
  { value: "12+", label: "Therapy Specialties", labelHindi: "12+ थेरेपी तकनीकें", description: "Advanced electro & manual techniques" },
  { value: "99%", label: "Satisfaction Rate", labelHindi: "99% सफलता दर", description: "Verified patient outcomes & reviews" },
];

export const doctorBio = {
  name: "Dr. Sohan Lal",
  nameHindi: "डॉ सोहन लाल",
  qualifications: "BPT, MPTh (Sports Rehabilitation), Certified Manual Therapist (CMT)",
  experience: "8+ Years in Clinical Physiotherapy & Sports Medicine",
  specialization: "Spine & Joint Biomechanics, Sports Injury Rehab, Non-Surgical Sciatica Care",
  aboutText: "Dr. Sohan Lal is a leading physiotherapist in Hisar, recognized for evidence-based non-surgical recovery protocols. Having trained in advanced manual therapy and sports rehabilitation, Dr. Sohan Lal has successfully treated over 5,000 patients suffering from slip disc, sciatica, severe knee osteoarthritis, cervical spondylosis, and sports injuries.",
  philosophy: "Our core mission at Sanjeevani is to eliminate the root cause of physical pain through precise joint alignment, advanced electrotherapy, and customized biomechanical rehab — empowering patients to avoid unnecessary surgery.",
  certifications: [
    "Certified Manual Therapist (CMT - Spinal & Peripheral Mobilization)",
    "Master of Physiotherapy in Sports Rehab (MPTh)",
    "Kinesiology Taping & Myofascial Release Specialist",
    "Advanced Electro-Modality & Traction Protocol Certification",
  ],
};

export const painConditions = [
  {
    id: "knee",
    name: "Knee Osteoarthritis & Pain",
    shortName: "Knee Pain",
    symptoms: ["Pain while walking or climbing stairs", "Joint stiffness & cracking sound", "Swelling and localized heat", "Difficulty standing up after sitting"],
    solution: "Targeted electrotherapy, quadriceps strengthening, joint mobilization, and cartilage relief to avoid knee replacement surgery.",
    recoveryRate: "94% Non-Surgical Success",
  },
  {
    id: "neck",
    name: "Cervical Spondylosis & Neck Pain",
    shortName: "Cervical & Neck",
    symptoms: ["Radiating arm pain & numbness", "Dizziness & shoulder tension", "Chronic neck stiffness & headaches", "Tingling in fingers"],
    solution: "Computerized cervical traction, spinal posture alignment, and manual decompression for rapid nerve relief.",
    recoveryRate: "96% Pain Decompression",
  },
  {
    id: "spine",
    name: "Back Pain & Slip Disc (Sciatica)",
    shortName: "Back & Slip Disc",
    symptoms: ["Sharp lower back pain when bending", "Sciatica leg tension radiating to feet", "Lumbar stiffness & weakness", "Inability to sit comfortably"],
    solution: "Computerized lumbar traction, disc herniation mobilization, core stabilization, and deep tissue therapy.",
    recoveryRate: "92% Surgery Avoided",
  },
  {
    id: "shoulder",
    name: "Frozen Shoulder (Adhesive Capsulitis)",
    shortName: "Frozen Shoulder",
    symptoms: ["Inability to lift arm overhead", "Severe night shoulder throbbing", "Joint capsule tightness", "Difficulty dressing or combing hair"],
    solution: "Therapeutic ultrasound, capsular mobilization release, laser therapy, and progressive range-of-motion routines.",
    recoveryRate: "95% Range Restored",
  },
  {
    id: "stroke",
    name: "Stroke & Neuro Rehabilitation",
    shortName: "Stroke Rehab",
    symptoms: ["Loss of limb motor control", "Muscle spasticity or flaccidity", "Balance impairment & gait imbalance", "Facial or speech coordination loss"],
    solution: "PNF neuro-rehabilitation, motor re-learning, gait balance retraining, and sensory muscle reactivation.",
    recoveryRate: "Functional Independence",
  },
  {
    id: "sports",
    name: "Sports Injury & ACL Ligament Rehab",
    shortName: "Sports Injury",
    symptoms: ["Ligament sprain (ACL/MCL/Meniscus)", "Muscle tear & joint instability", "Post-match acute swelling", "Ankle sprain & hamstring pulls"],
    solution: "Cold laser therapy, K-taping, proprioceptive balance training, and rapid return-to-sport protocols.",
    recoveryRate: "Fast Athlete Recovery",
  },
];

export const services = [
  {
    id: "manual",
    title: "Manual Joint & Spine Therapy",
    titleHindi: "मैन्युअल थेरेपी",
    englishTitle: "Hands-on Spinal Alignment & Mobilization",
    badge: "Hands-On Care",
    desc: "Targeted joint mobilization, myofascial trigger point release, and spinal alignment to reduce pressure on nerves and restore joint range.",
    features: [
      "Maitland & Mulligan Joint Mobilization",
      "Myofascial Trigger Point Release",
      "Soft Tissue Deep Manipulation",
      "Postural Realignment & Spine Decompression"
    ]
  },
  {
    id: "exercise",
    title: "Personalized Active Rehab",
    titleHindi: "एक्सरसाइज थेरेपी",
    englishTitle: "Biomechanical Strength & Core Protocols",
    badge: "Custom Protocol",
    desc: "Individualized exercise protocols designed around patient biomechanics to rebuild muscle strength, core stability, and endurance.",
    features: [
      "Quadriceps & Core Strengthening",
      "Spinal Core Stabilization",
      "Flexibility & Muscular Stretching",
      "Postural Control & Ergonomics"
    ]
  },
  {
    id: "electro",
    title: "Advanced Electrotherapy",
    titleHindi: "इलेक्ट्रोथेरेपी",
    englishTitle: "Medical-Grade Laser & Electro-Modality Suite",
    badge: "High-Tech Care",
    desc: "State-of-the-art TENS, Therapeutic Ultrasound, Cold Laser, and Computerized Lumbar/Cervical Traction to accelerate cellular tissue healing.",
    features: [
      "Computerized Lumbar & Cervical Traction",
      "High-Frequency Therapeutic Ultrasound",
      "IFT & TENS Pain Decompression",
      "Cold Laser Cellular Tissue Healing"
    ]
  },
  {
    id: "sports",
    title: "Sports Injury & ACL Rehab",
    titleHindi: "स्पोर्ट्स इंजरी रिहैबिलिटेशन",
    englishTitle: "Ligament Recovery & Athlete Performance",
    badge: "Athletes Specialist",
    desc: "Structured phase-wise rehabilitation for athletes recovering from ACL/MCL ligament tears, meniscus injuries, or sports surgeries.",
    features: [
      "ACL / MCL Ligament Protocols",
      "Kinesiology Taping (K-Tape)",
      "Proprioception & Agility Training",
      "Return-to-Sport Biomechanical Exam"
    ]
  },
  {
    id: "stroke",
    title: "Stroke & Neuro Rehabilitation",
    titleHindi: "लकवा (स्ट्रोक) रिहैबिलिटेशन",
    englishTitle: "Paralysis Motor Re-learning Program",
    badge: "Neurological Care",
    desc: "Dedicated neuro-rehabilitation using PNF techniques and motor relearning to help paralysis and stroke survivors regain independence.",
    features: [
      "PNF (Proprioceptive Neuromuscular Facilitation)",
      "Motor Re-learning & Coordination",
      "Gait & Balance Body Retraining",
      "Daily Functional Activity Building"
    ]
  },
  {
    id: "slimming",
    title: "Slimming & Body Shaping",
    titleHindi: "स्लिमिंग एवं वेट लॉस",
    englishTitle: "Non-Surgical Fat Loss & Toning",
    badge: "Non-Surgical",
    desc: "Safe, non-invasive therapies targeting stubborn body fat, metabolic activation, and muscle toning without surgery or medication.",
    features: [
      "Targeted Abdominal & Hip Fat Reduction",
      "Non-Invasive Body Toning & Shaping",
      "Metabolic Activation Protocols",
      "Personalized Nutritional Guidance"
    ]
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Diagnostic Biomechanical Exam",
    englishTitle: "Root Cause Investigation",
    desc: "In-depth clinical examination by Dr. Sohan Lal to identify exact joint stiffness, disc displacement, or nerve compression."
  },
  {
    number: "02",
    title: "Tailored Recovery Protocol",
    englishTitle: "Customized Treatment Plan",
    desc: "Combining manual joint alignment, computerized electro-modalities, and targeted active exercise customized for your condition."
  },
  {
    number: "03",
    title: "1-on-1 Guided Clinic Sessions",
    englishTitle: "Advanced Clinic Care",
    desc: "Supervised therapy sessions in a hygienic, modern clinical facility in Hisar Cantt with regular pain progress tracking."
  },
  {
    number: "04",
    title: "Long-Term Spine & Joint Ergonomics",
    englishTitle: "Permanent Prevention Plan",
    desc: "Home exercise regimen, posture corrections, and routine follow-up support to prevent pain recurrence."
  }
];

export const technologies = [
  { title: "Computerized Traction", desc: "Automated lumbar and cervical spinal decompression to relieve herniated disc pressure." },
  { title: "Cold Laser Therapy", desc: "Photobiomodulation light energy to speed up deep cellular tissue healing and reduce inflammation." },
  { title: "Therapeutic Ultrasound", desc: "Deep acoustic sound waves that soften scar tissue and reduce internal swelling." },
  { title: "IFT & TENS Modalities", desc: "Targeted nerve stimulation that blocks pain signals instantly and relaxes muscular spasms." },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    age: "45 yrs",
    condition: "Slip Disc & Sciatica",
    city: "Hisar Cantt",
    rating: 5,
    review: "I suffered from severe sciatica pain radiating down my left leg for 6 months. Surgery was recommended elsewhere, but 3 weeks of computerized spinal traction and manual therapy at Sanjeevani under Dr. Sohan Lal made me completely pain-free!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Sunita Devi",
    age: "52 yrs",
    condition: "Severe Knee Osteoarthritis",
    city: "Hisar",
    rating: 5,
    review: "Knee pain made walking to the market impossible. After electrotherapy and quadriceps rehab at Sanjeevani, I can now climb stairs without support. Dr. Sohan Lal's diagnosis is unmatched!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Vikas Sharma",
    age: "26 yrs",
    condition: "ACL Ligament Injury",
    city: "Hisar",
    rating: 5,
    review: "Injured my ACL playing football. The sports rehab program at Sanjeevani restored my knee stability and strength in just 2 months. Best physiotherapist in Hisar Cantt!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 4,
    name: "Seema Rani",
    age: "38 yrs",
    condition: "Cervical Spondylosis & Frozen Shoulder",
    city: "Hisar",
    rating: 5,
    review: "Working long hours on a computer caused severe cervical pain and shoulder stiffness. Manual joint mobilization completely restored my arm mobility without taking heavy painkillers.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];

export const faqs = [
  {
    q: "Will I feel pain relief after the first consultation?",
    a: "Most patients experience immediate reduction in swelling and muscle tension after their initial consultation, joint evaluation, and electrotherapy session."
  },
  {
    q: "How long does a typical physiotherapy session take?",
    a: "A typical therapy session lasts between 40 to 60 minutes, which includes initial evaluation, computerized electrotherapy/laser, manual mobilization, and guided exercise."
  },
  {
    q: "Can physiotherapy help avoid surgery for slip disc or knee pain?",
    a: "Yes! Over 90% of slip disc, sciatica, and knee osteoarthritis cases can be successfully resolved without surgery through evidence-based physiotherapy and spinal traction."
  },
  {
    q: "Do I need an advance appointment before visiting?",
    a: "Advance booking via WhatsApp or telephone is highly recommended to ensure direct 1-on-1 diagnostic consultation with Dr. Sohan Lal without waiting in line."
  },
  {
    q: "What conditions are treated at Sanjeevani Centre?",
    a: "We specialize in Slip Disc, Sciatica, Knee Osteoarthritis, Cervical Spondylosis, Frozen Shoulder, Stroke/Paralysis Rehab, Sports Injuries (ACL/Meniscus), and Non-Surgical Slimming."
  }
];
