$(function () {
    $('.slider01').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });



    $('.section01 i:nth-child(1)').on('click', function () {
        $('.slider01').slick('slickPrev')
    });
    $('.section01 i:nth-child(2)').on('click', function () {
        $('.slider01').slick('slickNext')
    });


    $('.slider02').slick({
        arrows: false,

    });

    $('#masterTab a').on('mouseenter click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index(); // 0 1 2 ...
        $('.slider02').slick('slickGoTo', idx)
    })



})







