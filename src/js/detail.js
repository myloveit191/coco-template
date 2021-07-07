var thumb_carousel = new Swiper(".thumb-carousel", {
  direction: "vertical",
  spaceBetween: 10,
  slidesPerView: 4,
  // freeMode: true,
  // watchSlidesVisibility: true,
  // watchSlidesProgress: true,
});
var carousel = new Swiper(".carousel", {
  thumbs: {
    swiper: thumb_carousel,
  },
});
var swiper_product_related = new Swiper(".swiper-product-related", {
  loop: true,
  // Navigation arrows
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$("#preview-modal").on("show.bs.modal", function () {
  setTimeout(function () {
    const swiper_product_preview = new Swiper(".swiper-product-preview", {
      loop: true,
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, 500);
});
