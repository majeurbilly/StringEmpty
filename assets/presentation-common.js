let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const indicator = document.getElementById("slideIndicator");
const totalIndicator = document.getElementById("totalIndicator");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "prev", "next");
        slide.classList.add(index === currentSlide ? "active" : index < currentSlide ? "prev" : "next");
    });

    if (indicator) indicator.textContent = currentSlide + 1;
    if (totalIndicator) totalIndicator.textContent = slides.length;
    if (btnPrev) btnPrev.disabled = currentSlide === 0;
    if (btnNext) btnNext.disabled = currentSlide === slides.length - 1;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide += 1;
        updateSlides();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide -= 1;
        updateSlides();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === " " || event.key === "Enter") nextSlide();
    if (event.key === "ArrowLeft") prevSlide();
});

updateSlides();
