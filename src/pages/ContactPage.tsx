import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  MessageCircleIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  SendIcon } from
'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';
import {
  trackFormSubmit,
  trackCallClick,
  trackWhatsAppClick } from
'../utils/analytics';
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackFormSubmit('contact_form');
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with NKP Cleaners for a free cleaning quote. Call, WhatsApp, or fill out our contact form. Professional cleaning services in Sri Lanka."
        keywords="contact NKP Cleaners, cleaning quote, cleaning service inquiry, Sri Lanka" />


      <HeroSection
        title="Get In Touch"
        subtitle="Ready for a spotless space? Contact us for a free quote. We respond within 24 hours."
        backgroundVariant="minimal" />


      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5
              }}
              className="lg:col-span-3">

              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ?
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">

                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SendIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-green-800 text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700 text-sm">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-primary text-sm font-medium hover:underline">

                    Send another message
                  </button>
                </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5">

                        Full Name *
                      </label>
                      <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm"
                      placeholder="Your name" />

                    </div>
                    <div>
                      <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5">

                        Email Address *
                      </label>
                      <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm"
                      placeholder="your@email.com" />

                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5">

                        Phone Number
                      </label>
                      <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm"
                      placeholder="+94 XX XXX XXXX" />

                    </div>
                    <div>
                      <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1.5">

                        Service Type
                      </label>
                      <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                      handleChange('service', e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm bg-white">

                        <option value="">Select a service</option>
                        <option value="residential-general">
                          Residential - General Cleaning
                        </option>
                        <option value="residential-deep">
                          Residential - Deep Cleaning
                        </option>
                        <option value="residential-movein">
                          Residential - Move-In/Out
                        </option>
                        <option value="commercial-office">
                          Commercial - Office Cleaning
                        </option>
                        <option value="commercial-restaurant">
                          Commercial - Restaurant
                        </option>
                        <option value="industrial">Industrial Cleaning</option>
                        <option value="pressure-washing">
                          Pressure Washing
                        </option>
                        <option value="carpet-sofa">
                          Carpet & Sofa Cleaning
                        </option>
                        <option value="window">Window Cleaning</option>
                        <option value="vehicle">
                          Vehicle Interior Cleaning
                        </option>
                        <option value="post-construction">
                          Post-Construction Cleaning
                        </option>
                        <option value="green">Green Cleaning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5">

                      Message *
                    </label>
                    <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tell us about your cleaning needs..." />

                  </div>

                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-blue-600 disabled:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">

                    {isSubmitting ?
                  <>
                        <svg
                      className="animate-spin w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none">

                          <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4" />

                          <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />

                        </svg>
                        Sending...
                      </> :

                  <>
                        <SendIcon className="w-5 h-5" />
                        Send Message
                      </>
                  }
                  </button>
                </form>
              }
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: 0.1
              }}
              className="lg:col-span-2 space-y-6">

              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <a
                href="tel:+94707699620"
                onClick={() => trackCallClick()}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-blue-50 transition-colors group">

                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900 text-sm">
                    Call Us
                  </p>
                  <p className="text-brand-primary font-medium">
                    +94 70 769 9620
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/94707699620?text=Hello%20NKP%20Cleaners%2C%20I%20would%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick()}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-green-50 transition-colors group">

                <div className="w-12 h-12 bg-brand-whatsapp/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-whatsapp/20 transition-colors">
                  <MessageCircleIcon className="w-5 h-5 text-brand-whatsapp" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900 text-sm">
                    WhatsApp
                  </p>
                  <p className="text-brand-whatsapp font-medium">
                    Chat with us
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MailIcon className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900 text-sm">
                    Email
                  </p>
                  <p className="text-gray-600">nkpcleaners@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900 text-sm">
                    Location
                  </p>
                  <a
                    href="https://share.google/pkLAtrSxyMF2Re6oT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:underline">

                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <ClockIcon className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900 text-sm">
                    Working Hours
                  </p>
                  <p className="text-gray-600">Mon – Sat: 9:00 AM – 5:00 PM</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Sunday: By appointment
                  </p>
                </div>
              </div>

              {/* Map */}
              <a
                href="https://share.google/pkLAtrSxyMF2Re6oT"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-100 rounded-2xl h-48 flex items-center justify-center border border-gray-200 hover:border-brand-primary/30 transition-colors group">

                <div className="text-center">
                  <MapPinIcon className="w-8 h-8 text-gray-400 group-hover:text-brand-primary mx-auto mb-2 transition-colors" />
                  <p className="text-gray-500 text-sm group-hover:text-brand-primary transition-colors">
                    View our location
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Open in Google Maps
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>);

}