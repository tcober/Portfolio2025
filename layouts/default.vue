<template>
  <div class="min-h-screen">
    <Navigation />

    <main>
      <slot />
    </main>

    <footer
      class="border-t border-white/20 bg-[var(--color-bg-dark)] py-6 print:hidden"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          class="text-center text-xs font-bold uppercase tracking-widest text-white/60"
        >
          © {{ new Date().getFullYear() }} Thomas Cober. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
