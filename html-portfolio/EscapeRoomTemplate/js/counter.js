$(document).ready(function(){
	var windowsHeight = $(window).height();
  	var windowsWidth = $(window).width();

		 function startCounter() {
		 $(function () {
			 $({
				 n: 0
			 }).animate({
				 n: 85
			 }, {
				 duration: 200E1,
				 step: function (a) {
					 $("#n1").html(a | 0);
				 }
			 });
		 });

		$(function () {
			 $({
				 n: 0
			 }).animate({
				 n: 315
			 }, {
				 duration: 200E1,
				 step: function (a) {
					 $("#n2").html(a | 0);
				 }
			 });
		 });

		$(function () {
			 $({
				 n: 0
			 }).animate({
				 n: 1150
			 }, {
				 duration: 200E1,
				 step: function (a) {
					 $("#n3").html(a | 0);
				 }
			 });
		 });

		$(function () {
			 $({
				 n: 0
			 }).animate({
				 n: 750
			 }, {
				 duration: 200E1,
				 step: function (a) {
					 $("#n4").html(a | 0);
				 }
			 });
		 });
	 } 

	 var topPosition = windowsHeight;
	 var counterBlock = $('.da-counter').offset().top;
	 console.log(counterBlock);

	 if (windowsWidth >= 768) {
		$(window).scroll(function() {
			if($(window).scrollTop() >= (counterBlock - topPosition) && $("#n1").html() == '0') {
				startCounter();
			}
		});
	} else {
		$("#n1").text(485);
		$("#n2").text(315);
		$("#n3").text(1150);
		$("#n4").text(750);
	}

});