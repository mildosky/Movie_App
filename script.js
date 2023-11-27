document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#hero .slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function previousSlide() {
        showSlide(currentSlide - 1);
    }

    setInterval(nextSlide, 6000); // Change slide every 6 seconds (adjust as needed)
});


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#hero2 .slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function previousSlide() {
        showSlide(currentSlide - 1);
    }

    setInterval(nextSlide, 6000); // Change slide every 6 seconds (adjust as needed)
});