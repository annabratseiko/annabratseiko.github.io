$.pageEffects = new(function() {
  this.currentPage = 0;
  var _pageAnimations = [];

  this.init = function(pageAnimation) {
    _pageAnimations = pageAnimation;
    return 1;
  };

  this.initCurrentPage = function() {
    this.currentPage = 1 + Math.round($(window).scrollTop() / $(window).height());
  };

  this.goToPageAnimate = function(page) {
      this.currentPage = page;
      $('html, body').animate({
        scrollTop: ($(window).height() * (page - 1))
      },600); 

  };


  this.goToPage = function(page) {
      this.currentPage = page;
      $(document).scrollTop(($(window).height() * (page - 1)));

  };

  this.updateCurrentPage = function(isScrolledDown) {
    if (isScrolledDown) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
  };

  this.animate = function(page, direction) {
    return _pageAnimations[page] && _pageAnimations[page][direction] && _pageAnimations[page][direction]();
  };

  this.getDelayPromise = function(time) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(true);
      }, time);
    });
  };
})();
