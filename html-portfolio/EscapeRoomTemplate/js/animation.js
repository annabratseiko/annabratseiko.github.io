jQuery(document).ready(function() {

	var windowWidth = jQuery(window).width();

	if (windowWidth >= 1200) {

	    jQuery('.da-main-title, .da-positioned-block').addClass("invisible").viewportChecker({
	        classToAdd: 'visible animated fadeInUpBig',
	        offset: 100
	    });

	    jQuery('.da-information, .da-price-plan-block, .da-blog-slider > div, .da-text-news > div, .da-game-container, .da-question-container, .da-contact-container, #map, .da-room-info, .da-month-name, .da-booking-day-container, .da-booking-date, .da-main-post, .da-pagination-page, .da-sidebar-container, .da-main-post-text, .da-post-quote, .da-details-container, .da-post-tags-social > div, .da-relative-posts > .row, .da-comments, .da-comment-, .da-comment-form, .da-post-title-container').addClass("invisible").viewportChecker({
	        classToAdd: 'visible animated fadeInUp',
	        offset: 100
	    });

	    jQuery('.da-left-animated-block').addClass("invisible").viewportChecker({
	        classToAdd: 'visible animated fadeInLeft',
	        offset: 100
	    });

	    jQuery('.da-right-animated-block').addClass("invisible").viewportChecker({
	        classToAdd: 'visible animated fadeInRight',
	        offset: 100
	    });

	    jQuery('.da-game-img').addClass("invisible").viewportChecker({
	        classToAdd: 'visible animated fadeIn',
	        offset: 100
	    });
	}
});
