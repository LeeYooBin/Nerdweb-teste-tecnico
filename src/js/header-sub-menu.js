const lowerMenuButton = document.querySelector('.lower-menu__button');

lowerMenuButton.addEventListener('click', () => {
  const subMenu = document.querySelector('.header__lower-sub-menu-container');
  const caretIcon = document.querySelector('.lower-menu-caret-icon');
  subMenu.classList.toggle('header__lower-sub-menu-container-active');
  caretIcon.classList.toggle('fa-caret-down');
  caretIcon.classList.toggle('fa-caret-up');
});