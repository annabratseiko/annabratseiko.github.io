$(document).ready(function(){
	    var windowsWidth = $(window).width();

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

	    $('.da-mobile-menu ul li').click(function(){
	    	// e.preventDefault();
	    	if ($(this).hasClass('da-wo-submenu')){
	    		$('.da-mobile-menu').animate({right:windowsWidth},500);
	    		$('.da-mobile-menu').removeClass('da-mobile-menu-hidden');
	    	} else {
	    		$(this).children('.da-submenu').toggleClass('.da-submenu-visible');
	    		$(this).children('.da-submenu').slideToggle(400);
	    	}
	    });


 });
