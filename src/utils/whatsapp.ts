import { COMPANY_DETAILS } from '../data/about';

/**
 * Direct WhatsApp Quotation Redirection Utility
 * Redirects user straight to WhatsApp (+91 96777 69949) with pre-filled message.
 */
export const openWhatsAppQuote = (productName?: string) => {
  const message = productName
    ? `Hi SMR Packaging Solutions, I would like to get a price quote for ${productName}.`
    : `Hi SMR Packaging Solutions, I would like to get a price quote for industrial packaging consumables.`;

  const url = `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
