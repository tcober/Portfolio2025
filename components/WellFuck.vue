<template>
  <div class="text-center py-16">
    <div class="card inline-block px-8 py-6">
      <h2 class="text-2xl font-bold text-black mb-2">
        Well fuck. Something went wrong. Sorry about that.
      </h2>
      <p class="text-black mb-4">{{ error }}</p>
      <button
        class="btn bg-black text-white hover:bg-gray-800 border-2 border-black"
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

const refresh = () => {
  window.location.reload();
};
</script>
