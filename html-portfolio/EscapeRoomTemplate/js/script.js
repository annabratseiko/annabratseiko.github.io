$(document).ready(function(){

	// ---sliders---
	
	$('.da-blog-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  arrows: false,
	  dots: true,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.da-review-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	 ]
	});

	$('.da-banner-slider').slick({
		dots: true,
		arrows: true,
		fade: true,
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	
	});

	$('.da-slider-post').slick({
		dots: false,
		arrows: true,
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	
	});


	// ---menu

	var windowsHeight = $(window).height();
    var windowsWidth = $(window).width();

    $('.da-home-banner').css('height', windowsHeight);
    

    $('.da-menu-button').click(function(e){
    	e.preventDefault();
    	if ($('.da-mobile-menu').hasClass('da-mobile-menu-hidden')){
    		$('.da-mobile-menu').animate({right:windowsWidth},500);
    		$('.da-mobile-menu').removeClass('da-mobile-menu-hidden');
    	} else {
    		$('.da-mobile-menu').animate({right:0},500);
    		$('.da-mobile-menu').addClass('da-mobile-menu-hidden');
    	}
    });

    $('.da-mobile-menu ul li').click(function(e){
    	// e.preventDefault();
    	if ($(this).hasClass('da-wo-submenu')){
    		$('.da-mobile-menu').animate({right:windowsWidth},500);
    	} else {
    		$(this).children('.da-submenu').toggleClass('.da-submenu-visible');
    		$(this).children('.da-submenu').slideToggle(400);
    	}
    });

    var lastScrollTop = 0;
  
    $(window).scroll(function(){
    
    
	    var st = $(this).scrollTop();

	    if (st > lastScrollTop) {
	      $("header").addClass("da-hide-menu");
	      $("header").removeClass("da-show-menu");
	      $("header").css("top", "none");
	    } else {
	      $("header").addClass("da-fixed-header");
	      $("header").addClass("da-show-menu");
	      $("header").removeClass("da-hide-menu");
	    } 
	    
	     lastScrollTop = st;

	    if ($(window).scrollTop() >= 100) {
	      $("header").addClass("da-fixed-header");
	    } else {
	      $("header").removeClass("da-hide-menu");
	      $("header").removeClass("da-show-menu");
	      $("header").removeClass("da-fixed-header");
	    }
   });

    $('.da-btn-up').click(function(){
		$('body, html').animate({scrollTop: 0}, 1100);
		return false;
	});

	$('.da-btn-down, .da-btn-down-no-border').click(function(){
		$('body, html').animate({scrollTop: windowsHeight}, 1100);
		return false;
	});


    // ---faq

    $('.da-question-container').click(function(e){
        e.preventDefault();

        question_block = $(this);
        $(this).children('.da-question').toggleClass("da-question-open");
        $(this).children('.da-answer').slideToggle(400);
	    
	    if ($('.da-question').hasClass('da-question-open')){
	    	$(this).find('.da-answer-btn p').text('-');
	    } else {
	    	$(this).find('.da-answer-btn p').text('+');
	    }
    });


    // ---video-post
    
    $('.da-video-post-container video, .da-video-player-container video').click(function() {
        $(this).get(0).paused ? $(this).get(0).play() : $(this).get(0).pause();
    });

    $('.da-video-play-btn').click(function(e){
    	e.preventDefault();
    	$(".da-video-player").css('display', 'block');
    });

    $(".da-video-player").mouseup(function (e){ 
		var div = $(".da-video-player-container");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			div.parents(".da-video-player").hide();
		}
	});

	$(document).keydown(function(e) {
	    if (e.keyCode == 27) {
	        $(".da-video-player").css("display", "none");
	    }
	});

    // ---calendar

    $('.da-booking-btn').click(function(e){
    	e.preventDefault();
    	$('.da-calendar-page').css('display', 'none');
    	$('.da-inside-date').css('display', 'block');
    });

	$('.da-close-booking').click(function(e){
    	e.preventDefault();
    	$('.da-calendar-page').css('display', 'block');
    	$('.da-inside-date').css('display', 'none');
    });


});