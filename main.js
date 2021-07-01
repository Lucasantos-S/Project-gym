const swiper = new Swiper('.swiper-container', {
    slidesPervView: 1,
    pagination:{
        el: '.swiper-pagination',

    },
    mousewhell: true,
    keyboard:true,
    breakpoints: {
        767: {
            slidesPerView: 1,
            setWrapperSize: true,

        }
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },


  });

  

  