<template>
  <div class="relative component-quote">
    <div>
      <!-- Quote text -->
      <div class="relative">
        <p
          class="text-2xl leading-tight md:text-4xl text-black font-medium italic mb-4 font-serif whitespace-pre-line"
        >
          "{{ blok.quote }}"
        </p>
      </div>

      <!-- Author section -->
      <cite
        v-if="blok.author"
        class="flex items-center justify-end text-black not-italic mt-4"
      >
        <span class="font-semibold">— {{ blok.author }}</span>
      </cite>
    </div>
  </div>
</template>

<script setup>
/**
 * blok structure:
 * {
 *   quote: string (required),
 *   author?: string (optional)
 * }
 */
defineProps({
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
