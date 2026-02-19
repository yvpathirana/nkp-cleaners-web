import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MessageCircleIcon } from 'lucide-react';
import { trackCallClick, trackWhatsAppClick } from '../utils/analytics';
export function FloatingButtons() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      aria-label="Quick contact buttons">

      {/* WhatsApp Button */}
      <motion.a
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 0.4,
          delay: 0.8,
          ease: 'easeOut'
        }}
        href="https://wa.me/94707699620?text=Hello%20NKP%20Cleaners%2C%20I%20would%20like%20to%20get%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick()}
        className="group flex items-center gap-3 bg-brand-whatsapp hover:bg-green-600 text-white rounded-full shadow-lg shadow-brand-whatsapp/30 hover:shadow-xl hover:shadow-brand-whatsapp/40 transition-all duration-300"
        aria-label="Chat on WhatsApp">

        <span className="hidden group-hover:inline-block text-sm font-semibold pl-5 whitespace-nowrap">
          Chat on WhatsApp
        </span>
        <span className="w-14 h-14 flex items-center justify-center">
          <MessageCircleIcon className="w-6 h-6" />
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 0.4,
          delay: 1,
          ease: 'easeOut'
        }}
        href="tel:+94707699620"
        onClick={() => trackCallClick()}
        className="group flex items-center gap-3 bg-brand-primary hover:bg-blue-600 text-white rounded-full shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/40 transition-all duration-300"
        aria-label="Call Now">

        <span className="hidden group-hover:inline-block text-sm font-semibold pl-5 whitespace-nowrap">
          Call Now
        </span>
        <span className="w-14 h-14 flex items-center justify-center">
          <PhoneIcon className="w-6 h-6" />
        </span>
      </motion.a>
    </div>);

}