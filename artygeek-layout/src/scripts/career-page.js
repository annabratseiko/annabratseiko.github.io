function CareerPage() {
  this.container = document.getElementById('career');
  this.careerPageSwiper;
  this._firstInit = true;
}

CareerPage.prototype.init = function() {
  if (this._firstInit) {
    this.careerPageSwiper = new Swiper ('.career', {
      keyboardControl: true,
      direction: 'vertical',
      mousewheelControl: true
    });
   
    lazyLoad.render(this.container, true);
    this._firstInit = false;
  }

  return; 
}

