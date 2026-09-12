import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  CheckCircleIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HomeIcon,
  DropletIcon,
  SprayCanIcon,
  ThermometerIcon,
  BedDoubleIcon
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { routeSeoData } from '../seo/seoConfig';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';

interface CleaningPackageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}

function CleaningPackage({
  icon: Icon,
  title,
  subtitle,
  price,
  features,
  highlight,
  badge
}: CleaningPackageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-2xl p-6 md:p-8 border relative h-full ${
        highlight ? 'border-2 border-brand-primary shadow-xl shadow-brand-primary/10' : 'border-gray-100'
      }`}
    >
      {(badge || highlight) && (
        <span className="absolute -top-3 left-6 bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {badge || 'Popular Choice'}
        </span>
      )}
      <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-brand-primary" />
      </div>
      <h3 className="font-heading font-bold text-gray-900 text-xl mb-2">
        {title}
      </h3>
      <p className="text-brand-primary font-medium text-sm mb-4">{subtitle}</p>
      <p className="text-gray-900 font-bold text-2xl mb-5">{price}</p>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-gray-600 text-sm">
            <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function DeepCleaningPackagesPage() {
  return (
    <>
      <SEOHead data={routeSeoData['/deep-cleaning-packages']} />

      <HeroSection
        title="Deep Cleaning Packages"
        subtitle="Choose the level of care your space needs. Our deep cleaning packages are designed for complete hygiene, enhanced floor care, and medical-grade sanitization."
        showBookingButtons
        backgroundVariant="gradient"
      />

      {/* Packages */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Deep Cleaning Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every package builds on the previous one, so you get more coverage,
              deeper cleaning, and higher hygiene standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <CleaningPackage
              icon={HomeIcon}
              title="Package 1"
              subtitle="Essential Home Deep Clean"
              price="Rs. 22 per sq.ft."
              features={[
                'Cobweb removal',
                'Washroom cleaning',
                'Dusting of all exterior surfaces',
                'Ceiling lights exterior cleaning',
                'Fan exterior cleaning',
                'Bed & sofa vacuuming',
                'Kitchen external surface cleaning',
                'Glass & window cleaning',
                'Floor mopping',
                'Minimum 1,000 sq.ft.'
              ]}
            />
            <CleaningPackage
              icon={DropletIcon}
              title="Package 2"
              subtitle="Premium Deep Clean + Floor Wash"
              price="Rs. 35 per sq.ft."
              highlight
              badge="Most Popular"
              features={[
                'Everything in Package 1',
                'Full floor washing',
                'Enhanced floor care',
                'Deeper surface treatment',
                'Minimum 1,000 sq.ft.'
              ]}
            />
            <CleaningPackage
              icon={ShieldCheckIcon}
              title="Package 3"
              subtitle="Medical Grade Sanitization Deep Clean"
              price="Rs. 55 per sq.ft."
              features={[
                'Everything in Package 2',
                'Steam sanitization of mattresses, sofas & upholstery',
                'Antiseptic wipe-down of high-touch areas',
                'High-temperature floor sterilization',
                '99.9% bacteria reduction',
                'Minimum 1,000 sq.ft.'
              ]}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-heading font-semibold text-gray-900 text-center mb-4">
              General Notes
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                Minimum order requirement is 1,000 sq.ft. per project.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                Heavy stains or specialized cleaning requirements may require a site inspection before confirmation.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                Final pricing may vary based on the condition of the property.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                Please share total floor area (sq.ft.) for an accurate quotation.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Add-ons / Related Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Paired With Deep Cleaning
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Combine your deep clean with these services for a completely refreshed space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: SprayCanIcon,
                title: 'Sofa Cleaning',
                text: 'Deep shampooing and stain removal for fabric upholstery.'
              },
              {
                icon: BedDoubleIcon,
                title: 'Mattress Cleaning',
                text: 'Vacuuming, shampooing, and steam sanitization for better sleep.'
              },
              {
                icon: SparklesIcon,
                title: 'Floor Restoration',
                text: 'Red cement and titanium floor polishing for a renewed shine.'
              },
              {
                icon: ThermometerIcon,
                title: 'High-Touch Sanitization',
                text: 'Antiseptic wipe-down of switches, handles, rails, and furniture.'
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
