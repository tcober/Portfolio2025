/**
 * Locks page scroll without the horizontal shift caused by the scrollbar
 * disappearing when `overflow: hidden` is applied.
 *
 * We measure the real scrollbar width and expose it as the `--scrollbar-width`
 * CSS variable so the page and the fixed header can reserve that space while
 * locked (see `html.scroll-locked` in components.css). Measuring beats
 * `scrollbar-gutter`, which doesn't reserve a matching gutter for the custom
 * `::-webkit-scrollbar` on macOS.
 *
 * Reference counted so overlapping locks (e.g. menu + lightbox) coexist without
 * one releasing the other's lock.
 */
let holders = 0;

function applyLock(): void {
  const root = document.documentElement;
  root.style.setProperty(
    "--scrollbar-width",
    `${window.innerWidth - root.clientWidth}px`,
  );
  root.classList.add("scroll-locked");
}

function releaseLock(): void {
  const root = document.documentElement;
  root.classList.remove("scroll-locked");
  root.style.removeProperty("--scrollbar-width");
}

export function useScrollLock() {
  let held = false;

  const lock = (): void => {
    if (held) return;
    held = true;
    if (++holders === 1) applyLock();
  };

  const unlock = (): void => {
    if (!held) return;
    held = false;
    if (--holders === 0) releaseLock();
  };

  return { lock, unlock };
}
