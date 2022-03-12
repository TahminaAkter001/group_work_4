$(document).ready(function(){
    $('header nav').meanmenu({
        meanMenuOpen:'<span></span><span></span><span></span>',
        meanScreenWidth:'780',
    });
    
        $(".o_car1").owlCarousel({
            margin:0,
            items:6,
            autoplay:true,
            loop:true,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:4,
                },
                1000:{
                    items:6,
                }
            }
        });
        $(".o_car2").owlCarousel({
            margin:0,
            items:3,
            margin:20,
            autoplay:true,
            loop:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        });

        $(function() {
            $("#toTop").scrollToTop(1000);
       });
  });