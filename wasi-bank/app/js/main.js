//Navbar Toggle

const navbarToggler = document.getElementById('btn');
const mobileNav = document.querySelector('.mobileNav');
const body = document.querySelector('body');
const show = document.getElementById('show');
const hide = document.getElementById('hide');

// Toggler for navbar
navbarToggler.addEventListener('click', function () {
  mobileNav.classList.toggle('display');
  body.classList.toggle("overflow");
  show.classList.toggle("display");
  show.classList.toggle("hide");
  hide.classList.toggle("hide");
  hide.classList.toggle("display");
});