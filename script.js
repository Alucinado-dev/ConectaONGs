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




