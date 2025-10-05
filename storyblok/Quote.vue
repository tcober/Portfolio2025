<template>
  <div class="relative my-8 group component-quote">
    <!-- Simple background block -->
    <div
      class="absolute inset-0 bg-purple-200 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-all duration-300 ease-out"
    ></div>

    <!-- Decorative corner elements -->
    <div
      class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-lg opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300"
    ></div>
    <div
      class="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-lg opacity-70 group-hover:scale-110 group-hover:opacity-90 transition-all duration-300"
    ></div>

    <blockquote
      class="relative bg-slate-50 rounded-2xl p-8 transform group-hover:scale-[1.01] transition-all duration-300 ease-out overflow-hidden"
    >
      <!-- Simple quote mark -->
      <div
        class="absolute -top-2 -left-2 w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-110 transition-all duration-300"
      >
        <span>"</span>
      </div>

      <!-- Closing quote mark -->
      <div
        class="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm transform group-hover:scale-110 transition-all duration-300"
      >
        <span class="transform rotate-180">"</span>
      </div>

      <!-- Quote text -->
      <p
        class="relative z-10 text-xl md:text-2xl leading-relaxed text-slate-800 font-medium italic mb-6 pl-6 pr-4 font-serif custom-lineheight"
      >
        {{ blok.quote }}
      </p>

      <!-- Author section -->
      <cite
        v-if="blok.author"
        class="relative z-10 flex items-center justify-end text-slate-600 not-italic group-hover:text-slate-700 transition-colors duration-300"
      >
        <!-- Simple decorative line -->
        <div class="mr-4 flex-1 max-w-16 h-0.5 bg-slate-300"></div>

        <!-- Author name -->
        <span
          class="font-semibold px-4 py-2 rounded-xl bg-indigo-500 text-white group-hover:bg-indigo-600 transition-colors duration-300"
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
  background: rgba(99, 102, 241, 0.2);
  color: inherit;
}

/* Smooth transitions for hover effects */
.component-quote * {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
