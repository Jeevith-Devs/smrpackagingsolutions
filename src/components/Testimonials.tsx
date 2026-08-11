import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, Building2, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-brand-section relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span>Verified Client Endorsements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-secondary tracking-tight mb-4"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-600 font-normal"
          >
            Trusted by leading manufacturers, exporters, 3PL logistics providers, and packaging leads across Tamil Nadu industrial hubs.
          </motion.p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Icon Background */}
              <Quote className="w-12 h-12 text-slate-100 absolute top-6 right-6 pointer-events-none group-hover:text-brand-primary/10 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                {/* Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider mb-4">
                  {item.tag}
                </span>

                {/* Feedback Body */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-8 relative z-10">
                  "{item.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-contain bg-slate-100 p-0.5 border-2 border-brand-primary/20 shadow-sm"
                />
                <div>
                  <h4 className="text-base font-bold text-brand-secondary flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                  </h4>
                  <p className="text-xs font-semibold text-brand-primary">{item.role}</p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3" /> {item.company}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <CheckCircle className="w-4 h-4" /> 100% Product Quality Guarantee
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1 text-brand-primary font-bold">
              <MapPin className="w-4 h-4" /> Direct Supply to Kancheepuram & Chennai
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
