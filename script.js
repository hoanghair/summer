$(document).ready(function (e) {
  // active
  $(".nav__item").click(function () {
    $(".nav__item").removeClass("is_active");
    $(this).addClass("is_active");
  });

  $(".nav__link").on("click", function (e) {
    e.preventDefault();
  });

  //scroll
  $(".nav__item a").click(function (e) {
    e.preventDefault();
    var targetLocation = $(this).attr("href");
    var topOffSet = Math.round($(targetLocation).offset().top);
    $("HTML, body").animate({ scrollTop: topOffSet }, 1000);
  });

  $(".scrolldown").click(function () {
    var targetLocation = $(".nav__link").attr("href");
    var topOffset = Math.round($(targetLocation).offset().top);
    $("html, body").animate({ scrollTop: topOffset }, 1000);
  });
});
