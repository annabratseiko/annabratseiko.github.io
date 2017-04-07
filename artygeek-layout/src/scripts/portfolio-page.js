function PortfolioPage() {
  this.container = document.getElementById('portfolio');
  this.portfolioPageSwiper;
  this._firstInit = true;
}

PortfolioPage.prototype.init = function() {
  if (this._firstInit) {
    this.portfolioPageSwiper = new Swiper ('.portfolio', {
      keyboardControl: true,
      direction: 'vertical',
      mousewheelControl: true
    });
   
    lazyLoad.render(this.container, true);
    this._firstInit = false;
  }

  return; 
}

