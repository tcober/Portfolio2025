<template>
  <div class="min-h-screen bg-slate-900 relative">
    <!-- Timeline Section -->
    <main class="relative z-10 max-w-5xl mx-auto px-4 py-16">
      <!-- Feed Header -->
      <div class="text-center mb-16">
        <h1
          class="text-5xl md:text-6xl font-display bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 bg-clip-text text-transparent"
        >
          FEED
        </h1>
      </div>
      <div v-if="loading" class="text-center py-16">
        <div
          class="inline-block bg-blue-600 p-6 rounded-2xl shadow-2xl shadow-blue-500/30"
        >
          <div
            class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"
          ></div>
          <p class="mt-4 text-white font-medium">Loading posts...</p>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-16">
        <div
          class="inline-block bg-red-600 px-8 py-6 rounded-2xl shadow-2xl shadow-red-500/30"
        >
          <div class="text-6xl mb-4">⚠️</div>
          <h2 class="text-2xl font-semibold text-white mb-2">
            Something went wrong
          </h2>
          <p class="text-red-100 mb-4">
            {{ error }}
          </p>
          <button
            class="inline-flex items-center px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-medium hover:bg-yellow-400 transition-colors duration-200 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/40"
            @click="refresh()"
          >
            Try again
          </button>
        </div>
      </div>

      <div v-else-if="!posts || posts.length === 0" class="text-center py-16">
        <div
          class="inline-block bg-green-600 px-8 py-6 rounded-2xl shadow-2xl shadow-green-500/30"
        >
          <div class="text-6xl mb-4">📝</div>
          <h2 class="text-2xl font-semibold text-white mb-2">No posts yet</h2>
          <p class="text-green-100">Check back soon for updates!</p>
        </div>
      </div>

      <div v-else class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
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
                'absolute top-8 w-6 h-6 rounded-xl border-2 border-slate-800 z-10',
                index % 3 === 0
                  ? 'bg-blue-500 shadow-lg shadow-blue-500/60'
                  : index % 3 === 1
                  ? 'bg-green-500 shadow-lg shadow-green-500/60'
                  : 'bg-yellow-500 shadow-lg shadow-yellow-500/60',
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
                  'group rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden shadow-xl',
                  index % 3 === 0
                    ? 'bg-slate-800 hover:bg-slate-700 shadow-blue-500/10 hover:shadow-blue-500/20'
                    : index % 3 === 1
                    ? 'bg-slate-800 hover:bg-slate-700 shadow-green-500/10 hover:shadow-green-500/20'
                    : 'bg-slate-800 hover:bg-slate-700 shadow-yellow-500/10 hover:shadow-yellow-500/20',
                ]"
              >
                <!-- Card decoration -->
                <div
                  :class="[
                    'absolute top-0 left-0 w-full h-2 rounded-t-2xl',
                    index % 3 === 0
                      ? 'bg-blue-500'
                      : index % 3 === 1
                      ? 'bg-green-500'
                      : 'bg-yellow-500',
                  ]"
                ></div>

                <!-- Post number -->
                <div
                  :class="[
                    'absolute top-4 font-mono text-xs font-bold px-4 py-2 rounded-xl shadow-lg',
                    index % 3 === 0
                      ? 'bg-blue-600 text-white shadow-blue-500/50'
                      : index % 3 === 1
                      ? 'bg-green-600 text-white shadow-green-500/50'
                      : 'bg-yellow-500 text-slate-900 shadow-yellow-500/50',
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
