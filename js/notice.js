$(document).ready(function(){
    // let index = document.getElementsByClassName('item');
    /* 버튼 옆에 누르면 클래스 추가하기(네모) */
    // for(let i=0; i<index.length; i++){
    //     index[i].addEventListener("click", function(e){
    //         for(j=0; j<index.length; j++){
    //             index[j].classList.remove('on');
    //             e.target.classList.add('on');
    //         }
    //     })
    // }
    //버튼 클릭 시 테이블 보여지도록
    $('.page a').on('click',function(){
      let index = $(this).index();
      $('.table_wrap').removeClass('active');
      $('.table_wrap').eq(index).addClass('active');
      $('.page a .item').removeClass('on');
      $('.page a .item').eq(index).addClass('on');
    });
    
    // gototop
    let btn = document.getElementById('go_top'),
    docElem = document.documentElement,
    scrollAmount;

    window.addEventListener('scroll',function(){
      scrollAmount = docElem.scrollTop;
      console.log(scrollAmount);

      if(scrollAmount>500){
        btn.className= 'visible';
      }else{
        btn.classList.remove('visible');
      }
    });
})
