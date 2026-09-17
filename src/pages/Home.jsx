import React from "react";
import SwissHero from "../components/SwissHero";
import StatsSection from "../components/StatsSection";
import DoctorPhilosophy from "../components/DoctorPhilosophy";
import TreatmentsSection from "../components/TreatmentsSection";
import WellnessJourney from "../components/WellnessJourney";
import BookingSection from "../components/BookingSection";
import LuxuryTestimonials from "../components/LuxuryTestimonials";
import FAQAccordion from "../components/FAQAccordion";
import SEO from "../components/SEO";
import { painConditions, technologies } from "../data/content";
import { blogPosts } from "../data/blogData";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredBlogPosts = blogPosts.slice(0, 3);

  const galleryImages = [
    { src: "/images/hero_physio.png", alt: "Clinic Interior Suite" },
    { src: "/images/spine_treatment.png", alt: "Computerized Traction Suite" },
    { src: "/images/sports_rehab.png", alt: "Active Exercise & Sports Rehab Unit" },
    { src: "/images/doctor_profile.png", alt: "Dr. Sohan Lal Consultation Room" },
  ];

  return (
    <div className="animate-fadeIn">
      <SEO 
        title="Non-Surgical Spine & Joint Recovery Clinic" 
        description="Sanjeevani Physiotherapy & Slimming Centre Hisar under Dr. Sohan Lal (BPT, MPTh Sports, CMT) - Expert care for Slip Disc, Sciatica, Knee Pain & Stroke Rehab." 
      />

      {/* 1. Hero Banner */}
      <SwissHero />

      {/* 2. Key Statistics Banner */}
      <StatsSection />

      {/* 3. Meet Dr. Sohan Lal & Clinical Philosophy */}
      <DoctorPhilosophy />

      {/* 4. Comprehensive Pain Conditions Grid */}
      <section className="py-24 bg-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Specialized Conditions</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-textMain tracking-tight">
              Evidence-based care for chronic joint & spine dysfunctions.
            </h2>
            <p className="text-sm text-muted font-medium">
              We specialize in root-cause biomechanical repair without reliance on lifelong medications or high-risk surgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painConditions.map((cond, i) => (
              <motion.div
                key={cond.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-3xl p-8 border border-secondary/15 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-softAccent text-primary flex items-center justify-center font-bold text-sm">
                      0{i + 1}
                    </span>
                    <span className="text-[11px] font-bold text-secondary bg-mintAccent px-3 py-1 rounded-full border border-secondary/20">
                      {cond.recoveryRate}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-textMain group-hover:text-primary transition-colors">
                    {cond.name}
                  </h3>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold text-textMain uppercase tracking-wider">Common Symptoms:</p>
                    <ul className="space-y-1 text-xs text-muted">
                      {cond.symptoms.map((sym, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-1.5">•</span>
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-bg/80 p-4 rounded-2xl border border-slate-200 text-xs text-textMain font-medium leading-relaxed">
                    <strong className="text-primary font-bold">Non-Surgical Solution:</strong> {cond.solution}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center space-x-2 bg-darkSection hover:bg-primary text-white text-xs font-bold py-3 rounded-2xl transition-all shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation for {cond.shortName}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Clinical Treatments & Technologies Showcase */}
      <TreatmentsSection />

      {/* 6. Advanced Equipment & Technologies Banner */}
      <section className="py-20 bg-darkSection text-white border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">Clinical Modalities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              State-of-the-Art Medical Technology Suite
            </h2>
            <p className="text-sm text-slate-300">
              Modern therapeutic devices engineered for fast pain suppression and tissue regeneration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-3xl border border-white/15 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-base text-white font-display">{tech.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 4-Step Recovery Process */}
      <WellnessJourney />

      {/* 8. Interactive Appointment Booking Section */}
      <BookingSection />

      {/* 9. Verified Patient Outcome Testimonials */}
      <LuxuryTestimonials />

      {/* 10. Featured Health Journal / Blog Articles */}
      <section className="py-24 bg-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Sanjeevani Health Journal</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-textMain tracking-tight">
                Latest Evidence & Patient Advice
              </h2>
              <p className="text-sm text-muted">
                Read scientific articles on spine care, posture mechanics, and knee injury prevention written by experts.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 bg-surface hover:bg-slate-100 text-textMain text-xs font-extrabold px-6 py-3 rounded-full border border-slate-300 shadow-sm transition-all"
            >
              <span>Explore All Articles</span>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-surface rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      width="400"
                      height="200"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-darkSection/90 text-white backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-bold text-primary">{post.date} • {post.readTime}</span>
                    <h3 className="text-lg font-bold font-display text-textMain leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-xs font-bold text-primary group-hover:text-darkSection transition-colors"
                  >
                    Read Full Article <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. State-of-the-Art Facility Gallery Preview */}
      <section className="py-20 bg-surface border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Inside Sanjeevani</p>
              <h2 className="text-3xl font-extrabold font-display text-textMain tracking-tight">
                Modern Rehabilitation Infrastructure
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 bg-bg hover:bg-slate-200 text-textMain text-xs font-bold px-5 py-2.5 rounded-full border border-slate-300"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden h-52 group shadow-sm border border-slate-200">
                <img
                  src={img.src}
                  alt={img.alt}
                  width="300"
                  height="200"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkSection/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white text-xs font-bold">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Frequently Asked Questions */}
      <FAQAccordion />

    </div>
  );
}
