<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900 bg-opacity-98 p-4 backdrop-blur-sm"
      @click="handleBackdropClick"
    >
      <div
        class="relative w-full h-full max-w-6xl flex items-center justify-center"
      >
        <!-- Image container - stacks both images so size stays consistent -->
        <div
          class="relative max-w-full max-h-full"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- Low-res image (cached from grid, determines initial container size) -->
          <NuxtImg
            provider="storyblok"
            :src="currentImage?.filename"
            :alt="currentImage?.alt || currentImage?.name"
            :width="800"
            :height="0"
            :modifiers="{ quality: 70 }"
            format="webp"
            class="max-w-full max-h-[calc(100vh-2rem)] object-contain rounded-lg shadow-2xl"
          />

          <!-- High-res overlay (loads in background, covers low-res when ready) -->
          <NuxtImg
            v-show="highResLoaded"
            provider="storyblok"
            :src="currentImage?.filename"
            :alt="currentImage?.alt || currentImage?.name"
            :width="2400"
            :height="0"
            :modifiers="{ quality: 85 }"
            format="webp"
            class="absolute inset-0 w-full h-full object-contain rounded-lg"
            @load="onHighResLoad"
          />
        </div>

        <!-- Close button -->
        <button
          @click="close"
          class="lightbox-btn absolute top-4 right-4 p-3 z-20"
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
            @click="navigate(-1)"
            class="lightbox-btn absolute left-4 top-1/2 transform -translate-y-1/2 p-4 z-20 text-2xl"
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button
            v-if="currentIndex < images.length - 1"
            @click="navigate(1)"
            class="lightbox-btn absolute right-4 top-1/2 transform -translate-y-1/2 p-4 z-20 text-2xl"
            aria-label="Next image"
          >
            &#10095;
          </button>
        </template>

        <!-- Image counter with dots indicator -->
        <ImageCounter
          v-if="images.length > 1"
          :current-index="currentIndex"
          :total="images.length"
          @navigate="navigateTo"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

// ============================================
// Props & Emits
// ============================================
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["close", "update:isOpen"]);

// ============================================
// State
// ============================================
const currentIndex = ref(props.initialIndex);
const currentImage = ref(props.images[props.initialIndex] || null);
const touchStartX = ref(0);
const touchEndX = ref(0);
const highResLoaded = ref(false);

const onHighResLoad = () => {
  highResLoaded.value = true;
};

// ============================================
// Navigation
// ============================================
const navigateTo = (index) => {
  if (index >= 0 && index < props.images.length) {
    highResLoaded.value = false; // Reset for new image
    currentIndex.value = index;
    currentImage.value = props.images[index] || null;
  }
};

const navigate = (direction) => {
  navigateTo(currentIndex.value + direction);
};

// ============================================
// Open / Close
// ============================================
const lockScroll = () => document.body.classList.add("scroll-lock");
const unlockScroll = () => document.body.classList.remove("scroll-lock");

const close = () => {
  emit("close");
  emit("update:isOpen", false);
};

const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    close();
  }
};

const handleOpenChange = (isOpen) => {
  if (isOpen) {
    navigateTo(props.initialIndex);
    lockScroll();
  } else {
    unlockScroll();
  }
};

// ============================================
// Touch / Swipe Support
// ============================================
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
      navigate(1); // Swipe left - next image
    } else {
      navigate(-1); // Swipe right - previous image
    }
  }
};

// ============================================
// Watchers
// ============================================
watch(() => props.isOpen, handleOpenChange);

watch(
  () => props.initialIndex,
  (newIndex) => {
    if (props.isOpen) {
      navigateTo(newIndex);
    }
  }
);

// ============================================
// Keyboard Navigation
// ============================================
onMounted(() => {
  const handleKeydown = (e) => {
    if (!props.isOpen) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  };

  document.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
    unlockScroll();
  });
});
</script>

<style scoped>
/* Improve touch targets for mobile */
@media (max-width: 640px) {
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
