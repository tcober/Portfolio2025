import { useStoryblokApi } from "#imports";

export const useFeedStore = defineStore("feed", {
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      const { data } = await useStoryblokApi().get("cdn/stories", {
        version: "draft",
        starts_with: "posts/",
      });
      this.posts = data.stories;
    },
  },
});
