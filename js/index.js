$(document).ready(function(){
    
    /* $(".carousel").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
      
        },
        allowPageScroll:"vertical"
      
      }); */
    /* $('.carousel-announcements__indicator ').click(()=>{
        $('.carousel-announcements__indicator ').addClass('_active-slide')
        console.log($('.carousel-announcements__indicator'))
        console.log($(this))
        $('.carousel-announcements__indicator, active').not($(this)).removeClass('_active-slide')
    }) */

    //lock body
    console.log($('.btn__burger[aria-expanded=false]'));
    $('.btn__burger').click(()=>{
        $(document.body).toggleClass('_lock')
    })
    

    //header & scroll-appear
    const headerInitialPos = $('.header').offset().top

    $(window).scroll(function(){
        const scrolled = $(this).scrollTop()

        if(document.documentElement.clientWidth > 768){
            if(headerInitialPos + 108 < scrolled){
                $('.header').addClass('_header__scroll')
                $('.btn__burger__wrapper').addClass('_header__scroll')
            } else{
                $('.header').removeClass('_header__scroll')
                $('.btn__burger__wrapper').removeClass('_header__scroll')
            }

            
        }

        if(document.documentElement.clientWidth > 587){
            if(scrolled > 600){
                $('._scroll-to-top').addClass('_scroll-appear')
            } else{
                $('._scroll-to-top').removeClass('_scroll-appear')
            }
        }
        if(document.documentElement.clientWidth <= 587){
            if(scrolled > 400){
                $('._scroll-to-top').addClass('_scroll-appear')
            } else{
                $('._scroll-to-top').removeClass('_scroll-appear')
            }
        }
        


        
    })
})