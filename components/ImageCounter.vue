<template>
  <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
    <div class="bg-black bg-opacity-60 rounded-lg px-4 py-2 backdrop-blur-sm">
      <div class="text-white text-sm font-medium mb-2 text-center">
        {{ currentIndex + 1 }} / {{ total }}
      </div>
      <!-- Dot indicators -->
      <div class="flex space-x-1 justify-center">
        <button
          v-for="index in total"
          :key="index - 1"
          @click="$emit('navigate', index - 1)"
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 touch-manipulation"
          :class="dotClass(index - 1)"
          :aria-label="`Go to image ${index}`"
          :aria-current="currentImageAriaCurrent(index - 1)"
        >
          <span
            class="h-2 w-2 rounded-full bg-current"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentIndex: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

defineEmits(["navigate"]);

const dotClass = (index) => {
  return index === props.currentIndex
    ? "text-white"
    : "text-white/40 hover:text-white/70";
};

const currentImageAriaCurrent = (index) =>
  index === props.currentIndex ? "true" : undefined;
</script>
