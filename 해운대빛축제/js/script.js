$(function(){
    $('.gnb>li').hover(function(){
        $(this).find('.lnb').stop().slideToggle()
    });

    //슬라이드
    setInterval(fadeInOut,3000)

    /* function myslide(){
        $('.img-slide').animate({
            'left' : '-800px'
        },500, function(){
            $('.img-slide img:first-child')
            .clone().appendTo('.img-slide');
            $('.img-slide img:first-child').remove();
            $('.img-slide').css('left',0)
        });
    } */

});//jquery

function fadeInOut(){
    $('.img-slide>img:first')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('.img-slide');
}