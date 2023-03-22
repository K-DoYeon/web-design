$(function(){
    $('.gnb').hover(function(){
        $(this).find('.sub').fadeToggle();
    });

    setInterval(myslide,3000)
    function myslide(){
        $('.slidein').animate({
            'left' : '-1200px'
        },500, function(){
            $('.slidein img:first-child')
            .clone().appendTo('.slidein');
            $('.slidein img:first-child').remove();
            $('.slidein').css('left',0)
        });
    }
    /* function slideImg(){
        $('.slidein').animate({
            'left':'-1200px'
        },500, funtion(){
            $
        })
    } */

    $('.tab a').click(function(e){
        e.preventDefault();
        $('.tab a').removeClass('active');
        $(this).addClass('active');
        const myid = $(this).data("idx");
        $('.tab-content>div').removeClass('active');
        $(myid).addClass('active');
    })
})//jquery