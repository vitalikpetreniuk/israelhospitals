$(document).ready(function() {

    $(".modal").modal({
        fadeDuration: 1000,
        fadeDelay: 0.50
    });

    $('.owl-carousel.main_top_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        items: 1
    });

    $('.owl-carousel.comments_slider').owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        autoplay: false,
        items: 1,
        navText: ["",""]
    });

    $('.prices-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        navText: ["",""],
        autoHeight: true,
        touchDrag: false
    }).find('.owl-nav').appendTo($(this).find('.prices-title'));

    $(".blue_accordeon_wrapper dd").hide().prev().click(function() {
        $(this).parents(".blue_accordeon_wrapper").find("dd").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });

    $(".stick").sticky({
        topSpacing: 158,
        bottomSpacing: 361
    });

    $(".blue_line_wrapper .top_contacts .num button").click(function() {
        $('.popup_numbers').addClass('active');
    });
    $(".blue_line_wrapper .popup_numbers button").click(function() {
        $('.popup_numbers').removeClass('active');
    });

    $('.selectize').selectize({
        allowEmptyOption: true,
        create: true
    });


    $('.menu-sm-toggle').on('click', function (e) {
        $(this).parent().siblings().find('.menu-sm-toggle').removeClass('active');
        $(this).parent().siblings().find('.menu-sm-toggle').siblings('ul').slideUp('fast');
        $(this).toggleClass('active');
        $(this).siblings('ul').toggle('fast');
        e.preventDefault();
    });

    $('.menu-toggle button').on('click', function () {
        if($('.button-search button').hasClass('active')){
            $('.button-search button').trigger('click');
        }else if($('.button-contacts').hasClass('active')){
            $('.button-contacts button').trigger('click');
        }
        $('.menu-sm').toggle('fast');
        $(this).toggleClass('active');
    });

    $('.button-search button').on('click', function () {
        if($('.menu-toggle button').hasClass('active')){
           $('.menu-toggle button').trigger('click');
        }else if($('.button-contacts button').hasClass('active')){
            $('.button-contacts button').trigger('click');
        }
        $(this).toggleClass('active');
        $('.search-sm').toggle('fast');
    });

    $('.button-contacts button').on('click', function () {
        if($('.menu-toggle button').hasClass('active')){
           $('.menu-toggle button').trigger('click');
        }else if($('.button-search button').hasClass('active')){
            $('.button-search button').trigger('click');
        }
        $(this).toggleClass('active');
        $('.call-sm').toggle('fast');
    });

    $('.submit-done').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('a').trigger('click');
    });

    $('.to-compare').on('click', function (e) {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 70}, 'slow');
        e.preventDefault()
    });

    $('.view').on('click', function (e) {
        var target = $(this).attr('href');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(target).siblings().removeClass('active');
        $(target).addClass('active');
        e.preventDefault()
    });

    $('.show-field').on('click', function () {
        $('.hidden-field').toggle('fast');
    });

    $(window).on('load scroll resize', function () {
        if($(this).scrollTop() >= 35){
            $('body').addClass('pt');
            $('header').addClass('fixed');
        }else{
            $('body').removeClass('pt');
            $('header').removeClass('fixed');
        }
    }).on('load resize', function () {
        var contWidth = $('.body > .container').width();
        var windowWidth = $(this).outerWidth();
        var backPos = -(((windowWidth - contWidth)/2));
        $('.back').css('left', backPos).css('width', windowWidth);
    });

    $('.tabs-nav button').on('click', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
       var targetLink = $(this).attr('data-href');
       $('.tabs-item').removeClass('active');
       $(targetLink).addClass('active');
    });

    $('.read-all button').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.with-hidden').find('.dynamic').toggleClass('hidden');
    });
});


