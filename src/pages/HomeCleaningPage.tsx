import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  CheckCircleIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  SearchIcon,
  BrushIcon,
  UtensilsIcon,
  DropletIcon,
  EyeIcon,
  SquareIcon,
  SofaIcon } from
'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface HomeServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  highlight?: boolean;
}

function HomeServiceCard({ icon: Icon, title, items, highlight }: HomeServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`bg-gray-50 rounded-2xl p-6 border ${highlight ? 'border-2 border-brand-primary relative' : 'border-gray-100'}`}
    >
      {highlight && (
        <span className="absolute -top-3 left-6 bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-brand-primary" />
      </div>
      <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
            <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
import { routeSeoData } from '../seo/seoConfig';
import { HeroSection } from '../components/HeroSection';
import { AreasWeServe } from '../components/AreasWeServe';
import { BookingCTA } from '../components/BookingCTA';
export function HomeCleaningPage() {
  return (
    <>
      <SEOHead data={routeSeoData['/home-cleaning']} />


      <HeroSection
        title="Home & Apartment Cleaning"
        subtitle="Your home deserves the best care. From regular upkeep to deep cleaning, we make your living space spotless and comfortable."
        showBookingButtons
        backgroundVariant="gradient" />


      {/* Service Types */}
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
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="text-center mb-14">

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Included
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our house and apartment cleaning covers every corner of your home
              with professional equipment and trained staff.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HomeServiceCard
              icon={BrushIcon}
              title="General Residential Cleaning"
              items={[
                'Dusting & surface wiping',
                'Floor sweeping, mopping & washing',
                'Bathroom & washroom cleaning',
                'Kitchen tidying',
              ]}
            />
            <HomeServiceCard
              icon={SearchIcon}
              title="Deep Cleaning"
              highlight
              items={[
                'Everything in general cleaning',
                'Behind furniture & appliances',
                'Grout & tile scrubbing',
                'Window tracks & sills',
              ]}
            />
            <HomeServiceCard
              icon={UtensilsIcon}
              title="Kitchen Cleaning"
              items={[
                'Countertop & cabinet cleaning',
                'Appliance exterior cleaning',
                'Sink & cooking area degreasing',
                'Food-preparation sanitization',
              ]}
            />
            <HomeServiceCard
              icon={DropletIcon}
              title="Washroom Cleaning"
              items={[
                'Toilet, sink & fixture cleaning',
                'Scale & stain removal',
                'Shower/tile scrubbing',
                'Disinfection of contact surfaces',
              ]}
            />
            <HomeServiceCard
              icon={EyeIcon}
              title="Glass & Window Cleaning"
              items={[
                'Streak-free window glass',
                'Mirror & glass-panel cleaning',
                'Frame & track wipe-down',
                'Improved natural light',
              ]}
            />
            <HomeServiceCard
              icon={SquareIcon}
              title="Floor Care"
              items={[
                'Sweeping & mopping',
                'Hard-floor washing',
                'Spot stain treatment',
                'High-temperature floor sterilization',
              ]}
            />
            <HomeServiceCard
              icon={SofaIcon}
              title="Bed & Sofa Vacuuming"
              items={[
                'Mattress surface vacuuming',
                'Sofa & cushion vacuuming',
                'Dust, hair & debris removal',
                'Upholstered surface refresh',
              ]}
            />
            <HomeServiceCard
              icon={ShieldCheckIcon}
              title="High-Touch Sanitization"
              items={[
                'Door handles & light switches',
                'Handrails & remotes',
                'Switchboards & table edges',
                'Safe, family-friendly products',
              ]}
            />
            <HomeServiceCard
              icon={SparklesIcon}
              title="High-Temperature Sterilization"
              items={[
                'Steam-based floor treatment',
                'Bacteria & germ reduction',
                'No harsh chemicals required',
                'Ideal for kitchens & bathrooms',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <AreasWeServe serviceName="Home & apartment cleaning" />

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
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
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="text-center mb-14">

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Families Trust NKP Cleaners
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Family Safe Products
              </h3>
              <p className="text-gray-600 text-sm">
                We use cleaning products that are safe for children, pets, and
                the environment.
              </p>
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

              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Trusted & Vetted Staff
              </h3>
              <p className="text-gray-600 text-sm">
                All our cleaning professionals are background-checked and
                professionally trained.
              </p>
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

              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600 text-sm">
                Not happy? We'll re-clean at no extra cost. Your satisfaction is
                our priority.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>);

}