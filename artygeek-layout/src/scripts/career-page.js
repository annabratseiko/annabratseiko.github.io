function CareerPage() {
  this.container = document.querySelector('.career-container');
  this.careerPageSwiper;
  this.swiperHashtags;
  this._firstInit = true;
}

CareerPage.prototype.init = function() {
  var _this = this;
  if (this._firstInit) {
    this.careerPageSwiper = new Swiper ('.career-container', {
      keyboardControl: true,
      direction: 'vertical',
      mousewheelControl: true,
      simulateTouch: false,
      pagination: '.main-page-pagination',
      paginationType: 'progress',
      onSlideChangeEnd: function(swiper) {
        if(swiper.activeIndex === 1) {
          _this.swiperHashtags.params.autoplay = 2000;
          _this.swiperHashtags.startAutoplay();
        } else {
          _this.swiperHashtags.stopAutoplay();
        }
      }
    });

    this.hashtagSwiperInit();
   
    lazyLoad.render(this.container, true);
    this._firstInit = false;

    team();
  } 
  
  return; 
}

CareerPage.prototype.hashtagSwiperInit = function() {
  this.swiperHashtags = new Swiper('.hashtags-container', {
    pagination: '.swiper-pagination',
    autoplay: false,
    paginationClickable: true,
    loop: true,
    paginationBulletRender: function (swiper, index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  });
}

