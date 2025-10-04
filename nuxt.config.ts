// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
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
    "@pinia/nuxt",
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
});
