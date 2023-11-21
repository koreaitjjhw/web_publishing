/************************************************************************       
                          
   상단 메뉴 호버시 내려오는 서브메뉴 script	
   
************************************************************************/
$(document).ready(function () {
    //메뉴 over시
    $('.top_navi_li').hover(function () {
        // $(this).children("a").addClass("top_navi_hover");
        $('.sub_navi').css("height", "318px");
        $('.sub_navi').css("padding-top", "20px");
        $('.gnb_bg').css("height", "320px");
        $('.menu_img').css("height", "318px");
        $('.gnb_bg').css("border-bottom", "1px solid #d7d7d7");
    });
    $('.top_navi_li').mouseleave(function () {
        $('.sub_navi').css("height", "0px");
        $('.sub_navi').css("padding-top", "0px");
        $('.gnb_bg').css("height", "0px");
        // $(this).children("a").removeClass("top_navi_hover");
        $('.menu_img').css("height", "0px");
        $('.gnb_bg').css("border-bottom", "0px");
    });
});

/************************************************************************        
                         
   통합검색 클릭시 검색창 내려오는 script
   
************************************************************************/
$(document).ready(function(){
    $('.search_btn_wrap').click(function(){
        $('.site_search').slideToggle(500);
    });
    $('.search').click(function(){
        $(this).hide();
        $('.search_on').show();
    });
    $('.search_on').click(function(){
        $(this).hide();
        $('.search').show();
    });
});

/************************************************************************        
                         
   사이트맵 클릭시 보여주는 script
   
************************************************************************/
$(document).ready(function () {
    $('.sitemap_btn').click(function () {
        $('#siteMapModal').show();
    });
    $('.pop_close').click(function () {
        $('#siteMapModal').hide();
    });
});
$(document).ready(function () {
    $('.modal').click(function (e) {
        if ($(e.target).hasClass("modal")) {
            $('#siteMapModal').hide();
        }
    });
});

/************************************************************************        
                         
   메인페이지 슬라이드영역 script
   
************************************************************************/
$(document).ready(function () {
    $('.main_banner').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        cssEase: "ease",
        easing: "ease",
        arrows: false,
        /*슬라이드 이동 화살표 생성*/
        dots: true,
        /*슬라이드 버튼 생성*/
        pauseOnHover: false,
        /*마우스 hover했을때 슬라이드 멈춤*/
    });
    $('.sec_top_left .pause').on('click', function () {
        $('.main_banner').slick('slickPlay');
        $(this).hide();
        $('.sec_top_left .play').show();
    });
    $('.sec_top_left .play').on('click', function () {
        $('.main_banner').slick('slickPause');
        $(this).hide();
        $('.sec_top_left .pause').show();
    });

});

/************************************************************************        
                         
   관련사이트 배너 슬라이드 버튼 클릭 시 이동 script
   
************************************************************************/
$(document).ready(function () {
    $('.f_b_slide').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        pauseOnHover: true, //마우스올렸을때 멈춤기능
        autoplay: true,
        autoplaySpeed: 3500,
        variableWidth: true
    });
});

/************************************************************************        
                         
   관련사이트 배너 슬라이드 멈춤, 재생 버튼 script
   
************************************************************************/
$(document).ready(function () {
    $('.f_b_btn > a').click(function () {
        if ($('.f_b_btn_stop').is(":visible")) {
            $('.f_b_slide').slick('slickPause');
            $('.f_b_btn_stop').hide();
            $('.f_b_btn_play').show();
        } else {
            $('.f_b_slide').slick('slickPlay');
            $('.f_b_btn_play').hide();
            $('.f_b_btn_stop').show();
        }
    });
});

/************************************************************************

   FAQ 아코디언 script

************************************************************************/
$(document).ready(function () {
  $('.accordion > li.depth_1 > .acc_top').click(function () {
      var $this = $(this);
      var $this_sub = $(this).next('ul');

      if ($this_sub.is(":visible")) {
          $('.accordion ul').slideUp();
          $('.accordion > li.depth_1 > .acc_top').removeClass('on');
          $this_sub.slideUp();
          $(this).removeClass('on');
      } else {
          $('.accordion ul').slideUp();
          $('.accordion > li.depth_1 > .acc_top').removeClass('on');
          $this.addClass('on');
          $this_sub.slideDown();
          $(this).addClass('on');
      }
  });

});
