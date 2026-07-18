<template>
  <div class="min-h-screen timeline-page blueprint-grid-light">
    <main class="mx-auto max-w-5xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
      <header class="mb-14 border-b border-dashed border-brand-950 pb-5 sm:mb-16">
        <h1 class="timeline-title font-bold text-brand-950">
          Timeline<span class="accent-mark">.</span>
        </h1>
      </header>

      <LoadingSpinner v-if="loading" />

      <WellFuck v-else-if="error" :error="error" />

      <FeedFeed v-else :posts="posts" />
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
.timeline-title {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  line-height: 1;
  letter-spacing: 0;
}

.accent-mark {
  color: var(--color-accent-pink-strong);
}
</style>
