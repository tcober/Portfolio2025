<template>
  <div class="relative">
    <!-- Timeline line -->
    <div
      class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black z-0"
    ></div>

    <div class="space-y-12">
      <article
        v-for="(post, index) in posts"
        :key="post.id"
        :class="getArticleClasses(index)"
        :style="postLoadingAnimation(index)"
      >
        <div :class="postOffset(index)">
          <div class="card">
            <StoryblokComponent :blok="post.content" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
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

// Scroll animation observer for posts
useScrollAnimation(".animate-on-scroll", () => props.posts?.length || 0);
</script>
