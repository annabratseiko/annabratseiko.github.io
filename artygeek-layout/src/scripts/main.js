var lazyLoad      = new LazyLoadElement();
var mainPage      = new MainPage();
var careerPage    = new CareerPage();
var portfolioPage = new PortfolioPage();
var vacancyPage   = new VacancyPage();

var mySwiper = new Swiper ('.project', {
  hashnav: true,
  hashnavWatchState: true,
  replaceState: true,
  speed: 0,
  keyboardControl: false,
  simulateTouch : false,
  onSlideChangeEnd: function(swiper) {
    switch (swiper.activeIndex) {
      case 0: mainPage.init();
        break;
      case 1: careerPage.init();
        break;
      case 2: portfolioPage.init();
        break;
      case 3: vacancyPage.init();
        break;
    }
  }
});