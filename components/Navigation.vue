<template>
  <div
    ref="navigationRoot"
    class="site-nav fixed inset-x-0 top-0 z-50 flex items-center justify-end px-5 py-5 sm:px-8 lg:px-12"
  >
    <HamburgerButton :is-open="menuOpen" @toggle="toggleMenu" />

    <NavigationOverlay :is-open="menuOpen" @navigate="handleNavigation" />
  </div>
</template>

<script setup>
const menuOpen = ref(false);
const navigationRoot = ref(null);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

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
  },
);

// Close menu with escape key
const handleKeydown = (event) => {
  if (!menuOpen.value) return;

  if (event.key === "Escape") {
    menuOpen.value = false;
  }

  if (event.key === "Tab") {
    const menu = document.querySelector("#site-menu");
    const focusableElements = menu?.querySelectorAll("a");
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  }
};

const { lock, unlock } = useScrollLock();

watch(menuOpen, (isOpen) => {
  if (isOpen) {
    lock();
    nextTick(() => document.querySelector("#site-menu a")?.focus());
  } else {
    unlock();
    navigationRoot.value?.querySelector("button")?.focus();
  }
});

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  unlock();
});
</script>
