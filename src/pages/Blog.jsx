import React, { useState } from "react";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogData";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, BookOpen, X } from "lucide-react";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-bg relative">
      <SEO 
        title="Sanjeevani Health & Wellness Journal" 
        description="Read articles on non-surgical back pain care, knee osteoarthritis exercises, posture mechanics, and neuro-rehabilitation." 
      />
      
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Banner */}
        <div className="bg-darkSection text-white rounded-3xl p-8 sm:p-12 mb-16 border-2 border-white/20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <BookOpen className="w-3.5 h-3.5 text-secondary" />
              <span>Evidence-Based Articles</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              The Sanjeevani Health Journal
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Discover the science behind non-surgical spine repair, joint mobilization, posture mechanics, and leading a pain-free life.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="bg-surface rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-darkSection/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-4 text-[11px] text-muted font-bold">
                    <div className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-primary" /> {post.date}</div>
                    <div className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-primary" /> {post.readTime}</div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-textMain leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-primary group-hover:text-darkSection transition-colors">
                  Read Full Article <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-darkSection/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-bg text-textMain hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="bg-softAccent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl font-bold font-display text-textMain">{selectedPost.title}</h2>
              <div className="flex items-center space-x-4 text-xs text-muted font-semibold">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-60">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <div className="text-sm text-textMain leading-relaxed space-y-4">
              <p className="font-bold text-primary">{selectedPost.excerpt}</p>
              <p>{selectedPost.content}</p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-darkSection text-white font-bold text-xs px-6 py-2.5 rounded-full"
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
