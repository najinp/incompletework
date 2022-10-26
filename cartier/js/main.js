window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tbbtn i').addEventListener('click', function () {
    //this.classList.toggle('on');
    document.querySelector('.TopBanner').classList.add('on')
  })

  document.querySelector('.mopen').addEventListener('click', function () {
    document.querySelector('.header_bottom').classList.toggle('on')
  })

  const FT_LINK = document.querySelectorAll('.gnb .upmenu a')
  const FT_CONTENT = document.querySelectorAll('.gnb .smenu')

  FT_LINK.forEach((el, idx) => {
    el.addEventListener('click', () => {
      if (el.classList.contains('on')) {
        el.classList.remove('on')
        FT_CONTENT[idx].classList.remove('on')
      } else {
        FT_LINK.forEach(el => el.classList.remove('on'))
        el.classList.add('on')
        FT_CONTENT.forEach(el => el.classList.remove('on'))
        FT_CONTENT[idx].classList.add('on')
      }
    })
  })


  var artleft = new Swiper('.a_left', {
    loop: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    // controller: {
    //     control: '.a_right'
    // },
    slidesPerView: 1,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: true,
    // },
  })

  var artright = new Swiper('.a_right', {
    loop: true,
    slidesPerView: 1,

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
  })

  //Main Swiper와 Thumbnail Swiper가 연동제어 서로를 제어
  artleft.controller.control = artright
  artright.controller.control = artleft

  // new Swiper('.classic_silide', {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  // });

  var swiper = new Swiper('.classic_slide', {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px

      // when window width is >= 640px
      768: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  })
})

function categoryChange(e) {
  const good_a = [
    '부티크 현대백화점 압구정 서울',
    '부티크 갤러리아 서울',
    '부티크 청담 메종 서울',
    '부티크 현대백화점 코엑스 서울',
    '부티크 현대면세점 코엑스 서울',
    '부티크 신세계백화점 강남 서울',
  ]
  const good_b = ['부티크 현대백화점 판교 경기']
  const good_c = ['부티크 신세계 인천공항 면세점 인천']
  const good_d = [
    '부티크 롯데면세점 부산 부산',
    '부티크 신세계백화점 센텀시티 부산',
  ]
  const good_e = ['부티크 신세계백화점 대구']
  const good_f = ['부티크 신라면세점 제주']

  const target = document.getElementById('good')

  if (e.value == 'a') var d = good_a
  else if (e.value == 'b') var d = good_b
  else if (e.value == 'c') var d = good_c
  else if (e.value == 'd') var d = good_d
  else if (e.value == 'e') var d = good_e
  else if (e.value == 'f') var d = good_f

  target.options.length = 0

  for (x in d) {
    const opt = document.createElement('option')
    opt.value = d[x]
    opt.innerHTML = d[x]
    target.appendChild(opt)
  }
}
