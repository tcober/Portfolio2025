// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Route rules for hybrid rendering and performance optimization
  routeRules: {
    "/": { prerender: true },
    "/resume": { prerender: true },
    // The feed is gone; send old links home.
    "/feed": { redirect: { to: "/", statusCode: 301 } },
  },

  // Performance optimizations
  experimental: {
    defaults: {
      nuxtLink: {
        prefetchOn: { interaction: true },
      },
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-gtag",
    "@nuxtjs/sitemap",
  ],

  // The profile photo is still served from Storyblok's image CDN
  image: {
    storyblok: {
      baseURL: "https://a-us.storyblok.com",
    },
  },
  site: {
    url: "https://thomascober.com",
  },
  gtag: {
    id: "G-ZJ8DPDM2QV",
    loadingStrategy: "defer",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  // App configuration for SEO and meta defaults
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Portfolio 2025 - Thomas Cober",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "google-site-verification",
          content: "9Agzu25KvRoSoVnG79Lq6hpJUAQMJrlkA5Xn80Fgop4",
        },
        { name: "author", content: "Thomas Cober" },
        { name: "theme-color", content: "#174832" },
        { name: "robots", content: "noai, noimageai" },
        { name: "googlebot", content: "noai, noimageai" },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Elms+Sans:ital,wght@0,100..900;1,100..900&display=swap",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/favicon.png",
        },
        {
          rel: "preconnect",
          href: "https://a-us.storyblok.com",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  // CSS configuration for better performance
  css: ["~/assets/css/tailwind.css"],

  // Enable compression and optimization
  nitro: {
    compressPublicAssets: true,
    preset: "netlify",
  },

  // Optimize CSS delivery
  features: {
    inlineStyles: true,
  },
});
