const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

// Mostrar la diapositiva
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; // Regresa a la primera diapositiva si se pasa del límite
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Va a la última diapositiva si es negativo
    } else {
        currentSlide = index; // Cambia a la siguiente diapositiva
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Función para avanzar automáticamente cada 2 segundos
function autoSlide() {
    showSlide(currentSlide + 1);
}

// Iniciar el slider automático
let slideInterval = setInterval(autoSlide, 2000);

// Pausar el slider cuando el mouse esté sobre el slider
document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(slideInterval); // Pausa al pasar el mouse sobre el slider
});

// Reanudar el slider cuando el mouse se retire
document.querySelector('.slider').addEventListener('mouseout', () => {
    slideInterval = setInterval(autoSlide, 2000); // Reanuda al quitar el mouse
});
