import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  RouteSeoData,
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  TWITTER_HANDLE,
} from '../seo/seoConfig';

interface SEOHeadProps {
  data: RouteSeoData;
}

function setOrCreateMeta(
  attribute: 'name' | 'property',
  value: string,
  content: string,
): void {
  const selector =
    attribute === 'property'
      ? `meta[property="${value}"]`
      : `meta[name="${value}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(attribute: 'name' | 'property', value: string): void {
  document
    .querySelectorAll(`meta[${attribute}="${value}"]`)
    .forEach((el) => el.remove());
}

export function SEOHead({ data }: SEOHeadProps) {
  const location = useLocation();
  const canonicalPath = data.path === '/' ? '' : data.path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImage = data.ogImage || DEFAULT_OG_IMAGE;
  const fullTitle = `${data.title} | ${SITE_NAME}`;

  useEffect(() => {
    document.title = fullTitle;

    // Core meta
    setOrCreateMeta('name', 'description', data.description);
    if (data.keywords) {
      setOrCreateMeta('name', 'keywords', data.keywords);
    } else {
      removeMeta('name', 'keywords');
    }

    // Robots directive
    if (data.noIndex) {
      setOrCreateMeta('name', 'robots', 'noindex, nofollow');
    } else {
      removeMeta('name', 'robots');
    }

    // Canonical link
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Open Graph
    setOrCreateMeta('property', 'og:type', 'website');
    setOrCreateMeta('property', 'og:site_name', SITE_NAME);
    setOrCreateMeta('property', 'og:url', canonicalUrl);
    setOrCreateMeta('property', 'og:title', fullTitle);
    setOrCreateMeta('property', 'og:description', data.description);
    setOrCreateMeta('property', 'og:image', ogImage);
    setOrCreateMeta('property', 'og:image:width', String(OG_IMAGE_WIDTH));
    setOrCreateMeta('property', 'og:image:height', String(OG_IMAGE_HEIGHT));
    setOrCreateMeta('property', 'og:image:alt', `${SITE_NAME} logo`);

    // Twitter Card
    setOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    setOrCreateMeta('name', 'twitter:site', TWITTER_HANDLE);
    setOrCreateMeta('name', 'twitter:title', fullTitle);
    setOrCreateMeta('name', 'twitter:description', data.description);
    setOrCreateMeta('name', 'twitter:image', ogImage);

    // JSON-LD structured data
    document.querySelectorAll('script[data-seo-schema]').forEach((el) => el.remove());
    data.schemas?.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', `schema-${index}`);
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [data, location.pathname, canonicalUrl, fullTitle, ogImage]);

  return null;
}
