<template>
  <div class="min-h-screen">
    <Navigation />

    <main>
      <slot />
    </main>

    <footer
      class="blueprint-grid-dark border-t border-dashed border-white/20 py-6 print:hidden"
    >
      <div
        class="max-w-7xl mx-auto flex flex-col items-center gap-1 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8"
      >
        <p
          class="font-mono text-[10px] uppercase tracking-widest text-white/40"
          aria-hidden="true"
        >
          TC-PORTFOLIO / SHEET 01
        </p>
        <p
          class="text-center text-xs font-bold uppercase tracking-widest text-white/60"
        >
          © {{ new Date().getFullYear() }} Thomas Cober. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
