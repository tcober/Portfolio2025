<template>
  <Teleport to="body">
    <nav
      :class="[
        'fixed inset-0 z-40 bg-slate-950 transition-transform duration-500 ease-in-out',
        menuOverlayClasses,
      ]"
    >
      <div class="flex items-center justify-center h-full">
        <div class="space-y-8 text-center font-bold">
          <NuxtLink
            to="/"
            @click="$emit('navigate')"
            :class="homeLinkClasses"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/feed"
            @click="$emit('navigate')"
            :class="feedLinkClasses"
          >
            Timeline
          </NuxtLink>

          <NuxtLink
            to="/resume"
            @click="$emit('navigate')"
            :class="resumeLinkClasses"
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
const route = useRoute();

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

// Navigation link classes - active items get glow, inactive get blue hover
const homeLinkClasses = computed(() => {
  const isActive = route.path === "/";
  return isActive
    ? "block text-4xl text-white font-bold highlight-text-static"
    : "block text-4xl text-white font-bold hover:text-blue-400";
});

const feedLinkClasses = computed(() => {
  const isActive = route.path === "/feed";
  return isActive
    ? "block text-4xl text-white highlight-text-static"
    : "block text-4xl text-white hover:text-blue-400";
});

const resumeLinkClasses = computed(() => {
  const isActive = route.path === "/resume";
  return isActive
    ? "block text-4xl text-white highlight-text-static"
    : "block text-4xl text-white hover:text-blue-400";
});
</script>
