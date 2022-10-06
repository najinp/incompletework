
$(function () {
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.ProductSlider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }]

    });

    function mopen() {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    }

    $('.mopen').on('click', mopen)

})







