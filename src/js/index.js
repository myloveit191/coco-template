$("body").removeClass("preload");
$('#nav-mobile').metisMenu();
const swiper_banner = new Swiper(".swiper-banner", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
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
$(".hambuger-sidebar-mobile").click(function () {
  $("#menu").addClass("open-sidebar");
});
$("#menu .sidebar-overlay").click(function () {
  $("#menu").removeClass("open-sidebar");
});
const swiper_posts = new Swiper(".swiper-posts", {
  loop: true,
  // autoplay: {
  //   delay: 4000,
  // },
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

//Scroll fixed
// Define the menu we are working with
var menu = $(".header-main");

// Get the menus current offset
var origOffsetY = menu.offset().top;

/**
 * scroll
 * Perform our menu mod
 */
function scroll() {
  // Check the menus offset.
  if ($(window).scrollTop() >= origOffsetY) {
    //If it is indeed beyond the offset, affix it to the top.
    $(menu).addClass("fixed-top bg-fixed");
  } else {
    // Otherwise, un affix it.
    $(menu).removeClass("fixed-top bg-fixed");
  }
}

// Anytime the document is scrolled act on it
document.onscroll = scroll;
