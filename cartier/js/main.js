window.addEventListener('DOMContentLoaded', () => {

    var artleft = new Swiper('.a_left', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        // controller: {
        //     control: '.a_right'
        // },
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
    });

    var artright = new Swiper('.a_right', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        // controller: {
        //     control: '.a_left'
        // },
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
    });


    //Main Swiper와 Thumbnail Swiper가 연동제어 서로를 제어	
    artleft.controller.control = artright;
    artright.controller.control = artleft;


})