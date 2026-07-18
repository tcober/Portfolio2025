<template>
  <a
    :href="blok.url"
    target="_blank"
    rel="noopener noreferrer"
    class="flex h-32 rounded-none border-2 border-brand-950 overflow-hidden hover:border-brand-600 transition-colors no-underline not-prose bg-white"
  >
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="displayTitle"
      class="w-32 object-cover flex-shrink-0"
    />
    <div
      v-if="!imageUrl"
      class="w-32 flex-shrink-0 bg-brand-700 flex items-center justify-center text-2xl font-bold text-white"
    >
      {{ siteInitial }}
    </div>
    <div class="flex flex-col justify-center p-4 min-w-0 gap-1">
      <span class="text-xs text-gray-500">{{ displaySiteName }}</span>
      <span class="font-semibold text-black truncate">{{ displayTitle }}</span>
      <span
        v-if="ogData?.description"
        class="text-sm text-gray-600 line-clamp-2"
        >{{ ogData.description }}</span
      >
    </div>
  </a>
</template>

<script setup>
import { computed, ref } from "vue";

/**
 * blok structure:
 * {
 *   url: string (required)
 *   _ogData?: object (optional, prefetched during posts load)
 * }
 */
const props = defineProps({
  blok: {
    type: Object,
    required: true,
    validator: (blok) => blok && typeof blok.url === "string",
  },
});

// Use embedded OG data if available (prefetched in feed.vue)
// This is the primary path for feed page - data comes from posts payload
const ogData = props.blok._ogData
  ? ref(props.blok._ogData)
  : (await useOgData(props.blok.url)).data;

// Safely extract image URL (already validated on server)
const imageUrl = computed(() => ogData.value?.image ?? null);

const displaySiteName = computed(() => {
  if (ogData.value?.siteName) return ogData.value.siteName;
  try {
    return new URL(props.blok.url).hostname.replace("www.", "");
  } catch {
    return props.blok.url;
  }
});

const displayTitle = computed(() => ogData.value?.title ?? props.blok.url);

const siteInitial = computed(() =>
  displaySiteName.value.charAt(0).toUpperCase(),
);
</script>
