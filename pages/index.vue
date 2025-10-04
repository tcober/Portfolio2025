<template>
  <li v-for="post in feedStore.posts" :key="post.id">
    {{ post.name }}
  </li>
</template>

<script setup>
import { useFeedStore } from "~/stores/feedStore";
const feedStore = useFeedStore();
onMounted(() => {
  feedStore.fetchPosts();
});
</script>
