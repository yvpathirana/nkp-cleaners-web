import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  WindIcon,
  HomeIcon,
  BuildingIcon,
  CarIcon,
  FactoryIcon,
  ZapIcon,
  DropletIcon,
  ShieldCheckIcon } from
'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';
export function PressureWashingPage() {
  return (
    <>
      <SEOHead
        title="Pressure Washing Services"
        description="Professional pressure washing services by NKP Cleaners. Restore driveways, walls, roofs, and outdoor surfaces in Sri Lanka."
        keywords="pressure washing, power washing, driveway cleaning, exterior cleaning, Sri Lanka, NKP Cleaners" />


      <HeroSection
        title="Pressure Washing Services"
        subtitle="Blast away years of dirt, grime, mold, and stains. Our high-pressure cleaning restores surfaces to their original condition."
        showBookingButtons
        backgroundVariant="gradient" />


      {/* Applications */}
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
              What We Can Pressure Wash
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our industrial-grade pressure washing equipment handles any
              surface, any scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="bg-gray-50 rounded-2xl p-6">

              <HomeIcon className="w-8 h-8 text-brand-primary mb-3" />
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Driveways & Pathways
              </h3>
              <p className="text-gray-600 text-sm">
                Remove oil stains, moss, and years of built-up grime from
                concrete and paving.
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
                delay: 0.05
              }}
              className="bg-gray-50 rounded-2xl p-6">

              <BuildingIcon className="w-8 h-8 text-brand-primary mb-3" />
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Walls & Facades
              </h3>
              <p className="text-gray-600 text-sm">
                Restore building exteriors, removing dirt, algae, and weather
                staining.
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
              className="bg-gray-50 rounded-2xl p-6">

              <WindIcon className="w-8 h-8 text-brand-primary mb-3" />
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Roofs & Gutters
              </h3>
              <p className="text-gray-600 text-sm">
                Clean roof tiles and gutters to prevent water damage and improve
                appearance.
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
                delay: 0.15
              }}
              className="bg-gray-50 rounded-2xl p-6">

              <CarIcon className="w-8 h-8 text-brand-primary mb-3" />
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Parking Areas
              </h3>
              <p className="text-gray-600 text-sm">
                Clean parking lots and garages, removing oil, tire marks, and
                debris.
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
              className="bg-gray-50 rounded-2xl p-6">

              <FactoryIcon className="w-8 h-8 text-brand-primary mb-3" />
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Industrial Floors
              </h3>
              <p className="text-gray-600 text-sm">
                Heavy-duty cleaning for factory floors, loading docks, and
                warehouse surfaces.
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
                delay: 0.25
              }}
              className="bg-gray-50 rounded-2xl p-6">

              <DropletIcon className="w-8 h-8 text-brand-primary mb-3" />
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Pool Decks & Patios
              </h3>
              <p className="text-gray-600 text-sm">
                Safely clean pool surrounds and outdoor entertainment areas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Concept */}
      <section className="bg-brand-dark py-20">
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

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              The NKP Difference
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See the transformation our pressure washing delivers.
            </p>
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
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">

              <ZapIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-white text-lg mb-2">
                Industrial-Grade Equipment
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use commercial-grade pressure washers with adjustable PSI for
                safe, effective cleaning on any surface.
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
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">

              <ShieldCheckIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-white text-lg mb-2">
                Surface-Safe Techniques
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our trained operators adjust pressure and technique to protect
                delicate surfaces while delivering maximum clean.
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
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">

              <DropletIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-white text-lg mb-2">
                Eco-Friendly Solutions
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use biodegradable cleaning agents that are tough on grime but
                gentle on the environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>);

}