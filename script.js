$(document).ready(function (e) {
  // Active
  // $(".nav__link").click(function () {
  //   $(".nav__item").removeClass("is_active");
  //   $(this).parents(".nav__item").addClass("is_active");
  // });

  $(".nav__link").on("click", function (e) {
    e.preventDefault();
  });

  //click and scroll
  $(".nav__item a").click(function (e) {
    e.preventDefault();
    const targetLocation = $(this).attr("href");
    const topOffSet = Math.round($(targetLocation).offset().top);
    $("html, body").animate({ scrollTop: topOffSet }, 400);
  });

  $(".scrolldown").click(function () {
    const targetLocation = $(".nav__link").attr("href");
    const topOffset = Math.round($(targetLocation).offset().top);
    $("html, body").animate({ scrollTop: topOffset }, 400);
  });

  $('.floating__scrolltop-btn').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  // Scroll the mouse
  $(window).scroll(function () {
    const scrollPosition = $(window).scrollTop();
    const halfWindowHeight = Math.round($(window).height() / 2);

    const targetRegister = $(".nav__item a").attr("href");
    const topOffset = Math.round($(targetRegister)?.offset()?.top);

    if (scrollPosition >= topOffset) {
      $('.floating').css({display: 'block'});
    }else if (scrollPosition < topOffset) {
      $('.floating').css({display: 'none'});
    }

    const elements = [
      { selector: ".event", class: "is-transition" },
      { selector: ".register", class: "is-transition" },
      { selector: ".rwby", class: "is-transition" },
      { selector: ".comingsoon", class: "is-transition" },
      { selector: ".war", class: "is-transition" },
    ];

    $(".nav__item").each(function () {
      const target = $(this).find(".nav__link").attr("href");
      const targetOffset = Math.round($(target).offset().top);
      const scrollThreshold = targetOffset - halfWindowHeight;

      if (scrollPosition >= scrollThreshold) {
        $(this).addClass("is_active");
        $(this).siblings().removeClass("is_active");
      } else if (scrollPosition <= halfWindowHeight) {
        $(this).removeClass("is_active");
      }
    });

    // animation scroll
    elements.forEach(function (element) {
      const targetElement = $(element.selector);
      const topOffsetElement = targetElement.offset().top;
      const halfTopOffset = topOffsetElement - halfWindowHeight;

      if (scrollPosition >= halfTopOffset) {
        console.log("event abababa");
        targetElement.addClass(element.class);
      }
    });
  });

  // modal play video

  const elementsVideos = [
    { src: "https://www.youtube.com/embed/SGHq5Py2bY0?autoplay=0&control=1&loop=0&rel=0&modestbranding=1" },
    { src: "https://www.youtube.com/embed/VyJvfzHO95M?autoplay=0&control=1&loop=0&rel=0&modestbranding=1" },
    { src: "https://www.youtube.com/embed/SGHq5Py2bY0?autoplay=0&control=1&loop=0&rel=0&modestbranding=1" },
    { src: "https://www.youtube.com/embed/VyJvfzHO95M?autoplay=0&control=1&loop=0&rel=0&modestbranding=1" },
  ];

  const overlay = $('.modal');
  $(".js-play").click(function() {
    const buttonIndex = $(".js-play").index(this);
    console.log(buttonIndex);
    const videoSrc = elementsVideos[buttonIndex].src;
    console.log({ src: videoSrc});
    $(".modal__video-iframe").attr("src", videoSrc);
  
    overlay.addClass("modal-center");
    $(".modal__video").css({ display: "block" });
  });
  
  $(".close, .modal").click(function() {
    overlay.removeClass("modal-center");
    $(".modal__video").css({ display: "none" });
    $(".modal__video-iframe").attr("src", "");
  });
});


