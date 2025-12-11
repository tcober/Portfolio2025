<template>
  <div class="my-6">
    <div class="image-gallery" :class="gridClasses">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="glass-card-hover group overflow-hidden aspect-square relative cursor-pointer transform hover:scale-[1.02]"
        :class="{
          'hover:z-10': images.length > 1,
          'single-image': images.length === 1,
        }"
      >
        <!-- Image with enhanced interactions -->
        <img
          :src="image.filename"
          :alt="image.alt || image.name || `Image ${index + 1}`"
          :title="image.title || image.name"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 touch-manipulation relative z-10"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
          @click="openLightbox(index)"
        />

        <!-- Hover overlay with expand icon -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-black/0 to-black/20 group-hover:from-black/20 group-hover:to-black/40 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
        >
          <div
            class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl shadow-blue-500/20"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              ></path>
            </svg>
          </div>
        </div>

        <!-- Image counter badge for multiple images -->
        <div
          v-if="images.length > 1"
          class="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm"
        >
          {{ index + 1 }}
        </div>
      </div>
    </div>

    <!-- Lightbox Component -->
    <LightBox
      :images="images"
      :is-open="lightboxOpen"
      :initial-index="currentIndex"
      @close="closeLightbox"
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// Handle the Multi-Assets field structure
const images = computed(() => {
  return props.blok.imageSet || [];
});

// Grid layout based on number of images
const gridClasses = computed(() => {
  const count = images.value.length;
  if (count === 1) return "grid-cols-1 max-w-md sm:max-w-lg mx-auto gap-0";
  if (count === 2) return "grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3";
  if (count === 3) return "grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3";
  if (count === 4)
    return "grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3";
  return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3";
});

// Lightbox state
const lightboxOpen = ref(false);
const currentIndex = ref(0);

const openLightbox = (index) => {
  currentIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};
</script>

<style scoped>
/* Custom grid for better image display */
.image-gallery {
  display: grid;
  padding: 0 0.5rem;
}

@media (min-width: 640px) {
  .image-gallery {
    padding: 0;
  }
}

/* Mobile-first responsive images */
.image-gallery img {
  min-height: 180px;
}

@media (min-width: 640px) {
  .image-gallery img {
    min-height: 220px;
  }
}

@media (min-width: 768px) {
  .image-gallery img {
    min-height: 280px;
  }
}

/* Smooth image loading animation */
.image-gallery img {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effects */
.group:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Improve touch targets for mobile */
@media (max-width: 640px) {
  .image-gallery .group {
    min-height: 150px;
  }
}
</style>
