//carousel for Characters-block

$(document).ready(function() { 
 
  var owl = $("#owl-demo-mobile");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [450, 2],
        [600, 2],
        [700, 2],
        [1000, 2]
      ],
      navigation : true
 
  });
 
//carousel for Header (mobile version)
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [450, 2],
        [600, 2],
        [700, 2],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true
 
  });

//Animation

  $.fn.extend({
  		animateCss: function (animationName) {
      		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
     			$(this).addClass('animated ' + animationName).one(animationEnd, function() {
          	$(this).removeClass('animated ' + animationName);
      	});
  	},
      animateCssOnce: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(this).addClass('animated ' + animationName);
    }
  });

  $('.head_image').on("mousewheel", function(){
  	$('.head-animation_left, .head-animation_right').css('display', 'block');	
  	$('.head-animation_right, .head-animation_left').animateCssOnce('fadeIn');
  });

  $('.section-story').on("mousewheel", function(){
  	$('.story-mountain-animation, .story-cloud-animation').css('display', 'block');
  	$('.story-mountain-animation').animateCssOnce('fadeIn');
    $('.story-cloud-animation').animateCssOnce('fadeIn');
  });
});

//Scroll
(function($){
$(window).load(function(){
 
$("body").mCustomScrollbar({
theme:"dark-thin",
scrollInertia: 450,
mouseWheelPixels: 300,
scrollSpeed:10
});
 
});
})(jQuery);

//Parallax
$(window).on("mousemove", function(e) { 
  var w = $(window).width(); 
  var h = $(window).height(); 
  var offsetX = 0.5 - e.pageX / w; 
  var offsetY = 0.5 - e.pageY / h; 
  $(".parallax").each(function(i, el) { 
  var offset = parseInt($(el).data('offset')); 
  var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)"; 
  $(el).css({ 
    '-webkit-transform': translate, 
    'transform': translate, 
    'moz-transform': translate 
    }); 
  }); 
});
