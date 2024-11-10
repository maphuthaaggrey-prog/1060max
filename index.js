const images = [
   
    './images/pexels-wendywei-1190297.jpg',
    './images/1060.jpg'
];


let slideIndex = 0;

function changeBackground() {
    const heroSection = document.querySelector('.hero');

    // Change the background image with top-to-bottom gradient overlay
    heroSection.style.backgroundImage = `
        linear-gradient(to bottom, rgba(0, 0, 0, 5), rgba(0, 0, 0, 0.01)), 
        url(${images[slideIndex]}
    `;

    slideIndex = (slideIndex + 1) % images.length; // Loop back to the first image when reaching the end


    setTimeout(changeBackground, 5000);
}

// Initial call to start the slideshow
changeBackground();
function scrollToLeft(button) {
    // Find the parent blog section and its scrollable container
    const scrollContainer = button.closest('.blog').querySelector('.scroll-container');
    
    // Scroll left by 300 pixels
    scrollContainer.scrollBy({
        left: -500, // Move left
        behavior: 'smooth' // Smooth scrolling effect
    });
}

function scrollToRight(button) {
    // Find the parent blog section and its scrollable container
    const scrollContainer = button.closest('.blog').querySelector('.scroll-container');
    
    // Scroll right by 300 pixels
    scrollContainer.scrollBy({
        left: 500, // Move right
        behavior: 'smooth' // Smooth scrolling effect
    });
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Add class 'scrolled' when user scrolls 50px or more
    if (window.scrollY > 800) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const nav = document.querySelector('.navbar');

    if (window.scrollY > 5) {
        nav.classList.add('fix');
    } else {
        nav.classList.remove('fix');
    }



});
