import React, { useEffect, createElement } from 'react';
interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
}
export function SEOHead({ title, description, keywords }: SEOHeadProps) {
  useEffect(() => {
    document.title = `${title} | NKP Cleaners`;
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
    // Meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    // JSON-LD Schema for LocalBusiness
    const existingSchema = document.querySelector(
      'script[data-schema="local-business"]'
    );
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'local-business');
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'NKP Cleaners',
      description:
      'Professional cleaning services in Sri Lanka. Residential, commercial, industrial, and specialized cleaning.',
      url: window.location.origin,
      telephone: '+94707699620',
      image: "/nkp.jpg",

      address: {
        '@type': 'PostalAddress',
        addressCountry: 'LK',
        addressRegion: 'Sri Lanka'
      },
      priceRange: '$$',
      openingHours: 'Mo-Sa 07:00-19:00',
      sameAs: ['https://wa.me/94707699620'],
      serviceType: [
      'Residential Cleaning',
      'Commercial Cleaning',
      'Industrial Cleaning',
      'Pressure Washing',
      'Carpet Cleaning',
      'Office Cleaning']

    });
    document.head.appendChild(schema);
    return () => {
      const schemaToRemove = document.querySelector(
        'script[data-schema="local-business"]'
      );
      if (schemaToRemove) schemaToRemove.remove();
    };
  }, [title, description, keywords]);
  return null;
}