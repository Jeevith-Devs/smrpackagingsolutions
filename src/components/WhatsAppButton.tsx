import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DETAILS } from '../data/about';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
    'Hi SMR Packaging Solutions, I would like to inquire about industrial packaging consumables prices and specifications.'
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 focus:outline-none group btn-smooth"
      aria-label="Chat on WhatsApp"
    >
      <img src="/whatsapplogo.png" alt="WhatsApp Logo" className="w-8 h-8 object-contain" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none font-the-future">
        Chat on WhatsApp (+91 96777 69949)
      </span>

      {/* Ping indicator */}
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-ping" />
    </motion.a>
  );
};
