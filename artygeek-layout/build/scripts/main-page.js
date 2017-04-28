function MainPage() {
  this.container = document.getElementById('main');
  this.logoName = document.querySelector('.logo-name');
  this.mainPageSwiper;
  this.swiperExpertise;
  this._firstInit = true;
}

MainPage.prototype.init = function() {
  var _this = this;
  if (this._firstInit) {
    this.mainPageSwiper = new Swiper ('.main', {
      keyboardControl: true,
      direction: 'vertical',
      mousewheelControl: true,
      simulateTouch: false,
      hashnav: true,
      hashnavWatchState: true,
      replaceState: true,
      pagination: '.main-page-pagination',
      paginationType: 'progress',
      onSlideChangeStart: function(swiper) {
        var currentSlide = swiper.slides[swiper.activeIndex];
        _this.setPortfolioMenuClass(currentSlide);
        _this.showLogoName(currentSlide);
        _this.animateDribble(currentSlide);
        _this.setActivePortfolioIcon(currentSlide);
      }
    });

    this.logoName.style.display = 'inline-block';
  
    lazyLoad.render(this.container, true);
    this._firstInit = false;
  }

  this.expertiseSwiperInit();
  this.handleClicks();

  return; 
}

MainPage.prototype.expertiseSwiperInit = function() {
  this.swiperExpertise = new Swiper('.portfolio-swiper', {
    pagination: '.swiper-pagination',
    paginationClickable: true
  });
}

MainPage.prototype.setPortfolioMenuClass = function(elem) {
  document.querySelector('.portfolio-menu').className = 'portfolio-menu ' + elem.getAttribute('data-animate-class');
}

MainPage.prototype.showLogoName = function(elem) {
  var pageId = elem.getAttribute('data-id');
  this.logoName.style.display = (pageId === 'home' || pageId === 'about') ? 'inline-block' : 'none';
}

MainPage.prototype.animateDribble = function(elem) {
  if (elem.getAttribute('data-id') === 'portfolio-dribble') {
    document.querySelector('.dribble').classList.add('active');
  } else {
    document.querySelector('.dribble').classList.remove('active');
  }
}

MainPage.prototype.handleClicks = function() {
  var pageSwiper = mainPage.mainPageSwiper[mainPage.mainPageSwiper.length - 1];
  document.querySelector('.start-page').addEventListener('click', function(){
    pageSwiper.slideTo(1);
  });

  //set active portfolio link
  var linkIcons = document.querySelectorAll('.portfolio-menu-item');
  for (let i = 0; i < linkIcons.length; i++) {
    linkIcons[i].addEventListener('click', function(e) {
      goToPage(this, 300);
    });
  }
}

MainPage.prototype.setActivePortfolioIcon = function(elem) {
  var linkIcons = document.querySelectorAll('.portfolio-menu-item');
  for (let i = 0; i < linkIcons.length; i++) {
    linkIcons[i].classList.remove('active');
  }
  for (let i = 0; i < linkIcons.length; i++) {
    if (linkIcons[i].getAttribute('data-id') === elem.getAttribute('data-id')) {
      linkIcons[i].classList.add('active');
    }
  }
}

// TODO: fix auto grow of textarea
document.getElementById('message').addEventListener('input', function() {
  resizeTextarea(this);
});

function resizeTextarea(textbox) {
  var maxrows = 6; 
  var txt = textbox.value;
  var cols = textbox.cols;

  var arraytxt = txt.split('\n');
  var rows = arraytxt.length; 

  for (i = 0; i < arraytxt.length; i++) {
    rows += parseInt(arraytxt[i].length / cols);
  }  
   
  if (rows > maxrows) {
    textbox.rows = maxrows;
  } else {
    textbox.rows = rows;
  }
 }