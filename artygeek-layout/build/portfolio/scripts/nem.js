function nem(COMMON) {
    localStorage.setItem('loc', JSON.stringify(5));
    $('body').scrollTop(0);
    var bar = COMMON.createPagination();

    var ARROW=COMMON.arrow();
    ARROW.init($('.mouse')).display(1);

    var _animations = [];
    _animations[1] = {
        'in': function () {
            $('.main').addClass('show', 500);
            bar.animate(0);
            return 600;
        },
        'out': function () {
            $('.main').removeClass('show', 500);
            return 600;
        }
    };

    _animations[2] = {
        'in': function () {
            $('body').attr('data-anm', '.anm');
            $('.sec2').addClass('show', 600);
            $('.second .title h5').addClass('show', 600);
            $('.second .phones').addClass('show', 600);
            bar.animate(0.33);
            return 600;
        },
        'out': function () {
            $('.sec2').removeClass('show', 600);
            $('.second .title h5').removeClass('show', 600);
            $('.second .phones').removeClass('show', 600);
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
            $.pageEffects.animate(1, 'in');
            $.pageEffects.animate(2, 'in');
            $.pageEffects.animate(3, 'in');
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
                    var delay = 0;
                    return $.pageEffects.getDelayPromise(delay);
                },
                after: function () {
                },
                afterResize: function () {
                    location.reload();
                },
                afterRender: function () {
                }
            });
            $.pageEffects.animate(1, 'in');

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

    });
    COMMON.init();

}
