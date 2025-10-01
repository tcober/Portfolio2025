<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
    :slug="slug"
    :published="story.first_published_at"
  />
</template>

<script setup>
const { slug } = useRoute().params;
const config = useRuntimeConfig();
// Get the story from Storyblok
const story = await useAsyncStoryblok(slug ? slug.join("/") : "main", {
  version: config.public.storyblokVersion,
});
</script>
