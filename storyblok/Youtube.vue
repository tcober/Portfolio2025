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
