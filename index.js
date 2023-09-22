// navbar active on scroll
window.addEventListener('scroll', () => {
  navbar = document.querySelector('.navbar');
  navbar.classList.add('active');
});

// navbar item active on section

// nagivation dots active on section
const sections = document.querySelectorAll('section');
const bullets = document.querySelector('.navigation');

// job-title changing on load

// items appear on scroll section
ScrollReveal().reveal('.about-me');
