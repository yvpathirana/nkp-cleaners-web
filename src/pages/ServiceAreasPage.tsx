import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPinIcon } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';
import { routeSeoData } from '../seo/seoConfig';
import { serviceAreas } from '../seo/serviceAreas';

export function ServiceAreasPage() {
  return (
    <>
      <SEOHead data={routeSeoData['/service-areas']} />

      <HeroSection
        title="Areas We Serve"
        subtitle="NKP Cleaners provides professional home, office, and specialized cleaning services across Colombo suburbs and southern neighbourhoods."
        backgroundVariant="gradient"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Cleaning Services Near You
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Click your area to see the full range of cleaning services we offer nearby.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <Link
                  to={`/service-areas/${area.slug}`}
                  className="group flex items-start gap-4 bg-gray-50 hover:bg-brand-primary/5 border border-gray-100 hover:border-brand-primary/20 rounded-2xl p-6 transition-all"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 group-hover:bg-brand-primary/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                    <MapPinIcon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 text-lg group-hover:text-brand-primary transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {area.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-brand-primary text-sm font-medium group-hover:gap-2 transition-all">
                      View services
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
