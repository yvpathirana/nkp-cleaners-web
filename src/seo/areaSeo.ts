import { SITE_NAME, SITE_URL } from './seoConfig';
import { serviceAreas, areaKeywords, type ServiceArea } from './serviceAreas';
import type { RouteSeoData } from './seoConfig';

export { serviceAreas, areaKeywords };
export type { ServiceArea, RouteSeoData };

export function buildAreaSeo(area: ServiceArea): RouteSeoData {
  const path = `/service-areas/${area.slug}`;
  const title = `Cleaning Services in ${area.name}`;
  const description = area.description;

  return {
    path,
    title,
    description,
    keywords: areaKeywords(area.name),
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        description,
        provider: {
          '@type': 'LocalBusiness',
          name: SITE_NAME,
          url: SITE_URL,
          telephone: '+94707699620',
        },
        areaServed: {
          '@type': 'City',
          name: area.name,
          containedInPlace: {
            '@type': 'Country',
            name: 'Sri Lanka',
          },
        },
        serviceType: 'Cleaning Services',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Service Areas',
            item: `${SITE_URL}/service-areas`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: area.name,
            item: `${SITE_URL}${path}`,
          },
        ],
      },
    ],
  };
}

export function getAllAreaSeoConfigs(): RouteSeoData[] {
  return serviceAreas.map(buildAreaSeo);
}
