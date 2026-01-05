// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      storyblokAccessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    },
  },

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
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      content: ["content/**/*.md", "storyblok/**/*.vue"],
    },
  },
  googleFonts: {
    families: {
      "Lilita One": [400],
      "PT Mono": [400],
      Merriweather: [300, 400, 700, 900],
    },
    display: "swap",
    preconnect: true,
    prefetch: true,
    download: true,
    base64: false,
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
