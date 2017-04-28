function team() {
    var ANIMATION = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var persons = $('.person-icons .person-icon');
    var personIconActive = $('.person-icon.active');
    var previousPerson = null;
    var bars = {};
    var scroller;
    var containerElement = document.getElementById('wrapper-icons');
    var snapSize = 156;
    var countOfItems = $('.wrapper-icons ul').children().length;
    var $wrapper = $('.wrapper-icons');
    var $team = $('.team-col.left ul');
    var $win = $(window);
    var countOfTabs;
    var timerId;
    var enablePersonEvents = true;
    var currentTab = 1;
    var isScroolNow = false;

    persons.each(function () {
        bars[$(this).attr('data-person-name')] = new ProgressBar.Circle(this, {
            strokeWidth: 6,
            easing: 'linear',
            duration: 500,
            color: '#D9303E'
        });
    });

    if ($win.width() > 768) {
        bars[$('.person-icon')
                .first()
                .addClass('active')
                .attr('data-person-name')]
            .set(1.0);
    }


    persons.mouseenter(function (e) {
        e.stopPropagation();

        if (!enablePersonEvents) return;

        var self = $(this);
        if (self.hasClass('active')) {
            return false;
        }
        personIconActive = $('.person-icon.active');
        previousPerson = personIconActive;
        personIconActive.removeClass('active');

        var activeImage = $('#' + previousPerson.attr('data-person-name'));
        var dataPersonName = self.attr('data-person-name');
        var nextImage = $('#' + dataPersonName);

        self.addClass('animate');

        bars[previousPerson.attr('data-person-name')].set(0);
        bars[dataPersonName].animate(1.0, function () {
            self.addClass('active').removeClass('animate');
            previousPerson = self;
            activeImage.addClass('animated bounceOutUp')
                .one(ANIMATION,
                    function () {
                        activeImage.removeClass('active animated bounceOutUp');
                    });

            nextImage.addClass('animated bounceInUp')
                .one(ANIMATION,
                    function () {
                        nextImage.addClass('active').removeClass('animated bounceInUp');
                    });
        });
    });

    persons.mouseleave(function () {
        if (!enablePersonEvents) return;

        for (var prop in bars) {
            bars[prop].set(0);
        }
        bars[previousPerson.attr('data-person-name')].set(1);
        persons.removeClass('animate');

        $('.person-icon.active').removeClass('active');
        previousPerson.addClass('active');

        $('#' + previousPerson.attr('data-person-name')).addClass('active');
    });

}