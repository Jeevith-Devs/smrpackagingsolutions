import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CustomerCarousel } from './components/CustomerCarousel';
import { About } from './components/About';
import { Products } from './components/Products';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';
import { openWhatsAppQuote } from './utils/whatsapp';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [modalInitialProduct, setModalInitialProduct] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productName?: string) => {
    openWhatsAppQuote(productName);
  };

  return (
    <div className="min-h-screen bg-white text-brand-text flex flex-col font-sans selection:bg-brand-primary selection:text-white">
      {/* Motion Primitives Glass Sticky Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
        
        {/* Automatic Customer Marquee Carousel immediately after Hero */}
        <CustomerCarousel />

        <About />
        <Products onOpenQuoteModal={(productName) => handleOpenQuoteModal(productName)} />
        <Testimonials />
        <Contact prefilledProduct={modalInitialProduct} />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton />

      {/* Quick Quote Interactive Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={modalInitialProduct}
      />
    </div>
  );
};

export default App;
