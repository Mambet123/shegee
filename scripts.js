document.querySelectorAll('.nav-link').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('data-target');
        var targetContent = document.getElementById(targetId);
        if (targetContent.classList.contains('active')) {
            targetContent.classList.remove('active');
        } else {
            document.querySelectorAll('.content-container').forEach(function(content) {
                content.classList.remove('active');
            });
            targetContent.classList.add('active');
        }
    })});
 let currentIndex = 0;

function moveCarousel(direction) {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemsPerSlide = window.innerWidth >= 768 ? 4 : 1;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = Math.ceil(totalItems / itemsPerSlide) - 1;
    } else if (currentIndex >= Math.ceil(totalItems / itemsPerSlide)) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100 / itemsPerSlide;
    carouselContainer.style.transform = translateX(${offset}%);
}

window.addEventListener('resize', () => {
    // Adjust carousel when window is resized
    moveCarousel(0);
});

// Initial setup
moveCarousel(0);
