$(function () {

    $('.mainSlider').slick({
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });



    // $('.Bsslider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //     var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    //     $('.progress')
    //         .css('background-size', calc + '% 100%')
    //         .attr('aria-valuenow', calc);

    //     $('.sr-only').text(calc + '% completed');
    // });


    $('.BsSlider').slick({
        slidesToShow: 3,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: true,
    });

    $('.BestSel .progress i:nth-child(1)').on('click', function () {
        $('.BsSlider').slick('slickPrev')
    });
    $('.BestSel .progress i:nth-child(2)').on('click', function () {
        $('.BsSlider').slick('slickNext')
    });


    $('.BsSlider figure .BsPic').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });

})