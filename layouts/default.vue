<template>
  <div class="min-h-screen">
    <!-- Hamburger Menu Button -->
    <button
      @click="menuOpen = !menuOpen"
      :class="[
        'fixed top-6 right-6 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 backdrop-blur-sm',
        menuOpen
          ? 'bg-blue-600 scale-110'
          : 'bg-slate-800 hover:bg-slate-700 hover:scale-105',
      ]"
      aria-label="Toggle Menu"
    >
      <div
        class="w-6 h-6 flex flex-col justify-center items-center space-y-1.5"
      >
        <span
          :class="[
            'block h-0.5 w-6 bg-white transition-all duration-300',
            menuOpen ? 'rotate-45 translate-y-2' : '',
          ]"
        ></span>
        <span
          :class="[
            'block h-0.5 w-6 bg-white transition-all duration-300',
            menuOpen ? 'opacity-0' : '',
          ]"
        ></span>
        <span
          :class="[
            'block h-0.5 w-6 bg-white transition-all duration-300',
            menuOpen ? '-rotate-45 -translate-y-2' : '',
          ]"
        ></span>
      </div>
    </button>

    <!-- Overlay Menu -->
    <Teleport to="body">
      <nav
        :class="[
          'fixed inset-0 z-40 bg-slate-900 transition-transform duration-500 ease-in-out',
          menuOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
      >
        <div class="flex items-center justify-center h-full">
          <div class="space-y-8 text-center">
            <NuxtLink
              to="/"
              @click="handleNavigation"
              class="block text-4xl text-white hover:text-blue-400"
            >
              Home
            </NuxtLink>

            <NuxtLink
              to="/feed"
              @click="handleNavigation"
              class="block text-4xl text-white hover:text-blue-400"
            >
              Feed
            </NuxtLink>

            <NuxtLink
              to="/resume"
              @click="handleNavigation"
              class="block text-4xl text-white hover:text-blue-400"
            >
              Resume
            </NuxtLink>

            <a
              href="https://github.com/tcober"
              target="_blank"
              rel="noopener"
              @click="menuOpen = false"
              class="block text-4xl text-white hover:text-blue-400"
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
    <footer class="py-8 mt-20 border-t border-slate-800 print:hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-slate-400">
          © {{ new Date().getFullYear() }} Thomas Cober. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const menuOpen = ref(false);
const router = useRouter();

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

<style scoped>
@media print {
  button[aria-label="Toggle Menu"],
  nav {
    display: none !important;
  }
}
</style>
