$(function(){
    //nav
    $('.gnb>li').hover(function(){
        $(this).find('.lnb').stop().slideToggle()
    });

    //slide

    setInterval(fadeInOut, 3000);

});//jquery

function fadeInOut(){
    $('.slider .img:eq(0)').fadeOut(500).next().fadeIn(500).end().appendTo('.slider');
}