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
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide img');
    const numVisibleSlides = 4;
    let totalSlides = slides.length;
    let remainingSlides = totalSlides - numVisibleSlides;

    function showSlide() {
        slides.forEach((slide, index) => {
            if (index < slideIndex || index >= slideIndex + numVisibleSlides) {
                slide.style.display = 'none';
            } else {
                slide.style.display = 'block';
            }
        });
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
            showSlide();
        }
    }

    function nextSlide() {
        if (slideIndex < remainingSlides) {
            slideIndex++;
            showSlide();
        }
    }

    