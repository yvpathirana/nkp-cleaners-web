// Google Analytics 4 & Google Tag Manager tracking utility
// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
// Replace 'GTM-XXXXXXX' with your actual GTM Container ID

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
  }
}

const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export function initGA4(): void {
  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(Object.fromEntries(args.map((a, i) => [i, a])));
  };

  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID);
}

export function initGTM(): void {
  const GTM_ID = 'GTM-XXXXXXX';

  // GTM script
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `;
  document.head.insertBefore(script, document.head.firstChild);
}

export function trackEvent(
eventName: string,
params?: Record<string, string | number | boolean>)
: void {
  // GA4 event
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // GTM dataLayer push
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params
  });

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
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