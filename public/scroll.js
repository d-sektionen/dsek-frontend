window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > 30);
});
