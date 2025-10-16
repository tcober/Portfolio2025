<template>
  <div class="relative my-8 group component-quote">
    <div
      class="bg-gradient-to-br from-slate-800/40 via-slate-700/40 to-slate-600/40 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-8 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-400/30 transition-all duration-300"
    >
      <!-- Quote text -->
      <div class="relative">
        <div
          class="absolute -top-4 -left-2 text-6xl text-blue-400/30 font-serif leading-none select-none"
        >
          "
        </div>
        <p
          class="text-xl md:text-2xl leading-relaxed text-slate-100 font-medium italic mb-6 font-serif custom-lineheight relative z-10 pl-8"
        >
          {{ blok.quote }}
        </p>
        <div
          class="absolute -bottom-2 -right-2 text-6xl text-green-400/30 font-serif leading-none select-none rotate-180"
        >
          "
        </div>
      </div>

      <!-- Author section -->
      <cite
        v-if="blok.author"
        class="flex items-center justify-end text-slate-300 not-italic group-hover:text-slate-200 transition-colors duration-300 mt-4"
      >
        <!-- Decorative gradient line -->
        <div
          class="mr-4 flex-1 max-w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-green-400/50 rounded-full"
        ></div>

        <!-- Author name with enhanced styling -->
        <span
          class="font-semibold px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border border-blue-400/20 text-blue-200 group-hover:from-blue-400/30 group-hover:to-green-400/30 group-hover:border-blue-400/30 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
        >
          — {{ blok.author }}
        </span>
      </cite>
    </div>
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
