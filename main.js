const mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides : true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay:5000,
    breakpoints: {
      559: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay:5000,
      }
    }
  })

  $('#feature-inf1').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInLeft');
        this.destroy();
      }
    },
    offset: '70%',
  });

  $('#feature-inf2').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInRight');
        this.destroy();
      }
    },
    offset: '70%',
  });

  $('#feature-inf3').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInLeft');
        this.destroy();
      }
    },
    offset: '70%',
  });