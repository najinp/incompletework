
$(function () {
    $('.main_slide').slick({
        arrows: false,
        pauseOnHover: false,
        touchThreshold: 500,
    });
    $('.arl_slide').slick({
        arrows: false,
        pauseOnHover: false,
        touchThreshold: 500,
        vertical: true,
        slidesToShow: 3,
        autoplay: true,
        verticalSwiping: true,

    });
    $('.arr_slide').slick({

        arrows: false,
        pauseOnHover: false,
        touchThreshold: 500,
        vertical: true,
        slidesToShow: 3,
        autoplay: true,
        verticalSwiping: true,
    });

    $('.tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        // console.log($(this).parent().index());
        var idx = $(this).parent().index();
        // const UL = document.querySelector('ul');
        // const setUL = function () {
        //     console.log(UL);
        //     ff();
        // };
        // UL.addEventListener('click', setUL);
        // LI.addEventListener('click', setUL);
        $('.tab_content>li').removeClass('on')
        $('.tab_content>li').eq(idx).addClass('on');
        $('.tab_menu>li').removeClass('on');
        $(this).parent().addClass('on')
    })


    var v = 0;
    // var toymovie = setInterval(function () {
    //     $('.toy').css({
    //         backgroundPositionX: v += 327.76
    //     })
    // }, 1000)

    $('.charac .left').on('click', function () {
        $('.toy').css({
            backgroundPositionX: v += 327.76
        })
    });


    $('.charac .right').on('click', function () {
        $('.toy').css({
            backgroundPositionX: v -= 327.76
        })
    })



})







