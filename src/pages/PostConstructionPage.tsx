import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  LayersIcon,
  HomeIcon,
  CrownIcon,
  AlertCircleIcon
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { routeSeoData } from '../seo/seoConfig';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';

interface PackageProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}

function PostConstructionPackage({
  icon: Icon,
  title,
  subtitle,
  description,
  price,
  features,
  highlight,
  badge
}: PackageProps) {
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
          {badge || 'Most Comprehensive'}
        </span>
      )}
      <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-brand-primary" />
      </div>
      <h3 className="font-heading font-bold text-gray-900 text-xl mb-1">{title}</h3>
      <p className="text-brand-primary font-medium text-sm mb-2">{subtitle}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-2">{description}</p>
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

export function PostConstructionPage() {
  return (
    <>
      <SEOHead data={routeSeoData['/post-construction-cleaning']} />

      <HeroSection
        title="Post-Construction Cleaning"
        subtitle="Move into a spotless, dust-free space. We handle construction residue, dust, paint marks, and debris so your property is ready to use."
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
              Our Post-Construction Cleaning Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the level of cleanup your site needs — from floor recovery to a full handover-ready finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <PostConstructionPackage
              icon={LayersIcon}
              title="Package A"
              subtitle="Surface Recovery &amp; Floor Detailing"
              description="Focused entirely on restoring and detailing post-construction flooring."
              price="Rs. 25 per sq.ft."
              features={[
                'Full floor vacuuming & debris clearing',
                'Thorough floor washing & scrubbing',
                'Targeted removal of paint marks, splatters, and light tape residue',
                'Minimum 1,000 sq.ft.'
              ]}
            />
            <PostConstructionPackage
              icon={HomeIcon}
              title="Package B"
              subtitle="Post-Construction Dust &amp; Finish Clean"
              description="Perfect for general dust removal and full interior cleaning after construction."
              price="Rs. 28 per sq.ft."
              features={[
                'Removal of construction dust from all accessible surfaces',
                'Dusting of walls, skirting, doors & door frames',
                'Glass and window cleaning',
                'Kitchen area cleaning (countertops, cabinets & exterior)',
                'Washroom deep cleaning (tiles, toilets, sinks & fittings)',
                'Balcony and entrance area cleaning',
                'Vacuuming, sweeping & standard floor mopping',
                'Minimum 1,000 sq.ft.'
              ]}
            />
            <PostConstructionPackage
              icon={CrownIcon}
              title="Package C"
              subtitle="Premium Construction Deep Clean &amp; Restoration Finish"
              description="Our most comprehensive package for an absolute spotless, handover-ready finish."
              price="Rs. 40 per sq.ft."
              highlight
              badge="Best Value"
              features={[
                'Everything in Package A',
                'Everything in Package B',
                'Complete construction residue cleanup',
                'Handover-ready, move-in quality finish',
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
                Heavy construction debris or extremely severe paint/cement contamination may require a site inspection before final confirmation.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                Final pricing may vary depending on the level of work required.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                Please share total floor area (sq.ft.) so we can provide an accurate quotation.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

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
                  Site Inspection Recommended
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Severe overspray, adhesive residue, cement stains, or leftover debris may need a
                  site visit so we can confirm the right approach and any specialized chemicals required.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
