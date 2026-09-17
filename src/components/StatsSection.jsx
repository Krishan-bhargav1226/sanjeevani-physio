import React from "react";
import { stats } from "../data/content";
import { motion } from "framer-motion";

export default function StatsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-surface border-y border-slate-200/80 shadow-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((itemStat, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-bg p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-center lg:text-left space-y-1"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-shimmer tracking-tight block">
                {itemStat.value}
              </span>
              <p className="text-sm font-extrabold text-textMain">
                {itemStat.label}
              </p>
              {itemStat.description && (
                <p className="text-xs text-muted font-medium pt-0.5">
                  {itemStat.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
