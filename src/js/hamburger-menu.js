const hamburgerMenu = document.querySelector('.header__hamburger-menu');
const mobileLowerSubMenu =  document.querySelector('.mobile-lower-sub-menu');
const mobileLowerMenuButton = document.querySelector('.mobile-lower-menu__button');
const mobileLowerButton = document.querySelector('.mobile-lower-button')
const caretIcon = document.querySelector('.caret-icon');

hamburgerMenu.addEventListener('click', () => {
  const headerMenu = document.querySelector('.header__mobile-menu');
  const hamburgerMenuLines = document.querySelectorAll('.hamburger-line')
  const body = document.querySelector('body');
  
  hamburgerMenuLines.forEach(item => item.classList.toggle('hamburger-line-open'));
  headerMenu.classList.toggle('header__menu-open');
  body.classList.toggle('no-overflow');

  if (mobileLowerSubMenu.classList.contains('mobile-lower-sub-menu-active')) {
    mobileLowerSubMenu.classList.remove('mobile-lower-sub-menu-active');
    mobileLowerButton.classList.remove('mobile-lower-menu__item-open');
    caretIcon.classList.remove('fa-caret-up');
    caretIcon.classList.add('fa-caret-down');
    caretIcon.style.color = '#5EB7F2';
  }
});

mobileLowerMenuButton.addEventListener('click', () => {
  mobileLowerSubMenu.classList.toggle('mobile-lower-sub-menu-active');
  mobileLowerButton.classList.toggle('mobile-lower-menu__item-open')
  caretIcon.classList.toggle('fa-caret-down');
  caretIcon.classList.toggle('fa-caret-up');

  if (caretIcon.classList.contains('fa-caret-up')) caretIcon.style.color = '#FFFFFF';
  else caretIcon.style.color = '#5EB7F2';
  
});