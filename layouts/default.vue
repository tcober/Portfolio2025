<template>
  <div class="min-h-screen bg-slate-900">
    <!-- Hamburger Menu Button -->
    <button
      @click="menuOpen = !menuOpen"
      :class="[
        'fixed top-6 right-6 z-50 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border backdrop-blur-sm group',
        menuOpen
          ? 'bg-gradient-to-br from-blue-600 to-green-600 border-white/30 shadow-2xl scale-110'
          : 'bg-slate-800/90 border-slate-700/50 hover:bg-slate-700 hover:scale-105',
      ]"
      aria-label="Toggle Menu"
    >
      <!-- Hamburger Icon -->
      <div class="w-6 h-6 flex flex-col justify-center items-center space-y-1">
        <span
          :class="[
            'block h-0.5 w-6 transition-all duration-300',
            menuOpen
              ? 'rotate-45 translate-y-1.5 bg-white'
              : 'bg-gradient-to-r from-blue-600 to-green-600 group-hover:from-blue-500 group-hover:to-green-500',
          ]"
        ></span>
        <span
          :class="[
            'block h-0.5 w-6 transition-all duration-300',
            menuOpen
              ? 'opacity-0 bg-white'
              : 'bg-gradient-to-r from-blue-600 to-green-600 group-hover:from-blue-500 group-hover:to-green-500',
          ]"
        ></span>
        <span
          :class="[
            'block h-0.5 w-6 transition-all duration-300',
            menuOpen
              ? '-rotate-45 -translate-y-1.5 bg-white'
              : 'bg-gradient-to-r from-blue-600 to-green-600 group-hover:from-blue-500 group-hover:to-green-500',
          ]"
        ></span>
      </div>
    </button>

    <!-- Overlay Menu -->
    <Teleport to="body">
      <nav
        :class="[
          'fixed inset-0 z-50 transform transition-all duration-500 ease-in-out -translate-x-full overflow-hidden',
          'bg-gradient-to-br from-slate-900 via-blue-900 to-green-900',
          menuOpen ? 'translate-x-0' : '',
        ]"
      >
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse"
          ></div>
          <div
            class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"
          ></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"
          ></div>
        </div>

        <!-- Menu content -->
        <div class="relative z-10 flex items-center justify-center h-full">
          <div class="space-y-12 text-center">
            <!-- Menu title -->

            <!-- Navigation links -->
            <NuxtLink
              to="/"
              @click="handleNavigation"
              class="group block text-4xl font-display transition-all duration-300 transform hover:scale-110 relative"
            >
              <span
                class="text-white group-hover:opacity-0 inline-block transition-all duration-300 group-hover:translate-x-2"
              >
                Home
              </span>
              <span
                class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent inline-block transition-all duration-300 group-hover:translate-x-2"
              >
                Home
              </span>
            </NuxtLink>

            <NuxtLink
              to="/resume"
              @click="handleNavigation"
              class="group block text-4xl font-display transition-all duration-300 transform hover:scale-110 relative"
            >
              <span
                class="text-white group-hover:opacity-0 inline-block transition-all duration-300 group-hover:translate-x-2"
              >
                Resume
              </span>
              <span
                class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent inline-block transition-all duration-300 group-hover:translate-x-2"
              >
                Resume
              </span>
            </NuxtLink>

            <a
              href="https://github.com/tcober"
              target="_blank"
              rel="noopener"
              @click="menuOpen = false"
              class="group block text-4xl font-display transition-all duration-300 transform hover:scale-110 relative"
            >
              <span
                class="text-white group-hover:opacity-0 inline-block transition-all duration-300 group-hover:translate-x-2"
              >
                GitHub
              </span>
              <span
                class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-yellow-300 to-blue-300 bg-clip-text text-transparent inline-block transition-all duration-300 group-hover:translate-x-2"
              >
                GitHub
              </span>
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
    <footer class="py-8 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-sm text-slate-400">
            © {{ new Date().getFullYear() }} Thomas Cober. All rights reserved.
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

<style scoped>
/* Gradient animation for menu title */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 4s ease infinite;
}

/* Animation delays for background elements */
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Enhanced hover effects for navigation links */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
