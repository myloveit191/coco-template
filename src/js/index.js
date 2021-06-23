
$("body").removeClass("preload");
const swiper_banner = new Swiper(".swiper-banner", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper_category = new Swiper(".swiper-category", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

$(".hambuger-sidebar-mobile").click(function () {
  $("#menu").addClass("open-sidebar");
});
$("#menu .sidebar-overlay").click(function () {
  $("#menu").removeClass("open-sidebar");
});
