import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  HomeIcon,
  BuildingIcon,
  FactoryIcon,
  SparklesIcon,
  BrushIcon,
  SofaIcon,
  BedDoubleIcon,
  DropletIcon,
  ShieldCheckIcon,
  UsersIcon,
  WindIcon,
  WashingMachineIcon,
  LayoutGridIcon,
  UtensilsIcon,
  WarehouseIcon,
  CogIcon,
  SquareIcon,
  SearchIcon,
  ClockIcon,
  EyeIcon,
  ArrowUpIcon,
  ChevronRightIcon,
  ArrowLeftIcon
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { routeSeoData } from '../seo/seoConfig';
import { HeroSection } from '../components/HeroSection';
import { BookingCTA } from '../components/BookingCTA';
interface SubService {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}
interface ServiceCategory {
  slug: string;
  label: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  subServices: SubService[];
}
const categories: ServiceCategory[] = [
{
  slug: 'residential',
  label: 'House & Apartment Cleaning',
  icon: HomeIcon,
  tagline: 'Home & Living Spaces',
  description:
  'Complete residential cleaning for houses, apartments, and condominiums. From everyday tidying to intensive deep cleans and sanitization.',
  subServices: [
  {
    title: 'General Residential Cleaning',
    description:
    'Regular maintenance cleaning including dusting, surface wiping, floor sweeping, mopping, and washroom tidying to keep your home fresh every day.',
    icon: BrushIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Deep Cleaning',
    description:
    'Intensive top-to-bottom cleaning that targets built-up grime, hidden dirt, kitchen grease, washroom scale, and high-touch surfaces.',
    icon: SearchIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Kitchen Cleaning',
    description:
    'Detailed kitchen cleaning covering countertops, cabinets, appliances, sinks, and cooking areas for a hygienic food-preparation space.',
    icon: UtensilsIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Washroom Cleaning',
    description:
    'Thorough washroom and toilet cleaning with scale removal, fixture polishing, and disinfection of all contact surfaces.',
    icon: DropletIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Glass & Window Cleaning',
    description:
    'Streak-free cleaning of windows, glass panels, and mirrors to brighten rooms and improve natural light.',
    icon: EyeIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Floor Sweeping, Mopping & Washing',
    description:
    'Hard-floor and tiled floor care including sweeping, mopping, scrubbing, and spot washing for a spotless finish.',
    icon: SquareIcon,
    link: '/home-cleaning'
  },
  {
    title: 'Bed & Sofa Vacuuming',
    description:
    'Vacuuming of beds, sofas, cushions, and upholstered surfaces to remove dust, hair, and surface debris.',
    icon: SofaIcon,
    link: '/home-cleaning'
  },
  {
    title: 'High-Touch Surface Sanitization',
    description:
    'Disinfection of door handles, light switches, handrails, remotes, and other frequently touched household surfaces.',
    icon: ShieldCheckIcon,
    link: '/home-cleaning'
  },
  {
    title: 'High-Temperature Floor Sterilization',
    description:
    'Steam-based high-temperature floor treatment that kills bacteria and sanitizes hard floors without harsh chemicals.',
    icon: SparklesIcon,
    link: '/home-cleaning'
  }]

},
{
  slug: 'commercial',
  label: 'Office & Commercial Cleaning',
  icon: BuildingIcon,
  tagline: 'Business & Professional Spaces',
  description:
  'Professional cleaning for offices, showrooms, and commercial buildings. We keep workspaces healthy, productive, and welcoming.',
  subServices: [
  {
    title: 'Office Area Cleaning',
    description:
    'Cleaning of workstations, desks, cabins, meeting rooms, pantries, and reception areas tailored to office environments.',
    icon: LayoutGridIcon,
    link: '/office-cleaning'
  },
  {
    title: 'Common-Area Cleaning',
    description:
    'Maintenance of lobbies, waiting areas, corridors, and shared spaces to create a positive impression for staff and visitors.',
    icon: UsersIcon,
    link: '/office-cleaning'
  },
  {
    title: 'Staircase Cleaning',
    description:
    'Sweeping, mopping, and handrail disinfection for staircases and stepped access areas.',
    icon: ArrowUpIcon,
    link: '/office-cleaning'
  },
  {
    title: 'Lift Cleaning & Sanitization',
    description:
    'Cleaning and sanitization of elevator cabins, buttons, handrails, and lobby lift areas.',
    icon: BuildingIcon,
    link: '/office-cleaning'
  },
  {
    title: 'Glass, Windows & Partitions',
    description:
    'Streak-free cleaning of interior glass partitions, windows, and reflective surfaces for a bright, professional look.',
    icon: EyeIcon,
    link: '/office-cleaning'
  },
  {
    title: 'Perimeter/Common-Area Cleaning',
    description:
    'External entrance areas, parking surroundings, walkways, and perimeter spaces kept neat and litter-free.',
    icon: SquareIcon,
    link: '/office-cleaning'
  },
  {
    title: 'Customized Commercial Plans',
    description:
    'Tailored cleaning schedules and task lists designed around your business hours, traffic, and hygiene requirements.',
    icon: CogIcon,
    link: '/office-cleaning'
  },
  {
    title: 'Daily/Weekly/Monthly Contracts',
    description:
    'Flexible recurring cleaning contracts to maintain consistent cleanliness with minimal disruption.',
    icon: ClockIcon,
    link: '/office-cleaning'
  }]

},
{
  slug: 'industrial',
  label: 'Industrial Cleaning',
  icon: FactoryIcon,
  tagline: 'Heavy-Duty & Industrial Facilities',
  description:
  'Heavy-duty cleaning for warehouses, factories, and large commercial premises using professional equipment and trained operators.',
  subServices: [
  {
    title: 'Larger-Scale Premises Cleaning',
    description:
    'Comprehensive cleaning of sizable facilities including production floors, storage halls, and operational buildings.',
    icon: BuildingIcon
  },
  {
    title: 'Warehouse/Commercial-Area Cleaning',
    description:
    'Large-scale cleaning for warehouses and commercial spaces including floor cleaning, racking dusting, and debris removal.',
    icon: WarehouseIcon
  },
  {
    title: 'Machine-Assisted Floor Cleaning',
    description:
    'Industrial floor scrubbing, sweeping, and washing with machine equipment for concrete, epoxy, and tiled surfaces.',
    icon: CogIcon
  },
  {
    title: 'Recurring Industrial Contracts',
    description:
    'Scheduled daily, weekly, or monthly cleaning contracts to maintain safety and hygiene standards continuously.',
    icon: ClockIcon
  }]

},
{
  slug: 'specialized',
  label: 'Specialized Services',
  icon: SparklesIcon,
  tagline: 'Expert & Specialty Cleaning',
  description:
  'Advanced cleaning for upholstery, floors, carpets, exteriors, and post-construction sites using specialist tools and techniques.',
  subServices: [
  {
    title: 'Sofa & Upholstery Cleaning',
    description:
    'Dry vacuuming, chemical treatment, wet extraction, multiple rinse cycles, steam sanitization, and upholstery refresh.',
    icon: SofaIcon,
    link: '/sofa-mattress-cleaning'
  },
  {
    title: 'Mattress Cleaning',
    description:
    'Vacuuming, shampoo/deep cleaning, and steam sanitization to remove dust mites, allergens, and odors.',
    icon: BedDoubleIcon,
    link: '/sofa-mattress-cleaning'
  },
  {
    title: 'Carpet Cleaning',
    description:
    'Carpet shampooing, wet/deep extraction cleaning, and targeted dirt and stain treatment for all carpet types.',
    icon: WashingMachineIcon,
    link: '/carpet-cleaning'
  },
  {
    title: 'Pressure Washing',
    description:
    'Residential and commercial exterior pressure washing using a 3600 PSI, 4 GPM machine. Driveways, paved areas, walls, and outdoor hard surfaces.',
    icon: WindIcon,
    link: '/pressure-washing'
  },
  {
    title: 'Floor Cleaning & Machine Scrubbing',
    description:
    'Floor scrubbing, washing, and machine scrubbing for hard floors in residential, commercial, and industrial spaces.',
    icon: SquareIcon
  },
  {
    title: 'Tile Cleaning & Buffing',
    description:
    'Deep tile cleaning and machine buffing/polishing to restore shine and remove embedded grime.',
    icon: LayoutGridIcon
  }]

}];

export function ServicesPage() {
  const { category } = useParams<{
    category?: string;
  }>();
  const navigate = useNavigate();
  const activeCategory = categories.find((c) => c.slug === category);
  const seoConfig =
    (category && routeSeoData[`/services/${category}`]) ||
    routeSeoData['/services'];
  return (
    <>
      <SEOHead data={seoConfig} />


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