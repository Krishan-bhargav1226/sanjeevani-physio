import React, { useState } from "react";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogData";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, BookOpen, X, MapPin, User, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { clinic } from "../data/content";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-bg relative">
      <SEO 
        title="Physiotherapy Articles & Clinical Case Studies Hisar" 
        description="Read scientific clinical case studies on non-surgical slip disc treatment, sciatica recovery, knee osteoarthritis care, and stroke rehab in Hisar Cantt under Dr. Sohan Lal." 
        keywords="Physiotherapy Articles Hisar, Slip Disc Case Study Hisar, Sciatica Recovery Guide Hisar, Knee Osteoarthritis Care Hisar, Dr Sohan Lal Blog"
      />
      
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Banner */}
        <div className="bg-darkSection text-white rounded-3xl p-8 sm:p-12 mb-16 border-2 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <BookOpen className="w-3.5 h-3.5 text-secondary" />
              <span>Evidence-Based Clinical Articles & Hisar Case Studies</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Sanjeevani Health & Clinical Research Journal
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Read in-depth clinical case studies, non-surgical spine repair protocols, and evidence-based patient recovery guides from Dr. Sohan Lal in Hisar Cantt.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="bg-surface rounded-3xl border-2 border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-darkSection/90 backdrop-blur-sm px-3.5 py-1 rounded-full text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider border border-emerald-500/30">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted font-bold">
                    <div className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-primary" /> {post.date}</div>
                    <div className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-primary" /> {post.readTime}</div>
                    <div className="flex items-center text-emerald-600"><MapPin className="w-3.5 h-3.5 mr-1" /> Hisar Cantt</div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-display text-textMain leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 font-medium">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-primary group-hover:text-darkSection transition-colors">
                  <span>Read Full Article & Clinical Case Study</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Detail Full Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-darkSection/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-surface rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 space-y-8 shadow-2xl relative border-2 border-slate-200 text-textMain">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-textMain hover:bg-slate-200 transition-colors"
              aria-label="Close article"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                  {selectedPost.category}
                </span>
                <span className="text-xs text-muted font-bold flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1 text-primary" /> {selectedPost.readTime}
                </span>
                <span className="text-xs text-muted font-bold flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-primary" /> {selectedPost.date}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-textMain leading-tight">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted bg-bg p-3 rounded-2xl border border-slate-200">
                <div className="flex items-center text-textMain font-bold">
                  <User className="w-4 h-4 mr-1.5 text-primary" /> {selectedPost.author}
                </div>
                <div className="flex items-center text-secondary font-bold">
                  <MapPin className="w-4 h-4 mr-1.5" /> {selectedPost.location}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden h-64 sm:h-80 border border-slate-200 shadow-md">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            {/* Summary Box */}
            <div className="bg-darkSection text-white p-6 rounded-2xl border-2 border-emerald-500/30 space-y-2">
              <h3 className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">Executive Summary</h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">{selectedPost.excerpt}</p>
            </div>

            {/* Detailed Article Sections */}
            <div className="space-y-6 pt-2">
              {selectedPost.sections ? (
                selectedPost.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2 bg-bg p-5 rounded-2xl border border-slate-200">
                    <h2 className="text-lg font-bold font-display text-primary flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{sec.heading}</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-textMain leading-relaxed font-normal whitespace-pre-line">
                      {sec.body}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-textMain leading-relaxed">{selectedPost.content}</p>
              )}
            </div>

            {/* Direct Consultation CTA Box inside Article */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl text-white space-y-4 shadow-xl">
              <div>
                <h3 className="text-lg font-bold font-display">Consult Dr. Sohan Lal in Hisar Cantt</h3>
                <p className="text-xs text-slate-100 font-medium mt-1">Get non-surgical spinal decompression & joint rehabilitation customized for your body.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  onClick={() => setSelectedPost(null)}
                  className="bg-white text-darkSection hover:bg-slate-100 font-extrabold text-xs px-6 py-3 rounded-full text-center shadow-md transition-all"
                >
                  Book Direct Consultation
                </Link>
                <a
                  href={`tel:${clinic.phones[0]}`}
                  className="bg-darkSection/40 text-white hover:bg-darkSection font-bold text-xs px-5 py-3 rounded-full text-center border border-white/20 transition-all flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call: {clinic.phones[0]}</span>
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-darkSection hover:bg-slate-800 text-white font-bold text-xs px-6 py-2.5 rounded-full transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
