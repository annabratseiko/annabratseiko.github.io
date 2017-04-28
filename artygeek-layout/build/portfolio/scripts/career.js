function career(COMMON) {
  window.onLoad = function() {        
    window.scrollTo(0,1);
  } 
  setContainerHeight($('.career-page'));
  $('.change').removeClass('show');
  vacancyPageHandler();

  $swiperMain = new Swiper('.career-container', {
    direction: 'vertical',
    mousewheelControl: true,
    simulateTouch : false,
    keyboardControl: true,
    onSlideChangeEnd: function(swiper) {
      if(swiper.activeIndex === 1) {
        $swiperHashtags.params.autoplay = 2000;
        $swiperHashtags.startAutoplay();
      } else {
        $swiperHashtags.stopAutoplay();
      }
    }
  });

  $swiperHashtags = new Swiper('.hashtags-container', {
    pagination: '.swiper-pagination',
    autoplay: false,
    paginationClickable: true,
    loop: true,
    paginationBulletRender: function (swiper, index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  });

  $('.go-to-main').on('click', function() {
    window.location = '#';
    $('.loadrer').removeClass('hide');
  });

  COMMON.init();
  team();
}

function vacancyPageHandler() {
  $goToVacancyPage = $('.vacancy-item');

  $goToVacancyPage.click(function (e) {
    e.preventDefault();
    var goTo = this.getAttribute("href");
    $('.change').addClass('show', 300, function () {
      window.location = goTo;
    });
  });
}

// TODO: refactor control of container height
function setContainerHeight(elem) {
  $pageHeight = $('body').height();
  elem.css('height', $pageHeight);
}
$(window).on('resize', function() {
  setContainerHeight($('.career-page'));
});