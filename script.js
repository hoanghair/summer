$(document).ready(function (e) {
  // active
  $(".nav__link").click(function () {
    $(".nav__item").removeClass("is_active");
    $(this).parents('.nav__item').addClass("is_active");
  });

  $(".nav__link").on("click", function (e) {
    e.preventDefault();
  });

  //scroll
  $(".nav__item a").click(function (e) {
    e.preventDefault();
    var targetLocation = $(this).attr("href");
    var topOffSet = Math.round($(targetLocation).offset().top);
    $("html, body").animate({ scrollTop: topOffSet }, 400);
  });

  $(".scrolldown").click(function () {
    var targetLocation = $(".nav__link").attr("href");
    var topOffset = Math.round($(targetLocation).offset().top);
    $("html, body").animate({ scrollTop: topOffset }, 400);
  });

  // $(window).scroll(function (e) {
  //   e.preventDefault();
  //   var scrollActiveClass = $('html, body').scrollTop()
  //   var offSetTopRegister = Math.round($('.register').offset().top)
  //   console.log(scrollActiveClass);
  //   if(scrollActiveClass >= offSetTopRegister){
  //     $(".nav__item").removeClass("is_active");
  //     $('.nav__item:first-child').addClass("is_active");
  //   }else {
  //     $('.nav__item').removeClass("is_active");
  //   }
    
  // })

});
