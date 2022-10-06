
$(function () {
    $('.c_trail a').on('click', function (e) {
        e.preventDefault();
        console.log($(this.hash).offset().top);
        var hash = $(this.hash).offset().top;
        $('html,body').animate({ scrollTop: hash }, 500)
    });
})




window.addEventListener('DOMContentLoaded', () => {

    new Swiper('.swiper', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });



});










$(function () {
    $('.regard_menu>li>a').on('click', function (e) {
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
        $('.regard_content>li').removeClass('on')
        $('.regard_content>li').eq(idx).addClass('on');
        $('.regard_menu>li').removeClass('on');
        $(this).parent().addClass('on')
    })
})

