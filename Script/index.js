// navbar active on scroll
window.addEventListener('scroll', () => {
  navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else if (window.scrollY <= 50) {
    navbar.classList.remove('navbar-scrolled');
  }
});

// navbar item active on section // navdots active on section
let sections = document.querySelectorAll('section');
let navItems = document.querySelectorAll('.navbar-list a');
let navDots = document.querySelectorAll('.navigation a');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');
    if(top >= offset && top < offset + height) {
      navItems.forEach(items => {
        items.classList.remove('active');
        document.querySelector('.navbar-list a[href*='+ id +']').classList.add('active');
      });
      navDots.forEach(link => {
        link.classList.remove('selected');
        document.querySelector('.navigation a[href*=' + id + ']').classList.add('selected');
      });
    };
  });
};
