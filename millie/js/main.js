$(function () {
    $('.mainSlide').slick({
        arrows: false,
        asNavFor: '.slideText ul',
        // autoplaySpeed: 4000,
        pauseOnHover: false,
        draggable: false,
        touchThreshold: 500,

    });
    $('.slideText ul').slick({
        arrows: false,
        dots: true,
        asNavFor: '.mainSlide',
        // autoplaySpeed: 4000,
        pauseOnHover: false,

    });


    $('.tabMenu>li>a').on('click', function (e) {
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
        $('.tabContent>li').removeClass('on')
        $('.tabContent>li').eq(idx).addClass('on');
        $('.tabMenu>li').removeClass('on');
        $(this).parent().addClass('on')
    })

    $('.faTabMenu>li>a').on('click', function (e) {
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
        $('.faTabContent>li').removeClass('on')
        $('.faTabContent>li').eq(idx).addClass('on');
        $('.faTabMenu>li').removeClass('on');
        $(this).parent().addClass('on')
    });
    // -----------------------pop 구간 사라지는 기능!----------------------------

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 1200) {
            $('.pop').fadeOut();
        } else {
            $('.pop').fadeIn();
        }
    })


})


// --------------------------반응형-----------------------------


$('.mopen').on('click', function () {
    $('.gnb').toggleClass('on');
})
// $('.gnb>ul>li>a').on('click', function (event) {
//     if ($(window).width() < 769) {
//         event.preventDefault();
//         // $('.smenu').show();- 이거는 다 열리게 하는것
//         $('.smenu').hide();
//         $(this).next().show();
//     }

// });


// $(window).on('resize', function () {
//     $('.smenu').removeAttr('style')
// })


