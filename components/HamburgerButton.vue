<template>
  <button
    @click="$emit('toggle')"
    :class="[
      'relative z-50 flex h-10 items-center gap-3 border px-3 transition-colors duration-300',
      menuButtonClasses,
    ]"
    aria-label="Toggle menu"
    aria-controls="site-menu"
    :aria-expanded="isOpen"
  >
    <span class="text-xs font-black uppercase tracking-widest">Menu</span>
    <div class="flex h-5 w-5 flex-col items-center justify-center space-y-1.5">
      <span
        :class="[
          'block h-0.5 w-5 bg-current transition-all duration-300',
          topLineClasses,
        ]"
      ></span>
      <span
        :class="[
          'block h-0.5 w-5 bg-current transition-all duration-300',
          middleLineClasses,
        ]"
      ></span>
      <span
        :class="[
          'block h-0.5 w-5 bg-current transition-all duration-300',
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
    ? "border-blue-950 bg-blue-950 text-white"
    : "border-white/60 bg-[var(--color-bg-dark)] text-white hover:border-white",
);

// Computed classes for hamburger icon lines
const topLineClasses = computed(() =>
  props.isOpen ? "rotate-45 translate-y-2" : "",
);

const middleLineClasses = computed(() => (props.isOpen ? "opacity-0" : ""));

const bottomLineClasses = computed(() =>
  props.isOpen ? "-rotate-45 -translate-y-2" : "",
);
</script>
