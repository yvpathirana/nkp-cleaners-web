import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, PhoneIcon, MessageCircleIcon } from 'lucide-react';
import {
  trackCallClick,
  trackWhatsAppClick,
  trackBookNowClick } from
'../utils/analytics';
import { Link } from 'react-router-dom';
export function BookingCTA() {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary to-blue-700 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.5
          }}>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Cleaning Service Today
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Get a spotless space with our professional cleaning team. Fast,
            reliable, and affordable.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => trackBookNowClick('cta_section')}
              className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg">

              <CalendarIcon className="w-5 h-5" />
              Book Now
            </Link>

            <a
              href="tel:+94707699620"
              onClick={() => trackCallClick()}
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-colors backdrop-blur-sm">

              <PhoneIcon className="w-5 h-5" />
              Call Now
            </a>

            <a
              href="https://wa.me/94707699620?text=Hello%20NKP%20Cleaners%2C%20I%20would%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick()}
              className="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-brand-whatsapp/25">

              <MessageCircleIcon className="w-5 h-5" />
              WhatsApp Chat
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}