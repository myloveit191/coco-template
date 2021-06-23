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