function LazyLoadElement() {
  this._container;
}

LazyLoadElement.prototype.render = function(container, load) {
  this._container = container;
  if (load) this._loadImages();
  return;
}

LazyLoadElement.prototype._loadImages = function() {
  this._loadBackgroundImages();
  this._loadSrcImages();  
}

LazyLoadElement.prototype._loadBackgroundImages = function() {
  var bgImages = this._container.querySelectorAll('.lazy-bg');
  for (var i = 0; i < bgImages.length; i++) {
    bgImages[i].style.backgroundImage = 'url(' + bgImages[i].getAttribute('data-background') + ')';
  }
}

LazyLoadElement.prototype._loadSrcImages = function() {
  var images = this._container.querySelectorAll('.lazy-image');
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].getAttribute('data-src');
  }
}