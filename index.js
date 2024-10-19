// Mobile menu toggle
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Form submission (you would typically send this data to a server)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData.entries());
    console.log('Form submitted:', formObject);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We\'ll get back to you soon.');
    contactForm.reset();
});