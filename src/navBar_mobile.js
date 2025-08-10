const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.right = "0";
  document.body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.right = "-100%";
  document.body.classList.remove("overflow-hidden");
});
