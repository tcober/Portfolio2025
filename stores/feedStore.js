import { defineStore } from "pinia";
import { ref, readonly, computed } from "vue";

export const useFeedStore = defineStore("feed", () => {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const lastFetch = ref(null);
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  const isCacheValid = () => {
    if (!lastFetch.value) return false;
    return Date.now() - lastFetch.value < CACHE_DURATION;
  };

  const fetchPosts = async (options = {}) => {
    const { force = false } = options;

    // Return cached data if valid and not forcing refresh
      }
      return posts.value;
    }

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
      lastFetch.value = Date.now();
      }

      return posts.value;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch posts";
      error.value = errorMessage;
      console.error("❌ Error fetching posts:", err);

      // Return empty array on error to prevent template issues
      return [];
    } finally {
      loading.value = false;
    }
  };

  const refreshPosts = () => {
    return fetchPosts({ force: true });
  };

  const clearCache = () => {
    posts.value = [];
    lastFetch.value = null;
    error.value = null;
  };

  return {
    // State - Remove readonly to allow proper hydration
    posts,
    loading: readonly(loading),
    error: readonly(error),

    // Getters
    postsCount: computed(() => posts.value.length),
    isDataFresh: computed(() => isCacheValid()),

    // State
    // 'posts' is intentionally mutable to support Nuxt/Pinia hydration and updates,
    // while 'loading' and 'error' are exposed as readonly for safety.
    posts,
    loading: readonly(loading),
    error: readonly(error),
  };
});
