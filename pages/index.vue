<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
      ></div>
      <div
        class="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
      ></div>
    </div>

    <!-- Timeline Section -->
    <main class="relative z-10 max-w-5xl mx-auto px-4 py-16">
      <!-- Feed Header -->
      <div class="text-center mb-16">
        <h1
          class="text-5xl md:text-6xl font-display bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4"
        >
          FEED
        </h1>
      </div>
      <div v-if="feedStore.loading" class="text-center py-16">
        <div
          class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"
        ></div>
        <p class="mt-4 text-neutral-600">Loading posts...</p>
      </div>

      <div v-else-if="feedStore.posts.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">📝</div>
        <h2 class="text-2xl font-semibold text-neutral-700 mb-2">
          No posts yet
        </h2>
        <p class="text-neutral-600">Check back soon for updates!</p>
      </div>

      <div v-else class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-teal-200"
        ></div>

        <div class="space-y-12">
          <article
            v-for="(post, index) in feedStore.posts"
            :key="post.id"
            :class="[
              'relative animate-on-scroll',
              index % 2 === 0
                ? 'md:pr-1/2 md:text-right'
                : 'md:pl-1/2 md:ml-auto',
            ]"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <!-- Timeline dot -->
            <div
              :class="[
                'absolute top-8 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10',
                'bg-gradient-to-r',
                index % 3 === 0
                  ? 'from-indigo-400 to-purple-500'
                  : index % 3 === 1
                  ? 'from-purple-400 to-pink-500'
                  : 'from-teal-400 to-cyan-500',
                index % 2 === 0
                  ? 'md:right-1/2 md:transform md:translate-x-2'
                  : 'md:left-1/2 md:transform md:-translate-x-2',
                'left-4 md:left-auto md:right-auto',
              ]"
            ></div>

            <!-- Content card -->
            <div
              :class="[
                'relative ml-12 md:ml-0',
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12',
              ]"
            >
              <div
                :class="[
                  'group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90',
                  'relative overflow-hidden',
                ]"
              >
                <!-- Card decoration -->
                <div
                  :class="[
                    'absolute top-0 left-0 w-full h-1 bg-gradient-to-r',
                    index % 3 === 0
                      ? 'from-indigo-400 to-purple-500'
                      : index % 3 === 1
                      ? 'from-purple-400 to-pink-500'
                      : 'from-teal-400 to-cyan-500',
                  ]"
                ></div>

                <!-- Post number -->
                <div
                  :class="[
                    'absolute top-4 font-mono text-xs font-medium px-3 py-1 rounded-full',
                    'bg-gradient-to-r text-white',
                    index % 3 === 0
                      ? 'from-indigo-400 to-purple-500'
                      : index % 3 === 1
                      ? 'from-purple-400 to-pink-500'
                      : 'from-teal-400 to-cyan-500',
                    index % 2 === 0 ? 'md:right-4 right-4' : 'md:left-4 left-4',
                  ]"
                >
                  {{ String(index + 1).padStart(2, "0") }}
                </div>

                <!-- Content -->
                <div class="pt-4">
                  <StoryblokComponent :blok="post.content" />
                </div>

                <!-- Hover effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1000"
                ></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useFeedStore } from "~/stores/feedStore";
import { nextTick } from "vue";

// Meta tags
useHead({
  title: "Portfolio Timeline - My Journey",
  meta: [
    {
      name: "description",
      content:
        "A timeline view of my professional journey, projects, and thoughts.",
    },
    { property: "og:title", content: "Portfolio Timeline - My Journey" },
    {
      property: "og:description",
      content:
        "A timeline view of my professional journey, projects, and thoughts.",
    },
  ],
});

const feedStore = useFeedStore();

onMounted(() => {
  feedStore.fetchPosts();

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, observerOptions);

  // Observe all timeline items
  nextTick(() => {
    const timelineItems = document.querySelectorAll(".animate-on-scroll");
    timelineItems.forEach((item) => observer.observe(item));
  });
});
</script>

<style scoped>
/* Enhanced animations and effects */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-on-scroll {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-on-scroll.in-view {
  opacity: 1;
}

/* Responsive timeline adjustments */
@media (max-width: 768px) {
  .md\:pr-1\/2 {
    padding-right: 0;
  }

  .md\:pl-1\/2 {
    padding-left: 0;
  }

  .md\:text-right {
    text-align: left;
  }
}

/* Custom gradient text animation */
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

h1 {
  background-size: 200% 200%;
  animation: gradient 6s ease infinite;
}
</style>
