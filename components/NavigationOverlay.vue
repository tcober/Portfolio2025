<template>
  <Teleport to="body">
    <nav
      :class="[
        'fixed inset-0 z-40 bg-slate-900 transition-transform duration-500 ease-in-out',
        menuOverlayClasses,
      ]"
    >
      <div class="flex items-center justify-center h-full">
        <div class="space-y-8 text-center">
          <NuxtLink
            to="/"
            @click="$emit('navigate')"
            class="block text-4xl text-white hover:text-blue-400"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/feed"
            @click="$emit('navigate')"
            class="block text-4xl text-white hover:text-blue-400"
          >
            Feed
          </NuxtLink>

          <NuxtLink
            to="/resume"
            @click="$emit('navigate')"
            class="block text-4xl text-white hover:text-blue-400"
          >
            Resume
          </NuxtLink>

          <a
            href="https://github.com/tcober"
            target="_blank"
            rel="noopener noreferrer"
            @click="$emit('navigate')"
            class="block text-4xl text-white hover:text-blue-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["navigate"]);

// Computed classes for menu overlay
const menuOverlayClasses = computed(() =>
  props.isOpen ? "translate-x-0" : "-translate-x-full"
);
</script>
