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

  // Scroll the mouse
  $(window).scroll(function () {
    const scrollPosition = $(window).scrollTop();
    const halfWindowHeight = Math.round($(window).height() / 2);
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
});
