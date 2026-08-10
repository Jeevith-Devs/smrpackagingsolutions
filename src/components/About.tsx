import React from 'react';
import { motion } from 'framer-motion';
import {
  Smile,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Clock,
  PackageCheck,
  CheckCircle,
  Building2,
  Award,
  Truck,
  Quote
} from 'lucide-react';
import { QUALITY_HIGHLIGHTS, COMPANY_DETAILS } from '../data/about';

const ICON_MAP: Record<string, React.ElementType> = {
  Smile,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Clock,
  PackageCheck
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-live-gradient-light relative overflow-hidden font-the-future">
      {/* Live Floating Blue & White Accents */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-brand-primary border border-brand-primary/20 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <span>Trusted Industrial Partner</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-secondary tracking-tight mb-6"
          >
            About SMR Packaging Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-700 font-normal leading-relaxed mb-4"
          >
            {COMPANY_DETAILS.aboutBrochureText}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-slate-600 font-normal leading-relaxed"
          >
            {COMPANY_DETAILS.aboutBrochureSubtext}
          </motion.p>
        </div>

        {/* Brochure Core Pillars Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {QUALITY_HIGHLIGHTS.map((item, index) => {
            const IconComponent = ICON_MAP[item.iconName] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card p-8 rounded-3xl border border-white/80 shadow-sm hover:shadow-card-hover transition-all duration-300 relative group transform-gpu"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/20 text-brand-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors font-montserrat-700">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-primary">
                  <CheckCircle className="w-4 h-4 text-brand-accent" />
                  <span>Brochure Quality Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industrial Footprint & Mission Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-secondary via-brand-primary to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl mb-16"
        >
          {/* Live Gradient Background Motion inside banner */}
          <motion.div
            animate={{
              x: ['-20%', '20%', '-20%'],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-gradient-to-br from-brand-accent/30 via-white/20 to-transparent rounded-full blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="text-brand-accent font-bold text-xs uppercase tracking-widest block mb-2 font-montserrat-700">
                Operational Coverage
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 font-montserrat-700">
                Serving Key Industrial Hubs Across Kancheepuram & Tamil Nadu
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                From our strategic facility at Vallakkottai, Kancheepuram, we provide just-in-time packaging delivery to major manufacturing nodes including Oragadam, Sriperumbudur, Maraimalai Nagar, Irungattukottai, and the Chennai Seaport Corridor.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  <Building2 className="w-4 h-4 text-brand-accent" />
                  <span>Automotive & Ancillaries</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Export Sea Freight Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  <Truck className="w-4 h-4 text-emerald-400" />
                  <span>Express Dispatch Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="glass-card-dark p-6 rounded-2xl text-center w-full max-w-xs">
                <div className="text-4xl font-extrabold text-brand-accent mb-1 font-montserrat-700">100%</div>
                <div className="text-sm font-semibold text-white mb-2 font-montserrat-700">Quality & Spec Guarantee</div>
                <p className="text-xs text-slate-300">Every consignment is batch-tested for gauge, tensile, and puncture standards.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MANAGING DIRECTOR LEADERSHIP SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

            {/* Left: MD Portrait Image Showcase (Col 5) */}
            <div className="lg:col-span-5 relative h-80 lg:h-full min-h-[380px] bg-slate-900 overflow-hidden">
              <img
                src="/MD.png"
                alt="Mr. S. Ranjith Kumar - Managing Director, SMR Packaging Solutions"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* MD Name & Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-extrabold font-montserrat-700">Mr. S. Ranjith Kumar</h4>
                <p className="text-xs text-slate-300 font-medium">Managing Director & Founder • SMR Packaging Solutions</p>
              </div>
            </div>

            {/* Right: Leadership Message & Vision (Col 7) */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-brand-primary font-extrabold text-xs uppercase tracking-widest mb-4 font-montserrat-700">
                  <Quote className="w-5 h-5 text-brand-accent" />
                  <span>Leadership Vision & Commitment</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-secondary tracking-tight mb-8 font-montserrat-700 leading-snug">
                  "Delivering Uncompromised Packaging Reliability to Fuel India’s Manufacturing Growth"
                </h3>

                {/* Key Leadership Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold text-brand-primary font-montserrat-700">15+ Years</span>
                    <span className="text-xs text-slate-500 font-medium">Industry Expertise</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold text-brand-secondary font-montserrat-700">500+ Enterprises</span>
                    <span className="text-xs text-slate-500 font-medium">Trusted Supply Clients</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold text-emerald-600 font-montserrat-700">100% Quality</span>
                    <span className="text-xs text-slate-500 font-medium">Batch Inspection</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
