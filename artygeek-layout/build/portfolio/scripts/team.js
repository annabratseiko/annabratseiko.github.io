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

    scroller = new FTScroller(containerElement, {
        scrollbars: false,
        scrollingY: false,
        scrollingX: true,
        snapSizeX: snapSize,
        snapping: true,
        maxFlingDuration: 500,
        bounceDecelerationBezier: (0, 0, 0, 0)
    });

    scroller.addEventListener('scroll', function (response) {
        isScroolNow = true;
        var wrapperWidth = $wrapper.width();
        var wrapperHeight = $wrapper.height();
        var countOfTabs = calcCountOfTabs(wrapperWidth, wrapperHeight, countOfItems);
        currentTab = Math.round(response.scrollLeft / wrapperWidth);

        $('.pagination-item.active').removeClass('active');
        $('.pagination-item').eq(currentTab).addClass('active');
        isScroolNow = false;
    });

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

    onResize();

    $(window).on('resize', function (e) {
        onResize();
        e.preventDefault();
    });

    // $wrapper.on('mouseover', function(e) {
    //   if ($win.width() > 768) {
    //     stopScroll();
    //     e.preventDefault();
    //   }
    // });

    $wrapper.on('click touchstart', function (e) {
        stopScroll();
        e.preventDefault();
    });

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

    function onResize() {
        var personIconsWidth, countOfColumn, wrapperWidth, wrapperHeight;
        var teamWidth = parseInt($('.team-col').width());

        if (timerId) stopScroll();

        $team.removeClass('persons-flex-column');
        $wrapper.width(teamWidth); //TODO: add margin or padding
        $team.width('100%').height('auto');
        wrapperWidth = $wrapper.width();
        wrapperHeight = $wrapper.height();
        $('.icons-pagination').empty();

        if ($team.height() > $wrapper.height()) {
            countOfTabs = calcCountOfTabs(wrapperWidth, wrapperHeight, countOfItems);
            personIconsWidth = calcPersonIconsWidth(countOfItems, wrapperWidth, wrapperHeight);
            countOfColumn = calcCountOfItemHr(wrapperWidth);
            addPaginationItems(countOfTabs);
            $team.addClass('persons-flex-column');
            $team.width(personIconsWidth).height(wrapperHeight);
            $wrapper.width(countOfColumn * getItemSize());
        }
        scroller.scrollTo(0, 0);
        snapSize = $wrapper.width();
        scroller.setSnapSize(snapSize, 0);
        togglePersonsEvents();
        toggleScrollDisabled();
        //startScroll();
        startScroll(currentTab);
    }

    function startScroll(currentTab) {
        var moveRight = true;
        // timerId = setInterval(function () {
        //     if (countOfTabs == 1) stopScroll();
        //     else if (moveRight) {
        //         scroller.scrollTo(scroller.scrollLeft + snapSize, 0, 1000);
        //         currentTab++;
        //         if (currentTab == countOfTabs) {
        //             moveRight = false;
        //         }
        //     } else {
        //         scroller.scrollTo(scroller.scrollLeft - snapSize, 0, 1000);
        //         currentTab--;
        //         if (currentTab == 1) {
        //             moveRight = true;
        //         }
        //     }
        // }, 3000);
    }

    function stopScroll() {
        clearInterval(timerId);
    }

    function toggleScrollDisabled() {
        if ($team.css('flex-flow') == 'column wrap') {
            scroller.setDisabledInputMethods({
                mouse: false,
                touch: false,
                scroll: false,
                pointer: false,
                focus: false
            });
        } else {
            scroller.setDisabledInputMethods({
                mouse: true,
                touch: true,
                scroll: true,
                pointer: true,
                focus: true
            });
        }
    }

    function togglePersonsEvents() {
        if ($win.width() > 768) {
            enablePersonEvents = true;
            if (!$('.person-icon.active').length) {
                $('.person-icons .person-icon').first().addClass('active');
                bars[$('.person-icons .person-icon').first()
                    .attr('data-person-name')].set(1.0);
            }
        } else {
            enablePersonEvents = false;
            if ($('.person-icon.active').length) {
                bars[$('.person-icon.active').attr('data-person-name')].set(0);
                $('.person-icon.active').removeClass('active');
            }
        }
    }

    function addPaginationItems(countOfTabs) {
        $('.icons-pagination').empty();
        $('.icons-pagination').append('<div class="pagination-item active"></div>');
        // TODO: fix this BUG with infinity loop
        countOfTabs = countOfTabs || 1;
        for (var i = 1; i < countOfTabs; i++) {
            $('.icons-pagination').append('<div class="pagination-item"></div>');
        }
        var $paginationItems = $('.pagination-item');
        $paginationItems.on('click', function (e) {
            stopScroll();
            var indexOfClickedPagItem = $paginationItems.index($(this));
            var indexOfActivePagItem = $paginationItems.index($('.pagination-item.active'));
            if (indexOfActivePagItem == indexOfClickedPagItem) {
                return true;
            }
            var diffOfActiveClicked = indexOfClickedPagItem - indexOfActivePagItem;
            if (isScroolNow) {
                return true;
            }
            scroller.scrollTo(scroller.scrollLeft + snapSize * diffOfActiveClicked, 0, 1000);
            e.preventDefault();
        });
    }
}

// functions for dinamicaly calculate size of team section
function calcCountOfItemHr(wrapperWidth) {
    var itemWidth = getItemSize();

    return Math.floor(wrapperWidth / itemWidth);
}

function calcCountOfItemVr(wrapperHeight) {
    var itemHeight = getItemSize();

    return Math.floor(wrapperHeight / itemHeight);
}

function getItemSize() {
    return $('.person-icon').height() + 2 * parseInt($('.person-icon').css('margin'));
}

function calcCountOfTabs(wrapperWidth, wrapperHeight, countOfItems) {
    var countOfColumn = calcCountOfItemHr(wrapperWidth);
    var countOfRow = calcCountOfItemVr(wrapperHeight);

    return Math.ceil(countOfItems / (countOfColumn * countOfRow));
}

function calcPersonIconsWidth(countOfItems, wrapperWidth, wrapperHeight) {
    var countOfColumn = calcCountOfItemHr(wrapperWidth);
    var countOfRow = calcCountOfItemVr(wrapperHeight);

    var fullTabs = Math.floor(countOfItems / (countOfColumn * countOfRow));
    var remainder = countOfItems - fullTabs * countOfColumn * countOfRow;
    var remainderColumn = Math.ceil(remainder / countOfRow);

    return (fullTabs * countOfColumn + remainderColumn) * getItemSize();
}