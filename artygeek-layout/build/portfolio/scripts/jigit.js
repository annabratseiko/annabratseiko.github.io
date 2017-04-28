function jigit(COMMON) {
    localStorage.setItem('loc', JSON.stringify(4));
    var bar = new ProgressBar.Circle('.pagination', {
        strokeWidth: 7,
        easing: 'linear',
        trailColor: '#eee',
        trailWidth: 8,
        duration: 400,
        color: '#D9303E'
    });
    var _animations = [];
    _animations[1] = {
        'in': function () {
            $('.movie').addClass('show', 600);
            bar.animate(0);
            return 600;
        },
        'out': function () {
            $('.movie').removeClass('show', 600);
            return 600;
        }
    };

    _animations[2] = {
        'in': function () {
            $('.sec2').addClass('show', 600);
            $('.sec2 .title').addClass('show', 600);
            $('.sec2 .title-message').addClass('show', 600);
            $('.arrow').removeClass('show');
            bar.animate(0.33);
            return 600;
        },
        'out': function () {
            $('.sec2').removeClass('show', 600);
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
            $('.inner-comment').addClass('show', 600);
            $('.photo img').addClass('show', 600);
            $('.contactUs').addClass('show', 600);
            $('.motto h5').addClass('show', 600);
            bar.animate(1);
            return 600;
        },
        'out': function () {
            $('.motto h5').removeClass('show', 600);
            $('.inner-comment').removeClass('show', 600);
            $('.contactUs').removeClass('show', 600);
            $('.photo img').removeClass('show', 600);
            return 600;
        }
    };
    $.afterlag(function () {

        $.pageEffects.init(_animations);

        if ($('body').innerWidth() <= 768) {
            $.pageEffects.animate(4, 'in');
            $.pageEffects.animate(1, 'in');
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
                before: function () {
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
                before: function () {
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


        var options = {
            ovalWidth: 250,
            ovalHeight: 0,
            offsetX: 100,
            offsetY: 165,
            angle: 0,
            activeItem: 0,
            duration: 350,
            className: 'item'
        };

        var ovalWidth = 250,
            offsetY = 165;


        if ($('body').innerWidth() <= 860) {
            offsetY = 90;
            ovalWidth = 120;
        } else if ($('body').innerWidth() <= 1024) {
            offsetY = 120;
            ovalWidth = 130;
        } else if ($('body').innerWidth() <= 1300) {
            ovalWidth = 180;
        }

        options = {
            ovalWidth: ovalWidth,
            ovalHeight: 0,
            offsetX: 100,
            offsetY: offsetY,
            angle: 0,
            activeItem: 0,
            duration: 350,
            className: 'item'
        };

        var carousel = $('.carousel').CircularCarousel(options);

        $('.carousel .item').click(function (e) {
            var index = $(this).index('li');
            carousel.cycleActiveTo(index);
            e.preventDefault();
        });
        setInterval(function () {
            carousel.cycleActive('next');
        }, 5000);

        var myVideo = document.getElementById("video2");
        myVideo.onended = function () {
            $('.play').removeClass('show');
            $('#video2').removeClass('show');
        };

        $('.movie').click(function () {
            $('#video2').addClass('show');
            if (myVideo.paused) {
                $('.sidebar-portfolio').addClass('hide', 600);
                $('.play').addClass('show');
                myVideo.play();
            } else {
                $('.sidebar-portfolio').removeClass('hide', 600);
                $('.play').removeClass('show');
                myVideo.pause();
            }
        });

        $('.movie').mousemove(function () {
            $('.sidebar-portfolio').removeClass('hide', 600);
        });
        $('#video2').mousestop(1000, function () {
            if (!myVideo.paused) {
                $('.sidebar-portfolio').addClass('hide', 600);
            }
        });
    });
    COMMON.init();

}
