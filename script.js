$(document).ready(function(e){
  $('.nav__item').click(function(){
    $('.nav__item').removeClass('is_active');
    $(this).addClass('is_active');
  });
  
  $('.nav__link').on('click', function (e) {
    e.preventDefault();
  })
})