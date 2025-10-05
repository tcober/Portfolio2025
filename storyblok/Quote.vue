<template>
  <div class="relative my-8 group component-quote">
    <!-- Quote text -->
    <p
      class="text-xl md:text-2xl leading-relaxed text-slate-100 font-medium italic mb-6 font-serif custom-lineheight"
    >
      {{ blok.quote }}
    </p>

    <!-- Author section -->
    <cite
      v-if="blok.author"
      class="flex items-center justify-end text-slate-300 not-italic group-hover:text-slate-200 transition-colors duration-300"
    >
      <!-- Simple decorative line -->
      <div class="mr-4 flex-1 max-w-16 h-0.5 bg-slate-600"></div>

      <!-- Author name -->
      <span
        class="font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-600 text-white group-hover:from-blue-400 group-hover:to-green-500 transition-all duration-300 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60"
      >
        — {{ blok.author }}
      </span>
    </cite>
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
/* Custom animations for the enhanced quote component */

/* Custom line height for quote text */
.custom-lineheight {
  line-height: 1.4;
}

/* Simple selection styling */
::selection {
  background: rgba(59, 130, 246, 0.3);
  color: inherit;
}

/* Smooth transitions for hover effects */
.component-quote * {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
