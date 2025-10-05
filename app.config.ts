export default defineAppConfig({
  // Site configuration
  site: {
    name: "Portfolio 2025",
    author: "Thomas Cober",
    description:
      "A portfolio showcasing my professional journey, projects, and thoughts through an interactive timeline.",
    url:
      process.env.NUXT_PUBLIC_SITE_URL || "https://portfolio2025.netlify.app",
  },

  // Social links
  social: {
    github: "https://github.com/thomascober",
    linkedin: "https://linkedin.com/in/thomascober",
  },

  // UI configuration
  ui: {
    primary: "indigo",
    gray: "neutral",
  },

  // Timeline configuration
  timeline: {
    postsPerPage: 20,
    animationDelay: 200,
  },
});
