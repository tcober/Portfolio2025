import VueGtag, { trackRouter } from "vue-gtag-next";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-ZJ8DPDM2QV",
    },
  });

  // Track router page views
  trackRouter(nuxtApp.$router as any);
});
