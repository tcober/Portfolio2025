// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "eLrZdcGSol1ru8U12JRKKwtt",
        apiOptions: {
          region: "us",
        },
      },
    ],
    "@pinia/nuxt",
  ],
});
