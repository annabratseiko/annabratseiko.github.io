var lazyLoad      = new LazyLoadElement();
var mainPage      = new MainPage();
var careerPage    = new CareerPage();
// var portfolioPage = new PortfolioPage();
var vacancyPage   = new VacancyPage();


var mySwiper = new Swiper ('.project', {
  hashnav: true,
  hashnavWatchState: true,
  replaceState: true,
  speed: 0,
  keyboardControl: false,
  simulateTouch: false,
  onlyExternal: true,
  onInit: function(swiper) {
    if(swiper.activeIndex === 0) {
      mainPage.init();
    }
    addMainMenuHandlers();
  },
  onSlideChangeEnd: function(swiper) {
    switch (swiper.activeIndex) {
      case 0: mainPage.init();
        break;
      case 1: careerPage.init();
        break;
    //   case 2: portfolioPage.init();
    //     break;
      // case 3: ;
      //   break;
    }
  }
});

function addMainMenuHandlers() {
  var menuButton = document.getElementById('menu-icon');
  var mainMenu = document.querySelector('.main-menu');
  var menuBg = document.querySelector('.menu-background');
  var menuLinks = document.querySelectorAll('.menu-link');
  menuButton.addEventListener('click', showMenu.bind(this, mainMenu, menuBg));
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function() {
      goToPage(this);
      showMenu(mainMenu, menuBg);
    });
  }
}

function showMenu(menu, bg) {
  menu.classList.toggle('open');
  bg.classList.toggle('open');
}

function goToPage(link, speed) {
  // var speed = speed || 0;
  // if (mainPage.mainPageSwiper) {
  //   var mainPageSwiper = mainPage.mainPageSwiper[mainPage.mainPageSwiper.length - 1];
  //   var mainPageScreens = mainPageSwiper.slides;
  //   document.querySelector('.logo-name').style.display = 'none';
  //   for (var i = 0; i < mainPageScreens.length; i++) {
  //     if(mainPageScreens[i].getAttribute('data-id') === link.getAttribute('data-id')) {
  //       mainPageSwiper.slideTo(i, speed);
  //     }
  //   }
  // }
}