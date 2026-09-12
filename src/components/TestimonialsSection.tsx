
import { motion } from 'framer-motion';
import { StarIcon, QuoteIcon } from 'lucide-react';
import { FACEBOOK_URL, GOOGLE_URL } from '../seo/seoConfig';
export function TestimonialsSection() {
  return (
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

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by hundreds of homes and businesses across Sri Lanka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
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
              margin: '-30px'
            }}
            transition={{
              duration: 0.4
            }}
            className="bg-gray-50 rounded-2xl p-8 relative">

            <QuoteIcon className="w-8 h-8 text-brand-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              "NKP Cleaners transformed our office space. The team was
              professional, thorough, and left everything spotless. We now use
              them for weekly cleaning."
            </p>
            <div>
              <p className="font-heading font-semibold text-gray-900 text-sm">
                Amal Perera
              </p>
              <p className="text-gray-500 text-xs">Office Manager, Colombo</p>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
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
              margin: '-30px'
            }}
            transition={{
              duration: 0.4,
              delay: 0.1
            }}
            className="bg-gray-50 rounded-2xl p-8 relative">

            <QuoteIcon className="w-8 h-8 text-brand-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              "We hired NKP for a deep clean before moving into our new
              apartment. The results were incredible — every corner was
              sparkling. Highly recommend!"
            </p>
            <div>
              <p className="font-heading font-semibold text-gray-900 text-sm">
                Dilini Fernando
              </p>
              <p className="text-gray-500 text-xs">Homeowner, Piliyandala</p>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
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
              margin: '-30px'
            }}
            transition={{
              duration: 0.4,
              delay: 0.2
            }}
            className="bg-gray-50 rounded-2xl p-8 relative">

            <QuoteIcon className="w-8 h-8 text-brand-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              "Their pressure washing service brought our driveway back to life.
              The color coding system they use shows real professionalism.
              Outstanding service."
            </p>
            <div>
              <p className="font-heading font-semibold text-gray-900 text-sm">
                Ruwan Silva
              </p>
              <p className="text-gray-500 text-xs">Restaurant Owner, Panadura</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-600 mb-4">
            Loved our service? Leave us a review or read more on our profiles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-brand-primary text-gray-700 hover:text-brand-primary px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google Reviews
            </a>
            <a
              href={`${FACEBOOK_URL}reviews`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook Reviews
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}