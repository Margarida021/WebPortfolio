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



//navbar - hover e "page active" (scroll)
// const navLinkEls = document.querySelectorAll('.nav_link');
// const sectionEls = document.querySelectorAll('section');

// let currentSection = 'home';
// window.addEventListener('scroll', () => {
//      sectionEls.forEach(sectionEl => {
//         if (window.scrollY >= (sectionEl.offsetTop - 170)) {
//             currentSection = sectionEl.id;
//         }
// });
//     navLinkEls.forEach(navLinkEl => {
//         if (navLinkEl.href.includes(currentSection)) {
//             document.querySelector('.active').classList.remove('active');
//             navLinkEl.classList.add('active');
//         };
//     });
// });

//dots laterais de navegação - hover e "page active" (scroll)
// const sections = document.querySelectorAll('section');
// const windowHeight = window.innerHeight;
// const navigation = document.querySelector('.navigation');

// function reset() {
//     for (let i = 0; i < navigation.children.length; i++) {
//         navigation.children[i].classList.remove('selected');
//     }
// }
// window.addEventListener('scroll', function() {
//     const scrollTop = window.scrollY;
//     sections.forEach(function(section, i) {
//         if (section.offsetTop < scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2) {
//             reset();
//             navigation.children[i].classList.add('selected');
//         }
//     })
// });

//dots laterais (click)
// document.querySelectorAll('.navigation li').forEach(function(item, i) {
//     item.addEventListener('click', function() {
//         window.scrollTo({
//             top: i * windowHeight,
//             behavior: 'smooth',
//         })
//     })
// });
