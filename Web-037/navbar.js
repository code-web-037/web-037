function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");
  const close = document.getElementById("close");

  nav.classList.toggle("show");

  if (nav.classList.contains("show")) {
    hamburger.style.display = "none";
    close.style.display = "inline-block";
  } else {
    hamburger.style.display = "inline-block";
    close.style.display = "none";
  }
}
// Show button after scrolling 300px
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top smoothly when clicked
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});