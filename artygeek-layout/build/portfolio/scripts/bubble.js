function bubble(COMMON) {
    localStorage.setItem('loc', JSON.stringify(6));
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
        new Promise(function (resolve) {
            $.pageEffects.init(_animations);
            setTimeout(function () {
                resolve();
            }, 1000);

        }).then(function () {
            if ($('body').innerWidth() <= 768) {
                $('.menu').addClass('white');
                $.pageEffects.animate(4, 'in');
                $('.main').addClass('show', 500);
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

        $('.my-slider').unslider({
            autoplay: true,
            arrows: false
        });

    });
    COMMON.init();

}
