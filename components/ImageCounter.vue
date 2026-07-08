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
          class="w-2 h-2 rounded-full transition-all duration-200 touch-manipulation"
          :class="dotClass(index - 1)"
          :aria-label="`Go to image ${index}`"
        ></button>
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
    ? "bg-white"
    : "bg-white bg-opacity-40 hover:bg-opacity-60";
};
</script>
