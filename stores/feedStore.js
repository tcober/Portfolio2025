const CACHE_DURATION_MS = 5 * 60 * 1000;

export const useFeedStore = defineStore("feed", {
  state: () => ({
    posts: [],
    loading: false,
    error: null,
    lastFetchedAt: 0,
  }),
  actions: {
    async fetchPosts({ force = false } = {}) {
      if (this.loading) {
        return this.posts;
      }

      const shouldUseCache =
        !force &&
        this.posts.length > 0 &&
        Date.now() - this.lastFetchedAt < CACHE_DURATION_MS;
      if (shouldUseCache) {
        return this.posts;
      }

      this.loading = true;
      this.error = null;

      try {
        const storyblokApi = useStoryblokApi();
        const { data } = await storyblokApi.get("cdn/stories", {
          version: import.meta.dev ? "draft" : "published",
          starts_with: "posts/",
          sort_by: "first_published_at:desc",
        });

        this.posts = Array.isArray(data?.stories) ? data.stories : [];
        this.lastFetchedAt = Date.now();
        return this.posts;
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : "Unable to load posts";
        if (import.meta.dev) {
          // eslint-disable-next-line no-console
          console.error("feedStore.fetchPosts", error);
        }
        return [];
      } finally {
        this.loading = false;
      }
    },
  },
});
