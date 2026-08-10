import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from './AnimatedBackground';
import { openWhatsAppQuote } from '../utils/whatsapp';

interface HeroProps {
  onOpenQuoteModal?: () => void;
  onSelectProduct?: (productName: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuoteClick = (productName?: string) => {
    openWhatsAppQuote(productName);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-live-gradient-light font-the-future">
      
      {/* Live Motion Blue & White Animated Background Component */}
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Copywriting & Actions (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Large H1 Heading: Primary "The Future" + Secondary "Montserrat 700" */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-secondary tracking-tight leading-[1.1] mb-6"
            >
              Complete Industrial Packaging Solutions{' '}
              <span className="font-montserrat-700 bg-gradient-to-r from-brand-primary via-brand-accent to-blue-700 bg-clip-text text-transparent">
                Under One Roof
              </span>
            </motion.h1>

            {/* Sub Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Providing reliable industrial packaging consumables that protect products during storage, transportation, and export with{' '}
              <span className="font-montserrat-700 text-brand-primary">quality, efficiency, and cost-effectiveness</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={() => handleQuoteClick()}
                className="btn-smooth px-8 py-4 rounded-2xl bg-brand-primary text-white text-base font-bold shadow-xl shadow-brand-primary/30 hover:bg-brand-primaryHover flex items-center justify-center gap-3 transition-all cursor-pointer font-montserrat-700"
              >
                <span>Get Free Quote</span>
                <i className="fi fi-sr-arrow-right text-sm" />
              </button>

              <button
                onClick={handleScrollToProducts}
                className="btn-smooth px-8 py-4 rounded-2xl bg-white/90 text-brand-secondary border border-slate-200 hover:bg-white text-base font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer font-montserrat-700"
              >
                <span>Explore Products</span>
              </button>
            </motion.div>

            {/* Live Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 w-full"
            >
              <div className="glass-card p-3 sm:p-4 rounded-2xl text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-secondary font-montserrat-700">500+</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Industrial Clients</div>
              </div>
              <div className="glass-card p-3 sm:p-4 rounded-2xl text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-primary font-montserrat-700">24+</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Product Lines</div>
              </div>
              <div className="glass-card p-3 sm:p-4 rounded-2xl text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent font-montserrat-700">100%</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">On-Time Dispatch</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Floating Animated Product Cards (Col 5) */}
          <div className="lg:col-span-5 relative min-h-[500px] flex items-center justify-center">
            
            {/* Visual Backplate */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-white/80 to-sky-50 rounded-3xl border border-white/80 shadow-2xl backdrop-blur-lg -rotate-1 scale-95" />

            {/* Central Industrial Hero Image Showcase */}
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 transition-transform hover:rotate-0 duration-500 z-10">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Industrial packaging warehouse stretch film pallets"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  <i className="fi fi-sr-star text-sm text-amber-400" />
                  <i className="fi fi-sr-star text-sm text-amber-400" />
                  <i className="fi fi-sr-star text-sm text-amber-400" />
                  <i className="fi fi-sr-star text-sm text-amber-400" />
                  <i className="fi fi-sr-star text-sm text-amber-400" />
                </div>
                <h3 className="font-bold text-lg font-montserrat-700">Industrial Warehouse Consumables</h3>
                <p className="text-xs text-slate-300 font-tiempos-italic">Kancheepuram & Greater Chennai Supply Chain</p>
              </div>
            </div>

            {/* Floating Card 1: Stretch Film (Top Left) */}
            <motion.div
              animate={{
                y: [0, -14, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              onClick={() => handleQuoteClick('Stretch Film')}
              className="absolute -top-4 -left-2 sm:left-0 z-20 glass-card p-4 rounded-2xl shadow-card-hover max-w-[220px] cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center text-white shadow-md">
                  <i className="fi fi-sr-box-alt text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-secondary font-montserrat-700">Stretch Film</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Machine & Manual</p>
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-slate-100 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-brand-primary font-bold">12-50 Micron</span>
                <span className="text-slate-400 font-medium">300% Stretch</span>
              </div>
            </motion.div>

            {/* Floating Card 2: PET Strap (Top Right) */}
            <motion.div
              animate={{
                y: [0, 12, 0],
                x: [0, -6, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              onClick={() => handleQuoteClick('PET Strap')}
              className="absolute top-12 -right-2 sm:-right-4 z-20 glass-card p-4 rounded-2xl shadow-card-hover max-w-[210px] cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand-accent shadow-md">
                  <i className="fi fi-sr-shield-check text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-secondary font-montserrat-700">PET Strap</h4>
                  <p className="text-[11px] text-slate-500 font-medium">High Tensile Load</p>
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-slate-100 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">Steel Substitute</span>
              </div>
            </motion.div>

            {/* Floating Card 3: BOPP Tape (Bottom Left) */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, -4, 0]
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              onClick={() => handleQuoteClick('BOPP Tape')}
              className="absolute bottom-4 -left-4 z-20 glass-card p-4 rounded-2xl shadow-card-hover max-w-[210px] cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center text-white shadow-md">
                  <i className="fi fi-sr-check-circle text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-secondary font-montserrat-700">BOPP Tape</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Printed & Plain</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 4: Carton Box (Bottom Right) */}
            <motion.div
              animate={{
                y: [0, 14, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              onClick={() => handleQuoteClick('Carton Box')}
              className="absolute -bottom-6 -right-2 z-20 glass-card p-4 rounded-2xl shadow-card-hover max-w-[220px] cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md">
                  <i className="fi fi-sr-truck-side text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-secondary font-montserrat-700">Carton Box</h4>
                  <p className="text-[11px] text-slate-500 font-medium">3, 5 & 7-Ply Heavy</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

