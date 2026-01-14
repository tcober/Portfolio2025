<template>
  <div>
    <HamburgerButton :is-open="menuOpen" @toggle="menuOpen = !menuOpen" />

    <NavigationOverlay :is-open="menuOpen" @navigate="handleNavigation" />
  </div>
</template>

<script setup>
const menuOpen = ref(false);

// Close menu on navigation
const handleNavigation = () => {
  menuOpen.value = false;
};

// Close menu when route changes
const route = useRoute();
watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  }
);

// Close menu with escape key
const handleKeydown = (event) => {
  if (event.key === "Escape") {
    menuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>
