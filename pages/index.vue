<template>
  <div class="home-page min-h-screen overflow-hidden">
    <main
      class="home-shell mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-12 lg:pt-32"
    >
      <div class="flex flex-1 flex-col justify-center">
        <p
          class="intro-meta flex flex-wrap items-center gap-3 text-xs font-bold uppercase sm:text-sm"
        >
          <span>Senior JavaScript engineer</span>
          <span class="accent-mark" aria-hidden="true">/</span>
          <span>Minneapolis</span>
        </p>

        <h1 class="intro-title mt-5 font-bold text-white">
          <span class="block">Hello, I’m</span>
          <span class="block"
            >Thomas Cober<span class="accent-mark">.</span></span
          >
        </h1>

        <p
          class="intro-copy mt-8 max-w-2xl text-xl font-medium leading-snug text-white sm:text-2xl lg:mt-10 lg:max-w-xl lg:self-end lg:text-3xl"
        >
          I’m a software developer dude making surprisingly cool things for a
          bank. I work mostly with
          <span class="highlight-text">Vue</span>,
          <span class="highlight-text">Node</span>, and
          <span class="highlight-text">JavaScript</span>.
        </p>
      </div>

      <nav
        class="section-links mt-12 grid divide-y divide-white/30 border-y border-white/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        aria-label="Explore the site"
      >
        <NuxtLink
          to="/feed"
          class="section-link group flex items-center justify-between px-4 py-4 sm:px-5"
        >
          <span>Timeline</span>
          <span class="link-arrow" aria-hidden="true">↗</span>
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="section-link group flex items-center justify-between px-4 py-4 sm:px-5"
        >
          <span>Resume</span>
          <span class="link-arrow" aria-hidden="true">↗</span>
        </NuxtLink>
        <a
          href="https://github.com/tcober"
          target="_blank"
          rel="noopener noreferrer"
          class="section-link group flex items-center justify-between px-4 py-4 sm:px-5"
        >
          <span>GitHub</span>
          <span class="link-arrow" aria-hidden="true">↗</span>
        </a>
      </nav>
    </main>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Thomas Cober Web Stuff",
  description:
    "Hello there! I'm Tom Cober, a software developer dude out in the world. Thanks for stopping by.",
  ogTitle: "Thomas Cober Web Stuff",
  ogDescription:
    "Hello there! I'm Tom Cober, a software developer dude out in the world. Thanks for stopping by.",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage:
    "https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg",
  robots: "index, follow",
});
</script>

<style scoped>
.home-page {
  background-color: var(--color-bg-dark);
}

.intro-title {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 10vw, 8.5rem);
  line-height: 1;
  letter-spacing: 0;
}

.intro-meta {
  color: rgb(255 255 255 / 0.68);
  letter-spacing: 0.08em;
}

.accent-mark {
  color: var(--color-accent-pink);
}

.section-link {
  color: white;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

.section-link:hover,
.section-link:focus-visible {
  color: var(--color-bg-dark);
  background: white;
  outline: none;
}

.link-arrow {
  font-size: 1.2rem;
  transition: transform 180ms ease;
}

.section-link:hover .link-arrow,
.section-link:focus-visible .link-arrow {
  color: var(--color-accent-pink-strong);
  transform: translate(0.18rem, -0.18rem);
}
</style>
