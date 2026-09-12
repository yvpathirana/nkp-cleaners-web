import { motion } from 'framer-motion';
import {
  BuildingIcon,
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersIcon,
  AwardIcon,
  WashingMachineIcon,
  PackageIcon,
  GemIcon,
  HardHatIcon
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { routeSeoData } from '../seo/seoConfig';
import { HeroSection } from '../components/HeroSection';
import { ServiceCard } from '../components/ServiceCard';
import { ColorCodingSystem } from '../components/ColorCodingSystem';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { AreasWeServe } from '../components/AreasWeServe';
import { BookingCTA } from '../components/BookingCTA';
export function HomePage() {
  return (
    <>
      <SEOHead data={routeSeoData['/']} />


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
              title="Deep Cleaning Packages"
              description="Three tailored tiers — Essential, Premium, and Medical Grade Sanitization — for complete home hygiene."
              icon={PackageIcon}
              link="/deep-cleaning-packages" />

            <ServiceCard
              title="House & Apartment Cleaning"
              description="General, deep, kitchen, washroom, glass, floor, and sanitization cleaning for homes and apartments."
              icon={HomeIcon}
              link="/home-cleaning" />

            <ServiceCard
              title="Office & Commercial Cleaning"
              description="Regular and deep cleaning for offices, common areas, staircases, lifts, glass partitions, and exterior perimeters."
              icon={BuildingIcon}
              link="/office-cleaning" />

            <ServiceCard
              title="Floor Restoration & Polishing"
              description="Red cement and titanium floor deep cleaning, wax/polish application, and machine polishing."
              icon={GemIcon}
              link="/floor-restoration" />

            <ServiceCard
              title="Post-Construction Cleaning"
              description="Construction dust removal, debris clearing, paint and adhesive removal, and handover-ready finishing."
              icon={HardHatIcon}
              link="/post-construction-cleaning" />

            <ServiceCard
              title="Sofa, Mattress & Carpet Cleaning"
              description="Dry vacuuming, chemical treatment, wet extraction, steam sanitization, and deep stain removal."
              icon={WashingMachineIcon}
              link="/sofa-mattress-cleaning" />

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
              <p className="font-heading text-3xl font-bold text-white">2+</p>
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

      {/* Areas We Serve */}
      <AreasWeServe />

      {/* Booking CTA */}
      <BookingCTA />
    </>);

}