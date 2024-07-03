const cardsSwiper = new Swiper(".js-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    481: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
    },
},
  navigation: {
    nextEl: ".js-arrow-prev",
    prevEl: ".js-arrow-next",
  },
});