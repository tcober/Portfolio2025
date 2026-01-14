<template>
  <div>
    <div class="image-gallery" :class="gridClasses">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="group overflow-hidden relative cursor-pointer"
        :class="imageClasses"
      >
        <NuxtImg
          provider="storyblok"
          placeholder
          :src="image.filename"
          :alt="image.alt"
          :title="image.title"
          :width="images.length === 1 ? 1200 : 800"
          :height="images.length === 1 ? 0 : 800"
          :modifiers="{ quality: 70 }"
          format="webp"
          sizes="sm:100vw md:50vw lg:800px"
          :preload="isLcpCandidate && index === 0"
          :loading="isLcpCandidate && index === 0 ? 'eager' : 'lazy'"
          class="w-full transition-all duration-500 touch-manipulation relative z-10"
          :class="imageDisplayClasses"
          @click="openLightbox(index)"
        />
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
  isLcpCandidate: {
    type: Boolean,
    default: false,
  },
});

// Handle the Multi-Assets field structure
const images = computed(() => {
  return props.blok.imageSet || [];
});

// Image item classes based on count
const imageClasses = computed(() => {
  const count = images.value.length;
  return {
    "hover:z-10 transform hover:scale-[1.02] aspect-square": count > 1,
    "single-image": count === 1,
  };
});

// Image display classes
const imageDisplayClasses = computed(() => {
  const count = images.value.length;
  return {
    "h-full object-cover group-hover:scale-110": count > 1,
    "h-auto object-contain rounded-lg": count === 1,
  };
});

// Grid layout based on number of images
const gridClasses = computed(() => {
  const count = images.value.length;
  if (count === 1) return "grid-cols-1 max-w-3xl mx-auto gap-0";
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
}

@media (min-width: 640px) {
  .image-gallery {
    padding: 0;
  }
}

/* Mobile-first responsive images - let aspect-square control the sizing */
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
</style>
