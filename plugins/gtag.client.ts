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
    window.dataLayer.push(args);
  }

  window.gtag = gtag;

  // Return the provide object so gtag is available in components
  return {
    provide: {
      gtag
    }
  };
});
