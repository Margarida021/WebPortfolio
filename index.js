// navbar active on scroll
window.addEventListener('scroll', () => {
  navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else if (window.scrollY <= 50) {
    navbar.classList.remove('navbar-scrolled');
  }
});

// navbar item active on section

// nagivation dots active on section
const sections = document.querySelectorAll('section');
const bullets = document.querySelector('.navigation');
