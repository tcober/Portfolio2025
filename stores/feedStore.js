import { defineStore } from "pinia";
import { ref } from "vue";

// Simple store for potential future use
// Currently using direct useAsyncData in pages/index.vue
export const useFeedStore = defineStore("feed", () => {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchPosts = async () => {
    loading.value = true;
    error.value = null;

    try {
      const storyblokApi = useStoryblokApi();
      const response = await storyblokApi.get("cdn/stories", {
        starts_with: "posts/",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        sort_by: "created_at:desc",
      });

      posts.value = response.data.stories || [];
      return posts.value;
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : "Failed to fetch posts";
      console.error("Error fetching posts:", err);
      return [];
    } finally {
      loading.value = false;
    }
  };

  return {
    posts,
    loading,
    error,
    fetchPosts,
  };
});
