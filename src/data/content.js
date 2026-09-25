// Central structured data store for Sanjeevani Physiotherapy & Slimming Centre

export const clinic = {
  name: "Sanjeevani",
  nameHindi: "Sanjeevani Physiotherapy Centre",
  tagline: "Physiotherapy & Slimming Centre",
  taglineHindi: "Step Towards A Pain-Free Life",
  subTaglineHindi: "Right Treatment • Expert Care • Better Recovery",
  doctor: "Dr. Sohan Lal",
  doctorEnglish: "Dr. Sohan Lal",
  doctorCreds: "BPT, MPTh (Sports), CMT",
  doctorRole: "Chief Physiotherapist & Sports Rehab Specialist",
  doctorRoleHindi: "Chief Physiotherapy Specialist",
  doctorExperience: "8+ Years Clinical Experience",
  phones: ["9991070620", "9992458240"],
  whatsapp: "919991070620",
  address: "Karan Singh Market, TCP-2, Near Krishna Devi Memorial Hospital, Hisar Cantt – 125006",
  addressHindi: "Near Krishna Devi Memorial Hospital, Karan Singh Market, TCP-2, Hisar Cantt – 125006",
  addressShort: "Hisar Cantt, Haryana",
  mapQuery: "Sanjeevani Physiotherapy Centre Karan Singh Market Hisar Cantt",
  mapUrl: "https://maps.app.goo.gl/DwJk4W9QqFjLYVCe6",
  workingHours: "Monday – Sunday: 9:00 AM – 8:00 PM (Sunday Also Open)",
};

export const stats = [
  { value: "8+", label: "Years Experience", labelHindi: "8+ Years Experience", description: "Dedicated non-surgical clinical practice" },
  { value: "5000+", label: "Recovered Patients", labelHindi: "5000+ Happy Patients", description: "Pain-free lives restored in Hisar" },
  { value: "12+", label: "Therapy Specialties", labelHindi: "12+ Therapy Modalities", description: "Advanced electro & manual techniques" },
  { value: "99%", label: "Satisfaction Rate", labelHindi: "99% Success Rate", description: "Verified patient outcomes & reviews" },
];

export const doctorBio = {
  name: "Dr. Sohan Lal",
  nameHindi: "Dr. Sohan Lal",
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
    image: "/images/hero_physio.png",
    symptoms: ["Pain while walking or climbing stairs", "Joint stiffness & cracking sound", "Swelling and localized heat", "Difficulty standing up after sitting"],
    solution: "Targeted electrotherapy, quadriceps strengthening, joint mobilization, and cartilage relief to avoid knee replacement surgery.",
    recoveryRate: "94% Non-Surgical Success",
  },
  {
    id: "neck",
    name: "Cervical Spondylosis & Neck Pain",
    shortName: "Cervical & Neck",
    image: "/images/spine_treatment.png",
    symptoms: ["Radiating arm pain & numbness", "Dizziness & shoulder tension", "Chronic neck stiffness & headaches", "Tingling in fingers"],
    solution: "Computerized cervical traction, spinal posture alignment, and manual decompression for rapid nerve relief.",
    recoveryRate: "96% Pain Decompression",
  },
  {
    id: "spine",
    name: "Back Pain & Slip Disc (Sciatica)",
    shortName: "Back & Slip Disc",
    image: "/images/spine_treatment.png",
    symptoms: ["Sharp lower back pain when bending", "Sciatica leg tension radiating to feet", "Lumbar stiffness & weakness", "Inability to sit comfortably"],
    solution: "Computerized lumbar traction, disc herniation mobilization, core stabilization, and deep tissue therapy.",
    recoveryRate: "92% Surgery Avoided",
  },
  {
    id: "shoulder",
    name: "Frozen Shoulder (Adhesive Capsulitis)",
    shortName: "Frozen Shoulder",
    image: "/images/hero_physio.png",
    symptoms: ["Inability to lift arm overhead", "Severe night shoulder throbbing", "Joint capsule tightness", "Difficulty dressing or combing hair"],
    solution: "Therapeutic ultrasound, capsular mobilization release, laser therapy, and progressive range-of-motion routines.",
    recoveryRate: "95% Range Restored",
  },
  {
    id: "stroke",
    name: "Stroke & Neuro Rehabilitation",
    shortName: "Stroke Rehab",
    image: "/images/doctor_profile.png",
    symptoms: ["Loss of limb motor control", "Muscle spasticity or flaccidity", "Balance impairment & gait imbalance", "Facial or speech coordination loss"],
    solution: "PNF neuro-rehabilitation, motor re-learning, gait balance retraining, and sensory muscle reactivation.",
    recoveryRate: "Functional Independence",
  },
  {
    id: "sports",
    name: "Sports Injury & ACL Ligament Rehab",
    shortName: "Sports Injury",
    image: "/images/sports_rehab.png",
    symptoms: ["Ligament sprain (ACL/MCL/Meniscus)", "Muscle tear & joint instability", "Post-match acute swelling", "Ankle sprain & hamstring pulls"],
    solution: "Cold laser therapy, K-taping, proprioceptive balance training, and rapid return-to-sport protocols.",
    recoveryRate: "Fast Athlete Recovery",
  },
];

export const specializedTherapies = [
  {
    id: "adv-physio",
    title: "Advanced Physiotherapy",
    category: "Clinical Assessment & Manual Care",
    badge: "Evidence-Based",
    desc: "Comprehensive biomechanical alignment, diagnostic movement exams, and customized non-surgical joint and spine restoration protocols.",
    benefits: ["Root-cause diagnosis", "Postural realignment", "Joint mobility restoration", "Preventative ergonomics"],
  },
  {
    id: "dry-needling",
    title: "Dry Needling Therapy",
    category: "Myofascial Trigger Point Therapy",
    badge: "Targeted Release",
    desc: "Precision insertion of fine filiform needles into muscular trigger points to immediately release deep knots, spasms, and localized nerve tightness.",
    benefits: ["Deactivates painful muscle knots", "Instant muscle spasm relaxation", "Improves tissue circulation", "Restores muscle length"],
  },
  {
    id: "cupping-dry",
    title: "Cupping Therapy (Dry)",
    category: "Myofascial Decompression",
    badge: "Fascial Release",
    desc: "Negative pressure suction therapy designed to separate fascial layers, enhance blood flow, and relieve chronic muscle tightness.",
    benefits: ["Increases localized circulation", "Releases stubborn fascial tightness", "Accelerates cellular recovery", "Reduces muscle stiffness"],
  },
  {
    id: "cupping-wet",
    title: "Wet / Hijama Cupping",
    category: "Therapeutic Hijama Detox",
    badge: "Medicinal Hijama",
    desc: "Specialized medicinal Hijama cupping performed under hygienic sterile protocols for deep micro-detoxification and chronic pain relief.",
    benefits: ["Sterile micro-detoxification", "Relieves chronic inflammation", "Stimulates immune response", "Deep pain suppression"],
  },
  {
    id: "iastm",
    title: "IASTM (Instrument-Assisted Release)",
    category: "Soft Tissue Mobilization",
    badge: "Ergonomic Tools",
    desc: "Ergonomically contoured stainless-steel instruments designed to detect and breakdown scar tissue, tendonitis adhesions, and fascial restrictions.",
    benefits: ["Breaks down scar tissue & adhesions", "Speeds up tendonitis healing", "Restores smooth tissue sliding", "Improves range of motion"],
  },
  {
    id: "k-taping",
    title: "K-Taping (Kinesiology Taping)",
    category: "Athletic & Dynamic Support",
    badge: "K-Tape Support",
    desc: "Medical-grade elastic therapeutic taping that supports weak muscles, stabilizes joints, and enhances lymphatic drainage during activity.",
    benefits: ["Stabilizes injured joints", "Reduces swelling & lymphatic edema", "Supports weak muscular fibers", "24/7 continuous therapeutic support"],
  },
  {
    id: "electrotherapy",
    title: "Advanced Electrotherapy",
    category: "Medical-Grade Modalities",
    badge: "High-Tech Care",
    desc: "Comprehensive suite of therapeutic electrical currents engineered for rapid pain suppression, tissue repair, and swelling reduction.",
    benefits: ["Rapid pain blockage", "Reduces localized tissue swelling", "Accelerates nerve repair", "Non-invasive relief"],
  },
  {
    id: "tens",
    title: "TENS (Nerve Stimulation)",
    category: "Pain Decompression Modality",
    badge: "Pain Suppression",
    desc: "Transcutaneous Electrical Nerve Stimulation using targeted frequencies to block pain signals from traveling to the spinal cord and brain.",
    benefits: ["Blocks acute & chronic pain signals", "Triggers natural endorphin release", "Drug-free pain management", "Gentle comfortable sensation"],
  },
  {
    id: "ift",
    title: "IFT (Interferential Therapy)",
    category: "Deep Tissue Current Modality",
    badge: "Deep Penetration",
    desc: "Dual medium-frequency electrical currents that cross deep within muscular tissue to treat severe inflammation, edema, and joint pain.",
    benefits: ["Deep-seated tissue penetration", "Effective for chronic osteoarthritis", "Reduces severe localized edema", "Relaxes deep muscular spasms"],
  },
  {
    id: "us-therapy",
    title: "US Therapy (Therapeutic Ultrasound)",
    category: "Acoustic Wave Therapy",
    badge: "Cellular Healing",
    desc: "High-frequency acoustic sound waves that generate deep thermal heating within collagen fibers to soften scar tissue and speed up healing.",
    benefits: ["Softens hard scar tissue", "Promotes collagen tissue repair", "Deep thermal muscle relaxation", "Enhances ligament elasticity"],
  },
  {
    id: "muscle-stim",
    title: "Muscle Stimulation (EMS)",
    category: "Electrical Muscle Re-education",
    badge: "Neuromuscular",
    desc: "Electrical Muscle Stimulation designed to activate non-responsive muscle fibers, prevent atrophy after surgery, and rebuild muscle tone.",
    benefits: ["Prevents post-op muscle atrophy", "Re-educates weak muscle groups", "Builds functional muscle strength", "Improves nerve-muscle firing"],
  },
  {
    id: "cervical-traction",
    title: "Intermittent Cervical Traction",
    category: "Spinal Decompression",
    badge: "Neck Decompression",
    desc: "Precision computerized mechanical neck traction that gently stretches cervical vertebrae to widen neural foramina and relieve pinched nerves.",
    benefits: ["Relieves pinched cervical nerves", "Decompresses neck disc herniations", "Reduces radiating arm numbness", "Restores neck spinal alignment"],
  },
  {
    id: "lumbar-traction",
    title: "Intermittent Lumbar Traction",
    category: "Spinal Decompression",
    badge: "Sciatica & Disc Decompression",
    desc: "Automated computerized lower-back traction that pulls lumbar vertebrae apart to create negative pressure within herniated L4-L5/S1 discs.",
    benefits: ["Resolves L4-L5 / S1 disc herniation", "Eliminates sciatica leg pain", "Reduces lower back pressure", "Helps avoid spine surgery"],
  },
];

export const therapyOptions = [
  "Advanced Physiotherapy",
  "Dry Needling Therapy",
  "Cupping Therapy (Dry)",
  "Wet / Hijama Cupping",
  "IASTM (Instrument-Assisted Release)",
  "K-Taping (Kinesiology Taping)",
  "Electrotherapy (TENS / IFT)",
  "US Therapy (Therapeutic Ultrasound)",
  "Muscle Stimulation (EMS)",
  "Intermittent Cervical Traction",
  "Intermittent Lumbar Traction",
  "Knee Osteoarthritis & Pain",
  "Back Pain & Slip Disc (Sciatica)",
  "Cervical & Neck Pain",
  "Frozen Shoulder",
  "Stroke & Neuro Rehabilitation",
  "Sports Injury & ACL Rehab",
];

export const services = [
  {
    id: "manual",
    title: "Advanced Physiotherapy & Manual Care",
    titleHindi: "Manual Therapy",
    englishTitle: "Hands-on Spinal Alignment & Biomechanical Exam",
    badge: "Advanced Physio",
    desc: "Comprehensive clinical diagnostic exams, Maitland & Mulligan joint mobilization, posture alignment, and specialized non-surgical rehab.",
    features: [
      "Advanced Biomechanical Assessment",
      "Maitland & Mulligan Joint Mobilization",
      "Myofascial Trigger Point Release",
      "Postural Realignment & Ergonomics"
    ]
  },
  {
    id: "needling-cupping",
    title: "Dry Needling, Cupping & Hijama",
    titleHindi: "Needling & Cupping",
    englishTitle: "Trigger Point Needling & Medicinal Hijama Detox",
    badge: "Needling & Hijama",
    desc: "Fine needle trigger point deactivation, myofascial dry cupping, and sterile wet/Hijama cupping for chronic pain release and tissue detox.",
    features: [
      "Precision Dry Needling for Knots",
      "Myofascial Dry Cupping Suction",
      "Sterile Wet / Hijama Cupping Detox",
      "Deep Muscular Spasm Relief"
    ]
  },
  {
    id: "iastm-ktaping",
    title: "IASTM & K-Taping Rehabilitation",
    titleHindi: "IASTM & K-Taping",
    englishTitle: "Instrument Tissue Release & Athletic K-Tape",
    badge: "IASTM & K-Tape",
    desc: "Stainless-steel instrument soft tissue mobilization to break scar tissue, combined with kinesiology taping for joint stability.",
    features: [
      "IASTM Stainless-Steel Tool Release",
      "Kinesiology Taping (K-Tape) Support",
      "Scar Tissue & Adhesion Breakdown",
      "Lymphatic Swelling & Edema Reduction"
    ]
  },
  {
    id: "electro",
    title: "Electrotherapy Suite (TENS, IFT, US & EMS)",
    titleHindi: "Electrotherapy",
    englishTitle: "Medical-Grade Laser, TENS, IFT, US & Muscle Stim",
    badge: "Electrotherapy",
    desc: "Complete electrotherapy suite featuring TENS nerve blockage, deep IFT current, Therapeutic Ultrasound (US Therapy), and Electrical Muscle Stimulation.",
    features: [
      "TENS (Nerve Signal Pain Blockage)",
      "IFT (Deep Tissue Interferential Current)",
      "US Therapy (Therapeutic Ultrasound)",
      "Muscle Stimulation (EMS Re-education)"
    ]
  },
  {
    id: "traction",
    title: "Intermittent Cervical & Lumbar Traction",
    titleHindi: "Spinal Traction",
    englishTitle: "Computerized Mechanical Spinal Decompression",
    badge: "Spinal Traction",
    desc: "Computerized intermittent cervical traction for neck nerve pinch, and lumbar traction for L4-L5/S1 slip disc and sciatica decompression.",
    features: [
      "Intermittent Cervical (Neck) Traction",
      "Intermittent Lumbar (Back) Traction",
      "Herniated Disc Negative Decompression",
      "Sciatica Nerve Pinch Suppression"
    ]
  },
  {
    id: "stroke",
    title: "Stroke, Neuro Rehab & Slimming",
    titleHindi: "Neuro & Slimming",
    englishTitle: "Paralysis Motor Re-learning & Body Toning",
    badge: "Neuro & Slimming",
    desc: "Dedicated neuro-rehabilitation using PNF techniques for paralysis recovery, alongside non-invasive body slimming and toning.",
    features: [
      "PNF (Proprioceptive Neuromuscular Facilitation)",
      "Motor Re-learning & Coordination",
      "Gait & Balance Retraining",
      "Non-Invasive Body Slimming & Toning"
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
  { title: "Intermittent Cervical & Lumbar Traction", desc: "Automated computerized spinal decompression to relieve herniated disc pressure, neck tightness & sciatica." },
  { title: "Dry Needling & Hijama Cupping Suite", desc: "Sterile trigger point dry needling & medicinal wet/dry cupping for deep fascial release & micro-detoxification." },
  { title: "IASTM & K-Taping Athletic Support", desc: "Ergonomic instrument-assisted soft tissue release & kinesiology taping for joint stability & athletic recovery." },
  { title: "TENS, IFT & Muscle Stimulation", desc: "Medical-grade electrotherapy modalities providing instant pain signal blockage & neuromuscular muscle re-education." },
  { title: "Therapeutic Ultrasound (US Therapy)", desc: "High-frequency acoustic sound wave therapy that softens scar tissue, reduces swelling & speeds up cellular repair." },
  { title: "Advanced Non-Surgical Physiotherapy", desc: "Evidence-based clinical joint mobilization, spine alignment & custom biomechanical active rehabilitation." },
];

export const testimonials = [
  {
    id: 1,
    name: "Sahil Boxer",
    initials: "SB",
    condition: "Lower Back Ache (Athlete)",
    city: "Hisar Cantt",
    rating: 5,
    source: "Google Review",
    date: "1 month ago",
    review: "I am a boxer. Due to my training and matches my lower back ache started. Then I met Dr. Sohan Lal. They started my treatment, after 1 session 90% pain relief and after 3 sessions I am able to continue daily life activity again. Thank you Dr. Saab!",
  },
  {
    id: 2,
    name: "Manish Kumar",
    initials: "MK",
    condition: "Severe Back & Neck Pain (2 Yrs)",
    city: "Hisar",
    rating: 5,
    source: "Google Review",
    date: "2 months ago",
    review: "Excellent service. I had severe back and neck pain from 2 years. I am now much relaxed. Doctor is highly experienced. A must visit clinic if you have any kind of body pain.",
  },
  {
    id: 3,
    name: "Gaurav Rajput",
    initials: "GR",
    condition: "Accident Chest Injury & Bruise",
    city: "Hisar Cantt",
    rating: 5,
    source: "Google Review",
    date: "4 months ago",
    review: "I had a bike accident before 3-4 days and my chest got internally injured, it was too much painful. Doctor suggested physiotherapy and I visited Sanjeevani Physiotherapy. It was a good experience, my bruise is healing now and I feel relaxed. Thanks to Sanjeevani Physiotherapy!",
  },
  {
    id: 4,
    name: "Mahi Makeoverr",
    initials: "MM",
    condition: "Standing Back Pain (2 Yrs)",
    city: "Hisar",
    rating: 5,
    source: "Google Review",
    date: "1 month ago",
    review: "I had back pain due to long standing hours for 2 years and totally recovered from back pain in 9-10 sessions. Thanks Dr. Sohan Lal!",
  },
  {
    id: 5,
    name: "Rajdeep Kohar",
    initials: "RK",
    condition: "Knee Meniscus Tear Rehab",
    city: "Hisar Cantt",
    rating: 5,
    source: "Google Review",
    date: "10 months ago",
    review: "I suffered a knee meniscus tear and completed my rehab at Sanjeevani Cantt. The recovery is great and the clinic environment is excellent.",
  },
  {
    id: 6,
    name: "Sunil Etkan",
    initials: "SE",
    condition: "Spine & Manual Therapy",
    city: "Hansi / Hisar Cantt",
    rating: 5,
    source: "Google Review",
    date: "1 month ago",
    review: "Best clinic in Hansi Hisar and Hisar Cantt! Dr. Sohan Lal has magic on his hand with the best treatment plan, best diagnosis plan, and best manual hand therapy.",
  },
  {
    id: 7,
    name: "Arvind Yadav",
    initials: "AY",
    condition: "General Pain & Joint Rehab",
    city: "Hisar Cantt",
    rating: 5,
    source: "Google Review",
    date: "1 month ago",
    review: "Dr. Sohan Lal is the best physiotherapist in Hisar Cantt. His treatment plan gives best results in every condition. Whenever I feel pain I must visit Dr. Sohan's clinic.",
  },
  {
    id: 8,
    name: "Namo Art",
    initials: "NA",
    condition: "Chronic Lower Back Pain",
    city: "Hisar",
    rating: 5,
    source: "Google Review",
    date: "6 months ago",
    review: "I faced a lower back pain problem for a long time period after that my friend suggested Sanjeevani Physiotherapy. I met Dr. Sohan Lal and completed my physiotherapy session. I feel relaxed now and recommend Sanjeevani Physiotherapy for body pain relief.",
  },
  {
    id: 9,
    name: "Sachin",
    initials: "S",
    condition: "Acute Muscle Injury",
    city: "Hisar Cantt",
    rating: 5,
    source: "Google Review",
    date: "8 months ago",
    review: "I had a muscle injury and got treatment at Sanjeevani Physiotherapy where I got instant relief. Found good doctors here with a friendly nature. Now my injury is completely cured!",
  },
  {
    id: 10,
    name: "Sunita Devi",
    initials: "SD",
    condition: "Severe Thumb Joint Pain",
    city: "Hisar",
    rating: 5,
    source: "Google Review",
    date: "4 months ago",
    review: "I was suffering from severe thumb pain for a week. In just 3 days of therapy at Sanjeevani, all my pain was cured! The doctor here is very polite and expert.",
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
