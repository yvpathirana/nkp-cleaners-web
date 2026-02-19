import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  HomeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  ArrowRightLeftIcon,
  SearchIcon,
  BrushIcon } from
'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';
export function HomeCleaningPage() {
  return (
    <>
      <SEOHead
        title="Home & Apartment Cleaning Services"
        description="Professional home and apartment cleaning by NKP Cleaners. General cleaning, deep cleaning, and move-in/move-out services in Sri Lanka."
        keywords="home cleaning, apartment cleaning, deep cleaning, move-in cleaning, residential cleaning, Sri Lanka" />


      <HeroSection
        title="Home & Apartment Cleaning"
        subtitle="Your home deserves the best care. From regular upkeep to deep cleaning, we make your living space spotless and comfortable."
        showBookingButtons
        backgroundVariant="gradient" />


      {/* Service Types */}
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
              Choose Your Cleaning Type
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer tailored cleaning packages to match your specific needs
              and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* General Cleaning */}
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
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100">

              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                <BrushIcon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                General Cleaning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Regular maintenance cleaning to keep your home fresh, tidy, and
                welcoming every day.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Dusting & wiping surfaces
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Floor sweeping & mopping
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Bathroom cleaning
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Kitchen tidying
                </li>
              </ul>
            </motion.div>

            {/* Deep Cleaning */}
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
              className="bg-gray-50 rounded-2xl p-6 border-2 border-brand-primary relative">

              <span className="absolute -top-3 left-6 bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                <SearchIcon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                Deep Cleaning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Intensive cleaning that reaches every corner, removing built-up
                grime, stains, and allergens.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Everything in General +
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Behind furniture & appliances
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Grout & tile scrubbing
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Window tracks & sills
                </li>
              </ul>
            </motion.div>

            {/* Move-In/Out */}
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
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100">

              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                <ArrowRightLeftIcon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                Move-In / Move-Out
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Complete cleaning for when you're transitioning between homes —
                leave or arrive to a spotless space.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Full property deep clean
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Cabinet & closet interiors
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Appliance cleaning
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Sanitization throughout
                </li>
              </ul>
            </motion.div>

            {/* Apartment Deep Cleaning */}
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
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100">

              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                <HomeIcon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                Apartment Deep Clean
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Specialized deep cleaning tailored for apartments and
                condominiums of all sizes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Compact space expertise
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Balcony & patio cleaning
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  AC vent dusting
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  Full sanitization
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Families Trust NKP Cleaners
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
              className="text-center">

              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Family Safe Products
              </h3>
              <p className="text-gray-600 text-sm">
                We use cleaning products that are safe for children, pets, and
                the environment.
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

              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Trusted & Vetted Staff
              </h3>
              <p className="text-gray-600 text-sm">
                All our cleaning professionals are background-checked and
                professionally trained.
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

              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600 text-sm">
                Not happy? We'll re-clean at no extra cost. Your satisfaction is
                our priority.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>);

}