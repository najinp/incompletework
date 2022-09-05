window.addEventListener('DOMContentLoaded', () => {
    const H1 = document.querySelector('h1');
    const TOGGLE = function () {
        this.classList.toggle('on')
    }
    H1.addEventListener('click', TOGGLE);

    new Swiper('.a_left', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        controller: {
            control: '.a_right'
        }


    });
    new Swiper('.a_right', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        controller: {
            control: '.a_left'
        }

    });



})








