/**
 * The minimum scroll distance before toggling classes
 * Without this scroll states become subject to "jittering" on some devices
 */
const MINIMUM_SCROLL = 20;

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > MINIMUM_SCROLL);

  const scrollDelta = window.scrollY - lastScrollY;
  if (Math.abs(scrollDelta) > MINIMUM_SCROLL) {
    document.body.classList.toggle("scrolled-down", scrollDelta > 0);
    document.body.classList.toggle("scrolled-up", scrollDelta < 0);
    lastScrollY = scrollY;
  }
});
