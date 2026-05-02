<template>
  <div class="min-h-screen diamond-bg">
    <main class="max-w-5xl mx-auto px-6 py-6">
      <LoadingSpinner v-if="loading" />

      <WellFuck v-else-if="error" :error="error" />

      <FeedFeed v-else class="mt-16" :posts="posts" />
    </main>
  </div>
</template>

<script setup>
import { fetchOgData } from "~/composables/useOgData";

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

const {
  data: posts,
  pending: loading,
  error,
} = await useAsyncData("feed-posts", async () => {
  const storyblokApi = useStoryblokApi();

  if (!storyblokApi) {
    throw new Error(
      "Storyblok API not initialized. Check your STORYBLOK_ACCESS_TOKEN environment variable.",
    );
  }

  const response = await storyblokApi.get("cdn/stories", {
    starts_with: "posts/",
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
    sort_by: "created_at:desc",
  });

  const stories = response.data.stories || [];

  // On server only: prefetch OG data for link-preview components
  if (import.meta.server) {
    await Promise.all(
      stories.map(async (story) => {
        if (story.content?.component === "link-preview" && story.content?.url) {
          story.content._ogData = await fetchOgData(story.content.url);
        }
      }),
    );
  }

  return stories;
});
</script>

<style scoped>
.diamond-bg {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect x='10' y='0' width='7' height='7' transform='rotate(45 10 3.5)' fill='%23e5e5e5'/%3E%3C/svg%3E");
  background-size: 20px 20px;
  background-attachment: fixed;
}
</style>
