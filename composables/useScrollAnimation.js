import { nextTick, onBeforeUnmount, onMounted, shallowRef, watch } from "vue";

export function useScrollAnimation(
  selector = ".animate-on-scroll",
  watchSource = null
) {
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
