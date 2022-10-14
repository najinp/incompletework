window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.tbbtn i').addEventListener('click', function () {
        //this.classList.toggle('on');
        document.querySelector('.TopBanner').classList.add('on');
    });

    document.querySelector('.mopen').addEventListener('click', function () {
        document.querySelector('.header_bottom').classList.toggle('on');
    });



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


    // new Swiper('.classic_silide', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    // });

    var swiper = new Swiper(".classic_slide", {
        spaceBetween: 5,
        slidesPerView: 1,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

        breakpoints: {
            // when window width is >= 320px

            // when window width is >= 640px
            768: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        }
    });











})