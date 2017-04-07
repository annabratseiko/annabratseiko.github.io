function MainPage() {
  this.container = document.getElementById('main');
  this.mainPageSwiper;
  this._firstInit = true;
}

MainPage.prototype.init = function() {
  if (this._firstInit) {
    this.mainPageSwiper = new Swiper ('.main', {
      keyboardControl: true,
      direction: 'vertical',
      mousewheelControl: true
    });
   
    lazyLoad.render(this.container, true);
    this._firstInit = false;
  }

  return; 
}

