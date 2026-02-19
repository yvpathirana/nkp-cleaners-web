import React from 'react';
import { motion } from 'framer-motion';
import {
  BuildingIcon,
  HomeIcon,
  SparklesIcon,
  FactoryIcon,
  CarIcon,
  LeafIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersIcon,
  AwardIcon,
  WashingMachineIcon,
  WindIcon } from
'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { ServiceCard } from '../components/ServiceCard';
import { ColorCodingSystem } from '../components/ColorCodingSystem';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BookingCTA } from '../components/BookingCTA';
export function HomePage() {
  return (
    <>
      <SEOHead
        title="Professional Cleaning Services in Sri Lanka"
        description="NKP Cleaners offers premium residential, commercial, industrial, and specialized cleaning services in Sri Lanka. Shine Beyond the Surface."
        keywords="cleaning services Sri Lanka, office cleaning, home cleaning, pressure washing, carpet cleaning, NKP Cleaners" />


      {/* Hero */}
      <HeroSection
        title="Shine Beyond the Surface."
        subtitle="Premium cleaning services for homes, offices, and industrial spaces. We deliver spotless results with professional-grade equipment and trained staff."
        showBookingButtons
        backgroundVariant="gradient" />


      {/* Services Overview */}
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
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5
            }}
            className="text-center mb-14">

            <span className="inline-block text-brand-primary text-sm font-medium tracking-wide uppercase mb-2">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From everyday cleaning to specialized deep-cleaning solutions, we
              have you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Office Cleaning"
              description="Keep your workspace pristine and productive with our regular and deep office cleaning services."
              icon={BuildingIcon}
              link="/office-cleaning" />

            <ServiceCard
              title="Home & Apartment Cleaning"
              description="Thorough residential cleaning including general, deep, and move-in/move-out services."
              icon={HomeIcon}
              link="/home-cleaning" />

            <ServiceCard
              title="Pressure Washing"
              description="Restore driveways, walls, roofs, and outdoor surfaces to their original condition."
              icon={WindIcon}
              link="/pressure-washing" />

            <ServiceCard
              title="Industrial Cleaning"
              description="Heavy-duty cleaning for warehouses, factories, and machinery with professional equipment."
              icon={FactoryIcon}
              link="/services" />

            <ServiceCard
              title="Carpet & Sofa Cleaning"
              description="Deep extraction cleaning that removes stains, allergens, and odors from upholstery."
              icon={WashingMachineIcon}
              link="/services" />

            <ServiceCard
              title="Green Cleaning"
              description="Eco-friendly cleaning solutions that are safe for your family, pets, and the environment."
              icon={LeafIcon}
              link="/services" />

          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ClockIcon className="w-6 h-6 text-brand-primary" />
              </div>
              <p className="font-heading text-3xl font-bold text-white">5+</p>
              <p className="text-gray-400 text-sm mt-1">Years Experience</p>
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

              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UsersIcon className="w-6 h-6 text-brand-primary" />
              </div>
              <p className="font-heading text-3xl font-bold text-white">500+</p>
              <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
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

              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <AwardIcon className="w-6 h-6 text-brand-primary" />
              </div>
              <p className="font-heading text-3xl font-bold text-white">
                1,200+
              </p>
              <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
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

              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ShieldCheckIcon className="w-6 h-6 text-brand-primary" />
              </div>
              <p className="font-heading text-3xl font-bold text-white">100%</p>
              <p className="text-gray-400 text-sm mt-1">Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Coding System */}
      <ColorCodingSystem />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Booking CTA */}
      <BookingCTA />
    </>);

}