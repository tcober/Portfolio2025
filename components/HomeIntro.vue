<template>
  <div class="blueprint-grid-dark">
    <main
      class="mx-auto flex min-h-screen max-w-4xl items-center px-5 py-20 sm:px-8"
    >
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
            I’m an engineer with about 13 years of experience. I've work mostly
            in
            <span class="highlight-text">Vue/Nuxt/Angular</span> with
            <span class="highlight-text">Node</span> on the back end, but these
            days I spend a lot of time on my company
            <a
              class="highlight-text company-link"
              href="https://randomrulegames.com"
              >Random Rule Games</a
            >
            building VR games with Godot and Python.
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
  </div>
</template>

<style scoped>
.intro-photo {
  border: 2px solid white;
  filter: grayscale(1) contrast(1.08);
}

/* The pink underline rises into a highlighter fill on hover */
.company-link {
  background-image: linear-gradient(
    var(--color-accent-pink),
    var(--color-accent-pink)
  );
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 0;
  transition:
    background-size 200ms ease-out,
    color 200ms ease-out;
}

.company-link:hover,
.company-link:focus-visible {
  color: var(--color-bg-dark);
  background-size: 100% 100%;
}

@media (prefers-reduced-motion: reduce) {
  .company-link {
    transition: none;
  }
}
</style>
