<template>
  <div class="my-8">
    <div
      v-if="videoId"
      class="relative w-full aspect-video bg-gradient-to-br from-slate-800/40 via-slate-700/40 to-slate-600/40 backdrop-blur-xl border border-slate-600/30 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 group hover:shadow-blue-500/20 transition-all duration-300"
    >
      <iframe
        :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`"
        :title="blok.title || 'YouTube video'"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="absolute inset-0 w-full h-full border-0 rounded-3xl transition-transform duration-300 group-hover:scale-[1.02]"
      ></iframe>

      <!-- Enhanced play button overlay -->
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300 bg-black/10 backdrop-blur-sm"
      >
        <div
          class="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40 border-4 border-white/20"
        >
          <svg
            class="w-10 h-10 text-white ml-1"
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
