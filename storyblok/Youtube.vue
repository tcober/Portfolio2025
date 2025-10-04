<template>
  <div class="my-8">
    <div
      v-if="videoId"
      class="relative w-full aspect-video bg-neutral-100 rounded-lg overflow-hidden shadow-md group"
    >
      <iframe
        :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`"
        :title="blok.title || 'YouTube video'"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="absolute inset-0 w-full h-full border-0 transition-transform duration-300 group-hover:scale-105"
      ></iframe>

      <!-- Play button overlay (optional, for visual enhancement) -->
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
      >
        <div
          class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
        >
          <svg
            class="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Video title and description -->
    <div v-if="blok.title || blok.description" class="mt-4">
      <h3 v-if="blok.title" class="text-lg font-semibold text-neutral-900 mb-2">
        {{ blok.title }}
      </h3>
      <p
        v-if="blok.description"
        class="text-neutral-600 text-sm leading-relaxed"
      >
        {{ blok.description }}
      </p>
    </div>

    <!-- Error state -->
    <div
      v-else
      class="bg-red-50 border border-red-200 rounded-lg p-6 text-center"
    >
      <div class="text-red-400 mb-2">
        <svg
          class="w-12 h-12 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p class="text-red-600 font-medium mb-1">Invalid YouTube URL</p>
      <p class="text-red-500 text-sm">
        Please check the video URL and try again.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// Extract video ID from various YouTube URL formats
const videoId = computed(() => {
  const url = props.blok.url;
  if (!url) return null;

  // Handle youtu.be share links: https://youtu.be/VIDEO_ID
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch) return youtuBeMatch[1];

  // Handle youtube.com watch links: https://www.youtube.com/watch?v=VIDEO_ID
  const youtubeMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (youtubeMatch) return youtubeMatch[1];

  // Handle embed links: https://www.youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];

  return null;
});
</script>

<style scoped>
/* Enhance the video container on hover */
.group:hover iframe {
  transform: scale(1.02);
}
</style>
