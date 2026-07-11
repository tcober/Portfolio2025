<template>
  <Teleport to="body">
    <nav
      id="site-menu"
      :class="[
        'site-menu fixed inset-0 z-40 transition-transform duration-500 ease-in-out',
        menuOverlayClasses,
      ]"
      :aria-hidden="menuAriaHidden"
      :inert="menuInert"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div
        class="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-24 sm:px-12"
      >
        <div
          class="menu-links border-t border-blue-950 font-bold"
          role="navigation"
          aria-label="Primary navigation"
        >
          <NuxtLink to="/" @click="$emit('navigate')" :class="homeLinkClasses">
            Home
          </NuxtLink>

          <NuxtLink
            to="/feed"
            @click="$emit('navigate')"
            :class="feedLinkClasses"
          >
            Timeline
          </NuxtLink>

          <NuxtLink
            to="/resume"
            @click="$emit('navigate')"
            :class="resumeLinkClasses"
          >
            Resume
          </NuxtLink>

          <a
            href="https://github.com/tcober"
            target="_blank"
            rel="noopener noreferrer"
            @click="$emit('navigate')"
            class="menu-link block border-b border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  </Teleport>
</template>

<script setup>
const route = useRoute();

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["navigate"]);

// Computed classes for menu overlay
const menuOverlayClasses = computed(() =>
  props.isOpen ? "translate-x-0" : "-translate-x-full",
);

const menuAriaHidden = computed(() => String(!props.isOpen));
const menuInert = computed(() => !props.isOpen);

// Navigation link classes - active items get the white highlight bar, inactive get blue hover
const getLinkClasses = (path, isBold = false) => {
  const isActive = route.path === path;
  const baseClasses =
    "menu-link block border-b border-blue-950 text-blue-950";
  const boldClass = isBold ? " font-bold" : "";

  return isActive
    ? `${baseClasses}${boldClass} bg-blue-950 text-white`
    : `${baseClasses}${boldClass} hover:bg-blue-950 hover:text-white`;
};

const homeLinkClasses = computed(() => getLinkClasses("/", true));
const feedLinkClasses = computed(() => getLinkClasses("/feed"));
const resumeLinkClasses = computed(() => getLinkClasses("/resume"));
</script>
