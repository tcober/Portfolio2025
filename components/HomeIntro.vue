<template>
  <div class="blueprint-grid-dark">
    <div class="mx-auto flex min-h-screen max-w-4xl flex-col px-5 py-8 sm:px-8">
      <main class="flex flex-1 items-center py-12">
        <div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
          <NuxtImg
            provider="storyblok"
            src="https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg"
            alt="Thomas Cober"
            width="208"
            height="208"
            :modifiers="{ quality: 80 }"
            format="webp"
            class="intro-photo h-40 w-40 shrink-0 object-cover sm:h-52 sm:w-52"
          />

          <div class="max-w-xl">
            <h1 class="text-4xl font-bold text-white sm:text-5xl">
              Thomas Cober
            </h1>
            <p class="mt-1 text-lg text-white/70 sm:text-xl">
              Senior JavaScript engineer
            </p>

            <p class="mt-6 text-lg leading-relaxed text-white sm:text-xl">
              I’m a senior JavaScript engineer with about 13 years of
              experience. I work mostly in
              <span class="highlight-text">Vue 3/Nuxt</span> with
              <span class="highlight-text">Node</span> on the back end, but
              these days I spend a lot of time building
              <span class="highlight-text">agent</span> and
              <span class="highlight-text">sub-agent</span> systems.
            </p>

            <nav
              class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
              aria-label="Links"
            >
              <NuxtLink
                to="/resume"
                class="bg-white px-5 py-2.5 font-semibold text-brand-950 transition-colors hover:bg-[var(--color-accent-pink)] focus-visible:outline-white"
              >
                Resume
              </NuxtLink>
              <a
                href="https://github.com/tcober"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-[var(--color-accent-pink)]"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </main>

      <footer
        class="flex flex-wrap justify-between gap-x-6 gap-y-1 text-sm text-white/60"
      >
        <p>Based in Minneapolis</p>
        <p>© {{ year }} Thomas Cober</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.intro-photo {
  border: 2px solid white;
  filter: grayscale(1) contrast(1.08);
}
</style>
