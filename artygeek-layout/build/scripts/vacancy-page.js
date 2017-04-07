function VacancyPage() {
  this.container = document.getElementById('vacancy');
  this.vacancyPageSwiper;
  this._firstInit = true;
}

VacancyPage.prototype.init = function() {
  if (this._firstInit) {
    this.vacancyPageSwiper = new Swiper ('.vacancy', {
      keyboardControl: true,
      direction: 'vertical',
      mousewheelControl: true
    });
   
    lazyLoad.render(this.container, true);
    this._firstInit = false;
  }

  return; 
}

