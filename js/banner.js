$("document").ready(function () {
    var swiper = new Swiper(".bannerSwiper", {
        slidesPerView: 5.5,
        spaceBetween:10,
        loop:true,
        slidesPerGroup: 2,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },       
      });
      // var btn_play = document.getElementsByClassName("swiper-button-play")[0];
      $('.swiper-button-play').click(function(){
        swiper.autoplay.start();
      });
      $('.swiper-button-list').click(function(){
        swiper.autoplay.stop();
      });
});

let items = document.getElementsByClassName("items"),
    title = document.getElementsByClassName("title"),
    content = document.getElementsByClassName("content");
for(let i=0; i<title.length; i++){
    title[i].addEventListener("click",function(e){
        for(let j=0; j<items.length;j++){
            items[j].classList.remove("active");
            e.target.parentNode.classList.add("active");
        }
    })
}

// let play = document.getElementsByClassName(".swiper-button-play")[0],
//   stop = document.getElementsByClassName()