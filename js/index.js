$("document").ready(function () {

    var swiper = new Swiper("#event-swiper", {
      loop: true,
      spaceBetween: 20,
      allowTouchMove : false,
      navigation: {
        nextEl: "#button-next",
        prevEl: "#button-prev",
      }
    });

    var swiper = new Swiper(".mobileSwiper",{
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    })

    var swiper = new Swiper(".bannerSwiper", {
        loop:true,
        slidesPerGroup: 3,
        navigation: {
          nextEl: "#banner-next",
          prevEl: "#banner-prev",
        },breakpoints:{
          768:{
            slidesPerView: 5.5,
            spaceBetween:10,
          },
          300:{
            slidesPerView: 2,
            spaceBetween:5
          }
        }        
      });
      var sw = 0;
      $('.swiper-button-play').click(function(){
        if(sw==0){
          $('.swiper-button-play').addClass('stop');
          swiper.autoplay.start();
          sw=1;
        }else{
          $('.swiper-button-play').removeClass('stop');
          swiper.autoplay.stop();
          sw=0;
        }
      });
});



