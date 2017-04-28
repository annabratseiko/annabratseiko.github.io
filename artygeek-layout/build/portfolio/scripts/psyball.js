function psyball(COMMON) {
    localStorage.setItem('loc', JSON.stringify(4));
    $('body').scrollTop(0);
    var bar = COMMON.createPagination();

    var ARROW=COMMON.arrow();
    ARROW.init($('.mouse')).display(1);

    var _animations = [];
    _animations[1] = {
        'in': function () {
            $('.menu').addClass('white');
            $('.main').addClass('show', 500);
            $('.sec1').addClass('show', 600);
            $('.sec1 .title').addClass('show', 600);
            $('.sec1 .title-message').addClass('show', 600);
            bar.animate(0);
            return 600;
        },
        'out': function () {
            $('.main').removeClass('show', 500);
            $('.sec1').removeClass('show', 600);
            $('.sec1 .title').removeClass('show', 600);
            $('.sec1 .title-message').removeClass('show', 600);
            return 600;
        },
        'mobIn': function () {
            $('.menu').addClass('white');
        },
        'mobOut': function () {
            $('.menu').removeClass('white');
        }
    };
    _animations[2] = {
        'in': function () {
            $('.sec2').addClass('show', 600);
            $('.sec2 .title').addClass('show', 600);
            $('.sec2 .title-message').addClass('show', 600);
            $('.phone').addClass('show', 800);
            $('.tablet').addClass('show', 900);
            bar.animate(0.33);
            return 600;
        },
        'out': function () {
            $('.sec2').removeClass('show', 600);
            $('.phone').removeClass('show', 600);
            $('.tablet').removeClass('show', 600);
            $('.sec2 .title').removeClass('show', 600);
            $('.sec2 .title-message ').removeClass('show', 600);
            return 600;
        }
    };
    _animations[3] = {
        'in': function () {
            $('.sec3').addClass('show', 600);
            $('.sec3 .title').addClass('show', 600);
            $('.sec3 .title-message').addClass('show', 600);
            bar.animate(0.66);
            return 600;
        },
        'out': function () {
            $('.sec3').toggleClass('show', 600);
            $('.sec3 .title').toggleClass('show', 600);
            $('.sec3 .title-message').toggleClass('show', 600);
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
            $.pageEffects.animate(1, 'mobIn');

            $('.main').addClass('show', 500);
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
                    var delay = $.pageEffects.animate(index, 'mobOut');
                    return $.pageEffects.getDelayPromise(delay);
                },
                after: function (index) {
                    $.pageEffects.updateCurrentPage($.scrollEffects.isScrolledDown);
                    $.pageEffects.animate(index+1, 'mobIn');
                },
                afterResize: function () {
                    location.reload();
                },
                afterRender: function () {
                }
            });
            $.pageEffects.initCurrentPage();
            $.pageEffects.animate($.pageEffects.currentPage, 'mobIn');
        } else {
            $.scrollEffects({
                section: ".example-classname",
                sectionName: "",
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
                afterResize: function () {
                    location.reload();
                },
                afterRender: function () {
                }

            });
            $.pageEffects.initCurrentPage();
            $.pageEffects.animate($.pageEffects.currentPage, 'in');
        }

        $('.arrow').addClass('show');

    });
    COMMON.init();

}

