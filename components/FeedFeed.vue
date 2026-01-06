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
          class="absolute left-1/2 transform -translate-x-1/2 -translate-y-9 z-20"
        >
          <div
            class="text-sm text-slate-950 bg-white px-2 py-1 whitespace-nowrap"
          >
            {{ formattedDates[index] }}
          </div>
        </div>

        <div :class="postOffset(index)">
          <div :class="getCardClass(post.content)">
            <StoryblokComponent :blok="post.content" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from "~/utils/dateFormatter";
import { ref, onMounted } from "vue";

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

// Conditionally apply card class based on content type
const getCardClass = (content) => {
  if (!content) return "card";

  const componentType = content.component;
  const imageSetLength = content.imageSet?.length;

  // No card border for Youtube or single-image ImageSet
  if (componentType === "youtube") return "";
  if (componentType === "imageSet" && imageSetLength === 1) return "";

  // Card border for Quote and multi-image ImageSet
  return "card";
};

// Memoize formatted dates to avoid recalculating on every render
// Use ref to handle SSR hydration properly
const formattedDates = ref([]);

onMounted(() => {
  formattedDates.value = props.posts.map((post) =>
    formatDate(post.published_at)
  );
});

// Scroll animation observer for posts
useScrollAnimation(".animate-on-scroll", () => props.posts?.length || 0);
</script>
