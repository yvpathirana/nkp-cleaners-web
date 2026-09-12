
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon } from
'lucide-react';
import { FACEBOOK_URL, GOOGLE_URL } from '../seo/seoConfig';
import { trackCallClick, trackWhatsAppClick } from '../utils/analytics';
export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/nkp.jpg"
                alt="NKP Cleaners Logo"
                className="w-12 h-12 rounded-lg object-cover" />

              <div>
                <span className="text-white font-heading font-bold text-lg block">
                  NKP Cleaners
                </span>
                <span className="text-brand-primary-light text-xs tracking-wider">
                  Shine Beyond the Surface
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Professional cleaning for homes, offices, and commercial spaces
              across Piliyandala, Colombo, Panadura, Horana, and nearby areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/service-areas"
                  className="text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/office-cleaning"
                  className="text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/home-cleaning"
                  className="text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/pressure-washing"
                  className="text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link
                  to="/sofa-mattress-cleaning"
                  className="text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  Sofa & Mattress Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/carpet-cleaning"
                  className="text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  Carpet Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Residential Cleaning</li>
              <li className="text-gray-400 text-sm">Commercial Cleaning</li>
              <li className="text-gray-400 text-sm">Industrial Cleaning</li>
              <li className="text-gray-400 text-sm">Carpet & Sofa Cleaning</li>
              <li className="text-gray-400 text-sm">
                Post-Construction Cleaning
              </li>
              <li className="text-gray-400 text-sm">Green Cleaning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+94707699620"
                  onClick={() => trackCallClick('footer')}
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  <PhoneIcon className="w-4 h-4 shrink-0" />
                  +94 70 769 9620
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94707699620?text=Hello%20NKP%20Cleaners%2C%20I%20would%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer')}
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-whatsapp text-sm transition-colors">

                  <MessageCircleIcon className="w-4 h-4 shrink-0" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:nkpcleaners@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  <MailIcon className="w-4 h-4 shrink-0" />
                  nkpcleaners@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/Xeh1L7BaVbYuPKj28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-brand-primary text-sm transition-colors">

                  <MapPinIcon className="w-4 h-4 shrink-0 mt-0.5" />
                  Sri Lanka · View on Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Reviews */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                aria-label="Visit NKP Cleaners on Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                aria-label="Find NKP Cleaners on Google">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`${FACEBOOK_URL}reviews`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] text-sm transition-colors">
                Facebook Reviews
              </a>
              <span className="text-gray-600">·</span>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors">
                Google Reviews
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} NKP Cleaners. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Professional Cleaning Services · Piliyandala to Colombo and Panadura
          </p>
        </div>
      </div>
    </footer>);

}
