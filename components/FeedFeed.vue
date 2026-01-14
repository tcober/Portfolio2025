<template>
  <div class="relative mb-20">
    <!-- Timeline line -->
    <div
      class="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-400 z-0"
    ></div>

    <div>
      <div
        v-for="(group, groupIndex) in groupedPosts"
        :key="groupIndex"
        :class="groupIndex > 0 ? 'mt-16' : ''"
      >
        <!-- Date header for the group -->
        <div
          class="relative flex justify-center z-20 mb-6"
          :style="{ animationDelay: `${group.startIndex * 200}ms` }"
        >
          <div
            class="text-sm text-blue-900 bg-white px-2 py-1 whitespace-nowrap font-bold"
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
            :style="postLoadingAnimation(group.startIndex + postIndex)"
          >
            <div :class="postOffset(group.startIndex + postIndex)">
              <div :class="getCardClass(post.content)">
                <StoryblokComponent :blok="post.content" />
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
import { ref, onMounted } from "vue";

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

// Helper functions for styling
const getArticleClasses = (index) => [
  "relative animate-on-scroll",
  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto",
];

const postLoadingAnimation = (index) => ({
  animationDelay: `${index * 200}ms`,
});

const postOffset = (index) => [
  "relative",
  index % 2 === 0 ? "md:mr-12" : "md:ml-12",
];

// Conditionally apply card class based on content type
const getCardClass = (content) => {
  if (!content) return "card";

  const componentType = content.component;
  const imageSetLength = content.imageSet?.length;

  // No card border for Youtube, Reddit, or single-image ImageSet
  if (componentType === "youtube") return "";
  if (componentType === "reddit") return "";
  if (componentType === "imageSet" && imageSetLength === 1) return "";

  // Card border for Quote and multi-image ImageSet
  return "card";
};

// Group posts by date
const groupedPosts = ref([]);

onMounted(() => {
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

  groupedPosts.value = groups;
});

// Scroll animation observer for posts
useScrollAnimation(".animate-on-scroll", () => props.posts?.length || 0);
</script>
