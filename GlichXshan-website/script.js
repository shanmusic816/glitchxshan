// Text Slider Script for GlitchXshan Website

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Pehle sab hide karo
slides.forEach(slide => slide.style.display = "none");

// Pehla slide dikhao
slides[0].style.display = "block";

setInterval(() => {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}, 2500); // 2.5 seconds