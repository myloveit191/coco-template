var thumb_carousel=new Swiper(".thumb-carousel",{direction:"vertical",spaceBetween:10,slidesPerView:4}),carousel=new Swiper(".carousel",{thumbs:{swiper:thumb_carousel}}),swiper_product_related=new Swiper(".swiper-product-related",{loop:!0,slidesPerView:2,spaceBetween:10,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$("#preview-modal").on("show.bs.modal",(function(){setTimeout((function(){new Swiper(".swiper-product-preview",{loop:!0,autoplay:{delay:4e3},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),500)}));