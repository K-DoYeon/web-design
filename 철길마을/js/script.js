$(function(){
    $('.gnb>li').hover(function(e){
        e.preventDefault();
        $(this).find('.lnb').stop().fadeToggle();
    });
    setInterval(slideInOut,3000);

    //popup
    $('.popupopen').click(function(e){
        e.preventDefault();
        $('.popup').fadeIn();
    })

    $('.close').click(function(){
        $('.popup').fadeOut();
    })

    // family site
    // $('.family-lnk').change(function(){
    //     let link = $(this).val()
    //     if(link){
    //         location.href="http://" + link;
    //     }else{
    //         alert('사이트를 선택하세요.');
    //     }
    // })
    $('.go-btn').click(function(){
        let link = $('.family-lnk:checked').val();
        if(link){
            location.href="http://" + link;
        }else{
            alert('사이트를 선택하세요.');
        }
    })

    // $('.family').click(function(){
    //     $('.familysub').fadeToggle();
    // })

});//jquery

function slideInOut(){
    const w = $('.slidein>div').width();
    $('.slidein').animate({
        left : -w + 'px'
    },1000, function(){
        $('.slidein div:eq(0)').clone().appendTo('.slidein');
        $('.slidein div:eq(0)').remove();
        $('.slidein').css('left',0);
    });
}