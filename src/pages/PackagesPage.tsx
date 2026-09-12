import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  CheckCircleIcon,
  HomeIcon,
  GemIcon,
  HardHatIcon,
  SofaIcon,
  ArrowRightIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { routeSeoData } from '../seo/seoConfig';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';

interface PackageGroupProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tiers: { name: string; subtitle: string; features: string[] }[];
  link: string;
  linkLabel: string;
}

function PackageGroup({
  icon: Icon,
  title,
  description,
  tiers,
  link,
  linkLabel
}: PackageGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
          <Icon className="w-7 h-7 text-brand-primary" />
        </div>
        <div>
          <h2 className="font-heading font-bold text-gray-900 text-2xl mb-1">{title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="bg-gray-50 rounded-xl p-5 border border-gray-100"
          >
            <h3 className="font-heading font-semibold text-gray-900 mb-1">{tier.name}</h3>
            <p className="text-brand-primary text-sm font-medium mb-3">{tier.subtitle}</p>
            <ul className="space-y-2">
              {tier.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-gray-600 text-sm"
                >
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        to={link}
        className="inline-flex items-center gap-2 text-brand-primary font-medium text-sm hover:gap-3 transition-all"
      >
        {linkLabel}
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export function PackagesPage() {
  return (
    <>
      <SEOHead data={routeSeoData['/packages']} />

      <HeroSection
        title="Cleaning Packages"
        subtitle="Ready-made service packages for homes, floors, and post-construction sites. Each package is built to match a different level of cleaning need."
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
              All Our Cleaning Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our structured packages and choose the one that fits your space.
              Every package can be customized after a quick site assessment.
            </p>
          </motion.div>

          <div className="space-y-8">
            <PackageGroup
              icon={HomeIcon}
              title="Deep Cleaning Packages"
              description="Complete home hygiene packages that scale from essential surface cleaning to medical-grade sanitization."
              tiers={[
                {
                  name: 'Package 1',
                  subtitle: 'Essential Home Deep Clean',
                  features: [
                    'Cobweb removal',
                    'Washroom cleaning',
                    'Dusting of exterior surfaces',
                    'Ceiling light & fan exterior cleaning',
                    'Bed & sofa vacuuming',
                    'Kitchen, glass & window cleaning',
                    'Floor mopping'
                  ]
                },
                {
                  name: 'Package 2',
                  subtitle: 'Premium Deep Clean + Floor Wash',
                  features: [
                    'Everything in Package 1',
                    'Full floor washing',
                    'Enhanced floor care'
                  ]
                },
                {
                  name: 'Package 3',
                  subtitle: 'Medical Grade Sanitization',
                  features: [
                    'Everything in Package 2',
                    'Steam sanitization of mattresses & sofas',
                    'Antiseptic wipe-down of high-touch areas',
                    'High-temperature floor sterilization'
                  ]
                }
              ]}
              link="/deep-cleaning-packages"
              linkLabel="View deep cleaning packages"
            />

            <PackageGroup
              icon={GemIcon}
              title="Floor Restoration & Polishing"
              description="Restore the shine and finish of red cement and titanium floors with professional cleaning, waxing, and machine polishing."
              tiers={[
                {
                  name: 'Red Cement Floors',
                  subtitle: 'Restoration & Polishing',
                  features: [
                    'Deep cleaning of red cement flooring',
                    'Removal of dirt and grime',
                    'Customer-supplied wax/polish application',
                    'Machine polishing for enhanced shine'
                  ]
                },
                {
                  name: 'Titanium Floors',
                  subtitle: 'Restoration & Polishing',
                  features: [
                    'Deep cleaning of titanium flooring',
                    'Removal of surface dirt and dullness',
                    'Customer-supplied wax/polish application',
                    'Machine polishing for improved finish'
                  ]
                },
                {
                  name: 'Note',
                  subtitle: 'Heavily stained floors',
                  features: [
                    'Heavy stains may require site inspection',
                    'Paint, adhesive, rust, or cement stains charged separately if needed',
                    'Wax/polish must be supplied by customer'
                  ]
                }
              ]}
              link="/floor-restoration"
              linkLabel="View floor restoration details"
            />

            <PackageGroup
              icon={HardHatIcon}
              title="Post-Construction Cleaning Packages"
              description="Move into a clean, dust-free property after construction or renovation with our tiered cleanup packages."
              tiers={[
                {
                  name: 'Package A',
                  subtitle: 'Surface Recovery & Floor Detailing',
                  features: [
                    'Full floor vacuuming & debris clearing',
                    'Thorough floor washing & scrubbing',
                    'Paint mark & tape residue removal'
                  ]
                },
                {
                  name: 'Package B',
                  subtitle: 'Dust & Finish Clean',
                  features: [
                    'Construction dust removal',
                    'Wall, skirting & door frame dusting',
                    'Glass, window & kitchen cleaning',
                    'Washroom, balcony & entrance cleaning'
                  ]
                },
                {
                  name: 'Package C',
                  subtitle: 'Premium Deep Clean & Restoration',
                  features: [
                    'Everything in Package A',
                    'Everything in Package B',
                    'Handover-ready, spotless finish'
                  ]
                }
              ]}
              link="/post-construction-cleaning"
              linkLabel="View post-construction packages"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-gray-100"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <SofaIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-2">
                  Sofa & Mattress Cleaning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Custom-quoted based on size, material, and stain level. We provide deep stain and odor removal, safe shampooing for fabric and upholstery, and a hygienic, sanitized finish.
                </p>
                <Link
                  to="/sofa-mattress-cleaning"
                  className="inline-flex items-center gap-2 text-brand-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn more about upholstery cleaning
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
