import React from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  MessageCircleIcon,
  CalendarIcon,
  SparklesIcon } from
'lucide-react';
import {
  trackCallClick,
  trackWhatsAppClick,
  trackBookNowClick } from
'../utils/analytics';
interface HeroSectionProps {
  title: string;
  subtitle: string;
  showBookingButtons?: boolean;
  backgroundVariant?: 'default' | 'gradient' | 'minimal';
}
export function HeroSection({
  title,
  subtitle,
  showBookingButtons = false,
  backgroundVariant = 'default'
}: HeroSectionProps) {
  const bgClasses = {
    default: 'bg-brand-dark',
    gradient:
    'bg-gradient-to-br from-brand-dark via-brand-dark to-brand-primary/20',
    minimal: 'bg-brand-dark/95'
  };
  return (
    <section
      className={`relative ${bgClasses[backgroundVariant]} overflow-hidden`}>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut'
            }}
            className="flex items-center gap-2 mb-6">

            <SparklesIcon className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary-light text-sm font-medium tracking-wide uppercase">
              Professional Cleaning Services
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: 'easeOut'
            }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">

            {title}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">

            {subtitle}
          </motion.p>

          {showBookingButtons &&
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: 'easeOut'
            }}
            className="flex flex-wrap gap-4">

              <a
              href="/contact"
              onClick={() => trackBookNowClick('hero')}
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-brand-primary/25">

                <CalendarIcon className="w-5 h-5" />
                Book Now
              </a>
              <a
              href="tel:+94707699620"
              onClick={() => trackCallClick()}
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors backdrop-blur-sm">

                <PhoneIcon className="w-5 h-5" />
                Call Now
              </a>
              <a
              href="https://wa.me/94707699620?text=Hello%20NKP%20Cleaners%2C%20I%20would%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick()}
              className="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-brand-whatsapp/25">

                <MessageCircleIcon className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>
          }
        </div>
      </div>
    </section>);

}