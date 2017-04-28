function levent(COMMON) {
    localStorage.setItem('loc', JSON.stringify(5));
    $('body').scrollTop(0);
    var bar = COMMON.createPagination();

    var ARROW = COMMON.arrow();
    ARROW.init($('.mouse')).display(1);

    var _animations = [];
    _animations[1] = {
        'in': function () {
            $('.movie').addClass('show', 600);
            bar.animate(0);
            return 600;
        },
        'out': function () {
            $('.movie').removeClass('show', 600);
            COMMON.videoPause();
            return 600;
        },
        'mobOut': function () {
            COMMON.videoPause();
        }
    };

    _animations[2] = {
        'in': function () {
            $('.sec2').addClass('show', 600);
            $('.sec2 .title').addClass('show', 600);
            $('.sec2 .title-message').addClass('show', 600);
            $('.sidebar-portfolio').removeClass('hide', 600);
            bar.animate(0.33);
            return 600;
        },
        'out': function () {
            $('.sec2').removeClass('show', 600);
            $('.sec2 .title').removeClass('show', 600);
            $('.sec2 .title-message').removeClass('show', 600);
            $('.sidebar-portfolio').removeClass('hide', 600);
            return 600;
        }
    };
    _animations[3] = {
        'in': function () {
            $('.sec3').addClass('show', 600);
            $('.sec3 .title').addClass('show', 600);
            $('.sec3 .title-message').addClass('show', 600);
            bar.animate(0.66);
            $('.anim').attr('src', './images/levent/anim.gif');
            return 600;
        },
        'out': function () {
            $('.sec3').toggleClass('show', 600);
            $('.sec3 .title').removeClass('show', 600);
            $('.sec3 .title-message').removeClass('show', 600);
            return 600;
        }
    };
    _animations[4] = {
        'in': function () {
            $('.in-inner-block').addClass('show', 600);
            bar.animate(1);
            return 600;
        },
        'out': function () {
            $('.in-inner-block').removeClass('show', 600);
            return 600;
        }
    };
    $.afterlag(function () {

        $.pageEffects.init(_animations);

        if ($('body').innerWidth() <= 768) {
            $.pageEffects.animate(4, 'in');
            $.scrollEffects({
                section: ".example-classname",
                sectionName: "section-name",
                interstitialSection: "",
                easing: "easeOutExpo",
                scrollSpeed: 400,
                offset: 0,
                scrollbars: true,
                standardScrollElements: "",
                setHeights: true,
                overflowScroll: true,
                updateHash: false,
                before: function (index) {
                    ARROW.display(index + 1);
                    var delay = $.pageEffects.animate($.pageEffects.currentPage, 'mobOut');
                    return $.pageEffects.getDelayPromise(delay);
                },
                after: function () {
                    $.pageEffects.updateCurrentPage($.scrollEffects.isScrolledDown);
                    $.pageEffects.animate($.pageEffects.currentPage, 'mobIn');
                },
                afterResize: function () {},
                afterRender: function () {}
            });
        } else {
            $.scrollEffects({
                section: ".example-classname",
                sectionName: "section-name",
                interstitialSection: "",
                easing: "easeOutExpo",
                scrollSpeed: 0,
                offset: 0,
                scrollbars: true,
                standardScrollElements: "",
                setHeights: true,
                overflowScroll: true,
                updateHash: false,
                before: function (index) {
                    ARROW.display(index + 1);
                    var delay = $.pageEffects.animate($.pageEffects.currentPage, 'out');
                    return $.pageEffects.getDelayPromise(delay);
                },
                after: function () {
                    $.pageEffects.updateCurrentPage($.scrollEffects.isScrolledDown);
                    $.pageEffects.animate($.pageEffects.currentPage, 'in');
                },
                afterResize: function () {},
                afterRender: function () {}
            });
        }


        $.pageEffects.initCurrentPage();
        $.pageEffects.animate($.pageEffects.currentPage, 'in');

        COMMON.videoInit();


    });
    COMMON.init();

}