$(document).ready(function () {

  var screenWidth = $(window).width();

  $(".header-menu").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header-menu").removeClass("active");
      $(".sidebar").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".header-menu").addClass("active");
      $(".sidebar").addClass("active");
    }
  });

  $(document).scroll(function () {
    $(".header-menu").removeClass("active");
    $(".sidebar").removeClass("active");
  });


  if (screenWidth <= 1199) {
    const initLocomotiveScroll = () => {
      const wrapper = document.querySelector('.main-mobile')
      const sidebar = document.querySelector('.sidebar')
      const hm = document.querySelector('.header-menu')

      const locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      })

      locoScroll.on('call', (func, dir, obj) => {
        const {el} = obj

        if ('updateBg' === func) {
          const bg = el.getAttribute('data-bg')

          if (dir === 'enter') {
            wrapper.style.backgroundColor = bg
            sidebar.style.backgroundColor = bg
            hm.style.backgroundColor = bg
          }
        }
      })
    }

    setTimeout(() => {
      initLocomotiveScroll()
    }, 1000);

    $(".sidebar, .footer").on("click","a", function (event) {
      event.preventDefault();
      $(".header-menu").removeClass("active");
      $(".sidebar").removeClass("active");
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 3000);
    });

    $(document).ready(function () {
      var url_string = window.location.href;
      var id = "#" + url_string.split('id=')[1];
      setTimeout(function() {
        var top = $(id).offset().top;
        console.log(id);
        console.log(top);
        $('body,html').animate({scrollTop: top}, 0);},100);
    });
  }

  if (screenWidth >= 1200) {
    var controller = new ScrollMagic.Controller({
      /*globalSceneOptions: {
        triggerHook: 'onLeave'
      }*/
    });
    var tl = new TimelineMax();

    var ww = window.innerWidth;
    var hh = window.innerHeight;

    var noSlides1 = $(".section-horizontal-one .section__item").length;
    var slideWidth1 = $(".section-horizontal-one .section__item").outerWidth();
    var slideContainerPadding1 = $(".section-horizontal-one .section__wrap").outerWidth() - $(".section-horizontal-one .section__wrap").width();
    var slideContainerWidth1 = slideWidth1 * noSlides1 - ww + 18 + slideContainerPadding1;

    var noSlides2 = $(".section-horizontal-two .section__item").length;
    var slideWidth2 = $(".section-horizontal-two .section__item").outerWidth();
    var slideContainerPadding2 = $(".section-horizontal-two .section__wrap").outerWidth() - $(".section-horizontal-two .section__wrap").width();
    var slideContainerWidth2 = slideWidth2 * noSlides2 - ww + 18 + slideContainerPadding2;

    var noSlides3 = $(".section-horizontal-three .section__item").length;
    var slideWidth3 = $(".section-horizontal-three .section__item").outerWidth();
    var slideContainerPadding3 = $(".section-horizontal-three .section__wrap").outerWidth() - $(".section-horizontal-three .section__wrap").width();
    var slideContainerWidth3 = slideWidth3 * noSlides3 - ww + 18 + slideContainerPadding3;



    /*var noSlidesV1 = $(".section-vertical-one .section__item").length;
    var slideHeight1 = $(".section-vertical-one .section__item").outerHeight() + 160;
    var slideContainerHeight1 = $(".section-vertical-one").outerHeight()- hh;

    var noSlidesV2 = $(".section-vertical-two .section__item").length;
    var slideHeight2 = $(".section-vertical-two .section__item").outerHeight() + 160;
    var slideContainerHeight2 = $(".section-vertical-two").outerHeight() - hh;

    var noSlidesV3 = $(".section-vertical-three .section__item").length;
    var slideHeight3 = $(".section-vertical-three .section__item").outerHeight() + 160;
    var slideContainerHeight3 = $(".section-vertical-three").outerHeight() - hh;

    var noSlidesV4 = $(".section-vertical-four .section__item").length;
    var slideHeight4 = $(".section-vertical-four .section__item").outerHeight() + 160;
    var slideContainerHeight4 = $(".section-vertical-four").outerHeight() - hh;*/

    var scene = $('.section');
    /*scene.each( function() {
      var sceneHeight = $(this).height();
      console.log(sceneHeight)
    })*/

    /*var sceneHeight = scene.height();*/

    $(window).resize(function () {
      scene.each(function () {
        var sceneHeight = $(this).height();
        console.log(sceneHeight)
      })
    })

    /*console.log(noSlides, slideContainerWidth);*/

    var actionHorizontal1 = new TimelineMax().to(".section-horizontal-one .section__wrap", 3, {
      x: -slideContainerWidth1,
      ease: Power0.easeNone
    });

    var actionHorizontal2 = new TimelineMax().to(".section-horizontal-two .section__wrap", 3, {
      x: -slideContainerWidth2,
      ease: Power0.easeNone
    });

    var actionHorizontal3 = new TimelineMax().to(".section-horizontal-three .section__wrap", 3, {
      x: -slideContainerWidth3,
      ease: Power0.easeNone
    });

    /*var actionVertical1 = new TimelineMax().to(".section-vertical-one", 3, {
      y: -slideContainerHeight1,
      ease: Power0.easeNone
    });

    var actionVertical2 = new TimelineMax().to(".section-vertical-two", 3, {
      y: -slideContainerHeight2,
      ease: Power0.easeNone
    });

    var actionVertical3 = new TimelineMax().to(".section-vertical-three", 3, {
      y: -slideContainerHeight3,
      ease: Power0.easeNone
    });

    var actionVertical4 = new TimelineMax().to(".section-vertical-four", 3, {
      y: -slideContainerHeight4,
      ease: Power0.easeNone
    });*/

    var horizontal1 = createHorizontal(".section-horizontal-one", slideContainerWidth1, actionHorizontal1);
    var horizontal2 = createHorizontal(".section-horizontal-two", slideContainerWidth2, actionHorizontal2);
    var horizontal3 = createHorizontal(".section-horizontal-three", slideContainerWidth3, actionHorizontal3);

    /*var vertical1 = createVertical(".section-vertical-one", slideContainerHeight1, actionVertical1);
    var vertical2 = createVertical(".section-vertical-two", slideContainerHeight2, actionVertical2);
    var vertical3 = createVertical(".section-vertical-three", slideContainerHeight3, actionVertical3);
    var vertical4 = createVertical(".section-vertical-four", slideContainerHeight4, actionVertical4);*/

    function createHorizontal(trigEl, durat, tween) {
      return new ScrollMagic.Scene({
        triggerElement: trigEl,
        triggerHook: "onLeave",
        duration: durat,
      })
        .setPin(trigEl)
        .setTween(tween)
        /*.addIndicators({
          colorTrigger: "white",
          colorStart: "white",
          colorEnd: "white",
        })*/
        .addTo(controller);
    }

    /*function createVertical(trigEl, durat, tween) {
      return new ScrollMagic.Scene({
        triggerElement: trigEl,
        triggerHook: "onLeave",
        duration: durat,
        /!*offset: durat,*!/
      })
        .setPin(trigEl)
        .setTween(tween)
        .addIndicators({
          colorTrigger: "white",
          colorStart: "white",
          colorEnd: "white",
        })
        .addTo(controller);
    }*/

    controller.scrollTo(function (newpos) {
      //TweenMax.to(window, 1, { scrollTo: { x: newpos } });
      TweenMax.to(window, 0, {
        scrollTo: {
          y: newpos,
          autoKill: true,
        },
        ease: Power3.easeOut,
      });
    });

    $(window).resize(function () {
      ww = window.innerWidth;
      slideContainerWidth1 = slideWidth1 * noSlides1 - ww + 18 + slideContainerPadding1;
      horizontal1.destroy(true);
      horizontal1 = createHorizontal(".section-horizontal-one", slideContainerWidth1, actionHorizontal1);
      /*console.log(ww, slideContainerWidth1);*/

      slideContainerWidth2 = slideWidth2 * noSlides2 - ww + 18 + slideContainerPadding2;
      horizontal2.destroy(true);
      horizontal2 = createHorizontal(".section-horizontal-two", slideContainerWidth2, actionHorizontal2);
      /*console.log(ww, slideContainerWidth2);*/

      slideContainerWidth3 = slideWidth3 * noSlides3 - ww + 18 + slideContainerPadding3;
      horizontal3.destroy(true);
      horizontal3 = createHorizontal(".section-horizontal-three", slideContainerWidth3, actionHorizontal3);
      /*console.log(ww, slideContainerWidth3);*/


      /*hh = window.innerHeight;
      var slideContainerHeight1 = $(".section-vertical-one").outerHeight()- hh;
      vertical1.destroy(true);
      vertical1 = createVertical(".section-vertical-one", slideContainerHeight1, actionVertical1);
      console.log(hh, slideContainerHeight1);

      var slideContainerHeight2 = $(".section-vertical-two").outerHeight()- hh;
      vertical2.destroy(true);
      vertical2 = createVertical(".section-vertical-two", slideContainerHeight2, actionVertical2);
      console.log(hh, slideContainerHeight2);

      var slideContainerHeight3 = $(".section-vertical-three").outerHeight()- hh;
      vertical3.destroy(true);
      vertical3 = createVertical(".section-vertical-three", slideContainerHeight3, actionVertical3);
      console.log(hh, slideContainerHeight3);

      var slideContainerHeight4 = $(".section-vertical-four").outerHeight()- hh;
      vertical4.destroy(true);
      vertical4 = createVertical(".section-vertical-four", slideContainerHeight4, actionVertical4);
      console.log(hh, slideContainerHeight4);*/
    });

    $(document).on("click", "a[href^='#']", function (e) {
      var id = $(this).attr("href");
      $targetPos = $(id).offset().top;
      if (screenWidth < 1680) {
        $targetPos += $(id).offset().left - slideContainerPadding1 * 2;
      }
      if (1800 > screenWidth >= 1680) {
        $targetPos += $(id).offset().left - slideContainerPadding1 * 1.5;
      }
      if (2200 > screenWidth >= 1800) {
        $targetPos += $(id).offset().left - slideContainerPadding1;
      }
      if (screenWidth >= 2200) {
        $targetPos += $(id).offset().left - slideContainerPadding1 / 2;
      }
      if ($(id).length > 0) {
        console.log($targetPos);
        e.preventDefault();
        // trigger scroll
        controller.scrollTo($targetPos);
      }
    });

    scene.each(function () {
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: "onLeave",
      })
        /*.setPin( this , {pushFollowers: false})*/
        /*.setTween(this , {yPercent: -100})*/
        .addTo(controller)
        .setClassToggle(scene, 'is-active')
    });

    $(document).ready(function () {
      var url_string = window.location.href;
      var id = "#s-" + url_string.split('id=')[1];
      setTimeout(function() {
      $targetPos = $(id).offset().top;
      if (screenWidth < 1680) {
        $targetPos += $(id).offset().left - slideContainerPadding1 * 2;
      }
      if (1800 > screenWidth >= 1680) {
        $targetPos += $(id).offset().left - slideContainerPadding1 * 1.5;
      }
      if (2200 > screenWidth >= 1800) {
        $targetPos += $(id).offset().left - slideContainerPadding1;
      }
      if (screenWidth >= 2200) {
        $targetPos += $(id).offset().left - slideContainerPadding1 / 2;
      }
      if ($(id).length > 0) {
        console.log(id);
        console.log($targetPos);
        // trigger scroll
        controller.scrollTo($targetPos);
      }},100);
    });
  }
});

/*Слайдер на детальной странице новости*/

$(document).ready(function () {
  swiper = new Swiper(".article__slider .swiper-container", {
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    autoHeight: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    /*speed: 800,*/
    effect: 'slide',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".article__slider .swiper-button-next",
      prevEl: ".article__slider .swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
    },
  });
});

/*Скрыть уведомление на мобиле*/

$(document).ready(function () {
  $(".notice__close").click(function () {
    $(".notice").addClass('none');
  })
});
