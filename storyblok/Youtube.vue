<template>
  <div
    v-if="videoId"
    ref="videoContainer"
    class="relative w-full aspect-video overflow-hidden group rounded-lg"
  >
    <!-- Facade: Show thumbnail until user clicks to play -->
    <button
      v-if="!isPlaying"
      type="button"
      class="absolute inset-0 w-full h-full cursor-pointer bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
      :aria-label="`Play ${blok.title || 'YouTube video'}`"
      @click="playVideo"
    >
      <!-- YouTube thumbnail -->
      <img
        v-if="isVisible"
        :src="`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`"
        :alt="blok.title || 'YouTube video thumbnail'"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        :loading="thumbnailLoading"
        :fetchpriority="thumbnailFetchPriority"
      />
      <!-- Play button overlay -->
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30"
      >
        <div
          class="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
        >
          <svg
            class="w-8 h-8 md:w-10 md:h-10 text-white translate-x-[2%]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>

    <!-- Actual iframe only loads after user clicks -->
    <iframe
      v-if="isPlaying"
      :src="`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`"
      :title="blok.title || 'YouTube video'"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
      "
      allowfullscreen
      class="absolute inset-0 w-full h-full border-0"
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
  isLcpCandidate: {
    type: Boolean,
    default: false,
  },
});

const videoContainer = ref(null);
const isVisible = ref(props.isLcpCandidate);
const isPlaying = ref(false);
let observer = null;

const thumbnailLoading = computed(() =>
  props.isLcpCandidate ? "eager" : "lazy",
);

const thumbnailFetchPriority = computed(() =>
  props.isLcpCandidate ? "high" : "auto",
);

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

  // Handle Shorts links: https://youtube.com/shorts/VIDEO_ID
  const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return shortsMatch[1];

  return null;
});

const playVideo = () => {
  isPlaying.value = true;
};

// Lazy load thumbnail when it becomes visible
onMounted(() => {
  if (!import.meta.client || !videoContainer.value || props.isLcpCandidate) {
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: "50px",
    },
  );

  observer.observe(videoContainer.value);
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
