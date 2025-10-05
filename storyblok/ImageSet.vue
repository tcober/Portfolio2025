<template>
  <div class="my-8">
    <div class="image-gallery" :class="gridClasses">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="group overflow-hidden rounded-lg bg-neutral-100 aspect-square md:aspect-auto"
      >
        <img
          :src="image.filename"
          :alt="image.alt || image.name || `Image ${index + 1}`"
          :title="image.title || image.name"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
          @click="openLightbox(image, index)"
        />
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
        @click="closeLightbox"
      >
        <div class="relative max-w-4xl max-h-full" @click.stop>
          <img
            :src="currentImage?.filename"
            :alt="currentImage?.alt || currentImage?.name"
            class="max-w-full max-h-full object-contain rounded-lg"
            @click.stop
          />
          <button
            @click="closeLightbox"
            class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Navigation arrows for multiple images -->
          <template v-if="images.length > 1">
            <button
              v-if="currentIndex > 0"
              @click.stop="navigateImage(-1)"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              v-if="currentIndex < images.length - 1"
              @click.stop="navigateImage(1)"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </template>

          <!-- Image counter -->
          <div
            v-if="images.length > 1"
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 rounded-full px-3 py-1 text-sm"
          >
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";

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
  if (count === 1) return "grid-cols-1 max-w-2xl mx-auto";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  if (count === 3) return "grid-cols-1 md:grid-cols-3";
  return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
});

// Lightbox functionality
const lightboxOpen = ref(false);
const currentImage = ref(null);
const currentIndex = ref(0);

// Composable for scroll lock
function useBodyScrollLock() {
  const lock = () => document.body.classList.add("scroll-lock");
  const unlock = () => document.body.classList.remove("scroll-lock");
  return { lock, unlock };
}
const { lock, unlock } = useBodyScrollLock();

const openLightbox = (image, index) => {
  currentImage.value = image;
  currentIndex.value = index;
  lightboxOpen.value = true;
  lock();
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  currentImage.value = null;
  unlock();
};

const navigateImage = (direction) => {
  const newIndex = currentIndex.value + direction;
  if (newIndex >= 0 && newIndex < images.value.length) {
    currentIndex.value = newIndex;
    currentImage.value = images.value[newIndex];
  }
};

// Close lightbox with escape key
onMounted(() => {
  const handleKeydown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateImage(-1);
    if (e.key === "ArrowRight") navigateImage(1);
  };

  document.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
    unlock();
  });
});
</script>

<style scoped>
/* Custom grid for better image display */
.image-gallery {
  display: grid;
  gap: 1rem;
}

@media (min-width: 768px) {
  .image-gallery img {
    height: 300px;
  }
}

/* Prevent body scroll when lightbox is open */
:global(body.scroll-lock) {
  overflow: hidden;
}
</style>
