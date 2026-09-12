import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  SofaIcon,
  BedDoubleIcon,
  BugIcon,
  DropletIcon,
  HeartIcon } from
'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { routeSeoData } from '../seo/seoConfig';
import { HeroSection } from '../components/HeroSection';
import { AreasWeServe } from '../components/AreasWeServe';
import { BookingCTA } from '../components/BookingCTA';
export function SofaMattressCleaningPage() {
  return (
    <>
      <SEOHead data={routeSeoData['/sofa-mattress-cleaning']} />


      <HeroSection
        title="Sofa & Mattress Cleaning"
        subtitle="Breathe new life into your furniture and bedding. Our deep cleaning removes stains, odors, dust mites, and allergens for a healthier home."
        showBookingButtons
        backgroundVariant="gradient" />


      {/* Services */}
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
              What We Clean
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From living room sofas to bedroom mattresses, we handle all fabric
              and upholstery surfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sofa Cleaning */}
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
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100">

              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <SofaIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-xl mb-3">
                Sofa & Upholstery Cleaning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Professional deep cleaning for all types of sofas, armchairs,
                recliners, and upholstered furniture. We restore freshness and
                remove embedded dirt.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Dry vacuuming to remove surface dust and debris
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Chemical application/treatment for stains and oils
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Wet extraction with multiple rinse cycles until water is clean
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Steam sanitization for fabric, leather, and synthetics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Sofas, armchairs, recliners, dining chairs, and office chairs
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Mattress Cleaning */}
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
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100">

              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <BedDoubleIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-xl mb-3">
                Mattress Cleaning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Deep sanitization for mattresses of all sizes. We eliminate dust
                mites, bacteria, and allergens for a healthier sleep
                environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Thorough vacuuming of mattress surface and sides
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Shampoo/deep cleaning for stain and sweat removal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Steam sanitization to kill dust mites and bacteria
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    All sizes: single, double, queen, and king
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    Allergen and odor reduction for healthier sleep
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <AreasWeServe serviceName="Sofa and mattress cleaning" />

      {/* Why Clean */}
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
              Why Professional Cleaning Matters
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your sofa and mattress collect more dirt, allergens, and bacteria
              than you think.
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

              <BugIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-white text-lg mb-2">
                Dust Mite Removal
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mattresses can harbor millions of dust mites. Our deep cleaning
                eliminates them, reducing allergy triggers and improving air
                quality.
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

              <DropletIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-white text-lg mb-2">
                Stain Elimination
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Food spills, sweat, pet stains — our professional extraction
                process removes even the toughest embedded stains from fabric.
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

              <HeartIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-white text-lg mb-2">
                Healthier Living
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Clean furniture and bedding means fewer allergens, better sleep
                quality, and a healthier environment for your family.
              </p>
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
              Our Cleaning Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A thorough, multi-step process that delivers deep-clean results
              every time.
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
                Inspection
              </h3>
              <p className="text-gray-600 text-sm">
                We assess the fabric type, stains, and condition to determine
                the best cleaning approach.
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
                Pre-Treatment
              </h3>
              <p className="text-gray-600 text-sm">
                Stains and high-traffic areas are pre-treated with specialized
                cleaning solutions.
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
                Deep Extraction
              </h3>
              <p className="text-gray-600 text-sm">
                Hot water extraction or dry cleaning removes embedded dirt,
                allergens, and bacteria.
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
                Sanitize & Dry
              </h3>
              <p className="text-gray-600 text-sm">
                Anti-bacterial treatment and speed drying leaves your furniture
                fresh and ready to use.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>);

}