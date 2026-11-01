<template>
  <div>
    <div
      class="fixed inset-0 z-40 bg-brand-950/70 transition-opacity duration-300 motion-reduce:transition-none print:hidden"
      :class="backdropClasses"
      aria-hidden="true"
      @click="$emit('close')"
    ></div>

    <section
      ref="panelRef"
      role="dialog"
      aria-modal="true"
      :aria-label="label"
      tabindex="-1"
      :inert="isClosed"
      class="fixed inset-y-0 right-0 z-50 w-full max-w-5xl bg-white outline-none transition-transform duration-300 ease-out motion-reduce:transition-none print:static print:max-w-none print:transform-none"
      :class="panelClasses"
      @keydown.esc="$emit('close')"
    >
      <button
        type="button"
        class="absolute right-5 top-5 z-10 flex h-10 items-center gap-2 border border-white/50 bg-brand-950 px-3 text-sm font-semibold text-white transition-colors hover:border-white print:hidden"
        @click="$emit('close')"
      >
        Close
        <svg
          class="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div
        class="h-full overflow-y-auto overscroll-contain print:h-auto print:overflow-visible"
      >
        <slot />
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

defineEmits(["close"]);

const panelRef = ref(null);
const { lock, unlock } = useScrollLock();
let focusBeforeOpen = null;

const isClosed = computed(() => !props.isOpen);

const panelClasses = computed(() =>
  props.isOpen ? "translate-x-0" : "translate-x-full print:hidden",
);

const backdropClasses = computed(() =>
  props.isOpen ? "opacity-100" : "pointer-events-none opacity-0",
);

// Freeze the page behind the panel and move focus into it.
const onOpen = () => {
  focusBeforeOpen = document.activeElement;
  lock();
  nextTick(() => panelRef.value?.focus());
};

// Give focus back to whatever opened the panel.
const onClose = () => {
  unlock();
  nextTick(() => focusBeforeOpen?.focus());
};

watch(
  () => props.isOpen,
  (isOpen) => (isOpen ? onOpen() : onClose()),
);

// Landing on /resume renders the panel already open.
onMounted(() => {
  if (props.isOpen) onOpen();
});

onUnmounted(unlock);
</script>
