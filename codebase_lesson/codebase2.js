$('a').hover(
    function(){
        $(this).css('border-bottom', '3px solid #95d5df');

    },
    function(){
        $(this).css('border-bottom','');

    }
)

$('a').hover(
    function(){
        var id=    $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({

            'scrollTop':position
        },500)
});
