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
            controls.children[index].classList.add('active'); // Adiciona classe ativa à bolinha correspondente
        } else {
            slide.classList.remove('active');
            controls.children[index].classList.remove('active'); // Remove classe ativa da bolinha correspondente
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

// Remover eventos de clique das setas
// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// Remover setInterval se não quiser a mudança automática
// setInterval(nextSlide, 3000); // Mudar de slide a cada 3 segundos

// Criar bolinhas de controle dinamicamente
slides.forEach((_, index) => {
    const button = document.createElement('button');
    if (index === currentSlide) {
        button.classList.add('active');
    }
    button.addEventListener('click', () => {
        currentSlide = index;
        showSlide();
    });
    controls.appendChild(button);
});

function updateProgressBar(progressBarId, progressPercentId, percent) {
    const progressBar = document.getElementById(progressBarId);
    const progressPercent = document.getElementById(progressPercentId);

    progressBar.style.width = percent + '%';
    progressBar.style.transform = `scaleX(${percent / 100})`; // Adiciona a transformação
    progressPercent.textContent = percent + '%';
}

updateProgressBar('progressBar1', 'progressPercent1', 20); // BARRA 1
updateProgressBar('progressBar2', 'progressPercent2', 100); // BARRA 2

// Adicionar classe 'loaded' às imagens quando carregadas
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});

// Função para verificar se um elemento está na visualização
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Adicionar animação de fade-in para seções ao rolar a página
const sections = document.querySelectorAll('section');
function checkSections() {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);