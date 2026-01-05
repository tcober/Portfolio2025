declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default defineNuxtPlugin(() => {
  // Initialize dataLayer and gtag function before the script loads
  window.dataLayer = window.dataLayer || [];

  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  // Initialize Google Analytics
  gtag('js', new Date());
  gtag('config', 'G-ZJ8DPDM2QV', {
    // Debug mode for localhost
    debug_mode: window.location.hostname === 'localhost'
  });

  // Return the provide object so gtag is available in components
  return {
    provide: {
      gtag
    }
  };
});
