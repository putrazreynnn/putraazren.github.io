function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
