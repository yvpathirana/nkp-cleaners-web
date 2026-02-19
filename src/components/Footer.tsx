import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon } from
'lucide-react';
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
              Professional cleaning services you can trust. We deliver spotless
              results for homes, offices, and industrial spaces across Sri
              Lanka.
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
                  href="https://share.google/pkLAtrSxyMF2Re6oT"
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

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} NKP Cleaners. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Professional Cleaning Services · Sri Lanka
          </p>
        </div>
      </div>
    </footer>);

}