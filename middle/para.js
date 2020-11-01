$(function () {
    $('#menu_btn').click(function(){
        $('.background').fadeIn();
    });

    $('.close-modal').click(function(){
        $('.background').fadeOut();
    })

    $('.scroll-btn').click(function(){
        var id=$(this).attr('href');

        var position = $(id).offset().top;
    
         $('html,body').animate({

             'scrollTop':position
         },700)
    });

    $('.what,.important').hide();
    $(window).scroll(function () {
        //100pxスクロールしたら
        if ($(this).scrollTop() > 760) {
            //フェードインで表示
            $('.what,.important').fadeIn();
        } else {
            $('.what,.important').fadeOut();
        }
    });

    $('.item').hide();
    $(window).scroll(function () {
        //100pxスクロールしたら
        if ($(this).scrollTop() > 1500) {
            //フェードインで表示
            $('.item').fadeIn();
        } else {
            $('.item').fadeOut();
        }
    });

    $('.item_page2').hide();
    $(window).scroll(function () {
        //100pxスクロールしたら
        if ($(this).scrollTop() > 2000) {
            //フェードインで表示
            $('.item_page2').slideDown();
        } else {
            $('.item_page2').slideUp();
        }
    });

    $('.menus a').hover(
        function(){
            $(this).css('background-color','white');
        },
        function(){
            $(this).css('background-color','rgba(0,0,0,0.4)');
        }
    );







    
 
 
 });