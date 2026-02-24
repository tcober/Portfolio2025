<template>
  <a
    :href="blok.url"
    target="_blank"
    rel="noopener noreferrer"
    class="flex h-32 rounded-2xl border border-gray-500 overflow-hidden hover:border-blue-600 transition-colors no-underline not-prose bg-white"
  >
    <img
      v-if="showImage"
      :src="imageUrl"
      :alt="displayTitle"
      class="w-32 object-cover flex-shrink-0"
      @error="onImageError"
    />
    <div
      v-else
      class="w-32 flex-shrink-0 bg-blue-700 flex items-center justify-center text-2xl font-bold text-white"
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
 * }
 */
const props = defineProps({
  blok: {
    type: Object,
    required: true,
    validator: (blok) => blok && typeof blok.url === "string",
  },
});

const { data: ogData, status } = await useOgData(props.blok.url);

const pending = computed(() => status.value === "pending");

const imageError = ref(false);
const onImageError = () => {
  imageError.value = true;
};

// Safely extract image URL
const imageUrl = computed(() => ogData.value?.image ?? null);

const showImage = computed(
  () => !pending.value && !!imageUrl.value && !imageError.value,
);

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
