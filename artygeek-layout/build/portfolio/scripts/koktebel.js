function koktebel(COMMON) {
    $('body').scrollTop(0);
    localStorage.setItem('loc', JSON.stringify(6));
    var bar = COMMON.createPagination();

    var ARROW = COMMON.arrow();
    ARROW.init($('.mouse')).display(1);

    var _animations = [];
    _animations[1] = {
        'in': function () {
            $('.menu').addClass('white');
            $('.main').addClass('show', 500);
            bar.animate(0);
            $('.koktebel').animate({
                opacity: 0
            }, 300, function () {
                $('.koktebel').addClass('white');
            }).animate({
                opacity: 1
            }, 300);
            return 600;
        },
        'out': function () {
            $('.menu').removeClass('white');
            $('.koktebel').animate({
                opacity: 0
            }, 300, function () {
                $('.koktebel').removeClass('white');
            }).animate({
                opacity: 1
            }, 300);
            $('.main').removeClass('show', 500);
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
            anm.el();
            anm.on();
            $('body').attr('data-anm', '.anm');
            $('.sec2').addClass('show', 600);
            $('.sec2 .title').addClass('show', 600);
            bar.animate(0.33);
            return 600;
        },
        'out': function () {
            anm.off();


            $('.sec2').removeClass('show', 600);
            $('.sec2 .title').removeClass('show', 600);
            return 600;
        }
    };
    _animations[3] = {
        'in': function () {
            $('.sec3').addClass('show', 600);
            $('.sec3 .title').addClass('show', 600);
            $('.sec3 .title-message').addClass('show', 600);
            bar.animate(0.66);
            $('.pagin').animate({
                marginTop: '-42px'
            }, 600);
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
            $.pageEffects.animate(1, 'mobIn');

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
                    $.pageEffects.animate(index + 1, 'mobIn');
                },
                afterResize: function () {
                    location.reload();
                },
                afterRender: function () {}
            });
            setNote();
            $.pageEffects.animate(1, 'in');
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
                afterRender: function () {}
            });
            setNote();
            $.pageEffects.initCurrentPage();
            $.pageEffects.animate($.pageEffects.currentPage, 'in');
        }


        function setNote() {
            var left = 0;
            var top = 0;
            for (var i = 0; top < $('.second').innerHeight(); i++) {
                var h, w, size = Math.round(Math.random() * 10) + 5;
                var lleft = Math.round(Math.random() * 40) + left;
                var ttop = Math.round(Math.random() * 40) + top;
                if (left >= $('.second').innerWidth()) {
                    left = 0;
                    top += 120;
                } else {
                    left += 120;
                }
                var kind = Math.round(Math.random() * 2);
                w = size;
                if (kind < 2) {
                    h = size * 2;
                } else {
                    h = size;
                }
                var newNote = $('<div class="anm" data-speed-x="' + (Math.round(Math.random() * 2) - 2) + '" data-speed-y="' + (Math.round(Math.random() * 2) - 2) + '" data-speed-scale="' + Math.round(Math.random() * 2) + '" data-speed-rotate="0" data-speed-opacity="' + Math.round(Math.random() * 52) + '"></div>').css({
                    backgroundImage: 'url(images/Koktebel/note' + kind + '.png)',
                    backgroundSize: 'cover',
                    height: h + "px",
                    width: w + "px",
                    left: lleft + "px",
                    top: ttop + "px",
                    position: "absolute",
                });
                $('.second').append(newNote);
            }
        }


    });
    COMMON.init();
}