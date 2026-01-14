<template>
  <div
    v-if="videoId"
    ref="videoContainer"
    class="relative w-full aspect-video overflow-hidden group"
  >
    <iframe
      v-if="isLoaded"
      :src="`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`"
      :title="blok.title || 'YouTube video'"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
      class="absolute inset-0 w-full h-full border-0 rounded-3xl transition-transform duration-300 group-hover:scale-[1.02]"
    ></iframe>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const videoContainer = ref(null);
const isLoaded = ref(false);
let observer = null;

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

// Lazy load iframe when it becomes visible
onMounted(() => {
  if (!import.meta.client || !videoContainer.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoaded.value) {
          isLoaded.value = true;
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: "50px", // Start loading 50px before it's visible
    }
  );

  observer.observe(videoContainer.value);
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
