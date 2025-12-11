<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-98 p-4 backdrop-blur-sm"
      @click="close"
    >
      <div
        class="relative w-full h-full max-w-6xl flex items-center justify-center"
        @click.stop
      >
        <img
          :src="currentImage?.filename"
          :alt="currentImage?.alt || currentImage?.name"
          class="max-w-full max-h-full object-contain rounded-xl shadow-2xl touch-manipulation"
          @click.stop
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        />

        <!-- Close button -->
        <button
          @click="close"
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
            @click.stop="navigate(-1)"
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
            @click.stop="navigate(1)"
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

        <!-- Image counter with dots indicator -->
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
                @click.stop="navigateTo(dotIndex)"
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
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

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

const currentIndex = ref(props.initialIndex);
const currentImage = ref(props.images[props.initialIndex] || null);

// Body scroll lock
const lockScroll = () => document.body.classList.add("scroll-lock");
const unlockScroll = () => document.body.classList.remove("scroll-lock");

// Watch for open/close changes
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      currentIndex.value = props.initialIndex;
      currentImage.value = props.images[props.initialIndex] || null;
      lockScroll();
    } else {
      unlockScroll();
    }
  }
);

// Watch for initialIndex changes while open
watch(
  () => props.initialIndex,
  (newIndex) => {
    if (props.isOpen && newIndex >= 0 && newIndex < props.images.length) {
      currentIndex.value = newIndex;
      currentImage.value = props.images[newIndex];
    }
  }
);

const close = () => {
  emit("close");
  emit("update:isOpen", false);
};

const navigate = (direction) => {
  const newIndex = currentIndex.value + direction;
  if (newIndex >= 0 && newIndex < props.images.length) {
    currentIndex.value = newIndex;
    currentImage.value = props.images[newIndex];
  }
};

const navigateTo = (index) => {
  if (index >= 0 && index < props.images.length) {
    currentIndex.value = index;
    currentImage.value = props.images[index];
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
      navigate(1); // Swipe left - next image
    } else {
      navigate(-1); // Swipe right - previous image
    }
  }
};

// Keyboard navigation
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
/* Lightbox backdrop blur effect */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
}

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
