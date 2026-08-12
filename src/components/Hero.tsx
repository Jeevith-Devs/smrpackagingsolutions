import React from 'react';
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

  const handleQuoteClick = () => {
    openWhatsAppQuote();
  };

  return (
    /* White outer wrapper — the "frame" around the dark card */
    <section
      id="home"
      className="relative min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 pt-24 pb-10 font-the-future"
    >
      {/* ── Dark Hero Card ─────────────────────────────────────────────── */}
      <div
        className="relative w-full max-w-6xl rounded-[28px] sm:rounded-[36px]
                    flex flex-col items-center justify-center text-center
                    min-h-[82vh] px-6 sm:px-12 lg:px-20 py-16 sm:py-20
                    shadow-2xl"
      >
        {/* Background layer — clipped independently so content is never clipped */}
        <div className="hero-card-bg hero-noise absolute inset-0 rounded-[28px] sm:rounded-[36px] overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#0056A6] blur-[140px] opacity-10" />
          <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#00A3E0] blur-[120px] opacity-[0.08]" />
        </div>

        {/* Grid lines overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none z-0 rounded-[28px] sm:rounded-[36px]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center gap-7 w-full max-w-4xl">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-white/70 uppercase">
              Accepting New Orders
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-extrabold tracking-tight w-full"
            style={{ lineHeight: 1.15 }}
          >
            <span className="block text-4xl sm:text-5xl lg:text-7xl">
              Complete Industrial Solutions for{' '}
              <span className="font-montserrat-700 italic bg-gradient-to-r from-[#60a5fa] via-[#38bdf8] to-[#67e8f9] bg-clip-text text-transparent">
                Packaging.
              </span>
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl">
            Reliable industrial packaging consumables — stretch films, BOPP tapes, PET straps &amp; more — delivered across{' '}
            <span className="text-white/80 font-semibold">Kancheepuram &amp; Greater Chennai</span>.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <button
              onClick={handleQuoteClick}
              className="btn-smooth inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full
                         bg-white text-brand-secondary font-bold text-sm sm:text-base
                         shadow-lg shadow-white/10 hover:bg-slate-100
                         transition-colors duration-200 font-montserrat-700"
            >
              Get Free Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <button
              onClick={handleScrollToProducts}
              className="btn-smooth inline-flex items-center gap-2 px-6 py-3.5
                         text-white/60 hover:text-white font-semibold text-sm sm:text-base
                         transition-colors duration-200 font-montserrat-700"
            >
              Explore Products
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L5.707 9.707A1 1 0 014.293 8.293l5-5A1 1 0 0110 3z" clipRule="evenodd" transform="rotate(90, 10, 10)" />
              </svg>
            </button>
          </div>

          {/* Stats bar */}
          <div className="w-full border-t border-white/10 mt-6 pt-6 grid grid-cols-3 gap-4 sm:gap-8">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat-700">500+</span>
              <span className="text-[10px] sm:text-xs font-semibold text-white/40 uppercase tracking-widest">Industrial Clients</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#60a5fa] font-montserrat-700">24+</span>
              <span className="text-[10px] sm:text-xs font-semibold text-white/40 uppercase tracking-widest">Product Lines</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] font-montserrat-700">100%</span>
              <span className="text-[10px] sm:text-xs font-semibold text-white/40 uppercase tracking-widest">On-Time Dispatch</span>
            </div>
          </div>

        </div>
      </div>

      {/* Ambient glow behind the card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-r from-[#0056A6]/10 via-[#00A3E0]/8 to-[#0056A6]/10 blur-[100px]" />
      </div>
    </section>
  );
};
