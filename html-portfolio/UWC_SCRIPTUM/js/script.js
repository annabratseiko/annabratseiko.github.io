$(document).ready(function() {

  var windowsWidth = $(window).width();
  var route;
  // hide-menu

  if (windowsWidth > 960) {
    route = 400;
  } else {
    route = 300;
  };

  $(".header__menu").click(function() {
    if ($('.main').hasClass('nav-opened')){
      $('.main').removeClass('nav-opened');
      $('.main').animate({right:0}, 900);
    } else {
      $('.main').addClass('nav-opened');
      $('.main').animate({right:route}, 900);
    };
  });

  $(".hide__menu-item").click(function() {
    $('.main').removeClass('nav-opened');
    $('.main').animate({right:0}, 900);
  });

  // button-up
  $('.footer__button-up').click(function(){
    $('body, html').animate({scrollTop: 0}, 1100);
    return false;
  });

  // quote-slider
  $('.quote__slider').slick({
    dots: true,
    arrows: false,
  });

  // works-tabs
  $('.works__item').click(function(e){
    $('.works__item').removeClass('works__item_active');
    $(this).addClass('works__item_active');
    if ($(this).children('a').attr('class') != $('#works__list-wrapper').attr('class')){
      $('#works__list-wrapper').attr('class',$(this).children('a').attr('class'));
    }
    e.preventDefault();
  });
  
});