import { defineStore } from "pinia";import { defineStore } from "pinia";import { defineStore } from "pinia";



export const useFeedStore = defineStore("feed", () => {import { ref, readonly, computed } from "vue";

  const posts = ref([]);

  const loading = ref(false);// Simple store for potential future use

  const error = ref(null);

// Currently using direct useAsyncData in pages/index.vueexport const useFeedStore = defineStore("feed", () => {

  const fetchPosts = async () => {

    loading.value = true;export const useFeedStore = defineStore("feed", () => {  const posts = ref([]);

    error.value = null;

  const posts = ref([]);  const loading = ref(false);

    try {

      const storyblokApi = useStoryblokApi();  const loading = ref(false);  const error = ref(null);

      const response = await storyblokApi.get("cdn/stories", {

        starts_with: "posts/",  const error = ref(null);  const lastFetch = ref(null);

        version: process.env.NODE_ENV === "production" ? "published" : "draft",

        sort_by: "created_at:desc",  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

      });

  const fetchPosts = async () => {

      posts.value = response.data.stories || [];

      return posts.value;    loading.value = true;  const isCacheValid = () => {

    } catch (err) {

      error.value = err instanceof Error ? err.message : "Failed to fetch posts";    error.value = null;    if (!lastFetch.value) return false;

      console.error("Error fetching posts:", err);

      return [];    return Date.now() - lastFetch.value < CACHE_DURATION;

    } finally {

      loading.value = false;    try {  };

    }

  };      const storyblokApi = useStoryblokApi();



  return {      const response = await storyblokApi.get("cdn/stories", {  const fetchPosts = async (options = {}) => {

    posts,

    loading,        starts_with: "posts/",    const { force = false } = options;

    error,

    fetchPosts,        version: process.env.NODE_ENV === "production" ? "published" : "draft",

  };

});        sort_by: "created_at:desc",    // Return cached data if valid and not forcing refresh

      });      }

      return posts.value;

      posts.value = response.data.stories || [];    }

      return posts.value;

    } catch (err) {    loading.value = true;

      error.value = err instanceof Error ? err.message : "Failed to fetch posts";    error.value = null;

      console.error("Error fetching posts:", err);

      return [];    try {

    } finally {      const storyblokApi = useStoryblokApi();

      loading.value = false;

    }      const response = await storyblokApi.get("cdn/stories", {

  };        starts_with: "posts/",

        version: process.env.NODE_ENV === "production" ? "published" : "draft",

  return {        sort_by: "created_at:desc",

    posts,      });

    loading,

    error,      posts.value = response.data.stories || [];

    fetchPosts,      lastFetch.value = Date.now();

  };      }

});
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
