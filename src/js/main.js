const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header-menu__list');

burger.addEventListener("click", dropMenu)

function dropMenu() {
    headerMenu.classList.toggle('header__menu--active');
    burger.classList.toggle('header__menu--active');
};