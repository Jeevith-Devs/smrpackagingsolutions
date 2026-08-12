import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_DETAILS } from '../data/about';
import { openWhatsAppQuote } from '../utils/whatsapp';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

const NAV_ITEMS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Products',     href: '#products' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [activeTab,        setActiveTab]        = useState<string>('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ── Active-section tracker ─────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.href.substring(1));
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveTab(item.label);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close mobile menu on outside click ─────────────────────────────── */
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isMobileMenuOpen]);

  /* ── Smooth scroll helper ───────────────────────────────────────────── */
  const scrollTo = (href: string, label: string) => {
    setActiveTab(label);
    setIsMobileMenuOpen(false);
    const el = document.getElementById(href.substring(1));
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    scrollTo(href, label);
  };

  const handleQuoteClick = () => openWhatsAppQuote();

  return (
    /* Fixed wrapper — full width, pointer-events only on the pill */
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">

      {/* ── Floating Pill Capsule ─────────────────────────────────────── */}
      <div
        ref={menuRef}
        className="pointer-events-auto relative flex items-center gap-5 md:gap-8
                   px-4 md:px-5 py-2 md:py-3
                   rounded-2xl
                   border border-black/[0.07]
                   shadow-[0_2px_20px_rgba(0,0,0,0.10)]
                   w-auto"
        style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', 'Home')}
          className="flex items-center shrink-0 transition-opacity duration-300 hover:opacity-60"
        >
          <img
            src="/SMR LONG.svg"
            alt="SMR Packaging Solutions"
            className="h-6 sm:h-7 w-auto object-contain"
            style={{ maxWidth: 120 }}
          />
        </a>

        {/* ── Desktop Nav Links ───────────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.label)}
                className="group relative flex flex-col items-center px-3 py-1 focus:outline-none"
              >
                <span
                  className={`text-[10px] font-semibold tracking-[0.06em] uppercase transition-all duration-300
                    group-hover:-translate-y-[3px] group-hover:text-neutral-900
                    ${isActive ? 'text-brand-primary' : 'text-neutral-500'}`}
                >
                  {item.label}
                </span>
                {/* Dot indicator */}
                <span
                  className={`mt-0.5 w-1 h-1 rounded-full transition-opacity duration-200
                    ${isActive ? 'opacity-100 bg-brand-primary' : 'opacity-0 group-hover:opacity-100 bg-neutral-900'}`}
                />
              </a>
            );
          })}

          {/* Thin divider */}
          <span className="w-px h-4 mx-1 bg-black/10 block shrink-0" />

          {/* Phone icon link */}
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            title="+91 96777 69949"
            className="p-1.5 text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
            aria-label="Call us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </a>

          {/* Get Quote pill button */}
          <button
            onClick={handleQuoteClick}
            className="ml-1 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
                       bg-brand-primary text-white text-[10px] font-bold tracking-[0.05em] uppercase
                       hover:bg-brand-primaryHover transition-colors duration-200 cursor-pointer shadow-sm"
          >
            Get Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </nav>

        {/* ── Mobile Hamburger / X Button ─────────────────────────────── */}
        <button
          className="md:hidden relative w-6 h-5 flex flex-col justify-center items-center focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          {/* Top bar */}
          <span
            className="absolute h-[2px] w-5 bg-neutral-800 rounded-full transition-all duration-300 ease-out"
            style={{
              transform: isMobileMenuOpen ? 'translateY(0) rotate(45deg)' : 'translateY(-4px)',
            }}
          />
          {/* Middle bar */}
          <span
            className="absolute h-[2px] w-5 bg-neutral-800 rounded-full transition-all duration-300 ease-out"
            style={{
              opacity: isMobileMenuOpen ? 0 : 1,
              transform: isMobileMenuOpen ? 'translateX(10px)' : 'translateX(0)',
            }}
          />
          {/* Bottom bar */}
          <span
            className="absolute h-[2px] w-5 bg-neutral-800 rounded-full transition-all duration-300 ease-out"
            style={{
              transform: isMobileMenuOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(4px)',
            }}
          />
        </button>

        {/* ── Mobile Dropdown Menu ────────────────────────────────────── */}
        <nav
          aria-label="Mobile menu"
          className="md:hidden absolute top-full left-1/2 mt-2 bg-white rounded-2xl
                     shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden w-[260px]"
          style={{
            transform: isMobileMenuOpen
              ? 'translateX(-50%) translateY(0) scale(1)'
              : 'translateX(-50%) translateY(-8px) scale(0.97)',
            opacity: isMobileMenuOpen ? 1 : 0,
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
            transition: 'opacity 0.22s ease, transform 0.22s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.label)}
                className={`flex items-center px-5 py-3 text-sm font-medium border-b border-neutral-100 last:border-0
                            hover:bg-neutral-50 transition-colors duration-200
                            ${isActive ? 'text-brand-primary font-bold' : 'text-neutral-900'}`}
              >
                {item.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-primary" />
                )}
              </a>
            );
          })}

          {/* Divider + actions */}
          <div className="border-t border-neutral-100 px-5 py-3 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              +91 96777 69949
            </a>
            <button
              onClick={handleQuoteClick}
              className="w-full py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold
                         hover:bg-brand-primaryHover transition-colors duration-200 cursor-pointer"
            >
              Get Free Quote →
            </button>
          </div>
        </nav>

      </div>
    </header>
  );
};
