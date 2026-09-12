// Google Analytics 4 tracking utility
// Set VITE_GA_MEASUREMENT_ID in your environment to override the default ID.

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-MV74XWEE5H';

let isInitialized = false;

export function initGA4(): void {
  if (isInitialized || typeof document === 'undefined') {
    return;
  }
  isInitialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    send_page_view: false
  });
}

export function trackPageView(path?: string, title?: string): void {
  if (typeof window.gtag !== 'function') {
    return;
  }

  const pagePath = path ?? window.location.pathname + window.location.search;
  const pageTitle = title ?? document.title;

  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
    send_to: GA4_MEASUREMENT_ID
  });

  if (import.meta.env.DEV) {
    console.log('[Analytics] page_view', { page_path: pagePath, page_title: pageTitle });
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${eventName}`, params);
  }
}

const serviceNamesByPath: Record<string, string> = {
  '/': 'all_cleaning_services',
  '/services': 'all_cleaning_services',
  '/services/residential': 'residential_cleaning',
  '/services/commercial': 'commercial_cleaning',
  '/services/industrial': 'industrial_cleaning',
  '/services/specialized': 'specialized_cleaning',
  '/home-cleaning': 'home_cleaning',
  '/office-cleaning': 'office_cleaning',
  '/pressure-washing': 'pressure_washing',
  '/sofa-mattress-cleaning': 'sofa_mattress_cleaning',
  '/carpet-cleaning': 'carpet_cleaning',
  '/deep-cleaning-packages': 'deep_cleaning',
  '/floor-restoration': 'floor_restoration',
  '/post-construction-cleaning': 'post_construction_cleaning',
  '/packages': 'cleaning_packages',
};

function pageContext(): Record<string, string> {
  if (typeof window === 'undefined') {
    return {};
  }

  const pagePath = window.location.pathname;
  const context: Record<string, string> = { page_path: pagePath };
  const areaMatch = pagePath.match(/^\/service-areas\/([^/]+)$/);

  if (areaMatch) {
    context.location_name = decodeURIComponent(areaMatch[1]).replace(/-/g, '_');
  }

  if (serviceNamesByPath[pagePath]) {
    context.service_name = serviceNamesByPath[pagePath];
  }

  return context;
}

// Conversion events used by the local SEO measurement plan.
export function trackCallClick(ctaPosition = 'unspecified'): void {
  trackEvent('click_phone', {
    ...pageContext(),
    cta_position: ctaPosition,
    method: 'phone',
    phone_number: '+94707699620'
  });
}

export function trackWhatsAppClick(ctaPosition = 'unspecified'): void {
  trackEvent('click_whatsapp', {
    ...pageContext(),
    cta_position: ctaPosition,
    method: 'whatsapp',
    phone_number: '+94707699620'
  });
}

export function trackFormSubmit(formName: string): void {
  trackEvent('lead_form_submit', {
    ...pageContext(),
    form_name: formName
  });
}

export function trackBookNowClick(source: string): void {
  trackEvent('quote_request', {
    ...pageContext(),
    cta_position: source
  });
}
