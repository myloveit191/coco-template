$("body").removeClass("preload");const swiper_banner=new Swiper(".swiper-banner",{loop:!0,autoplay:{delay:4e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper_category=new Swiper(".swiper-category",{slidesPerView:2,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40}}});$("#preview-modal").on("show.bs.modal",(function(){setTimeout((function(){new Swiper(".swiper-product-preview",{loop:!0,autoplay:{delay:4e3},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),500)})),$(".hambuger-sidebar-mobile").click((function(){$("#menu").addClass("open-sidebar")})),$("#menu .sidebar-overlay").click((function(){$("#menu").removeClass("open-sidebar")}));const swiper_posts=new Swiper(".swiper-posts",{loop:!0,slidesPerView:2,spaceBetween:10,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var menu=$(".header-main"),origOffsetY=menu.offset().top;function scroll(){$(window).scrollTop()>=origOffsetY?$(menu).addClass("fixed-top bg-fixed"):$(menu).removeClass("fixed-top bg-fixed")}document.onscroll=scroll;