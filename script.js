let currentSlide = 0;

function moverSlider(direction) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.dia').length;
    
    // Calculamos el índice del siguiente slide en un loop
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Cambiamos la posición del slider
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Cuando el slider llega al final, lo restablecemos a la primera posición
    if (currentSlide === 0 && direction === 1) {
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            currentSlide = 0;
        }, 500); // espera a que termine la animación antes de restablecer la transición
    }
}
