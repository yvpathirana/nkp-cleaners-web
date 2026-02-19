import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  BuildingIcon,
  FactoryIcon,
  SparklesIcon,
  BrushIcon,
  SofaIcon,
  CarIcon,
  LeafIcon,
  HardHatIcon,
  WindIcon,
  WashingMachineIcon,
  LayoutGridIcon,
  UtensilsIcon,
  LandmarkIcon,
  StoreIcon,
  WarehouseIcon,
  CogIcon,
  SquareIcon,
  ArrowRightLeftIcon,
  SearchIcon,
  ClockIcon,
  EyeIcon,
  TruckIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  BoxIcon } from
'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';
interface SubService {
  title: string;
  description: string;
  icon: BoxIcon;
  link?: string;
}
interface ServiceCategory {
  slug: string;
  label: string;
  icon: BoxIcon;
  tagline: string;
  description: string;
  subServices: SubService[];
}
const categories: ServiceCategory[] = [
{
  slug: 'residential',
  label: 'Residential Cleaning',
  icon: HomeIcon,
  tagline: 'Home & Living Spaces',
  description:
  'Professional cleaning services designed to keep your home spotless, healthy, and comfortable. From regular upkeep to intensive deep cleans.',
  subServices: [
  {
    title: 'General Cleaning',
    description:
    'Regular maintenance cleaning including dusting, vacuuming, mopping, surface wiping, and bathroom tidying to keep your home fresh and welcoming every day.',
    icon: BrushIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Deep Cleaning',
    description:
    'Intensive top-to-bottom cleaning that reaches behind furniture, inside appliances, scrubs grout and tiles, and eliminates built-up grime, allergens, and bacteria.',
    icon: SearchIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Move-In / Move-Out Cleaning',
    description:
    "Complete property cleaning for when you're transitioning between homes. Includes cabinet interiors, appliance cleaning, full sanitization, and making the space ready for the next occupant.",
    icon: ArrowRightLeftIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Apartment Deep Cleaning',
    description:
    'Specialized deep cleaning tailored for apartments and condominiums, including balcony cleaning, AC vent dusting, compact space expertise, and full sanitization.',
    icon: BuildingIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Routine Cleaning',
    description:
    'Scheduled recurring cleaning on a daily, weekly, or bi-weekly basis to maintain a consistently clean and healthy living environment without the hassle.',
    icon: ClockIcon,
    link: '/home-cleaning'
  }]

},
{
  slug: 'commercial',
  label: 'Commercial Cleaning',
  icon: BuildingIcon,
  tagline: 'Business & Professional Spaces',
  description:
  'Keep your business environment clean, professional, and welcoming for employees and customers. Tailored solutions for every commercial space.',
  subServices: [
  {
    title: 'Office Cleaning',
    description:
    'Comprehensive cleaning for offices of all sizes — desks, floors, restrooms, kitchens, reception areas, and meeting rooms. Available daily, weekly, or on custom schedules.',
    icon: LayoutGridIcon,
    link: '/office-cleaning'
  },
  {
    title: 'Showrooms',
    description:
    'Spotless showroom cleaning that ensures your products and displays shine. We clean floors, glass surfaces, display units, and customer areas to make the right first impression.',
    icon: StoreIcon
  },
  {
    title: 'Restaurants',
    description:
    'Kitchen deep cleaning, dining area maintenance, exhaust hood cleaning, and sanitization that meets food safety and hygiene standards. Keep your restaurant inspection-ready.',
    icon: UtensilsIcon
  },
  {
    title: 'Banks & Institutions',
    description:
    'Professional cleaning for banking halls, government offices, educational institutions, and customer-facing areas. Discreet, thorough, and scheduled around your operating hours.',
    icon: LandmarkIcon
  }]

},
{
  slug: 'industrial',
  label: 'Industrial Cleaning',
  icon: FactoryIcon,
  tagline: 'Heavy-Duty & Industrial Facilities',
  description:
  'Heavy-duty cleaning solutions for factories, warehouses, and industrial facilities using professional-grade equipment and trained operators.',
  subServices: [
  {
    title: 'Warehouse Cleaning',
    description:
    'Large-scale cleaning for warehouses, storage facilities, and distribution centers. Includes floor cleaning, racking dusting, loading dock maintenance, and debris removal.',
    icon: WarehouseIcon
  },
  {
    title: 'Machinery Cleaning',
    description:
    'Specialized cleaning and degreasing for industrial machinery, production equipment, and manufacturing lines. Extends equipment life and maintains safety standards.',
    icon: CogIcon
  },
  {
    title: 'Floor Scrubbing & Polishing',
    description:
    'Industrial-grade floor scrubbing, stripping, polishing, and sealing for concrete, epoxy, tile, and vinyl surfaces. Restores appearance and improves safety.',
    icon: SquareIcon
  },
  {
    title: 'Industrial Pressure Washing',
    description:
    'High-pressure cleaning for building exteriors, parking areas, loading docks, factory floors, and industrial surfaces. Removes oil, grease, grime, and weather staining.',
    icon: WindIcon,
    link: '/pressure-washing'
  }]

},
{
  slug: 'specialized',
  label: 'Specialized Services',
  icon: SparklesIcon,
  tagline: 'Expert & Specialty Cleaning',
  description:
  'Expert cleaning for specific surfaces and situations. From delicate fabrics to post-construction sites, we have the tools and expertise for every challenge.',
  subServices: [
  {
    title: 'Carpet Cleaning',
    description:
    'Deep extraction carpet cleaning using hot water and specialized solutions. Removes embedded dirt, stains, pet odors, allergens, and dust mites. Suitable for all carpet types.',
    icon: WashingMachineIcon,
    link: '/carpet-cleaning'
  },
  {
    title: 'Sofa Cleaning',
    description:
    'Professional upholstery and sofa cleaning for fabric, leather, and synthetic materials. Deep stain removal, deodorizing, and sanitization to refresh your furniture.',
    icon: SofaIcon,
    link: '/sofa-mattress-cleaning'
  },
  {
    title: 'Window Cleaning',
    description:
    'Streak-free window cleaning for residential, commercial, and high-rise buildings. Interior and exterior glass, frames, tracks, and sills — crystal clear results guaranteed.',
    icon: EyeIcon
  },
  {
    title: 'Post-Construction Cleaning',
    description:
    'Complete cleanup after renovation or construction projects. Removes dust, debris, paint splatters, adhesive residue, and construction waste to make your space move-in ready.',
    icon: HardHatIcon
  },
  {
    title: 'Green Eco-Friendly Cleaning',
    description:
    'Environmentally conscious cleaning using biodegradable, non-toxic products that are safe for children, pets, and the planet — without compromising on cleaning power.',
    icon: LeafIcon
  },
  {
    title: 'Vehicle Interior Cleaning',
    description:
    'Detailed interior cleaning for cars, vans, SUVs, and commercial vehicles. Includes seat shampooing, dashboard cleaning, carpet extraction, and odor removal.',
    icon: CarIcon
  },
  {
    title: 'Car Wash & Detailing',
    description:
    'Complete exterior wash and professional detailing services including waxing, polishing, tire dressing, and paint protection for a showroom-quality finish.',
    icon: TruckIcon
  }]

}];

export function ServicesPage() {
  const { category } = useParams<{
    category?: string;
  }>();
  const navigate = useNavigate();
  const activeCategory = categories.find((c) => c.slug === category);
  return (
    <>
      <SEOHead
        title={activeCategory ? activeCategory.label : 'Our Cleaning Services'}
        description={
        activeCategory ?
        activeCategory.description :
        "Explore NKP Cleaners' full range of professional cleaning services: residential, commercial, industrial, and specialized cleaning in Sri Lanka."
        }
        keywords="cleaning services, residential cleaning, commercial cleaning, industrial cleaning, carpet cleaning, pressure washing, Sri Lanka" />


      <HeroSection
        title={activeCategory ? activeCategory.label : 'Our Cleaning Services'}
        subtitle={
        activeCategory ?
        activeCategory.description :
        'Comprehensive cleaning solutions for every space. From homes to factories, we deliver professional results every time.'
        }
        backgroundVariant="minimal" />


      {/* Category Selector */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = category === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() =>
                  navigate(isActive ? '/services' : `/services/${cat.slug}`)
                  }
                  className={`relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 text-center ${isActive ? 'border-brand-primary bg-brand-primary/5 shadow-lg shadow-brand-primary/10' : 'border-gray-100 hover:border-brand-primary/30 hover:bg-gray-50'}`}>

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-brand-primary text-white' : 'bg-brand-primary/10 text-brand-primary'}`}>

                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p
                      className={`font-heading font-semibold text-sm ${isActive ? 'text-brand-primary' : 'text-gray-900'}`}>

                      {cat.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 hidden sm:block">
                      {cat.tagline}
                    </p>
                  </div>
                  {isActive &&
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute -bottom-px left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-primary rounded-full" />

                  }
                </button>);

            })}
          </div>
        </div>
      </section>

      {/* Sub-services or Overview */}
      <AnimatePresence mode="wait">
        {activeCategory ?
        <motion.section
          key={activeCategory.slug}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.3
          }}
          className="bg-gray-50 py-16">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Back link */}
              <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-brand-primary text-sm font-medium mb-8 hover:gap-3 transition-all">

                <ArrowLeftIcon className="w-4 h-4" />
                All Services
              </button>

              <div className="space-y-6">
                {activeCategory.subServices.map((service, index) => {
                const Icon = service.icon;
                const content =
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05
                  }}
                  className={`bg-white rounded-2xl p-6 md:p-8 border border-gray-100 flex gap-5 md:gap-6 items-start ${service.link ? 'hover:border-brand-primary/20 hover:shadow-lg transition-all group cursor-pointer' : ''}`}>

                      <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-brand-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-heading font-semibold text-gray-900 text-lg">
                            {service.title}
                          </h3>
                          {service.link &&
                      <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-brand-primary shrink-0 transition-colors" />
                      }
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mt-2">
                          {service.description}
                        </p>
                        {service.link &&
                    <span className="inline-block mt-3 text-brand-primary text-sm font-medium group-hover:underline">
                            Learn more
                          </span>
                    }
                      </div>
                    </motion.div>;

                if (service.link) {
                  return (
                    <Link
                      key={service.title}
                      to={service.link}
                      className="block">

                        {content}
                      </Link>);

                }
                return <div key={service.title}>{content}</div>;
              })}
              </div>
            </div>
          </motion.section> :

        <motion.section
          key="overview"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.3
          }}
          className="bg-gray-50 py-16">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Choose a Service Category
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Select a category above to explore our sub-services, or browse
                  the overview below.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.slug}
                    initial={{
                      opacity: 0,
                      y: 20
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.08
                    }}>

                      <Link
                      to={`/services/${cat.slug}`}
                      className="block bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-primary/20 hover:shadow-lg transition-all group">

                        <div className="flex items-start gap-5">
                          <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                            <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading font-bold text-gray-900 text-xl mb-2 group-hover:text-brand-primary transition-colors">
                              {cat.label}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {cat.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cat.subServices.map((sub) =>
                            <span
                              key={sub.title}
                              className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">

                                  {sub.title}
                                </span>
                            )}
                            </div>
                          </div>
                          <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-brand-primary shrink-0 mt-1 transition-colors" />
                        </div>
                      </Link>
                    </motion.div>);

              })}
              </div>
            </div>
          </motion.section>
        }
      </AnimatePresence>

      <BookingCTA />
    </>);

}