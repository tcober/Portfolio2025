// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },


  // Route rules for hybrid rendering and performance optimization
  routeRules: {
    "/": { prerender: true },
    "/resume": { prerender: true },
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
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: {
          region: "us",
        },
        // Only use the bridge in development, not in production builds
        bridge: process.env.NODE_ENV !== "production",
        // Use version parameter to control which content version to fetch
        useApiClient: true,
      },
    ],
    "@nuxtjs/tailwindcss",
    [
      "@nuxt/image",
      {
        storyblok: {
          baseURL: "https://a-us.storyblok.com",
        },
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
        },
        quality: 80,
        format: ["webp"],
      },
    ],
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      content: ["content/**/*.md", "storyblok/**/*.vue"],
    },
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
        { name: "author", content: "Thomas Cober" },
        { name: "theme-color", content: "#6366f1" },
        { name: "robots", content: "noai, noimageai" },
        { name: "googlebot", content: "noai, noimageai" },
      ],
      script: [
        {
          defer: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-ZJ8DPDM2QV",
          async: true,
        },
      ],
    },
  },

  // CSS configuration for better performance
  css: ["~/assets/css/tailwind.css"],

  // Enable compression and optimization
  nitro: {
    compressPublicAssets: true,
  },
});
