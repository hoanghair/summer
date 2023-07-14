$(document).ready(function () {
  const overlay = $(".modal");
  const elementsVideos = [
    {
      src: "https://www.youtube.com/embed/SGHq5Py2bY0?autoplay=0&control=1&loop=0&rel=0&modestbranding=1",
    },
    {
      src: "https://www.youtube.com/embed/VyJvfzHO95M?autoplay=0&control=1&loop=0&rel=0&modestbranding=1",
    },
    {
      src: "https://www.youtube.com/embed/SGHq5Py2bY0?autoplay=0&control=1&loop=0&rel=0&modestbranding=1",
    },
    {
      src: "https://www.youtube.com/embed/VyJvfzHO95M?autoplay=0&control=1&loop=0&rel=0&modestbranding=1",
    },
  ];

  function preventDefaultClick(e) {
    e.preventDefault();
  }

  // scroll to target location on click
  function scrollToLocation(e) {
    e.preventDefault();
    const targetLocation = $(this).attr("href");
    const topOffSet = Math.round($(targetLocation).offset().top);
    $("html, body").animate({ scrollTop: topOffSet }, 400);
  }

  // scroll down when '.scrolldown' button is pressed
  function scrollDown(e) {
    e.preventDefault();
    const targetLocation = $(".nav__link").attr("href");
    const topOffSet = Math.round($(targetLocation).offset().top);
    $("html, body").animate({ scrollTop: topOffSet }, 400);
  }
  //scroll to the top when clicking the button
  function scrollTop() {
    $("html, body").animate({ scrollTop: 0 }, 400);
  }

  //scroll active button nav
  function scrollActive() {
    const scrollPosition = $(window).scrollTop();
    const halfWindowHeight = Math.round($(window).height() / 2);

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
    if (scrollPosition > 0) {
      $(".header").addClass("bg-header");
    } else if (scrollPosition === 0) {
      $(".header").removeClass("bg-header");
    }
  }

  //scroll, the 'scrollTop' button will show
  function scrollShowBtn() {
    const scrollPosition = $(window).scrollTop();
    const targetRegister = $(".nav__item a").attr("href");
    const topOffset = Math.round($(targetRegister)?.offset()?.top);

    if (scrollPosition >= topOffset) {
      $(".floating").css({ display: "block" });
    } else if (scrollPosition < topOffset) {
      $(".floating").css({ display: "none" });
    }
  }

  //scroll, the animation will show
  function scrollShowAnimation() {
    const scrollPosition = $(window).scrollTop();
    const halfWindowHeight = Math.round($(window).height() / 2);
    const elements = [
      { selector: ".event", class: "is-transition" },
      { selector: ".register", class: "is-transition" },
      { selector: ".rwby", class: "is-transition" },
      { selector: ".comingsoon", class: "is-transition" },
      { selector: ".war", class: "is-transition" },
    ];

    elements.forEach(function (element) {
      const targetElement = $(element.selector);
      const topOffSetElement = Math.round(targetElement.offset().top);
      const halfTopOffset = topOffSetElement - halfWindowHeight;

      if (scrollPosition >= halfTopOffset) {
        targetElement.addClass(element.class);
      }
    });
  }

  // modal video
  // play video
  function playVideo() {
    const buttonIndex = $(".js-play").index(this);
    const videoSrc = elementsVideos[buttonIndex].src;

    $(".modal__video-iframe").attr("src", videoSrc);
    overlay.addClass("modal-center");
    $(".modal__video").css({ display: "block" });
    $("body").css("overflow", "hidden");
  }

  //close video
  function closeVideo() {
    overlay.removeClass("modal-center");
    $(".modal__video").css({ display: "none" });
    $(".modal__video-iframe").attr("src", "");
    $("body").css("overflow", "auto");
  }

  // modal nav
  // play modal
  var overLayModalNav = $(".modal__nav");
  function playModalNav() {
    overLayModalNav.addClass("modal__center-nav");
    $("body").css("overflow", "hidden");
  }

  //close modal
  function closeModalNav() {
    overLayModalNav.removeClass("modal__center-nav");
    $("body").css("overflow", "auto");
  }

  // check box input
  $(".checkbox__input").change(function () {
    const isChecked1 = $("#input1").prop("checked");
    const isChecked2 = $("#input2").prop("checked");

    if (isChecked1 && isChecked2) {
      $("#selectAll").prop("checked", true);
    } else {
      $("#selectAll").prop("checked", false);
    }
  });
  $("#selectAll").click(function () {
    $(".checkbox__input").prop("checked", $(this).prop("checked"));
  });

  $(".checkbox__input").click(function () {
    if ($(this).prop("checked")) {
      $("#selectAll").prop("checked", false);
    }
  });

  $(".nav__link").on("click", preventDefaultClick);
  $(".nav__item a").click(scrollToLocation);
  $(".scrolldown").click(scrollDown);
  $(".floating__scrolltop-btn").click(scrollTop);
  $(window).scroll(scrollActive);
  $(window).scroll(scrollShowBtn);
  $(window).scroll(scrollShowAnimation);
  $(".js-play").click(playVideo);
  $(".close, .modal").click(closeVideo);
  $(".js-open").click(playModalNav);
  $(".close, .modal__nav").click(closeModalNav);
});
