const swiper = new Swiper('.swiper', {
  cssMode: true,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    520: {
      slidesPerView: 3,
      spaceBetween: -80
    }
  }
});