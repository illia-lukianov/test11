import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

 const swiper = new Swiper('.slidejs-container', {
  itemsToShow: 2,
  loop: true,
  nextButton: '.slidejs-next',
});