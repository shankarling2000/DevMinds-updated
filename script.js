function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const radioButtons = document.querySelectorAll('.carousel-navigation input');

    let currentSlide = 0;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselImages.length;
        updateSlide();
    }

    setInterval(nextSlide, 4000);

    function updateSlide() {
        carouselImages.forEach((image, index) => {
            if (index === currentSlide) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
        updateRadioButtons();
    }

    function updateRadioButtons() {
        radioButtons.forEach((radio, index) => {
            if (index === currentSlide) {
                radio.checked = true;
            } else {
                radio.checked = false;
            }
        });
    }

    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentSlide = index;
            updateSlide();
        });
    });

    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        });
    });

    updateSlide();
});
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const radioButtons = document.querySelectorAll('.carousel-navigation input');

    let currentSlide = 0;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselImages.length;
        updateSlide();
    }

    setInterval(nextSlide, 4000);

    function updateSlide() {
        carouselImages.forEach((image, index) => {
            if (index === currentSlide) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
        updateRadioButtons();
    }

    function updateRadioButtons() {
        radioButtons.forEach((radio, index) => {
            if (index === currentSlide) {
                radio.checked = true;
            } else {
                radio.checked = false;
            }
        });
    }

    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentSlide = index;
            updateSlide();
        });
    });

    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        });
    });

    updateSlide();
});


// Function to toggle background color of navbar when scrolled
function toggleNavbarBackground() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Add event listener for scrolling
window.addEventListener('scroll', toggleNavbarBackground);
