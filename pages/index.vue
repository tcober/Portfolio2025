<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-5xl mx-auto px-6 py-12">
      <!-- Feed Header -->
      <div class="mb-12">
        <h1 class="text-5xl font-bold text-black mb-2">Hello!</h1>
        <div class="w-12 h-1 bg-black rounded-full mb-8"></div>
        <p class="text-black text-3xl mb-4">I'm Tom,</p>
        <p class="text-black text-3xl">
          a software developer dude out in the world. Right now I work for a
          bank making surprisingly cool stuff. I know a lot about Javascript but
          I am spending the most time with Node and Vue these days. I have a
          wonderful partner and we are currently based in Minneapolis. Come on
          in and take a look around!
        </p>
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
  robots: "index, follow",
});
</script>
