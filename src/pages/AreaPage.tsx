import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import {
  MapPinIcon,
  HomeIcon,
  BuildingIcon,
  WashingMachineIcon,
  WindIcon,
  SofaIcon,
  BedDoubleIcon,
  ArrowLeftIcon,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';
import { SITE_NAME } from '../seo/seoConfig';
import { getAreaBySlug } from '../seo/serviceAreas';
import { buildAreaSeo } from '../seo/areaSeo';
import { piliyandalaFaqs, piliyandalaNearbyAreas } from '../seo/localContent';

const areaServices = [
  {
    title: 'Deep Cleaning',
    description:
      'Intensive top-to-bottom cleaning for homes and apartments, removing built-up grime, allergens, and bacteria.',
    icon: HomeIcon,
    link: '/home-cleaning',
  },
  {
    title: 'Home & Apartment Cleaning',
    description:
      'Regular and scheduled cleaning to keep your living space fresh, tidy, and welcoming.',
    icon: HomeIcon,
    link: '/home-cleaning',
  },
  {
    title: 'Office Cleaning',
    description:
      'Professional workspace cleaning that creates a healthy, productive environment for your team.',
    icon: BuildingIcon,
    link: '/office-cleaning',
  },
  {
    title: 'Sofa Cleaning',
    description:
      'Deep upholstery cleaning that removes stains, odors, and allergens from sofas and armchairs.',
    icon: SofaIcon,
    link: '/sofa-mattress-cleaning',
  },
  {
    title: 'Mattress Cleaning',
    description:
      'Sanitization and dust-mite removal for healthier sleep and fresher bedding.',
    icon: BedDoubleIcon,
    link: '/sofa-mattress-cleaning',
  },
  {
    title: 'Carpet Cleaning',
    description:
      'Hot water extraction and stain removal to restore carpets and remove allergens.',
    icon: WashingMachineIcon,
    link: '/carpet-cleaning',
  },
  {
    title: 'Pressure Washing',
    description:
      'High-pressure cleaning for driveways, walls, roofs, patios, garages, and outdoor surfaces.',
    icon: WindIcon,
    link: '/pressure-washing',
  },
];

function PiliyandalaLocalContent() {
  return (
    <section className="bg-gray-50 py-20" aria-labelledby="piliyandala-local-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block text-brand-primary text-sm font-medium tracking-wide uppercase mb-2">
              Local cleaning support
            </span>
            <h2
              id="piliyandala-local-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-5"
            >
              Cleaning in Piliyandala and nearby areas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-7">
              Whether you need a one-time deep clean, upholstery cleaning,
              pressure washing, or regular cleaning for a home or workplace,
              start by sharing your location and the work required. We will
              confirm availability and provide a quotation based on the job.
            </p>

            <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3">
              Nearby service areas
            </h3>
            <div className="flex flex-wrap gap-3">
              {piliyandalaNearbyAreas.map((nearbyArea) => (
                <Link
                  key={nearbyArea.slug}
                  to={`/service-areas/${nearbyArea.slug}`}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand-primary hover:text-brand-primary text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <MapPinIcon className="w-3.5 h-3.5" />
                  {nearbyArea.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-7">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-5">
              How to request your quotation
            </h3>
            <ol className="space-y-5">
              {[
                ['1', 'Share the job', 'Tell us the service, location, property size, and current condition.'],
                ['2', 'Confirm the scope', 'Send photos when possible so the team can understand the work required.'],
                ['3', 'Arrange the service', 'Review the quotation and confirm a suitable date with the NKP team.'],
              ].map(([number, title, description]) => (
                <li key={number} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {number}
                  </span>
                  <span>
                    <strong className="block text-gray-900 text-sm">{title}</strong>
                    <span className="block text-gray-600 text-sm mt-1">{description}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Cleaning services in Piliyandala: common questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {piliyandalaFaqs.map((faq) => (
              <article key={faq.question} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AreaPage() {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const area = areaSlug ? getAreaBySlug(areaSlug) : undefined;

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark">
        <div className="text-center px-4">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">
            Area Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            We couldn&apos;t find service information for this location.
          </p>
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            View All Service Areas
          </Link>
        </div>
      </div>
    );
  }

  const seoData = buildAreaSeo(area);
  const isPiliyandala = area.slug === 'piliyandala';

  return (
    <>
      <SEOHead data={seoData} />

      <HeroSection
        title={`Cleaning Services in ${area.name}`}
        subtitle={isPiliyandala
          ? `${SITE_NAME} provides cleaning for homes, apartments, offices, and commercial properties across Piliyandala, Kesbewa, Bokundara, Madapatha, and Boralesgamuwa.`
          : `${SITE_NAME} provides professional home, office, deep, sofa, mattress, carpet cleaning, and pressure washing in ${area.name} and nearby suburbs.`}
        showBookingButtons
        backgroundVariant="gradient"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-brand-primary text-sm font-medium mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              All Service Areas
            </Link>

            <div className="flex items-start gap-4 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPinIcon className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                  Cleaning Services Available in {area.name}
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  {area.description} We bring professional-grade equipment,
                  trained staff, and flexible scheduling to every appointment in
                  {area.name}.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={service.link}
                    className="group block bg-gray-50 hover:bg-brand-primary/5 border border-gray-100 hover:border-brand-primary/20 rounded-2xl p-6 h-full transition-all"
                  >
                    <div className="w-12 h-12 bg-brand-primary/10 group-hover:bg-brand-primary/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2 group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
              Why Choose {SITE_NAME} in {area.name}?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                Local, reliable cleaning teams
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                Same-week appointments available
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                Professional-grade equipment
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                Transparent quotes with no hidden fees
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                Safe, family-friendly products
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-1.5 shrink-0" />
                Satisfaction guarantee on every job
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {isPiliyandala && <PiliyandalaLocalContent />}

      <BookingCTA />
    </>
  );
}
