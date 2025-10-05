<template>
  <div class="relative my-6 group">
    <!-- Quote background with gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-60"
    ></div>

    <blockquote
      class="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg"
    >
      <!-- Decorative quote mark -->
      <div
        class="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm transform group-hover:scale-110 transition-transform duration-300"
      >
        "
      </div>

      <!-- Quote text -->
      <p
        class="text-xl leading-relaxed text-neutral-800 font-medium italic mb-6 pl-4"
      >
        {{ blok.quote }}
      </p>

      <!-- Author with styling -->
      <cite
        v-if="blok.author"
        class="flex items-center justify-end text-neutral-600 not-italic"
      >
        <div
          class="w-12 h-0.5 bg-gradient-to-r from-transparent to-indigo-300 mr-3"
        ></div>
        <span class="font-medium">{{ blok.author }}</span>
      </cite>
    </blockquote>
  </div>
</template>

<script setup>
// Define props with validation
/**
 * blok structure:
 * {
 *   quote: string (required),
 *   author?: string (optional)
 * }
 */
const props = defineProps({
  blok: {
    type: Object,
    required: true,
    validator: (blok) => {
      return (
        blok &&
        typeof blok.quote === "string" &&
        (blok.author === undefined || typeof blok.author === "string")
      );
    },
  },
});
</script>

<style scoped>
/* Any custom styles that can't be achieved with Tailwind can go here */
</style>
