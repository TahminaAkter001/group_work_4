$(document).ready(function(){
    $('header nav').meanmenu({
        meanMenuOpen:'<span></span><span></span><span></span>',
        meanScreenWidth:'780',
    });
    
        $(".owl-carousel").owlCarousel({
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
  });