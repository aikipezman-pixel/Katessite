const lightboxLinks = document.querySelectorAll(".artwork-lightbox-link");
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightboxImg");
const lightboxClose = document.querySelector("#lightboxClose");

lightboxLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const image = link.querySelector("img");

    lightboxImg.src = link.href;
    lightboxImg.alt = image.alt;

    lightbox.classList.add("active");
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxImg.src = "";
  lightboxImg.alt = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});