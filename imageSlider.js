const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive breakpoint
    breakpoint:{
        0:{
            slidePerView:1
        },
        620:{
            slidePerView:1
        },
        1024:{
            slidePerView:1
        }
    }
  
   
  });
  