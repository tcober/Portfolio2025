<template>
  <div class="my-6">
    <div class="image-gallery" :class="gridClasses">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="group overflow-hidden rounded-xl bg-slate-700 aspect-square relative cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
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
          @click="openLightbox(image, index)"
        />

        <!-- Hover overlay with expand icon -->
        <div
          class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
        >
          <div
            class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3 backdrop-blur-sm"
          >
            <svg
              class="w-5 h-5 text-slate-700"
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

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-98 p-4 backdrop-blur-sm"
        @click="closeLightbox"
      >
        <!-- Loading indicator for lightbox -->
        <div
          v-if="lightboxLoading"
          class="absolute inset-0 flex items-center justify-center"
        >
          <div class="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-md">
            <div
              class="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-3"
            ></div>
            <p class="text-white text-sm font-medium">Loading image...</p>
          </div>
        </div>

        <div
          class="relative w-full h-full max-w-6xl flex items-center justify-center"
          @click.stop
        >
          <img
            :src="currentImage?.filename"
            :alt="currentImage?.alt || currentImage?.name"
            class="max-w-full max-h-full object-contain rounded-xl shadow-2xl touch-manipulation transition-opacity duration-300"
            :class="{
              'opacity-0': lightboxLoading,
              'opacity-100': !lightboxLoading,
            }"
            @click.stop
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
            @load="lightboxLoading = false"
            @loadstart="lightboxLoading = true"
          />
          <button
            @click="closeLightbox"
            class="absolute top-4 right-4 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-3 transition-all duration-200 touch-manipulation z-20 backdrop-blur-sm hover:scale-110"
            aria-label="Close lightbox"
            type="button"
            tabindex="0"
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
              class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-4 transition-all duration-200 touch-manipulation z-20 backdrop-blur-sm hover:scale-110"
              aria-label="Previous image"
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
              class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-4 transition-all duration-200 touch-manipulation z-20 backdrop-blur-sm hover:scale-110"
              aria-label="Next image"
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
          <!-- Enhanced image counter with dots indicator -->
          <div
            v-if="images.length > 1"
            class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div
              class="bg-black bg-opacity-60 rounded-2xl px-4 py-2 backdrop-blur-sm"
            >
              <div class="text-white text-sm font-medium mb-2 text-center">
                {{ currentIndex + 1 }} / {{ images.length }}
              </div>
              <!-- Dot indicators -->
              <div class="flex space-x-1 justify-center">
                <button
                  v-for="(_, dotIndex) in images"
                  :key="dotIndex"
                  @click.stop="navigateToImage(dotIndex)"
                  class="w-2 h-2 rounded-full transition-all duration-200 touch-manipulation"
                  :class="{
                    'bg-white': dotIndex === currentIndex,
                    'bg-white bg-opacity-40 hover:bg-opacity-60':
                      dotIndex !== currentIndex,
                  }"
                  :aria-label="`Go to image ${dotIndex + 1}`"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from "vue";

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

// Grid layout based on number of images with tighter mobile spacing
const gridClasses = computed(() => {
  const count = images.value.length;
  if (count === 1) return "grid-cols-1 max-w-md sm:max-w-lg mx-auto gap-0";
  if (count === 2) return "grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3";
  if (count === 3)
    return "grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-3";
  if (count === 4)
    return "grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3";
  return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3";
});

// Lightbox functionality
const lightboxOpen = ref(false);
const currentImage = ref(null);
const currentIndex = ref(0);
const lightboxLoading = ref(false);

// Simplified - no loading states needed

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
    lightboxLoading.value = true;
  }
};

const navigateToImage = (index) => {
  if (index >= 0 && index < images.value.length) {
    currentIndex.value = index;
    currentImage.value = images.value[index];
    lightboxLoading.value = true;
  }
};

// Touch gesture support for mobile
const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  const swipeThreshold = 50;
  const diff = touchStartX.value - touchEndX.value;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next image
      navigateImage(1);
    } else {
      // Swipe right - previous image
      navigateImage(-1);
    }
  }
};

// Close lightbox with escape key and add touch events
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
  padding: 0 0.5rem;
}

@media (min-width: 640px) {
  .image-gallery {
    padding: 0;
  }
}

/* Enhanced single image display */
.single-image {
  max-width: 600px;
  margin: 0 auto;
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
  transition: opacity 0.3s ease-in-out,
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effects */
.group:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Lightbox backdrop blur effect */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }

  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}

/* Improve touch targets for mobile */
@media (max-width: 640px) {
  .image-gallery .group {
    min-height: 150px;
  }

  button {
    min-width: 44px;
    min-height: 44px;
  }
}

/* Prevent body scroll when lightbox is open */
:global(body.scroll-lock) {
  overflow: hidden;
}
</style>
