<template>
  <div class="relative mb-20">
    <!-- Timeline line -->
    <div
      class="timeline-spine absolute left-4 h-full w-[2px] md:left-1/2 md:-translate-x-1/2 z-0"
    ></div>

    <div>
      <div
        v-for="(group, groupIndex) in groupedPosts"
        :key="group.date"
        :class="getGroupClasses(groupIndex)"
      >
        <!-- Date header for the group -->
        <div
          class="relative z-20 mb-7 flex flex-col items-start gap-1 pl-10 md:items-center md:pl-0"
        >
          <span
            class="bg-white px-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-600"
            aria-hidden="true"
          >
            {{ group.figLabel }}
          </span>
          <div
            class="date-label whitespace-nowrap border-2 border-brand-950 bg-brand-600 px-3 py-1 text-xs font-black uppercase text-white"
          >
            {{ group.date }}
          </div>
        </div>

        <!-- Posts in this date group -->
        <div class="space-y-8">
          <article
            v-for="(post, postIndex) in group.posts"
            :key="post.id"
            :class="getArticleClasses(group.startIndex + postIndex)"
          >
            <div :class="postOffset(group.startIndex + postIndex)">
              <div :class="getCardClass(post.content)">
                <StoryblokComponent
                  :blok="post.content"
                  :is-lcp-candidate="isFirstPost(group.startIndex + postIndex)"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from "~/utils/dateFormatter";
import { computed } from "vue";

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

// Helper functions for styling
const getGroupClasses = (index) => (index > 0 ? "mt-16" : "");

const isFirstPost = (index) => index === 0;

const getArticleClasses = (index) => [
  "relative pl-10 md:pl-0",
  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto",
];

const postOffset = (index) => [
  "relative",
  index % 2 === 0 ? "md:mr-12" : "md:ml-12",
];

// Conditionally apply card class based on content type
const NO_CARD_COMPONENTS = ["youtube", "reddit", "link-preview"];

const getCardClass = (content) => {
  if (!content) return "card";

  const { component, imageSet } = content;
  const isSingleImage = component === "imageSet" && imageSet?.length === 1;

  return NO_CARD_COMPONENTS.includes(component) || isSingleImage ? "" : "card";
};

// Group posts by date - computed so it runs during SSR for prerendering
const groupedPosts = computed(() => {
  const groups = [];
  let currentDate = null;
  let currentGroup = null;
  let globalIndex = 0;

  props.posts.forEach((post) => {
    const postDate = formatDate(post.published_at);

    if (postDate !== currentDate) {
      // Start a new group
      if (currentGroup) {
        groups.push(currentGroup);
      }
      currentDate = postDate;
      currentGroup = {
        date: postDate,
        figLabel: `FIG. ${String(groups.length + 1).padStart(2, "0")}`,
        posts: [post],
        startIndex: globalIndex,
      };
    } else {
      // Add to existing group
      currentGroup.posts.push(post);
    }
    globalIndex++;
  });

  // Push the last group
  if (currentGroup) {
    groups.push(currentGroup);
  }

  return groups;
});
</script>

<style scoped>
.date-label {
  letter-spacing: 0.08em;
  box-shadow: 4px 4px 0 #071b12;
}

.timeline-spine {
  background-image: repeating-linear-gradient(
    to bottom,
    #0a2418 0,
    #0a2418 10px,
    transparent 10px,
    transparent 18px
  );
}
</style>
