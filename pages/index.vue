<template>
  <div class="min-h-screen bg-slate-100 relative overflow-hidden">
    <!-- Decorative background blocks -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-80 h-80 bg-indigo-200 rounded-xl opacity-60 animate-blob"
      ></div>
      <div
        class="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-2xl opacity-60 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-96 h-64 bg-teal-200 rounded-3xl opacity-50 animate-blob animation-delay-4000"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-200 rounded-xl opacity-40 animate-blob animation-delay-1000"
      ></div>
    </div>

    <!-- Timeline Section -->
    <main class="relative z-10 max-w-5xl mx-auto px-4 py-16">
      <!-- Feed Header -->
      <div class="text-center mb-16">
        <div class="inline-block bg-indigo-600 px-8 py-4 rounded-2xl mb-4">
          <h1 class="text-5xl md:text-6xl font-display text-white">FEED</h1>
        </div>
      </div>
      <div v-if="loading" class="text-center py-16">
        <div class="inline-block bg-indigo-500 p-6 rounded-2xl">
          <div
            class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"
          ></div>
          <p class="mt-4 text-white font-medium">Loading posts...</p>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-16">
        <div class="inline-block bg-red-500 px-8 py-6 rounded-2xl">
          <div class="text-6xl mb-4">⚠️</div>
          <h2 class="text-2xl font-semibold text-white mb-2">
            Something went wrong
          </h2>
          <p class="text-red-100 mb-4">
            {{ error }}
          </p>
          <button
            class="inline-flex items-center px-6 py-3 rounded-xl bg-white text-red-600 font-medium hover:bg-red-50 transition-colors duration-200"
            @click="refresh()"
          >
            Try again
          </button>
        </div>
      </div>

      <div v-else-if="!posts || posts.length === 0" class="text-center py-16">
        <div class="inline-block bg-slate-500 px-8 py-6 rounded-2xl">
          <div class="text-6xl mb-4">📝</div>
          <h2 class="text-2xl font-semibold text-white mb-2">No posts yet</h2>
          <p class="text-slate-200">Check back soon for updates!</p>
        </div>
      </div>

      <div v-else class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-400 rounded-full"
        ></div>

        <div class="space-y-12">
          <article
            v-for="(post, index) in posts"
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
                'absolute top-8 w-6 h-6 rounded-xl border-2 border-slate-100 z-10',
                index % 3 === 0
                  ? 'bg-indigo-500'
                  : index % 3 === 1
                  ? 'bg-purple-500'
                  : 'bg-teal-500',
                index % 2 === 0
                  ? 'md:right-1/2 md:transform md:translate-x-3'
                  : 'md:left-1/2 md:transform md:-translate-x-3',
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
                  'group rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden',
                  index % 3 === 0
                    ? 'bg-indigo-50 hover:bg-indigo-100'
                    : index % 3 === 1
                    ? 'bg-purple-50 hover:bg-purple-100'
                    : 'bg-teal-50 hover:bg-teal-100',
                ]"
              >
                <!-- Card decoration -->
                <div
                  :class="[
                    'absolute top-0 left-0 w-full h-2 rounded-t-2xl',
                    index % 3 === 0
                      ? 'bg-indigo-500'
                      : index % 3 === 1
                      ? 'bg-purple-500'
                      : 'bg-teal-500',
                  ]"
                ></div>

                <!-- Post number -->
                <div
                  :class="[
                    'absolute top-4 font-mono text-xs font-bold px-4 py-2 rounded-xl text-white',
                    index % 3 === 0
                      ? 'bg-indigo-600'
                      : index % 3 === 1
                      ? 'bg-purple-600'
                      : 'bg-teal-600',
                    index % 2 === 0 ? 'md:right-4 right-4' : 'md:left-4 left-4',
                  ]"
                >
                  {{ String(index + 1).padStart(2, "0") }}
                </div>

                <!-- Content -->
                <div class="pt-4">
                  <StoryblokComponent :blok="post.content" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  shallowRef,
  watch,
  ref,
} from "vue";

// SEO meta tags with useSeoMeta for better optimization
useSeoMeta({
  title: "Portfolio Timeline - My Journey",
  description:
    "A timeline view of my professional journey, projects, and thoughts. Explore my work, experiences, and creative process through an interactive timeline.",
  ogTitle: "Portfolio Timeline - My Journey",
  ogDescription:
    "A timeline view of my professional journey, projects, and thoughts. Explore my work, experiences, and creative process through an interactive timeline.",
  ogType: "website",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});

// Use useAsyncData directly for proper SSR/client hydration
const {
  data: posts,
  pending: loading,
  error,
  refresh,
} = await useAsyncData("feed-posts", async () => {
  try {
    const storyblokApi = useStoryblokApi();
    const response = await storyblokApi.get("cdn/stories", {
      starts_with: "posts/",
      version: process.env.NODE_ENV === "production" ? "published" : "draft",
      sort_by: "created_at:desc",
    });

    if (process.env.NODE_ENV !== "production") {
      console.log("Fetched posts:", response.data.stories?.length || 0);
    }

    return response.data.stories || [];
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error fetching posts:", err);
    }
    throw err;
  }
});

const observer = shallowRef(null);

const createObserver = () =>
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

const observeTimelineItems = () => {
  if (!process.client || !observer.value) {
    return;
  }

  nextTick(() => {
    const timelineItems = document.querySelectorAll(".animate-on-scroll");
    timelineItems.forEach((item) => observer.value?.observe(item));
  });
};

const ensureObserver = () => {
  if (!process.client) {
    return;
  }

  if (!observer.value) {
    observer.value = createObserver();
  }

  observeTimelineItems();
};

onMounted(() => {
  ensureObserver();
});

watch(
  () => posts.value?.length || 0,
  (count) => {
    if (count > 0) {
      ensureObserver();
    }
  }
);

onBeforeUnmount(() => {
  observer.value?.disconnect();
  observer.value = null;
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
