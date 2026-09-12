// Google Analytics 4 tracking utility
// Set VITE_GA_MEASUREMENT_ID in your environment to override the default ID.

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
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
    window.dataLayer.push(Object.fromEntries(args.map((a, i) => [i, a])));
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

// Pre-defined event helpers
export function trackCallClick(): void {
  trackEvent('call_click', {
    method: 'phone',
    phone_number: '+94707699620'
  });
}

export function trackWhatsAppClick(): void {
  trackEvent('whatsapp_click', {
    method: 'whatsapp',
    phone_number: '+94707699620'
  });
}

export function trackFormSubmit(formName: string): void {
  trackEvent('form_submit', {
    form_name: formName
  });
}

export function trackBookNowClick(source: string): void {
  trackEvent('book_now_click', {
    source
  });
}
