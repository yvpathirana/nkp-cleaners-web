import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  LayersIcon,
  GemIcon,
  AlertCircleIcon
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { routeSeoData } from '../seo/seoConfig';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';

interface FloorServiceProps {
  icon: React.ElementType;
  title: string;
  description: string;
  price: string;
  steps: string[];
}

function FloorService({ icon: Icon, title, description, price, steps }: FloorServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 h-full"
    >
      <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-brand-primary" />
      </div>
      <h3 className="font-heading font-bold text-gray-900 text-xl mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
      <p className="text-gray-900 font-bold text-2xl mb-5">{price}</p>
      <ul className="space-y-2">
        {steps.map((step) => (
          <li key={step} className="flex items-start gap-2 text-gray-600 text-sm">
            <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            {step}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function FloorRestorationPage() {
  return (
    <>
      <SEOHead data={routeSeoData['/floor-restoration']} />

      <HeroSection
        title="Floor Restoration & Polishing"
        subtitle="Bring tired, dull, or stained floors back to life. We deep clean, polish, and restore red cement and titanium flooring for a lasting shine."
        showBookingButtons
        backgroundVariant="gradient"
      />

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
              Floor Care That Restores &amp; Protects
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From basic floor washing to machine polishing, we help your floors look their best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <FloorService
              icon={LayersIcon}
              title="Red Cement Floor Restoration &amp; Polishing"
              description="Ideal for traditional red cement floors that have lost their color, smoothness, or shine over time."
              price="Rs. 35 per sq.ft."
              steps={[
                'Deep cleaning of red cement flooring',
                'Removal of surface dirt and grime',
                'Application of customer-supplied wax/polish',
                'Machine polishing for enhanced shine and appearance'
              ]}
            />
            <FloorService
              icon={GemIcon}
              title="Titanium Floor Restoration &amp; Polishing"
              description="Restore the reflective finish of titanium flooring with thorough cleaning and professional buffing."
              price="Rs. 35 per sq.ft."
              steps={[
                'Deep cleaning of titanium flooring',
                'Removal of surface dirt and dullness',
                'Application of customer-supplied wax/polish',
                'Machine polishing for improved shine and finish'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-amber-50 border border-amber-100 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                <AlertCircleIcon className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">
                  Important Notes
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    Wax/polish must be provided by the customer.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    Paint marks, adhesive residue, cement stains, rust stains, and other heavy stain removal may be charged separately if required.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    A site inspection may be required for heavily damaged or heavily stained floors.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
