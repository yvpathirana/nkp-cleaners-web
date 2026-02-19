import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, QuoteIcon } from 'lucide-react';
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
      </div>
    </section>);

}