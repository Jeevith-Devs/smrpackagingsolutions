import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_DETAILS } from '../data/about';
import { openWhatsAppQuote } from '../utils/whatsapp';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home', num: '01' },
  { label: 'About', href: '#about', num: '02' },
  { label: 'Products', href: '#products', num: '03' },
  { label: 'Testimonials', href: '#testimonials', num: '04' },
  { label: 'Contact', href: '#contact', num: '05' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const currentItem = NAV_ITEMS.find((item) => item.href === `#${sectionId}`);
            if (currentItem) setActiveTab(currentItem.label);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const targetId = href.startsWith('#') ? href.substring(1) : href;
    const targetElement = document.getElementById(targetId) || document.querySelector(href);

    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navbarHeight);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActiveTab(label);
    setIsMobileMenuOpen(false);

    scrollToSection(href);

    setTimeout(() => {
      scrollToSection(href);
    }, 200);
  };

  const handleQuoteClick = () => {
    setIsMobileMenuOpen(false);
    openWhatsAppQuote();
  };

  return (
    <>
      {/* Sticky Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform-gpu ${
          isScrolled ? 'py-3 bg-slate-900/10 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: SMR LONG Logo */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none btn-smooth"
            onClick={(e) => handleNavClick(e, '#home', 'Home')}
          >
            <img
              src="/SMR LONG.svg"
              alt="SMR Packaging Solutions"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Center: Motion Primitives Animated Tabs Hover Nav (Desktop) */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-glass">
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.label;
                const isHovered = hoveredTab === item.label;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
                    onMouseEnter={() => setHoveredTab(item.label)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className="relative px-5 py-2 text-sm font-semibold rounded-full focus:outline-none font-the-future tab-smooth"
                    style={{
                      color: isActive ? '#0056A6' : isHovered ? '#0F172A' : '#64748B',
                    }}
                  >
                    {/* Hover background indicator */}
                    {isHovered && !isActive && (
                      <motion.span
                        layoutId="hover-tab"
                        className="absolute inset-0 rounded-full bg-slate-100/80 -z-10"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}

                    {/* Active tab background slider */}
                    {isActive && (
                      <motion.span
                        layoutId="active-tab"
                        className="absolute inset-0 rounded-full bg-brand-primary/10 border border-brand-primary/20 shadow-sm -z-10"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}

                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Right: Primary CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-brand-primary px-3 py-2 rounded-lg transition-colors font-the-future"
            >
              <i className="fi fi-sr-phone-call text-brand-accent text-sm" />
              <span>+91 96777 69949</span>
            </a>

            <button
              onClick={handleQuoteClick}
              className="btn-smooth flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary text-white text-sm font-bold shadow-md shadow-brand-primary/25 hover:bg-brand-primaryHover transition-all font-the-future cursor-pointer"
            >
              <span>Get Quote</span>
              <i className="fi fi-sr-arrow-right text-xs" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="btn-smooth p-3 rounded-2xl bg-white/90 border border-slate-200 text-brand-secondary shadow-md focus:outline-none cursor-pointer flex items-center justify-center"
              aria-label="Open Fullscreen Menu"
            >
              <i className="fi fi-sr-menu-burger text-lg leading-none" />
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MOBILE NAVIGATION OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 min-h-screen w-screen bg-slate-950/95 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-10 overflow-y-auto transform-gpu"
          >
            {/* Top Bar inside Fullscreen Menu */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center">
                <img
                  src="/SMR LONG.svg"
                  alt="SMR Packaging Solutions"
                  className="h-10 w-auto object-contain bg-white/90 p-1.5 rounded-xl shadow-md"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-smooth p-3 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none cursor-pointer flex items-center justify-center"
                aria-label="Close Menu"
              >
                <i className="fi fi-sr-cross text-lg leading-none" />
              </button>
            </div>

            {/* Center Navigation Links (Fullscreen Typography) */}
            <div className="py-8 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent flex items-center gap-2 mb-2 font-the-future">
                <i className="fi fi-sr-sparkles text-xs" /> Navigation Menu
              </span>

              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeTab === item.label;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    className={`btn-smooth group flex items-center justify-between py-3 border-b border-white/10 font-the-future ${
                      isActive ? 'text-brand-accent font-extrabold' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-bold text-slate-500 font-mono">{item.num}</span>
                      <span className={`text-3xl sm:text-4xl tracking-tight ${isActive ? 'font-tiempos-italic text-brand-accent font-normal' : 'font-extrabold'}`}>
                        {item.label}
                      </span>
                    </div>

                    <i className={`fi fi-sr-arrow-right text-xl transition-transform duration-200 ${isActive ? 'translate-x-0 text-brand-accent' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-white'}`} />
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Actions & Factory Location Details */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-the-future">
                <i className="fi fi-sr-marker text-brand-accent shrink-0 text-sm" />
                <span>Mathur, Vallakkottai, Kancheepuram, Tamil Nadu – 602105</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="btn-smooth flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 border border-white/15 text-white text-sm font-bold font-the-future"
                >
                  <i className="fi fi-sr-phone-call text-brand-accent" />
                  <span>Call +91 96777 69949</span>
                </a>

                <button
                  onClick={handleQuoteClick}
                  className="btn-smooth w-full py-3.5 rounded-2xl bg-brand-primary text-white text-sm font-bold shadow-lg shadow-brand-primary/40 flex items-center justify-center gap-2 font-the-future cursor-pointer font-montserrat-700"
                >
                  <span>Get Instant Quote</span>
                  <i className="fi fi-sr-arrow-right text-xs" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
