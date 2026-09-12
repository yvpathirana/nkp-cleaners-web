import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPinIcon } from 'lucide-react';
import { serviceAreas } from '../seo/serviceAreas';

interface AreasWeServeProps {
  serviceName?: string;
}

export function AreasWeServe({ serviceName }: AreasWeServeProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <MapPinIcon className="w-4 h-4" />
            Local Service Coverage
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {serviceName
              ? `${serviceName} is available across Colombo suburbs and surrounding neighbourhoods.`
              : 'NKP Cleaners provides professional cleaning services across Colombo suburbs and surrounding neighbourhoods.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/service-areas/${area.slug}`}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand-primary hover:text-brand-primary text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <MapPinIcon className="w-3.5 h-3.5" />
              {area.name}
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
          >
            View all service areas
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
