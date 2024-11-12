const images = [
    './images/pexels-wendywei-1190297.jpg',
    './images/1060.jpg'
];

let slideIndex = 0;

function changeBackground() {
    const heroSection = document.querySelector('.hero');

    heroSection.style.backgroundImage = ` 
        url(${images[slideIndex]})
    `;

    slideIndex = (slideIndex + 1) % images.length; 

    setTimeout(changeBackground, 5000); 
}

changeBackground();


function scrollToLeft(button) {
    const scrollContainer = button.closest('.blog').querySelector('.scroll-container');
    scrollContainer.scrollBy({ left: -500, behavior: 'smooth' });
}

function scrollToRight(button) {
    const scrollContainer = button.closest('.blog').querySelector('.scroll-container');
    scrollContainer.scrollBy({ left: 500, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const targetSection = document.querySelector('.target-section'); // Replace with your section's class or ID

    const sectionPosition = targetSection.getBoundingClientRect();

    // If the section is at the top of the viewport or partially visible, add the 'scrolled' class
    if (sectionPosition.top <= 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const menu = document.querySelector('nav ul');
const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('open')
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
});

// Close Menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.matches('.menu-icon')) {
        closeMenu();
    }
});


function closeMenu() {
    menu.classList.remove('open')
}




