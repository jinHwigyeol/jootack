// gnb에 마우스 올렸을때 서브메뉴 보이게
$(document).ready(function(){

  // gnb에 마우스 올렸을때 서브메뉴, 배경 보이게


  $('.gnb>li').hover(function(){
    $('.sub_menu, .sub_bg').stop().slideToggle('fast');
  })

$('.collapsible').click(function() {
  var header = $(this);
  var content = header.next('.content-sub');
  var siblings = header.parent().siblings().find('.content-sub');
  
  content.slideToggle();
  content.toggleClass('open');
  siblings.slideUp();
  siblings.removeClass('open');
});

  // 모바일 메뉴 - x
  var sw=0;
  $('.mobileMenu').click(function(){
    if(sw==0){
      $('.m_gnb').css('right','0');
      $(this).addClass('x');
      sw=1;
      console.log(sw);
    }else{
      $('.m_gnb').css('right','-769px');
      $(this).removeClass('x');
      console.log(sw);
      sw=0;
    }
  });
})