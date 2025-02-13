const container = document.querySelector('.carrossel-container');
const slides = document.querySelectorAll('.carrossel-slide');
const prevButton = document.querySelector('.carrossel-btn.prev');
const nextButton = document.querySelector('.carrossel-btn.next');
let currentIndex = 0;

function moveToSlide(index) {
    const slideWidth = slides[0].clientWidth;
    container.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        moveToSlide(currentIndex + 1);
    }
});

const buttonEntidades = document.querySelectorAll('.btn-entidades');

function showEntidades() {
    const vejaEntidades = document.querySelector('.veja-entidades');
    const entidadesCadastradas = document.querySelector('.entidades-cadastradas');
    if (entidadesCadastradas.style.display === 'none' || entidadesCadastradas.style.display === '') {
        entidadesCadastradas.style.display = 'flex';
        vejaEntidades.style.display = 'none';
    } else {
        entidadesCadastradas.style.display = 'none';
        vejaEntidades.style.display = 'flex';
    }
}

buttonEntidades.forEach(button => {
    button.addEventListener('click', showEntidades);
});

