<template>
  <div class="min-h-screen bg-neutral-50">
    <!-- Hamburger Menu Button -->
    <button
      @click="menuOpen = !menuOpen"
      class="fixed top-6 right-6 z-50 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-neutral-200"
      aria-label="Toggle Menu"
    >
      <!-- Hamburger Icon -->
      <div class="w-6 h-6 flex flex-col justify-center items-center space-y-1">
        <span
          :class="[
            'block h-0.5 w-6 bg-neutral-800 transition-all duration-300',
            menuOpen ? 'rotate-45 translate-y-1.5' : '',
          ]"
        ></span>
        <span
          :class="[
            'block h-0.5 w-6 bg-neutral-800 transition-all duration-300',
            menuOpen ? 'opacity-0' : '',
          ]"
        ></span>
        <span
          :class="[
            'block h-0.5 w-6 bg-neutral-800 transition-all duration-300',
            menuOpen ? '-rotate-45 -translate-y-1.5' : '',
          ]"
        ></span>
      </div>
    </button>

    <!-- Overlay Menu -->
    <Teleport to="body">
      <nav
        :class="[
          'fixed inset-0 bg-slate-800 z-50 transform transition-transform duration-300 ease-in-out',
          menuOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
      >
        <div class="flex items-center justify-center h-full">
          <div class="space-y-8 text-center">
            <NuxtLink
              to="/"
              @click="handleNavigation"
              class="block text-3xl font-display text-white hover:text-blue-300 transition-colors duration-200"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/resume"
              @click="handleNavigation"
              class="block text-3xl font-display text-white hover:text-blue-300 transition-colors duration-200"
            >
              Resume
            </NuxtLink>
            <a
              href="https://github.com/tcober"
              target="_blank"
              rel="noopener"
              @click="menuOpen = false"
              class="block text-3xl font-display text-white hover:text-blue-300 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </Teleport>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-neutral-200 py-12 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-neutral-600 mb-4">
            Built with
            <a
              href="https://nuxt.com"
              target="_blank"
              rel="noopener"
              class="text-primary-600 hover:text-primary-800 font-medium"
              >Nuxt</a
            >,
            <a
              href="https://storyblok.com"
              target="_blank"
              rel="noopener"
              class="text-primary-600 hover:text-primary-800 font-medium"
              >Storyblok</a
            >, and
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener"
              class="text-primary-600 hover:text-primary-800 font-medium"
              >Tailwind CSS</a
            >
          </p>
          <p class="text-sm text-neutral-500">
            © {{ new Date().getFullYear() }} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const menuOpen = ref(false);
const router = useRouter();

// Handle navigation with transition
const handleNavigation = async (event) => {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("to");

  // Start closing the menu
  menuOpen.value = false;

  // Wait for the transition to complete before navigating
  setTimeout(() => {
    router.push(href);
  }, 300);
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
onMounted(() => {
  const handleKeydown = (event) => {
    if (event.key === "Escape") {
      menuOpen.value = false;
    }
  };

  document.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
  });
});
</script>
