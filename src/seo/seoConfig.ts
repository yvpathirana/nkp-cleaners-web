import { serviceAreas } from './serviceAreas';

export const SITE_NAME = 'NKP Cleaners';
export const SITE_URL = 'https://nkpcleaners.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/nkp.jpg`;
export const OG_IMAGE_WIDTH = 500;
export const OG_IMAGE_HEIGHT = 500;
export const TWITTER_HANDLE = '@nkpcleaners';
export const PHONE = '+94707699620';
export const EMAIL = 'nkpcleaners@gmail.com';
export const FACEBOOK_URL = 'https://www.facebook.com/NKPCleaners/';
export const GOOGLE_URL = 'https://share.google/cUjKwPiDKjbGtWMhT';
export const WHATSAPP_URL = `https://wa.me/${PHONE.replace('+', '')}`;
const SCHEMA_AREA_NAMES = [...serviceAreas.map((area) => area.name), 'Horana'];

export interface RouteSeoData {
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  noIndex?: boolean;
  schemas?: object[];
}

function breadcrumbs(crumbs: { name: string; path: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

function localBusiness(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description:
      'Residential, commercial, and specialized cleaning services across Piliyandala, Colombo, Panadura, Horana, and nearby areas.',
    url: SITE_URL,
    telephone: PHONE,
    image: `${SITE_URL}/nkp.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LK',
      addressRegion: 'Sri Lanka',
    },
    priceRange: '$$',
    openingHours: 'Mo-Sa 09:00-17:00',
    sameAs: [WHATSAPP_URL, FACEBOOK_URL, GOOGLE_URL],
    areaServed: SCHEMA_AREA_NAMES.map((areaName) => ({
      '@type': 'City',
      name: areaName,
      containedInPlace: {
        '@type': 'Country',
        name: 'Sri Lanka',
      },
    })),
    serviceType: [
      'Cleaning Packages',
      'Deep Cleaning Packages',
      'Essential Home Deep Clean',
      'Premium Deep Clean',
      'Medical Grade Sanitization Deep Clean',
      'House & Apartment Cleaning',
      'General Residential Cleaning',
      'Deep Cleaning',
      'Kitchen Cleaning',
      'Washroom Cleaning',
      'Glass and Window Cleaning',
      'Office & Commercial Cleaning',
      'Staircase Cleaning',
      'Lift Cleaning',
      'Industrial Cleaning',
      'Warehouse Cleaning',
      'Sofa & Upholstery Cleaning',
      'Mattress Cleaning',
      'Carpet Cleaning',
      'Pressure Washing',
      'Driveway Pressure Washing',
      'Wall Pressure Washing',
      'Garage Cleaning',
      'Floor Cleaning & Machine Scrubbing',
      'Tile Cleaning & Buffing',
      'Floor Restoration & Polishing',
      'Red Cement Floor Restoration',
      'Titanium Floor Restoration',
      'Post-Construction Cleaning',
      'Eco-Friendly Cleaning',
    ],
  };
}

function organization(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/nkp.jpg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      availableLanguage: ['English', 'Sinhala', 'Tamil'],
      areaServed: 'LK',
    },
    sameAs: [WHATSAPP_URL, FACEBOOK_URL, GOOGLE_URL],
  };
}

function website(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

function serviceSchema(
  serviceName: string,
  serviceDescription: string,
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
      telephone: PHONE,
    },
    areaServed: SCHEMA_AREA_NAMES.map((areaName) => ({
      '@type': 'City',
      name: areaName,
      containedInPlace: {
        '@type': 'Country',
        name: 'Sri Lanka',
      },
    })),
    serviceType: serviceName,
  };
}

function contactPage(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE_NAME}`,
    description:
      'Contact NKP Cleaners for a cleaning quotation in Piliyandala, Colombo, Panadura, Horana, and nearby areas.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: PHONE,
      email: EMAIL,
      url: SITE_URL,
    },
  };
}

export const routeSeoData: Record<string, RouteSeoData> = {
  '/': {
    path: '/',
    title: 'Cleaning Services in Piliyandala & Colombo',
    description:
      'Professional home, office, deep cleaning, sofa cleaning, and pressure washing across Piliyandala, Colombo, and Panadura. Request a free quote.',
    keywords:
      'cleaning services Piliyandala, cleaning services Colombo, cleaning services Panadura, home cleaning, office cleaning, deep cleaning, sofa cleaning, pressure washing, NKP Cleaners',
    schemas: [
      localBusiness(),
      organization(),
      website(),
      breadcrumbs([{ name: 'Home', path: '/' }]),
    ],
  },
  '/service-areas': {
    path: '/service-areas',
    title: 'Service Areas',
    description:
      'NKP Cleaners provides home cleaning, office cleaning, deep cleaning, sofa cleaning, mattress cleaning, carpet cleaning, and pressure washing across Colombo suburbs including Piliyandala, Moratuwa, Dehiwala, Maharagama, Panadura, and more.',
    keywords:
      'cleaning services Piliyandala, cleaning services Moratuwa, cleaning services Dehiwala, cleaning services Maharagama, cleaning services Panadura, NKP Cleaners service areas',
    schemas: [
      website(),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Service Areas', path: '/service-areas' },
      ]),
    ],
  },
  '/services': {
    path: '/services',
    title: 'Our Cleaning Services',
    description:
      "Explore NKP Cleaners' full range of professional cleaning services in Sri Lanka: residential, commercial, industrial, and specialized cleaning.",
    keywords:
      'cleaning services, residential cleaning, commercial cleaning, industrial cleaning, carpet cleaning, pressure washing, Sri Lanka',
    schemas: [
      serviceSchema('Cleaning Services', 'Professional cleaning services in Sri Lanka.'),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ]),
    ],
  },
  '/services/residential': {
    path: '/services/residential',
    title: 'Residential Cleaning Services',
    description:
      'Professional residential cleaning services in Sri Lanka. General, deep, move-in/out, and apartment cleaning by NKP Cleaners.',
    keywords:
      'residential cleaning, home cleaning, apartment cleaning, deep cleaning, move in cleaning, Sri Lanka',
    schemas: [
      serviceSchema(
        'Residential Cleaning',
        'Home and apartment cleaning services including general, deep, and move-in/move-out cleaning.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Residential Cleaning', path: '/services/residential' },
      ]),
    ],
  },
  '/services/commercial': {
    path: '/services/commercial',
    title: 'Commercial Cleaning Services',
    description:
      'Reliable commercial cleaning for offices, showrooms, restaurants, and institutions across Sri Lanka. Request a quote from NKP Cleaners.',
    keywords:
      'commercial cleaning, office cleaning, restaurant cleaning, showroom cleaning, bank cleaning, Sri Lanka',
    schemas: [
      serviceSchema(
        'Commercial Cleaning',
        'Commercial cleaning solutions for offices, showrooms, restaurants, and institutions.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Commercial Cleaning', path: '/services/commercial' },
      ]),
    ],
  },
  '/services/industrial': {
    path: '/services/industrial',
    title: 'Industrial Cleaning Services',
    description:
      'Heavy-duty industrial cleaning for warehouses, factories, and machinery in Sri Lanka. Professional equipment and trained staff.',
    keywords:
      'industrial cleaning, warehouse cleaning, factory cleaning, machinery cleaning, floor scrubbing, Sri Lanka',
    schemas: [
      serviceSchema(
        'Industrial Cleaning',
        'Heavy-duty cleaning for warehouses, factories, machinery, and industrial floors.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Industrial Cleaning', path: '/services/industrial' },
      ]),
    ],
  },
  '/services/specialized': {
    path: '/services/specialized',
    title: 'Specialized Cleaning Services',
    description:
      'Specialized cleaning services in Sri Lanka: carpets, sofas, mattresses, windows, post-construction, and green cleaning by NKP Cleaners.',
    keywords:
      'specialized cleaning, carpet cleaning, sofa cleaning, window cleaning, post construction cleaning, green cleaning, Sri Lanka',
    schemas: [
      serviceSchema(
        'Specialized Cleaning Services',
        'Specialty cleaning including carpet, sofa, mattress, window, post-construction, and green cleaning.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Specialized Cleaning', path: '/services/specialized' },
      ]),
    ],
  },
  '/office-cleaning': {
    path: '/office-cleaning',
    title: 'Office Cleaning Services',
    description:
      'Professional office cleaning services in Sri Lanka. Keep your workspace healthy, productive, and spotless with NKP Cleaners.',
    keywords:
      'office cleaning, commercial cleaning, workplace cleaning, corporate cleaning, Sri Lanka, NKP Cleaners',
    schemas: [
      serviceSchema(
        'Office Cleaning',
        'Professional office cleaning services for businesses of all sizes in Sri Lanka.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Office Cleaning', path: '/office-cleaning' },
      ]),
    ],
  },
  '/home-cleaning': {
    path: '/home-cleaning',
    title: 'Home & Apartment Cleaning Services',
    description:
      'Expert home and apartment cleaning in Sri Lanka. General, deep, move-in/out cleaning by NKP Cleaners. Book your service today.',
    keywords:
      'home cleaning, apartment cleaning, deep cleaning, move-in cleaning, residential cleaning, Sri Lanka',
    schemas: [
      serviceSchema(
        'Home and Apartment Cleaning',
        'Residential cleaning services including general, deep, and move-in/move-out cleaning.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Home & Apartment Cleaning', path: '/home-cleaning' },
      ]),
    ],
  },
  '/pressure-washing': {
    path: '/pressure-washing',
    title: 'Pressure Washing Services',
    description:
      'High-pressure washing for driveways, walls, roofs, and outdoor surfaces in Sri Lanka. Restore your property with NKP Cleaners.',
    keywords:
      'pressure washing, power washing, driveway cleaning, exterior cleaning, roof cleaning, Sri Lanka',
    schemas: [
      serviceSchema(
        'Pressure Washing',
        'High-pressure cleaning for driveways, walls, roofs, and outdoor surfaces.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Pressure Washing', path: '/pressure-washing' },
      ]),
    ],
  },
  '/sofa-mattress-cleaning': {
    path: '/sofa-mattress-cleaning',
    title: 'Sofa & Mattress Cleaning Services',
    description:
      'Professional sofa and mattress cleaning in Sri Lanka. Remove stains, odors, dust mites, and allergens with NKP Cleaners.',
    keywords:
      'sofa cleaning, mattress cleaning, upholstery cleaning, fabric cleaning, stain removal, Sri Lanka',
    schemas: [
      serviceSchema(
        'Sofa and Mattress Cleaning',
        'Professional upholstery, sofa, and mattress cleaning with stain removal and sanitization.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Sofa & Mattress Cleaning', path: '/sofa-mattress-cleaning' },
      ]),
    ],
  },
  '/carpet-cleaning': {
    path: '/carpet-cleaning',
    title: 'Carpet Cleaning Services',
    description:
      'Deep carpet cleaning and stain removal in Sri Lanka. Hot water extraction, sanitization, and allergen removal by NKP Cleaners.',
    keywords:
      'carpet cleaning, carpet stain removal, deep carpet cleaning, rug cleaning, Sri Lanka, NKP Cleaners',
    schemas: [
      serviceSchema(
        'Carpet Cleaning',
        'Deep carpet cleaning, stain removal, and allergen extraction for homes and offices.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Carpet Cleaning', path: '/carpet-cleaning' },
      ]),
    ],
  },
  '/deep-cleaning-packages': {
    path: '/deep-cleaning-packages',
    title: 'Deep Cleaning Packages',
    description:
      'Choose from Essential, Premium, or Medical Grade Sanitization deep cleaning packages by NKP Cleaners in Sri Lanka.',
    keywords:
      'deep cleaning packages, home deep cleaning, sanitization cleaning, Sri Lanka, NKP Cleaners',
    schemas: [
      serviceSchema(
        'Deep Cleaning Packages',
        'Essential, Premium, and Medical Grade Sanitization deep cleaning packages.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Deep Cleaning Packages', path: '/deep-cleaning-packages' },
      ]),
    ],
  },
  '/floor-restoration': {
    path: '/floor-restoration',
    title: 'Floor Restoration & Polishing',
    description:
      'Red cement and titanium floor restoration, polishing, and machine buffing services by NKP Cleaners in Sri Lanka.',
    keywords:
      'floor restoration, floor polishing, red cement floor polishing, titanium floor polishing, Sri Lanka, NKP Cleaners',
    schemas: [
      serviceSchema(
        'Floor Restoration and Polishing',
        'Red cement and titanium floor deep cleaning, wax/polish application, and machine polishing.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Floor Restoration', path: '/floor-restoration' },
      ]),
    ],
  },
  '/post-construction-cleaning': {
    path: '/post-construction-cleaning',
    title: 'Post-Construction Cleaning',
    description:
      'Post-construction cleaning packages for Sri Lanka. Dust removal, paint mark cleanup, and handover-ready finishing by NKP Cleaners.',
    keywords:
      'post construction cleaning, construction cleanup, dust removal, handover cleaning, Sri Lanka, NKP Cleaners',
    schemas: [
      serviceSchema(
        'Post-Construction Cleaning',
        'Post-construction dust removal, debris clearing, paint and adhesive removal, and handover-ready finishing.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Post-Construction Cleaning', path: '/post-construction-cleaning' },
      ]),
    ],
  },
  '/packages': {
    path: '/packages',
    title: 'Cleaning Packages',
    description:
      'Explore NKP Cleaners cleaning packages in Sri Lanka. Deep cleaning, floor restoration, post-construction packages, and upholstery cleaning.',
    keywords:
      'cleaning packages, deep cleaning packages, floor restoration packages, post construction cleaning packages, Sri Lanka, NKP Cleaners',
    schemas: [
      serviceSchema(
        'Cleaning Packages',
        'Structured cleaning packages including deep cleaning, floor restoration, post-construction cleaning, and upholstery cleaning.',
      ),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' },
      ]),
    ],
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Us',
    description:
      'Contact NKP Cleaners for a cleaning quote in Piliyandala, Colombo, Panadura, Horana, and nearby areas. Call or message us on WhatsApp.',
    keywords:
      'contact NKP Cleaners, cleaning quote, cleaning service inquiry, Sri Lanka',
    schemas: [
      contactPage(),
      breadcrumbs([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  },
};

export const routeList = Object.values(routeSeoData);
