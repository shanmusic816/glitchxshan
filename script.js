document.addEventListener("DOMContentLoaded", function () {

  /* ===== POPUP CODE ===== */
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closePopup");

  if (popup && closeBtn) {
    popup.style.display = "flex";

    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }

  /* ===== SLIDER CODE ===== */
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  if (slides.length > 0) {
    slides.forEach(slide => slide.style.display = "none");
    slides[0].style.display = "block";

    setInterval(() => {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    }, 2500);
  }

});
