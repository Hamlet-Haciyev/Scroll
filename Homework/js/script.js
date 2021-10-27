let scrollBtn = document.getElementById("scroll-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 900) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});
