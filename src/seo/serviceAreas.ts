export interface ServiceArea {
  name: string;
  slug: string;
  description: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    name: 'Colombo',
    slug: 'colombo',
    description:
      'Professional home, office, and industrial cleaning services in Colombo. NKP Cleaners offers deep cleaning, sofa cleaning, mattress cleaning, carpet cleaning, and pressure washing across the city.',
  },
  {
    name: 'Piliyandala',
    slug: 'piliyandala',
    description:
      'NKP Cleaners provides professional cleaning for homes, apartments, offices, and commercial properties in Piliyandala and nearby areas including Kesbewa, Bokundara, Madapatha, and Boralesgamuwa.',
  },
  {
    name: 'Boralesgamuwa',
    slug: 'boralesgamuwa',
    description:
      'Professional cleaning services in Boralesgamuwa. From deep cleaning to pressure washing, NKP Cleaners keeps your space spotless.',
  },
  {
    name: 'Dehiwala',
    slug: 'dehiwala',
    description:
      'Trusted residential and commercial cleaning in Dehiwala. Deep cleaning, sofa cleaning, mattress cleaning, and outdoor pressure washing available.',
  },
  {
    name: 'Wellawatte',
    slug: 'wellawatte',
    description:
      'NKP Cleaners offers deep cleaning, sofa cleaning, mattress cleaning, and pressure washing services across Wellawatte.',
  },
  {
    name: 'Moratuwa',
    slug: 'moratuwa',
    description:
      'Complete cleaning solutions in Moratuwa. Home cleaning, office cleaning, sofa and mattress cleaning, plus driveway and wall pressure washing.',
  },
  {
    name: 'Katubedda',
    slug: 'katubedda',
    description:
      'Local cleaning experts in Katubedda. Book deep cleaning, sofa cleaning, mattress cleaning, and pressure washing with NKP Cleaners.',
  },
  {
    name: 'Kesbewa',
    slug: 'kesbewa',
    description:
      'NKP Cleaners provides home, office, and industrial cleaning services in Kesbewa, including deep cleaning and pressure washing.',
  },
  {
    name: 'Madapatha',
    slug: 'madapatha',
    description:
      'Affordable and professional cleaning services in Madapatha. Deep cleaning, sofa cleaning, mattress cleaning, and pressure washing available on request.',
  },
  {
    name: 'Maharagama',
    slug: 'maharagama',
    description:
      'Top-rated cleaning services in Maharagama. Residential deep cleaning, office cleaning, sofa and mattress cleaning, and pressure washing.',
  },
  {
    name: 'Kottawa',
    slug: 'kottawa',
    description:
      'NKP Cleaners serves Kottawa with deep cleaning, home cleaning, sofa cleaning, mattress cleaning, and exterior pressure washing.',
  },
  {
    name: 'Bokundara',
    slug: 'bokundara',
    description:
      'Professional home and office cleaning in Bokundara. Deep cleaning, sofa cleaning, mattress cleaning, and pressure washing services.',
  },
  {
    name: 'Kohuwala',
    slug: 'kohuwala',
    description:
      'Reliable cleaning services in Kohuwala. Book NKP Cleaners for deep cleaning, upholstery cleaning, mattress sanitization, and pressure washing.',
  },
  {
    name: 'Kalubowila',
    slug: 'kalubowila',
    description:
      'NKP Cleaners offers residential and commercial cleaning in Kalubowila. Deep cleaning, sofa cleaning, mattress cleaning, and pressure washing.',
  },
  {
    name: 'Rathmalana',
    slug: 'rathmalana',
    description:
      'Expert cleaning services in Rathmalana. Deep cleaning, sofa and mattress cleaning, office cleaning, and pressure washing for homes and businesses.',
  },
  {
    name: 'Kahathuduwa',
    slug: 'kahathuduwa',
    description:
      'Local cleaning professionals in Kahathuduwa. Home cleaning, deep cleaning, sofa cleaning, mattress cleaning, and pressure washing.',
  },
  {
    name: 'Bandaragama',
    slug: 'bandaragama',
    description:
      'NKP Cleaners provides trusted cleaning services in Bandaragama, including deep cleaning, sofa cleaning, mattress cleaning, and pressure washing.',
  },
  {
    name: 'Panadura',
    slug: 'panadura',
    description:
      'Comprehensive cleaning services in Panadura. Residential deep cleaning, office cleaning, sofa and mattress cleaning, and pressure washing.',
  },
];

export const serviceAreaSlugs = serviceAreas.map((a) => a.slug);

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function areaKeywords(areaName: string): string {
  return [
    `cleaning services ${areaName}`,
    `deep cleaning ${areaName}`,
    `home cleaning ${areaName}`,
    `office cleaning ${areaName}`,
    `sofa cleaning ${areaName}`,
    `mattress cleaning ${areaName}`,
    `carpet cleaning ${areaName}`,
    `pressure washing ${areaName}`,
    `driveway cleaning ${areaName}`,
    `garage cleaning ${areaName}`,
    `outdoor wall cleaning ${areaName}`,
  ].join(', ');
}
