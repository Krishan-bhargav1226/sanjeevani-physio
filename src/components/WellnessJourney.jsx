import React from "react";
import { processSteps } from "../data/content";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function WellnessJourney() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="wellness" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <p className="text-xs uppercase tracking-widest text-primary font-extrabold flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>The Sanjeevani Method</span>
          </p>
          <h2 className="heading-title text-textMain">
            A structured, 4-step pathway to lasting mobility.
          </h2>
          <p className="text-sm text-muted font-medium">
            Every patient undergoes a clear, milestone-driven protocol engineered for non-surgical recovery.
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-surface rounded-3xl p-8 border-2 border-slate-200/80 shadow-card flex flex-col justify-between space-y-6 group hover:border-primary/50 transition-all hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold font-display text-primary/30 group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-softAccent text-primary flex items-center justify-center font-bold text-xs">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-textMain group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold text-muted mt-0.5">{step.englishTitle}</p>
                </div>

                <p className="text-xs text-muted leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary">
                <span>Clinical Step {step.number}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
