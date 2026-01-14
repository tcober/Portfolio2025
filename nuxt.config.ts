// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Route rules for hybrid rendering and performance optimization
  routeRules: {
    "/": { prerender: true },
    "/resume": { prerender: true },
    "/feed": { prerender: true },
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
    "nuxt-gtag",
    "@nuxtjs/sitemap",
  ],
  sitemap: {
    siteUrl: "https://thomascober.com",
  },
  gtag: {
    id: "G-ZJ8DPDM2QV",
  },
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
        { name: "google-site-verification", content: "9Agzu25KvRoSoVnG79Lq6hpJUAQMJrlkA5Xn80Fgop4" },
        { name: "author", content: "Thomas Cober" },
        { name: "theme-color", content: "#6366f1" },
        { name: "robots", content: "noai, noimageai" },
        { name: "googlebot", content: "noai, noimageai" },
      ],
      link: [
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
          rel: "dns-prefetch",
          href: "https://www.youtube.com",
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

  // Build optimizations
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            storyblok: ["@storyblok/vue"],
          },
        },
      },
    },
  },

  // Optimize CSS delivery
  features: {
    inlineStyles: true,
  },
});
