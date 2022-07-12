const botaoMenu = document.querySelector('.header__menu');
const menu = document.querySelector('.menu-sidebar');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-sidebar--active');
});