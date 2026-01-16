<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-5xl mx-auto px-6 py-6">
      <LoadingSpinner v-if="loading" />

      <WellFuck v-else-if="error" :error="error" />

      <FeedFeed v-else class="mt-16" :posts="posts" />
    </main>
  </div>
</template>

<script setup>
// SEO meta tags with useSeoMeta for better optimization
useSeoMeta({
  title: "Thomas Cober's Feed",
  description: "My life, projects, and random thoughts.",
  ogTitle: "Thomas Cober's Feed",
  ogDescription: "My life, projects, and random thoughts.",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage:
    "https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg",
  robots: "index, follow",
});

// Use useAsyncData directly for proper SSR/client hydration
// NuxtImg handles LCP preloading automatically via the preload prop in ImageSet.vue
const {
  data: posts,
  pending: loading,
  error,
} = await useAsyncData("feed-posts", async () => {
  const storyblokApi = useStoryblokApi();

  if (!storyblokApi) {
    throw new Error(
      "Storyblok API not initialized. Check your STORYBLOK_ACCESS_TOKEN environment variable."
    );
  }

  const response = await storyblokApi.get("cdn/stories", {
    starts_with: "posts/",
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
    sort_by: "created_at:desc",
  });

  return response.data.stories || [];
});
</script>
