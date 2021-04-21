$(function(){
    // 메인이미지
    var logo = $(".moving-box");
    $(logo).fadeIn(1000);
    $(window).stop().scroll(function() {
        if($(this).scrollTop()>500) {  
            logo.css('transform','translate(-50%,100%) scale(0.7)');
            logo.css('transitionDuration','1s');
        }
        else { 
            logo.css('transform','scale(1)');
            logo.css('transform','translate(-50%,-50%)');
      }
        $(window).stop().scroll(function() {
            var char = $(".character");
        if($(this).scrollTop()>500) {  
            char.css(({opacity:"1"}),500);
            char.css('transitionDuration','1s');
        }
        else { 
            char.css(({opacity:"0"}),500);
            char.css('transitionDuration','0.5s');
        }
        });
    }); 
    // 내비게이션
        // 탑 링크
    $(window).stop().scroll(function() {
        var top = $(".top");
        if($(this).scrollTop()>700) {  
            top.fadeIn(200);
        }
        else { 
            top.hide(0);
      }
    });
        // 스크롤애니메이션
        var link = $(".scroll");
        link.click(function(event){            
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:$(this.hash).offset().top-30}, 600);
        });

    // 갤러리
        // 썸네일박스
    var ex = $('.con>a');
    ex.mouseenter(function(){
        $(this).children('.ex').stop().fadeIn();
    });
    ex.mouseleave(function(){
        $(this).children('.ex').stop().fadeOut();
    });
        // 모달팝업
    var imgbox = $('.modal');
    var popimg = $('.popimg');
    ex.click(function(){
        var src =  $(this).children('img').attr('src');
        var alt =  $(this).children('img').attr('alt');
        popimg.html("<img src='"+src+"' alt='"+alt+"'>");
        popimg.children('img').css('max-width', '80vw');
        popimg.children('img').css('max-height', '80vh');
        imgbox.fadeIn(300);
        if((this).style.display='block'){
            $('.close').click(function(){
                imgbox.fadeOut(300)});
        }
    });
    // 컨택트
    var card = $(".cardbox");
    var rotate =180;
    card.stop().click(function(){
        $('.cardbox').css('transform','rotateY('+rotate+'deg)');
        $('.front').css('z-index','-1');
        rotate += 180;
    });
});
 
