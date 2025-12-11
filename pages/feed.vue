<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-5xl mx-auto px-6 py-12">
      <!-- Feed Header -->
      <div class="mb-12">
        <h1 class="text-5xl font-bold text-black mb-2">Feed</h1>
        <div class="w-12 h-1 bg-black rounded-full"></div>
      </div>

      <LoadingSpinner v-if="loading" />

      <WellFuck v-else-if="error" :error="error" />

      <FeedFeed v-else :posts="posts" />
    </main>
  </div>
</template>

<script setup>
// SEO meta tags with useSeoMeta for better optimization
useSeoMeta({
  title: "Thomas Cober's Feed",
  description: "A bunch a shit I'm up to on my own platform because I can.",
  ogTitle: "Thomas Cober's Feed",
  ogDescription: "A bunch a shit I'm up to on my own platform because I can.",
  ogType: "website",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});

// Use useAsyncData directly for proper SSR/client hydration
const {
  data: posts,
  pending: loading,
  error,
} = await useAsyncData("feed-posts", async () => {
  try {
    const storyblokApi = useStoryblokApi();
    const response = await storyblokApi.get("cdn/stories", {
      starts_with: "posts/",
      version: process.env.NODE_ENV === "production" ? "published" : "draft",
      sort_by: "created_at:desc",
    });

    if (process.env.NODE_ENV !== "production") {
      console.log("Fetched posts:", response.data.stories?.length || 0);
    }

    return response.data.stories || [];
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error fetching posts:", err);
    }
    throw err;
  }
});
</script>
