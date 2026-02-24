<template>
  <div class="min-h-screen relative overflow-hidden">
    <main
      class="relative z-10 max-w-5xl mx-auto px-6 py-6 min-h-screen flex items-center"
    >
      <div class="w-full">
        <div class="space-y-6">
          <h1
            class="greeting-text text-7xl md:text-8xl font-bold text-white mb-4 animate-float"
          >
            Hello!
          </h1>

          <div class="space-y-4">
            <p
              class="text-white text-4xl md:text-5xl font-bold animate-float-delay-1"
            >
              I'm <span class="highlight-text">Tom</span>,
            </p>

            <p
              class="text-white/90 text-xl md:text-3xl leading-relaxed max-w-3xl animate-float-delay-2"
            >
              a <span class="highlight-text">software developer</span> dude out
              in the world. Right now I work for a bank making surprisingly cool
              stuff.
            </p>

            <p
              class="text-white/90 text-xl md:text-3xl leading-relaxed max-w-3xl animate-float-delay-3"
            >
              I know a lot about
              <span class="highlight-text">Javascript</span> but I am spending
              the most time with <span class="highlight-text">Node</span> and
              <span class="highlight-text">Vue</span> these days.
            </p>

            <p
              class="text-white/90 text-xl md:text-3xl leading-relaxed max-w-3xl animate-float-delay-4"
            >
              I have a wonderful partner and we are currently based in
              <span class="highlight-text">Minneapolis</span>.
            </p>

            <p
              class="text-white text-3xl md:text-4xl font-bold mt-8 animate-float-delay-5"
            >
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

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(0.5deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay-1 {
  animation: float 7s ease-in-out infinite;
  animation-delay: 0.5s;
}

.animate-float-delay-2 {
  animation: float 8s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-delay-3 {
  animation: float 7.5s ease-in-out infinite;
  animation-delay: 1.5s;
}

.animate-float-delay-4 {
  animation: float 8.5s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-delay-5 {
  animation: float 7s ease-in-out infinite;
  animation-delay: 2.5s;
}

/* Greeting text with subtle effects */
.greeting-text {
  text-shadow:
    0 0 30px rgba(255, 255, 255, 0.3),
    0 0 60px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.greeting-text:hover {
  text-shadow:
    0 0 40px rgba(255, 255, 255, 0.5),
    0 0 80px rgba(255, 255, 255, 0.3);
  transform: scale(1.02);
}

/* Highlight text effects */
.highlight-text {
  position: relative;
  display: inline-block;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.highlight-text:hover {
  transform: scale(1.05) rotate(-1deg);
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
}
</style>
