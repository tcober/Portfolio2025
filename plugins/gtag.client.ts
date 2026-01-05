declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const gtagId = "G-ZJ8DPDM2QV";

export default defineNuxtPlugin(() => {
  // Create gtag function & define gtag deps (window.dataLayer array)
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());

  // Config with gtagId & send initial page view
  gtag("config", gtagId, { send_page_view: true });

  // Inject gtag function
  return { provide: { gtag } };
});
