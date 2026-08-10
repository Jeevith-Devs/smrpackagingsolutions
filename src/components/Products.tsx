import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import type { Product } from '../types';
import { openWhatsAppQuote } from '../utils/whatsapp';

interface ProductsProps {
  onOpenQuoteModal?: (productName?: string) => void;
}

export const Products: React.FC<ProductsProps> = () => {
  const handleProductClick = (productName: string) => {
    openWhatsAppQuote(productName);
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-white relative font-the-future">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <i className="fi fi-sr-sparkles text-xs" />
            <span>Brochure Inventory Hub</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-secondary tracking-tight mb-4 font-montserrat-700"
          >
            Our Products Catalog
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-600 font-normal"
          >
            Explore our complete range of 24 premium industrial packaging consumables engineered for durability, transit protection, and export compliance. Click any item for instant WhatsApp quote.
          </motion.p>
        </div>

        {/* Product Grid (24 items responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-200 flex flex-col overflow-hidden group cursor-pointer transform-gpu"
                onClick={() => handleProductClick(product.name)}
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 transform-gpu"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-primary text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-brand-accent mb-1">
                      {product.category}
                    </div>

                    <h3 className="text-base font-bold text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors line-clamp-1 font-montserrat-700">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Specs / Features Tag */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                      <i className="fi fi-sr-shield-check text-emerald-500 text-xs" /> High Quality
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.name);
                      }}
                      className="btn-smooth text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm transition-all cursor-pointer font-montserrat-700"
                    >
                      <img src="/whatsapplogo.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
                      <span>Get Quote</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};


