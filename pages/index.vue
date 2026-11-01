<template>
  <div>
    <HomeIntro :inert="isResumeOpen" :class="introClasses" />

    <SidePanel label="Resume" :is-open="isResumeOpen" @close="closeResume">
      <ResumeContent />
    </SidePanel>
  </div>
</template>

<script setup>
// The resume opens in a panel on this page. "/resume" is this same page with
// the panel open, so the link can be shared and Back closes the panel.
// (An alias won't work here: Vue Router treats it as the same location and
// skips the navigation.)
definePageMeta({
  path: "/:panel(resume)?",
  key: "home", // one page instance for both URLs, so the panel can slide in
  scrollToTop: false,
});

const PROFILE_PHOTO =
  "https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg";

const HOME_SEO = {
  title: "Thomas Cober Web Stuff",
  description:
    "Hello there! I'm Tom Cober, a software developer dude out in the world. Thanks for stopping by.",
};

const RESUME_SEO = {
  title: "Thomas Cober's Resume",
  description:
    "Senior JavaScript Engineer with expertise in Vue, Node.js, and full-stack development.",
};

const route = useRoute();
const router = useRouter();

const isResumeOpen = computed(() => route.params.panel === "resume");

const seo = computed(() => (isResumeOpen.value ? RESUME_SEO : HOME_SEO));

// While the resume is open, it's the only thing that prints.
const introClasses = computed(() => (isResumeOpen.value ? "print:hidden" : ""));

// If we opened the panel, step back so Back doesn't reopen it.
// If someone landed on /resume, swap the URL for "/" instead.
const closeResume = () => {
  if (router.options.history.state.back) {
    router.back();
  } else {
    router.replace("/");
  }
};

useSeoMeta({
  title: () => seo.value.title,
  description: () => seo.value.description,
  ogTitle: () => seo.value.title,
  ogDescription: () => seo.value.description,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage: PROFILE_PHOTO,
  robots: "index, follow",
});
</script>
