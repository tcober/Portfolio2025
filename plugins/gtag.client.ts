export default defineNuxtPlugin(() => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-ZJ8DPDM2QV");
  }
});
