<template>
  <div class="relative my-8 group component-quote">
    <blockquote
      class="relative bg-slate-800 rounded-2xl p-8 transform group-hover:scale-[1.01] transition-all duration-300 ease-out overflow-hidden shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 border border-slate-700"
    >
      <!-- Opening quote accent -->
      <div
        class="absolute -top-1 -left-1 w-6 h-6 bg-blue-500 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-blue-500/50"
      ></div>

      <!-- Closing quote accent -->
      <div
        class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-green-500/50"
      ></div>

      <!-- Quote text -->
      <p
        class="relative z-10 text-xl md:text-2xl leading-relaxed text-slate-100 font-medium italic mb-6 pl-6 pr-4 font-serif custom-lineheight"
      >
        {{ blok.quote }}
      </p>

      <!-- Author section -->
      <cite
        v-if="blok.author"
        class="relative z-10 flex items-center justify-end text-slate-300 not-italic group-hover:text-slate-200 transition-colors duration-300"
      >
        <!-- Simple decorative line -->
        <div class="mr-4 flex-1 max-w-16 h-0.5 bg-slate-600"></div>

        <!-- Author name -->
        <span
          class="font-semibold px-4 py-2 rounded-xl bg-blue-600 text-white group-hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60"
        >
          — {{ blok.author }}
        </span>
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
