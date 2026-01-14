<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-5xl mx-auto px-6 py-6">
      <!-- Feed Header -->
      <div class="mb-16">
        <h1 class="text-5xl font-bold text-black mb-2">Timeline</h1>
        <div class="w-12 h-1 bg-black rounded-full"></div>
      </div>

      <LoadingSpinner v-if="loading" />

      <WellFuck v-else-if="error" :error="error" />

      <FeedFeed v-else :posts="posts" />
    </main>
  </div>
</template>

<script setup>
// Helper to get optimized Storyblok image URL
const getOptimizedImageUrl = (url, width, height) => {
  if (!url) return "";
  return `${url}/m/${width}x${height}/filters:quality(70):format(webp)`;
};

// Helper to find the LCP image URL from posts
const findLcpImageUrl = (posts) => {
  if (!posts?.length) return null;
  for (const post of posts) {
    if (post.content?.component === "imageSet" && post.content?.imageSet?.length) {
      const firstImage = post.content.imageSet[0];
      const isSingleImage = post.content.imageSet.length === 1;
      const width = isSingleImage ? 1200 : 800;
      const height = isSingleImage ? 0 : 800;
      return getOptimizedImageUrl(firstImage.filename, width, height);
    }
  }
  return null;
};

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
const {
  data: feedData,
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

  const stories = response.data.stories || [];
  const lcpUrl = findLcpImageUrl(stories);

  return { posts: stories, lcpImageUrl: lcpUrl };
});

// Extract posts for template
const posts = computed(() => feedData.value?.posts || []);

// Add preload link for LCP image during SSR
if (feedData.value?.lcpImageUrl) {
  useHead({
    link: [
      {
        rel: "preload",
        as: "image",
        href: feedData.value.lcpImageUrl,
        fetchpriority: "high",
      },
    ],
  });
}
</script>
