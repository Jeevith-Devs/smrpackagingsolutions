import React from 'react';
import { motion } from 'framer-motion';

interface CustomerLogo {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
}

const CUSTOMER_LOGOS: CustomerLogo[] = [
  { id: 'hyundai', name: 'HYUNDAI SUPPLIER LOGISTICS', shortName: 'HYUNDAI', tagline: 'LOGISTICS' },
  { id: 'apex', name: 'APEX PRECISION ENGINEERING', shortName: 'APEX', tagline: 'PRECISION' },
  { id: 'tvs', name: 'TVS AUTO ANCILLARIES', shortName: 'TVS', tagline: 'MOTORS' },
  { id: 'global-freight', name: 'GLOBAL FREIGHT WAREHOUSING', shortName: 'GLOBAL', tagline: 'FREIGHT' },
  { id: 'renault-nissan', name: 'RENAULT-NISSAN SUPPLY HUB', shortName: 'RENAULT', tagline: 'NISSAN' },
  { id: 'foxconn', name: 'FOXCONN EXPORTERS', shortName: 'FOXCONN', tagline: 'GLOBAL' },
  { id: 'royal-enfield', name: 'ROYAL ENFIELD LOGISTICS', shortName: 'ROYAL', tagline: 'ENFIELD' },
  { id: 'saint-gobain', name: 'SAINT-GOBAIN GLASS', shortName: 'SAINT-GOBAIN', tagline: 'GLASS' },
  { id: 'caterpillar', name: 'CATERPILLAR HEAVY FREIGHT', shortName: 'CAT', tagline: 'LOGISTICS' },
  { id: 'delphi', name: 'DELPHI-TVS TECHNOLOGIES', shortName: 'DELPHI', tagline: 'TECHNOLOGIES' },
];

// Duplicate items array to create seamless infinite marquee loop
const MARQUEE_LOGOS = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

export const CustomerCarousel: React.FC = () => {
  return (
    <div className="relative py-6 bg-white/70 backdrop-blur-md border-y border-slate-200/80 overflow-hidden z-20">


      {/* Gradient Fades for Left and Right Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Automatic Infinite Ticker Marquee with JUST LOGOS */}
      <div className="flex overflow-hidden select-none items-center">
        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-12 shrink-0 pr-12"
        >
          {MARQUEE_LOGOS.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex items-center gap-3 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer shrink-0 py-2 px-4 rounded-xl hover:bg-white/80 hover:shadow-sm border border-transparent hover:border-slate-200"
            >
              {/* Minimalist Vector Emblem Badge */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-secondary to-brand-primary text-white flex items-center justify-center font-black text-xs tracking-tighter shadow-sm">
                {logo.shortName.substring(0, 2)}
              </div>

              {/* Minimalist Logo Brand Typography */}
              <div className="flex flex-col">
                <span className="font-black text-sm tracking-tight text-brand-secondary leading-none uppercase">
                  {logo.shortName}
                </span>
                <span className="text-[9px] font-bold tracking-widest text-brand-primary uppercase mt-0.5">
                  {logo.tagline}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};
