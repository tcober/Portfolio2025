<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      ref="dialogRef"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900 bg-opacity-98 p-4"
      role="dialog"
      aria-modal="true"
      :aria-label="dialogLabel"
      tabindex="-1"
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
            :width="LOW_RES_WIDTH"
            :height="lowResHeight"
            :modifiers="{ quality: 70 }"
            format="webp"
            class="max-w-full max-h-[calc(100vh-2rem)] object-contain rounded-lg shadow-2xl"
          />

          <!-- High-res overlay (deferred until navigation settles, covers low-res when ready) -->
          <NuxtImg
            v-if="highResImage"
            v-show="highResLoaded"
            provider="storyblok"
            :src="highResImage.filename"
            alt=""
            aria-hidden="true"
            :width="HIGH_RES_WIDTH"
            :height="highResHeight"
            :modifiers="{ quality: 85 }"
            format="webp"
            class="absolute inset-0 w-full h-full object-contain rounded-lg"
            @load="onHighResLoad"
          />
        </div>

        <!-- Hidden copies of adjacent images so the browser caches them before navigation -->
        <div class="hidden" aria-hidden="true">
          <NuxtImg
            v-for="image in neighborImages"
            :key="image.id"
            provider="storyblok"
            :src="image.filename"
            alt=""
            :width="LOW_RES_WIDTH"
            :height="image.renderHeight"
            :modifiers="{ quality: 70 }"
            format="webp"
          />
        </div>

        <!-- Close button -->
        <button
          @click="close"
          class="lightbox-btn absolute top-4 right-4 p-3 z-20"
          aria-label="Close lightbox"
          type="button"
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
import { computed, nextTick, ref, watch, onMounted, onUnmounted } from "vue";

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
const LOW_RES_WIDTH = 800;
const HIGH_RES_WIDTH = 2400;
const HIGH_RES_DELAY_MS = 250;

const currentIndex = ref(props.initialIndex);
const currentImage = ref(props.images[props.initialIndex] || null);
const highResImage = ref(null);
const touchStartX = ref(0);
const touchEndX = ref(0);
const highResLoaded = ref(false);
const dialogRef = ref(null);
let previouslyFocusedElement = null;
let highResTimer = null;

const dialogLabel = computed(() => {
  const imageName = currentImage.value?.alt || currentImage.value?.name;
  return imageName ? `Image viewer: ${imageName}` : "Image viewer";
});

// Heights derived from the intrinsic dimensions ImageSet parses from the filename
const lowResHeight = computed(() => currentImage.value?.renderHeight || 0);
const highResHeight = computed(
  () => lowResHeight.value * (HIGH_RES_WIDTH / LOW_RES_WIDTH),
);

const neighborImages = computed(() =>
  [currentIndex.value - 1, currentIndex.value + 1]
    .filter((index) => index >= 0 && index < props.images.length)
    .map((index) => props.images[index]),
);

const onHighResLoad = () => {
  highResLoaded.value = true;
};

// Defer the heavy high-res fetch until the user pauses on an image,
// so rapid flipping doesn't queue up competing multi-MB downloads
const scheduleHighRes = () => {
  clearTimeout(highResTimer);
  highResTimer = setTimeout(() => {
    highResImage.value = currentImage.value;
  }, HIGH_RES_DELAY_MS);
};

// ============================================
// Navigation
// ============================================
const navigateTo = (index) => {
  if (index >= 0 && index < props.images.length) {
    highResLoaded.value = false;
    highResImage.value = null;
    currentIndex.value = index;
    currentImage.value = props.images[index] || null;
    scheduleHighRes();
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
    previouslyFocusedElement = document.activeElement;
    navigateTo(props.initialIndex);
    lockScroll();
    nextTick(() => dialogRef.value?.querySelector("button")?.focus());
  } else {
    clearTimeout(highResTimer);
    unlockScroll();
    previouslyFocusedElement?.focus();
    previouslyFocusedElement = null;
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
  },
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
    if (e.key === "Tab") {
      const focusableElements = dialogRef.value?.querySelectorAll("button");
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  document.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
    clearTimeout(highResTimer);
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
