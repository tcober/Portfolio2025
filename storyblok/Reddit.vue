<template>
  <div
    ref="videoContainer"
    class="relative w-full aspect-video overflow-hidden group rounded-3xl bg-black"
  >
    <div v-if="error" class="absolute inset-0 flex items-center justify-center p-4">
      <div class="text-red-500 text-sm">{{ error }}</div>
    </div>
    <div v-else-if="isLoading" class="absolute inset-0 flex items-center justify-center">
      <div class="text-white">Loading video...</div>
    </div>
    <iframe
      v-else-if="videoData && videoData.type === 'streamable'"
      :src="videoData.embedUrl"
      :title="blok.title || 'Streamable video'"
      allowfullscreen
      loading="lazy"
      class="absolute inset-0 w-full h-full border-0 rounded-3xl transition-transform duration-300 group-hover:scale-[1.02]"
    ></iframe>
    <video
      v-else-if="videoData && videoData.type === 'reddit'"
      :key="videoData.video"
      controls
      playsinline
      preload="metadata"
      class="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02] rounded-3xl"
    >
      <source :src="videoData.video" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div v-else class="absolute inset-0 flex items-center justify-center">
      <div class="text-white text-sm">Waiting to load...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const videoContainer = ref(null);
const isLoaded = ref(false);
const isLoading = ref(false);
const videoData = ref(null);
const error = ref(null);
let observer = null;

// Fetch video URL from Reddit's JSON API using a CORS proxy
const fetchVideoData = async () => {
  const url = props.blok.url;
  if (!url) {
    error.value = 'No URL provided';
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    const cleanUrl = url.split('?')[0];
    const jsonUrl = `${cleanUrl}.json`;
    const corsProxy = 'https://corsproxy.io/?';

    const response = await fetch(corsProxy + encodeURIComponent(jsonUrl), {
      headers: { 'Accept': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const post = data[0]?.data?.children?.[0]?.data;

    // Check for Reddit-hosted video
    const redditVideo = post?.media?.reddit_video || post?.secure_media?.reddit_video;
    if (redditVideo) {
      videoData.value = {
        video: redditVideo.fallback_url,
        width: redditVideo.width,
        height: redditVideo.height,
        type: 'reddit'
      };
      return;
    }

    // Check for external video services (Streamable, etc.)
    if (post?.url) {
      const externalUrl = post.url;

      if (externalUrl.includes('streamable.com')) {
        const streamableId = externalUrl.split('/').pop();
        videoData.value = {
          video: externalUrl,
          type: 'streamable',
          embedUrl: `https://streamable.com/e/${streamableId}`
        };
        return;
      }

      error.value = 'This video source is not yet supported';
      return;
    }

    error.value = 'No video found in this Reddit post';
  } catch (err) {
    console.error('Error fetching Reddit video:', err);
    error.value = `Failed to load video: ${err.message}`;
  } finally {
    isLoading.value = false;
  }
};

// Lazy load video when it becomes visible
onMounted(() => {
  if (!import.meta.client || !videoContainer.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoaded.value) {
          isLoaded.value = true;
          fetchVideoData();
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

// Watch for URL changes
watch(() => props.blok.url, () => {
  if (isLoaded.value) {
    videoData.value = null;
    fetchVideoData();
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
