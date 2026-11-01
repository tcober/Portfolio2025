/**
 * Stops the page from scrolling while the resume panel is open.
 *
 * Hiding the scrollbar would shift the page sideways, so we measure it and
 * expose the width as the `--scrollbar-width` CSS variable for the page to
 * reserve (see `html.scroll-locked` in components.css). Measuring beats
 * `scrollbar-gutter`, which doesn't reserve a matching gutter for the custom
 * `::-webkit-scrollbar` on macOS.
 */
export function useScrollLock() {
  const lock = (): void => {
    const root = document.documentElement;
    root.style.setProperty(
      "--scrollbar-width",
      `${window.innerWidth - root.clientWidth}px`,
    );
    root.classList.add("scroll-locked");
  };

  const unlock = (): void => {
    const root = document.documentElement;
    root.classList.remove("scroll-locked");
    root.style.removeProperty("--scrollbar-width");
  };

  return { lock, unlock };
}
