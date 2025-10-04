<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
    <!-- Timeline Section -->
    <main class="timeline-container py-8">
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

      <div v-else>
        <ul class="space-y-0">
          <li
            v-for="(post, index) in feedStore.posts"
            :key="post.id"
            class="timeline-item animate-on-scroll"
            :style="{ animationDelay: `${index * 150}ms` }"
          >
            <div class="timeline-content">
              <StoryblokComponent :blok="post.content" />
            </div>
          </li>
        </ul>
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
/* Custom animations that complement Tailwind */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
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
</style>
