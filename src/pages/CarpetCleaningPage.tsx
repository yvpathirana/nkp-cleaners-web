import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  WashingMachineIcon,
  SparklesIcon,
  ShieldCheckIcon,
  DropletIcon,
  ZapIcon,
  ClockIcon,
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { routeSeoData } from "../seo/seoConfig";
import { HeroSection } from "../components/HeroSection";
import { AreasWeServe } from "../components/AreasWeServe";
import { BookingCTA } from "../components/BookingCTA";
export function CarpetCleaningPage() {
  return (
    <>
      <SEOHead data={routeSeoData["/carpet-cleaning"]} />

      <HeroSection
        title="Carpet Cleaning Services"
        subtitle="Restore your carpets to like-new condition. Our deep extraction cleaning removes embedded dirt, stains, and allergens for a fresher, healthier space."
        showBookingButtons
        backgroundVariant="gradient"
      />

      {/* What We Offer */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <span className="inline-block text-brand-primary text-sm font-medium tracking-wide uppercase mb-2">
                Comprehensive Carpet Care
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether it's a small area rug or wall-to-wall carpeting, our
                professional team uses industrial-grade equipment to deliver
                deep, thorough results.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Carpet shampooing for surface dirt and freshening
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Wet/deep extraction cleaning for embedded grime
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Targeted dirt and stain treatment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Wall-to-wall and area rug cleaning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Residential and office carpet cleaning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Allergen, dust mite, and odor reduction
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <WashingMachineIcon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <p className="font-heading font-semibold text-gray-900 text-sm">
                  Carpet Shampooing
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Surface dirt removal
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <DropletIcon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <p className="font-heading font-semibold text-gray-900 text-sm">
                  Deep Extraction
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Wet extraction cleaning
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <ShieldCheckIcon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <p className="font-heading font-semibold text-gray-900 text-sm">
                  Stain Treatment
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Dirt and spot removal
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <ClockIcon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <p className="font-heading font-semibold text-gray-900 text-sm">
                  Fast Drying
                </p>
                <p className="text-gray-500 text-xs mt-1">Minimal downtime</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <AreasWeServe serviceName="Carpet cleaning" />

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Professional Carpet Cleaning?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
              }}
              className="bg-white rounded-2xl p-8"
            >
              <SparklesIcon className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                Extends Carpet Life
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular professional cleaning removes abrasive dirt particles
                that wear down carpet fibers, extending the life of your
                investment.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.1,
              }}
              className="bg-white rounded-2xl p-8"
            >
              <ShieldCheckIcon className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                Eliminates Allergens
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Carpets trap dust, pollen, pet dander, and bacteria. Our deep
                extraction removes these allergens for cleaner indoor air.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
              className="bg-white rounded-2xl p-8"
            >
              <ZapIcon className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                Restores Appearance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bring back the original color and texture of your carpets.
                Professional cleaning removes dullness and revives the look.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
