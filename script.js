const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const currentYear = document.querySelector("#current-year");
const imageDialog = document.querySelector(".image-dialog");
const dialogImage = imageDialog.querySelector("img");

currentYear.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
  }
});

document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("click", () => {
    dialogImage.src = card.dataset.image;
    dialogImage.alt = card.dataset.alt;
    imageDialog.showModal();
  });
});

imageDialog.querySelector(".dialog-close").addEventListener("click", () => {
  imageDialog.close();
});

imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) {
    imageDialog.close();
  }
});
