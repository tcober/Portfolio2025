<template>
  <button
    @click="$emit('toggle')"
    :class="[
      'fixed top-6 right-6 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 backdrop-blur-sm',
      menuButtonClasses,
    ]"
    aria-label="Toggle Menu"
  >
    <div
      class="w-6 h-6 flex flex-col justify-center items-center space-y-1.5"
    >
      <span
        :class="[
          'block h-0.5 w-6 bg-white transition-all duration-300',
          topLineClasses,
        ]"
      ></span>
      <span
        :class="[
          'block h-0.5 w-6 bg-white transition-all duration-300',
          middleLineClasses,
        ]"
      ></span>
      <span
        :class="[
          'block h-0.5 w-6 bg-white transition-all duration-300',
          bottomLineClasses,
        ]"
      ></span>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["toggle"]);

// Computed classes for menu button
const menuButtonClasses = computed(() =>
  props.isOpen
    ? "bg-blue-600 scale-110"
    : "bg-slate-800 hover:bg-slate-700 hover:scale-105"
);

// Computed classes for hamburger icon lines
const topLineClasses = computed(() =>
  props.isOpen ? "rotate-45 translate-y-2" : ""
);

const middleLineClasses = computed(() => (props.isOpen ? "opacity-0" : ""));

const bottomLineClasses = computed(() =>
  props.isOpen ? "-rotate-45 -translate-y-2" : ""
);
</script>
