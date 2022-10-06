$(function () {

    $('.mainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.menuSlider').slick({
        arrows: false,
        slidesToShow: 3,
    });

    $('.menu .menuArrow i:nth-child(1)').on('click', function () {
        $('.menuSlider').slick('slickPrev')
    });
    $('.menu .menuArrow  i:nth-child(2)').on('click', function () {
        $('.menuSlider').slick('slickNext')

    });

    $('.withSlider').slick({
        arrows: false,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,

    });

})



