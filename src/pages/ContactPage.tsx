import { motion } from 'framer-motion';
import {
  PhoneIcon,
  MessageCircleIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { routeSeoData, FACEBOOK_URL, GOOGLE_URL } from '../seo/seoConfig';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';
import { trackCallClick, trackWhatsAppClick } from '../utils/analytics';

export function ContactPage() {
  return (
    <>
      <SEOHead data={routeSeoData['/contact']} />

      <HeroSection
        title="Get In Touch"
        subtitle="Ready for a spotless space? Reach us by phone, WhatsApp, or email for a free quote. We respond within 24 hours."
        backgroundVariant="minimal"
      />

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <a
                href="tel:+94707699620"
                onClick={() => trackCallClick('contact_card')}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-blue-50 transition-colors group"
              >
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
                onClick={() => trackWhatsAppClick('contact_card')}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-green-50 transition-colors group"
              >
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
                    href="https://maps.app.goo.gl/Xeh1L7BaVbYuPKj28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:underline"
                  >
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

              {/* Reviews */}
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900 text-sm">
                    Google Reviews
                  </p>
                  <p className="text-gray-600 text-sm">Read & leave reviews</p>
                </div>
              </a>

              <a
                href={`${FACEBOOK_URL}reviews`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-[#1877F2]/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#1877F2]/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900 text-sm">
                    Facebook Reviews
                  </p>
                  <p className="text-gray-600 text-sm">Read & leave reviews</p>
                </div>
              </a>

              {/* Map */}
              <a
                href="https://maps.app.goo.gl/Xeh1L7BaVbYuPKj28"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-100 rounded-2xl h-48 flex items-center justify-center border border-gray-200 hover:border-brand-primary/30 transition-colors group"
              >
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
            </div>
          </motion.div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
