$(function () {
    'use strict'

    // menu fix
    let menuOff = $('#main_menu').offset().top;

    $(window).on('scroll', function(){
        let scrollTop = $(this).scrollTop();

        if(scrollTop > menuOff){
            $('#main_menu').addClass('menu_fix');
        }else{
            $('#main_menu').removeClass('menu_fix');
        }
    });


    // back to top button
    $('.btt').on('click', function(){
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    });

    $(window).on('scroll', function(){
        let scrollTop = $(this).scrollTop();
        if(scrollTop > 600){
            $('.btt').fadeIn();
        }else{
            $('.btt').fadeOut();
        }
    });

    

    // venobox for gallery
    $('.venobox').venobox()

    // slider for mobile device

    // service part slide
    $('.serv_item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
        responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });

    // team part slider
    $('.team_item').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
        responsive: [{
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            }
        ]
    });

    // test part slider
    $('.test_item').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
        responsive: [{
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            }
        ]
    });
})