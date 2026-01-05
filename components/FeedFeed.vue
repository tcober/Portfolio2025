<template>
  <div class="relative">
    <!-- Timeline line -->
    <div
      class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black z-0"
    ></div>

    <div class="space-y-24">
      <article
        v-for="(post, index) in posts"
        :key="post.id"
        :class="getArticleClasses(index)"
        :style="postLoadingAnimation(index)"
      >
        <!-- Date centered on timeline -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 z-20"
        >
          <div
            class="text-sm text-slate-950 bg-white px-2 py-1 whitespace-nowrap"
          >
            {{ formattedDates[index] }}
          </div>
        </div>

        <div :class="postOffset(index)">
          <div class="card cursor-pointer" @click="trackPostClick(post)">
            <StoryblokComponent :blok="post.content" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from "~/utils/dateFormatter";
import { computed } from "vue";
import { useGtag } from "vue-gtag-next";

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

// Helper functions for styling
const getArticleClasses = (index) => [
  "relative animate-on-scroll",
  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto",
];

const postLoadingAnimation = (index) => ({
  animationDelay: `${index * 200}ms`,
});

const postOffset = (index) => [
  "relative",
  index % 2 === 0 ? "md:mr-12" : "md:ml-12",
];

// Memoize formatted dates to avoid recalculating on every render
const formattedDates = computed(() => {
  return props.posts.map((post) => formatDate(post.published_at));
});

// Scroll animation observer for posts
useScrollAnimation(".animate-on-scroll", () => props.posts?.length || 0);

// Track post clicks with Google Analytics
const { event } = useGtag();
const trackPostClick = (post) => {
  event("post_click", {
    post_title: post.name,
    post_slug: post.slug,
    post_id: post.id,
    event_category: "feed",
    event_label: post.name,
  });
};
</script>
