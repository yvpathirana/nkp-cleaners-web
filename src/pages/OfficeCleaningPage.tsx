import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  BuildingIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon } from
'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';
export function OfficeCleaningPage() {
  return (
    <>
      <SEOHead
        title="Office Cleaning Services"
        description="Professional office cleaning services by NKP Cleaners. Regular and deep cleaning for offices, co-working spaces, and corporate environments in Sri Lanka."
        keywords="office cleaning, commercial cleaning, workplace cleaning, Sri Lanka, NKP Cleaners" />


      <HeroSection
        title="Office Cleaning Services"
        subtitle="Create a clean, healthy, and productive workspace for your team. Our professional office cleaning ensures your business always makes the right impression."
        showBookingButtons
        backgroundVariant="gradient" />


      {/* What's Included */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              }}>

              <span className="inline-block text-brand-primary text-sm font-medium tracking-wide uppercase mb-2">
                Comprehensive Service
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our office cleaning service covers every aspect of your
                workspace, from reception areas to private offices, ensuring a
                spotless and hygienic environment.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Desk, table, and workstation cleaning & sanitization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Floor vacuuming, mopping, and polishing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Restroom deep cleaning and sanitization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Kitchen and break room cleaning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Window and glass surface cleaning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Trash removal and waste management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Reception and lobby area maintenance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Air freshening and odor control
                  </span>
                </li>
              </ul>
            </motion.div>

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
              className="grid grid-cols-2 gap-4">

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <BuildingIcon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <p className="font-heading font-semibold text-gray-900 text-sm">
                  All Office Sizes
                </p>
                <p className="text-gray-500 text-xs mt-1">Small to corporate</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <ClockIcon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <p className="font-heading font-semibold text-gray-900 text-sm">
                  Flexible Scheduling
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Daily, weekly, monthly
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <ShieldCheckIcon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <p className="font-heading font-semibold text-gray-900 text-sm">
                  Color Coded
                </p>
                <p className="text-gray-500 text-xs mt-1">Hygiene standards</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <UsersIcon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <p className="font-heading font-semibold text-gray-900 text-sm">
                  Trained Staff
                </p>
                <p className="text-gray-500 text-xs mt-1">Professional team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="text-center mb-14">

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple, transparent, and efficient — from first contact to
              spotless results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                once: true
              }}
              transition={{
                duration: 0.4
              }}
              className="text-center">

              <div className="w-14 h-14 bg-brand-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                1
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 text-sm">
                Reach out via phone, WhatsApp, or our contact form for a free
                consultation.
              </p>
            </motion.div>

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
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: 0.1
              }}
              className="text-center">

              <div className="w-14 h-14 bg-brand-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                2
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Site Assessment
              </h3>
              <p className="text-gray-600 text-sm">
                We visit your office to assess the space and understand your
                specific needs.
              </p>
            </motion.div>

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
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: 0.2
              }}
              className="text-center">

              <div className="w-14 h-14 bg-brand-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                3
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Custom Plan
              </h3>
              <p className="text-gray-600 text-sm">
                We create a tailored cleaning plan and transparent quote for
                your approval.
              </p>
            </motion.div>

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
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: 0.3
              }}
              className="text-center">

              <div className="w-14 h-14 bg-brand-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                4
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Spotless Results
              </h3>
              <p className="text-gray-600 text-sm">
                Our trained team delivers exceptional cleaning with quality
                checks every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="text-center mb-14">

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose NKP for Office Cleaning?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                once: true
              }}
              transition={{
                duration: 0.4
              }}
              className="bg-gray-50 rounded-2xl p-8">

              <SparklesIcon className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                Healthier Workplace
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reduce sick days and boost morale with a clean, sanitized
                workspace that promotes employee well-being.
              </p>
            </motion.div>

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
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: 0.1
              }}
              className="bg-gray-50 rounded-2xl p-8">

              <ShieldCheckIcon className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                Professional Standards
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our color-coded cleaning system follows international hygiene
                standards to prevent cross-contamination.
              </p>
            </motion.div>

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
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: 0.2
              }}
              className="bg-gray-50 rounded-2xl p-8">

              <ClockIcon className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                Minimal Disruption
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We work around your schedule — early mornings, evenings, or
                weekends — so your business runs smoothly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>);

}