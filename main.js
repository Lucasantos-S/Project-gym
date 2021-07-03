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


  const btnMobile = document.getElementById('btn-mobile')

  function toggleMenu(event){
      if(event.type === 'touchstart') event.preventDefault()
      const nav = document.getElementById('nav');
      nav.classList.toggle('active');
      const active = nav.classList.contains('active');

      event.currentTarget.setAttribute('arial-expanded', 'active');
      if(active){

        event.currentTarget.setAttribute('arial label', 'Fechar menu');

      } else {
        if(active)  event.currentTarget.setAttribute('arial label', 'abrir menu');

      }
      
  }

  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);


  /* Muda o header da pagina quando der o scroll */
  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight 
  window.addEventListener('scroll', function (){
    if(window.scrollY >= navHeight) {

      header.classList.add('scroll');

    } else{
      header.classList.remove('scroll')

    }

  })
  

  