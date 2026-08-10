import React from 'react';
import { COMPANY_DETAILS } from '../data/about';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-secondary text-white pt-16 pb-12 border-t border-slate-800 relative font-the-future">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Intro (Col 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center mb-6">
              <img
                src="/SMR LONG.svg"
                alt="SMR Packaging Solutions"
                className="h-11 w-auto object-contain bg-white/90 p-1.5 rounded-xl shadow-md"
              />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              SMR Packaging Solutions is a trusted supplier of industrial packaging consumables, delivering complete packaging solutions for manufacturers, logistics companies, exporters, warehouses, and industrial businesses across Tamil Nadu.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-full">
              <i className="fi fi-sr-shield-check text-sm text-emerald-400" />
              <span>Brochure Certified Supplier • ISO Quality Standards</span>
            </div>
          </div>

          {/* Col 2: Quick Links (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-montserrat-700">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-brand-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-brand-accent transition-colors">Products Catalog</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-accent transition-colors">Client Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-accent transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Products (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-montserrat-700">
              Consumables Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>Stretch Film (Machine & Manual)</li>
              <li>PET & PP Straps & Tools</li>
              <li>VCI Roll & Anti-Rust Covers</li>
              <li>Bubble Roll & EPE Foam</li>
              <li>Container Desiccant & Dunnage Air Bags</li>
              <li>Angle Boards & Corrugated Gaylord Boxes</li>
            </ul>
          </div>

          {/* Col 4: Contact Info (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-montserrat-700">
              Contact Information
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <i className="fi fi-sr-marker text-brand-accent shrink-0 text-sm mt-0.5" />
                <span>
                  {COMPANY_DETAILS.address.street}, {COMPANY_DETAILS.address.area}, {COMPANY_DETAILS.address.district}, {COMPANY_DETAILS.address.state} – {COMPANY_DETAILS.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <i className="fi fi-sr-phone-call text-brand-accent shrink-0 text-sm" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-brand-accent font-bold font-montserrat-700">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <i className="fi fi-sr-envelope text-brand-accent shrink-0 text-sm mt-0.5" />
                <div>
                  <a href={`mailto:${COMPANY_DETAILS.emails.primary}`} className="block hover:text-brand-accent">
                    {COMPANY_DETAILS.emails.primary}
                  </a>
                  <a href={`mailto:${COMPANY_DETAILS.emails.secondary}`} className="block text-slate-400 hover:text-brand-accent">
                    {COMPANY_DETAILS.emails.secondary}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Copyright © 2026 <strong className="text-white font-bold font-montserrat-700">SMR Packaging Solutions</strong>. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-smooth flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-brand-primary hover:text-white transition-all focus:outline-none cursor-pointer"
          >
            <span>Back to Top</span>
            <i className="fi fi-sr-angle-small-up text-sm" />
          </button>
        </div>

      </div>
    </footer>
  );
};
