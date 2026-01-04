<template>
  <div class="min-h-screen">
    <Navigation />

    <main>
      <slot />
    </main>

    <footer class="py-4 print:hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-slate-400">
          © {{ new Date().getFullYear() }} Thomas Cober. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
