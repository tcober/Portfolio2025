export default defineNuxtPlugin(async () => {
  // Only run on server-side during build
  if (process.server && process.env.NODE_ENV === "production") {
    const storyblokApi = useStoryblokApi();

    try {
      // Fetch all posts for sitemap
      const response = await storyblokApi.get("cdn/stories", {
        starts_with: "posts/",
        version: "published",
      });

      const posts = response.data.stories || [];

      // Store posts data for sitemap generation
      useNuxtData("sitemap-posts", () => posts);
    } catch (error) {
      console.warn("Failed to fetch posts for sitemap:", error);
    }
  }
});
