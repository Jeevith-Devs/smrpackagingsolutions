import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShieldCheck, FileText } from 'lucide-react';
import type { Product } from '../types';
import { openWhatsAppQuote } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onRequestQuote }) => {
  const handleWhatsAppRedirect = () => {
    if (!product) return;
    onClose();
    openWhatsAppQuote(product.name);
  };

  const handleFormQuote = () => {
    if (!product) return;
    onClose();
    onRequestQuote(product.name);
  };

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden z-10 border border-slate-200 font-the-future my-auto max-h-[90vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="btn-smooth absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/40 text-white hover:bg-slate-900 focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Banner Image - Fills box on all screen sizes */}
            <div className="relative bg-slate-950 shrink-0 border-b border-slate-800">
              <div className="relative h-64 sm:h-80 w-full p-0 flex items-center justify-center bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover z-10"
                />
              </div>

              {/* Title Header Bar */}
              <div className="p-5 sm:p-6 bg-slate-900/95 border-t border-slate-800/80 text-white">
                <span className="px-3 py-1 rounded-full bg-brand-accent text-white text-[11px] font-extrabold uppercase tracking-wider mb-2 inline-block shadow-md">
                  {product.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-montserrat-700">
                  {product.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specifications if present */}
              {product.specs && (
                <div className="mb-6 p-4 rounded-2xl bg-brand-section border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Technical Specifications
                  </div>
                  <div className="text-sm font-semibold text-brand-secondary">
                    {product.specs}
                  </div>
                </div>
              )}

              {/* Features Bullet List */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-brand-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                  <span>Key Highlights & Advantages</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="btn-smooth w-full sm:w-auto flex-1 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <img src="/whatsapplogo.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                  <span>Get WhatsApp Quote</span>
                </button>

                <button
                  onClick={handleFormQuote}
                  className="btn-smooth w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-brand-primary hover:bg-brand-primaryHover text-white text-sm font-bold shadow-lg shadow-brand-primary/25 flex items-center justify-center gap-2 cursor-pointer font-montserrat-700"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Custom Quote</span>
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

