<template>
  <div class="text-center py-16">
    <div class="inline-block px-8 py-6 border-2 border-black rounded-lg">
      <h2 class="text-2xl font-bold text-black mb-2">
        Well fuck. Something went wrong. Sorry about that.
      </h2>
      <p class="text-black mb-4">{{ error }}</p>
      <button
        class="inline-flex items-center px-6 py-3 rounded bg-black text-white font-medium hover:bg-gray-800 transition-all duration-200 border-2 border-black"
        @click="refresh()"
      >
        Try this maybe?
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: String,
    required: true,
  },
});

defineEmits(["retry"]);

const refresh = () => {
  window.location.reload();
};
</script>

<style scoped></style>
