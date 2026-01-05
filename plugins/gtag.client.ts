import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-ZJ8DPDM2QV",
    },
    useDebugger: process.env.NODE_ENV === "development",
  });
});
