var placeholder = document.querySelector('.cases-page-nav-placeholder');
var navigation = document.querySelector('.cases-page-nav');
var filters = document.querySelectorAll('.cases-type-item');

function setPlaceholdersHeight() {
	var heightNav = getComputedStyle(navigation).height;
	placeholder.style.height = heightNav;
}

function setSticky() {
	var top = placeholder.getBoundingClientRect().top;

	if (top <= 70) {
		navigation.classList.add('sticky');
	} else {
		navigation.classList.remove('sticky');
	}
}

setPlaceholdersHeight();
window.addEventListener('scroll', setSticky);

function bindCasesFilters() {
	for (var i = 0; i < filters.length; i++) {
	    (function(e) {
	        filters[e].addEventListener('click', function() {
	            this.classList.toggle('active');
	            this.querySelector('.cases-type-item-close').addEventListener('click', function() {
	            	filters[e].style.display = 'none';
	            });
	        });
	    })(i);
	}
}

bindCasesFilters();
