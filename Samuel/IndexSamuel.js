const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const controls = document.querySelector('.controls');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

setInterval(nextSlide, 3000); // Mudar de slide a cada 3 segundos

function updateProgressBar(progressBarId, progressPercentId, percent) {
    const progressBar = document.getElementById(progressBarId);
    const progressPercent = document.getElementById(progressPercentId);

    progressBar.style.width = percent + '%';
    progressBar.style.transform = `scaleX(${percent / 100})`; // Adiciona a transformação
    progressPercent.textContent = percent + '%';
}

updateProgressBar('progressBar1', 'progressPercent1', 20); // BARRA 1
updateProgressBar('progressBar2', 'progressPercent2', 100); // BARRA 2