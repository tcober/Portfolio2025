<template>
  <div class="min-h-screen bg-white">
    <!-- Timeline Section -->
    <main class="max-w-5xl mx-auto px-6 py-12">
      <!-- Feed Header -->
      <div class="mb-12">
        <h1 class="text-5xl font-bold text-black mb-2">Feed</h1>
        <div class="w-12 h-1 bg-black rounded-full"></div>
      </div>
      <div v-if="loading" class="text-center py-16">
        <div class="inline-block p-6">
          <div
            class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-black"
          ></div>
          <p class="mt-4 text-black font-medium">Loading posts...</p>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-16">
        <div class="inline-block px-8 py-6 border-2 border-black rounded-lg">
          <div class="text-6xl mb-4">⚠️</div>
          <h2 class="text-2xl font-bold text-black mb-2">
            Something went wrong
          </h2>
          <p class="text-black mb-4">{{ error }}</p>
          <button
            class="inline-flex items-center px-6 py-3 rounded bg-black text-white font-medium hover:bg-gray-800 transition-all duration-200 border-2 border-black"
            @click="refresh()"
          >
            Try again
          </button>
        </div>
      </div>

      <div v-else-if="!posts || posts.length === 0" class="text-center py-16">
        <div class="inline-block px-8 py-6 border-2 border-black rounded-lg">
          <div class="text-6xl mb-4">📝</div>
          <h2 class="text-2xl font-bold text-black mb-2">No posts yet</h2>
          <p class="text-black">Check back soon for updates!</p>
        </div>
      </div>

      <div v-else class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black"
        ></div>

        <div class="space-y-12">
          <article
            v-for="(post, index) in posts"
            :key="post.id"
            :class="[
              'relative animate-on-scroll',
              index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto',
            ]"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <!-- Content card -->
            <div
              :class="['relative', index % 2 === 0 ? 'md:mr-12' : 'md:ml-12']"
            >
              <div
                class="group rounded-lg p-6 transition-all duration-300 border-2 border-black"
              >
                <!-- Content -->
                <div>
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
/* Simple fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  animation: fadeInUp 0.6s ease-out forwards;
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
</style>
