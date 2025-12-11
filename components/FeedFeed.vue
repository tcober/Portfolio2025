<template>
  <div class="relative">
    <!-- Timeline line -->
    <div
      class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black z-0"
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
        <div :class="['relative', index % 2 === 0 ? 'md:mr-12' : 'md:ml-12']">
          <div class="group card">
            <!-- Content -->
            <div>
              <StoryblokComponent :blok="post.content" />
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, shallowRef, watch } from "vue";

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
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
  () => props.posts?.length || 0,
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

<!-- 
  Animations are handled by global assets/css/animations.css
  No scoped styles needed - uses .animate-on-scroll and .in-view classes
-->
