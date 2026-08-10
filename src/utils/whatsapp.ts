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

/**
 * Direct WhatsApp Full Inquiry Redirection Utility
 */
export const openWhatsAppInquiry = (formData: {
  name: string;
  companyName?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
}) => {
  let text = `Hi SMR Packaging Solutions, I am submitting a new packaging inquiry:\n`;
  if (formData.name) text += `\n*Name:* ${formData.name}`;
  if (formData.companyName) text += `\n*Company:* ${formData.companyName}`;
  if (formData.phone) text += `\n*Phone:* ${formData.phone}`;
  if (formData.email) text += `\n*Email:* ${formData.email}`;
  if (formData.product) text += `\n*Product:* ${formData.product}`;
  if (formData.message) text += `\n*Message:* ${formData.message}`;

  const url = `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

