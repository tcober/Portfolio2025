<template>
  <blockquote
    class="relative my-8 px-8 py-6 bg-neutral-50 border-l-4 border-primary-500 italic animate-fade-in"
  >
    <div
      class="absolute top-0 left-4 text-6xl text-primary-500 opacity-20 leading-none select-none"
    >
      "
    </div>
    <p
      class="relative text-lg leading-relaxed text-neutral-700 whitespace-pre-wrap m-0 pl-4"
    >
      {{ blok.quote }}
    </p>
    <cite
      v-if="blok.author"
      class="block mt-4 text-sm text-neutral-600 not-italic font-medium"
    >
      — {{ blok.author }}
    </cite>
  </blockquote>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Any custom styles that can't be achieved with Tailwind can go here */
</style>
