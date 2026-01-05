<template>
  <div>
    <div class="image-gallery" :class="gridClasses">
      <div
        v-for="image in images"
        :key="image.id"
        class="group overflow-hidden aspect-square relative cursor-pointer transform hover:scale-[1.02]"
        :class="imageClasses"
      >
        <NuxtImg
          :src="image.filename"
          :alt="image.alt"
          :title="image.title"
          provider="storyblok"
          sizes="xs:100vw sm:50vw md:33vw lg:25vw"
          :width="800"
          :height="800"
          fit="cover"
          quality="80"
          format="webp"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 touch-manipulation relative z-10"
          loading="lazy"
          decoding="async"
          @click="openLightbox(images.indexOf(image))"
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
});

// Handle the Multi-Assets field structure
const images = computed(() => {
  return props.blok.imageSet || [];
});

// Image item classes based on count
const imageClasses = computed(() => {
  return {
    "hover:z-10": images.value.length > 1,
    "single-image": images.value.length === 1,
  };
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
