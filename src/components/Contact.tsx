import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, Building, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/about';
import type { QuoteFormData } from '../types';
import { openWhatsAppInquiry } from '../utils/whatsapp';

interface ContactProps {
  prefilledProduct?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledProduct }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    product: prefilledProduct || 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    openWhatsAppInquiry(formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };


  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative font-the-future">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-secondary tracking-tight mb-4 font-montserrat-700"
          >
            Contact SMR Packaging Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-600 font-normal"
          >
            Have a question about product specifications, bulk pricing, or custom packaging solutions? Send us an inquiry or visit our Kancheepuram facility.
          </motion.p>
        </div>

        {/* Split Layout: Left Contact Cards & Maps, Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Address & Brochure Contact Details (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-section p-8 rounded-3xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-xl font-bold text-brand-secondary mb-6 flex items-center gap-2 font-montserrat-700">
                <Building className="w-5 h-5 text-brand-primary" />
                <span>Head Office & Facility</span>
              </h3>

              <div className="space-y-5 text-slate-700 text-sm">
                
                {/* Street & Area */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-primary shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary font-montserrat-700">Factory Address</h4>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      {COMPANY_DETAILS.name}<br />
                      {COMPANY_DETAILS.address.street}<br />
                      {COMPANY_DETAILS.address.area}<br />
                      {COMPANY_DETAILS.address.district}, {COMPANY_DETAILS.address.state} – {COMPANY_DETAILS.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-primary shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary font-montserrat-700">Phone Number</h4>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="text-brand-primary font-bold text-base hover:underline block mt-0.5 font-montserrat-700"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                    <span className="text-[11px] text-slate-400">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-primary shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary font-montserrat-700">Email Inquiries</h4>
                    <a
                      href={`mailto:${COMPANY_DETAILS.emails.primary}`}
                      className="text-brand-primary font-semibold text-sm hover:underline block mt-0.5"
                    >
                      {COMPANY_DETAILS.emails.primary}
                    </a>
                    <a
                      href={`mailto:${COMPANY_DETAILS.emails.secondary}`}
                      className="text-slate-600 font-medium text-xs hover:underline block mt-0.5"
                    >
                      {COMPANY_DETAILS.emails.secondary}
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Google Maps Location Preview Frame with Direct Map URL Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative h-64 bg-slate-100 group cursor-pointer"
            >
              <iframe
                title="SMR Packaging Solutions Kancheepuram Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.700140702812!2d79.9142!3d12.8789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52e00000000001%3A0x0!2zMTLCsDUyJzQ0LjAiTiA3OcKwNTQnNTE.xIk!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />

              {/* Clickable Map Link Badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 text-xs flex items-center justify-between shadow-lg">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-800 font-montserrat-700">Vallakkottai, Kancheepuram</span>
                  <span className="text-[10px] text-slate-500">Tamil Nadu – 602105</span>
                </div>
                
                <a
                  href={COMPANY_DETAILS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-smooth px-3.5 py-1.5 rounded-xl bg-brand-primary text-white text-[11px] font-bold flex items-center gap-1.5 shadow-md shadow-brand-primary/20 hover:bg-brand-primaryHover"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Modern Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-glass relative"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-brand-secondary mb-2 font-montserrat-700">
                  Request a Price Quote
                </h3>
                <p className="text-sm text-slate-500">
                  Fill out the form below and our technical sales team will reply with custom pricing within 2 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 text-center bg-emerald-50 rounded-2xl border border-emerald-200"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900 mb-2 font-montserrat-700">Inquiry Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our packaging executive will review your request for <strong className="text-brand-primary">{formData.product}</strong> and contact you shorty at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        product: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="btn-smooth px-6 py-2.5 rounded-full bg-brand-primary text-white text-xs font-bold shadow-md cursor-pointer font-montserrat-700"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-montserrat-700">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-montserrat-700">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Auto Parts Ltd."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-montserrat-700">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-montserrat-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Product Interest Select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-montserrat-700">
                      Product Requirement
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white transition-all"
                    >
                      <option value="General Inquiry">General Packaging Inquiry</option>
                      <option value="Stretch Film (Machine & Manual)">Stretch Film (Machine & Manual)</option>
                      <option value="PET Strap & Seals">PET Strap & Seals</option>
                      <option value="PP Strap & Seals">PP Strap & Seals</option>
                      <option value="Cord Strap & Buckles">Cord Strap & Buckles</option>
                      <option value="VCI Roll & Cover">VCI Roll & Cover</option>
                      <option value="Bubble Roll & Pouches">Bubble Roll & Pouches</option>
                      <option value="BOPP Tapes">BOPP Tapes</option>
                      <option value="Carton Boxes with Partition">Carton Boxes with Partition</option>
                      <option value="Container Desiccant">Container Desiccant</option>
                      <option value="Dunnage Air Bags">Dunnage Air Bags</option>
                      <option value="Angle Boards & Edge Protectors">Angle Boards & Edge Protectors</option>
                      <option value="Jumbo Boxes with Pallets">Jumbo Boxes with Pallets</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-montserrat-700">
                      Message & Specifications *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify estimated monthly quantity, dimensions, micron thickness, or delivery location..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-smooth w-full py-4 rounded-2xl bg-brand-primary text-white text-base font-bold shadow-xl shadow-brand-primary/30 hover:bg-brand-primaryHover flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer font-montserrat-700"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Your contact information is kept strictly confidential according to SMR privacy standards.
                  </p>
                </form>
              )}

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
