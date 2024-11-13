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

    setTimeout(changeBackground, 3000); 
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
const contact = document.querySelector('.footer-cont');
const contactBtn = document.querySelectorAll('.contactButton');
const cancelBtn = document.querySelector('.cancelBtn');
const terms = document.querySelector('.terms');
const termBtn = document.querySelector('.termsButton');
const closeTerms = document.querySelector('.terms-agree button');
const searchBtn = document.querySelector('.search');
const search = document.querySelector('.search-bar');
const closeSearchBtn = document.querySelector('.search-bar .close-btn');


searchBtn.addEventListener('click', () => {
    search.classList.add('open-search')
});
closeSearchBtn.addEventListener('click', () => {
    search.classList.remove('open-search')
});
termBtn.addEventListener('click', () => {
    terms.classList.add('open-terms')
});
closeTerms.addEventListener('click', () => {
    terms.classList.remove('open-terms')
});
menuBtn.addEventListener('click', () => {
    menu.classList.add('open')
    contact.classList.remove('open-cont')
    search.classList.remove('open-search')
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
});
cancelBtn.addEventListener('click', () => {
    contact.classList.remove('open-cont')
});



contactBtn.forEach(button => {
    button.addEventListener('click', openContact);
});

function openContact() {
    contact.classList.add('open-cont')
    menu.classList.remove('open')
}


// Close Menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.matches('.menu-icon')
         ) {
            menu.classList.remove('open');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.matches('.termsButton')) {
        terms.classList.remove('open-terms');
    }
});




const form = document.querySelector('form');
form.addEventListener('submit', (e) => {

    document.querySelectorAll('.error-message').forEach((el) => el.remove());

    const firstName = document.getElementById('first-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    let valid = true; 

    if (firstName.value.trim() === '') {
        const nameInput = form.querySelector('input[name="first-name"]');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Name is required!';
        errorMessage.classList.add('error-message');
        nameInput.after(errorMessage);
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.trim().match(emailPattern)) {
        const emailInput = form.querySelector('input[name="email"]');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Valid email is required!';
        errorMessage.classList.add('error-message');
        emailInput.after(errorMessage);
        valid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phone.value.trim().match(phonePattern)) {
        const phoneInput = form.querySelector('input[name="phone"]');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'A valid 10-digit phone number is required.';
        errorMessage.classList.add('error-message');
        phoneInput.after(errorMessage);
        valid = false;
    }

    if (message.value.trim() === '') {
        const messageInput = form.querySelector('textarea[name="message"]');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Message is required.';
        errorMessage.classList.add('error-message');
        messageInput.after(errorMessage);
        valid = false;
    }

 
    if (!valid) {
        e.preventDefault();
    }
});





