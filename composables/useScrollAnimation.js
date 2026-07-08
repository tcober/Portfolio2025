import { nextTick, onBeforeUnmount, onMounted, shallowRef, watch } from "vue";

export function useScrollAnimation(
  selector = ".animate-on-scroll",
  watchSource = null
) {
  const observer = shallowRef(null);

  const STAGGER_MS = 60;
  const MAX_STAGGER_STEPS = 3;

  const createObserver = () =>
    new IntersectionObserver(
      (entries, obs) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        visible.forEach((entry, index) => {
          const step = Math.min(index, MAX_STAGGER_STEPS);
          entry.target.style.transitionDelay = `${step * STAGGER_MS}ms`;
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

  const observeItems = () => {
    if (!import.meta.client || !observer.value) {
      return;
    }

    nextTick(() => {
      const items = document.querySelectorAll(selector);
      items.forEach((item) => observer.value?.observe(item));
    });
  };

  const ensureObserver = () => {
    if (!import.meta.client) {
      return;
    }

    if (!observer.value) {
      observer.value = createObserver();
    }

    observeItems();
  };

  onMounted(() => {
    ensureObserver();
  });

  if (watchSource) {
    watch(watchSource, (value) => {
      if (value > 0) {
        ensureObserver();
      }
    });
  }

  onBeforeUnmount(() => {
    observer.value?.disconnect();
    observer.value = null;
  });

  return { ensureObserver, observeItems };
}
