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

// Função para alternar o tema
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
    }
}

const translations = {
    en: {
        "Sobre Mim": "About Me",
        "Projetos": "Projects",
        "Contato": "Contact",
        "Trocar Tema": "Toggle Theme",
        "Traduzir Página": "Translate Page",
        "Estagiário de T.I - HTML + CSS": "IT Intern - HTML + CSS",
        "Olá! Meu nome é Samuel Oliveira, tenho 18 anos e sou um entusiasta da tecnologia em constante aprendizado. Atualmente, estou cursando o 2º semestre de Ciências da Computação, onde estou aprofundando meus conhecimentos em diversas áreas da TI.": "Hello! My name is Samuel Oliveira, I am 18 years old and I am a technology enthusiast in constant learning. Currently, I am in the 2nd semester of Computer Science, where I am deepening my knowledge in various areas of IT.",
        "Tenho experiência prática com HTML, CSS e banco de dados, e estou sempre buscando novas oportunidades para aplicar e expandir esses conhecimentos. Meu objetivo é encontrar uma posição na área de tecnologia, onde eu possa contribuir com minha paixão e vontade de aprender.": "I have practical experience with HTML, CSS, and databases, and I am always looking for new opportunities to apply and expand this knowledge. My goal is to find a position in the technology field where I can contribute with my passion and willingness to learn.",
        "Estou empolgado para crescer na área e fazer parte de uma equipe que valorize inovação e colaboração. Se você está procurando alguém que é curioso, dedicado e sempre disposto a enfrentar novos desafios, eu sou a pessoa certa!": "I am excited to grow in the field and be part of a team that values innovation and collaboration. If you are looking for someone who is curious, dedicated, and always willing to face new challenges, I am the right person!",
        "Ciencias da Computação - 2º Semestre (Em Andamento)": "Computer Science - 2nd Semester (In Progress)",
        "Gestão de Projetos - Faculdade Anhanguera (Concluído)": "Project Management - Anhanguera College (Completed)",
        "Voltar para a Página Inicial": "Back to Home Page"
    }
};

let currentLanguage = 'pt';
const originalContent = new Map();

function translatePage() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    if (currentLanguage === 'pt') {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            originalContent.set(element, element.innerHTML);
            element.innerHTML = translations.en[key];
        });
        currentLanguage = 'en';
    } else {
        elementsToTranslate.forEach(element => {
            element.innerHTML = originalContent.get(element);
        });
        currentLanguage = 'pt';
    }
}