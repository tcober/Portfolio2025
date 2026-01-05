declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default defineNuxtPlugin(() => {
  // Load gtag.js script
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZJ8DPDM2QV";
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", "G-ZJ8DPDM2QV", {
    send_page_view: true,
  });

  // Track page views on route change
  const router = useRouter();
  router.afterEach((to) => {
    gtag("config", "G-ZJ8DPDM2QV", {
      page_path: to.fullPath,
    });
  });
});
