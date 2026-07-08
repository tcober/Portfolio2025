<template>
  <div class="min-h-screen">
    <main
      class="max-w-5xl mx-auto px-6 py-6 min-h-screen flex items-center"
    >
      <div class="w-full">
        <div class="space-y-6">
          <h1
            class="inline-block text-7xl md:text-8xl font-bold text-white border-b-4 border-white pb-3 mb-4"
          >
            Hello!
          </h1>

          <div class="space-y-4">
            <p class="text-white text-4xl md:text-5xl font-bold">
              I'm <span class="highlight-text">Tom</span>,
            </p>

            <p
              class="text-white/90 text-xl md:text-3xl leading-relaxed max-w-3xl"
            >
              a <span class="highlight-text">software developer</span> dude out
              in the world. Right now I work for a bank making surprisingly cool
              stuff.
            </p>

            <p
              class="text-white/90 text-xl md:text-3xl leading-relaxed max-w-3xl"
            >
              I know a lot about
              <span class="highlight-text">Javascript</span> but I am spending
              the most time with <span class="highlight-text">Node</span> and
              <span class="highlight-text">Vue</span> these days.
            </p>

            <p
              class="text-white/90 text-xl md:text-3xl leading-relaxed max-w-3xl"
            >
              I have a wonderful partner and we are currently based in
              <span class="highlight-text">Minneapolis</span>.
            </p>

            <p class="text-white text-3xl md:text-4xl font-bold mt-8">
              Come on in and take a look around!
            </p>
          </div>
        </div>
      </div>
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
