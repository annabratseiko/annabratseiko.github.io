function main() {
    var $mantop;
    var $manbottom;
    var $pages;
    var $selectWork;
    var $placeholderWork;
    var $emailInput;
    var $emailBar;
    var $message;
    var $changePage;
    var $inputName;
    var $menuRight;
    var $titleLogo;
    var $smartIsCool;
    var _animations = [];
    var _animations2 = [];
    var COMMON = common();
    var MENU = menuPagination();
    var ARROW = COMMON.arrow();
    var SCROOL;
    var $swiperMain;

    _animations[1] = {
        inD: function () {
            $titleLogo.removeClass('hide');

            return 300;
        },
        inU: function () {
            $titleLogo.removeClass('hide');

            return 300;
        },
        outD: function () {
            return 300;
        },
        outU: function () {
            return 300;
        }
    };
    _animations[2] = {
        inD: function () {
            $titleLogo.removeClass('hide');
            return 300;
        },
        outD: function () {
            $titleLogo.addClass('hide');
            return 300;
        },
        inU: function () {
            $titleLogo.removeClass('hide');
            return 300;
        },
        outU: function () {
            return 300;
        }
    };
    _animations[3] = {
        inD: function () {
            $('.main-img').toggleClass('show', 300);
            MENU.setPosition(3);
            return 300;
        },
        outD: function () {
            $('.main-img').toggleClass('show', 300);
            MENU.setPosition(2);
            return 300;
        },
        inU: function () {

            $('.main-img').toggleClass('show', 300);
            MENU.setPosition(3);
            return 300;
        },
        outU: function () {
            $('.main-img').toggleClass('show', 300);
            MENU.setPosition(1);
            return 300;
        }

    };
    _animations[4] = {
        inD: function () {
            MENU.setActive(1);
            return 300;
        },
        outD: function () {

            return 300;
        },
        inU: function () {
            MENU.setActive(1);
            return 300;
        },
        outU: function () {

            return 300;
        }
    };
    _animations[5] = {
        inD: function () {
            MENU.setActive(2);
            return 300;
        },
        outD: function () {


            return 300;
        },
        inU: function () {
            MENU.setActive(2);
            return 300;
        },
        outU: function () {


            return 300;
        }
    };
    _animations[6] = {
        inD: function () {
            MENU.setActive(3);
            return 300;

        },
        outD: function () {
            $.afterlag(function () {
                $mantop.css('display', 'block').removeClass('hide', 600);
                $manbottom.css('display', 'block').removeClass('hide', 600);
            });

            return 300;
        },
        inU: function () {
            MENU.setActive(3);
            return 300;
        },
        outU: function () {

            return 300;
        }
    };
    _animations[7] = {
        inD: function () {
            MENU.setActive(4);
            $.afterlag(function () {
                $mantop.css('display', 'block').removeClass('hide', 600);
                $manbottom.css('display', 'block').removeClass('hide', 600);
            });
            return 300;
        },
        outD: function () {
            MENU.setPosition(1);
            $mantop.addClass('hide', 1);
            $manbottom.addClass('hide', 1);
            return 300;
        },
        inU: function () {
            MENU.setPosition(2);
            MENU.setActive(4);
            $.afterlag(function () {
                $mantop.css('display', 'block').removeClass('hide', 600);
                $manbottom.css('display', 'block').removeClass('hide', 600);
            });

            return 300;
        },
        outU: function () {
            $mantop.addClass('hide', 1).css('display', 'none');
            $manbottom.addClass('hide', 1).css('display', 'none');
            return 300;
        }
    };
    _animations[8] = {
        inD: function () {
            return 300;
        },
        outD: function () {
            return 300;
        },
        inU: function () {
            return 300;
        },
        outU: function () {
            $.afterlag(function () {
                $mantop.css('display', 'block').removeClass('hide', 600);
                $manbottom.css('display', 'block').removeClass('hide', 600);
            });

            return 300;
        }
    };

    function init(page) {
        $('#sendEmail').click(function () {
            if (($("#mycontactform input[name='mail']").val() != '')) {
                $.post("php/send.php", $("#mycontactform").serialize(), function (response) {
                    document.getElementById('mycontactform').reset();
                    $('#popup1').addClass('display');
                    $.scrollEffects.disable();
                });
            } else {
                console.log("error sendEmail.js");
            }

        });
        MENU.init();
        ARROW.init($('.arrow'));
        $mantop = $('#mantop');
        $manbottom = $('#manbottom');
        $pages = $('.pages');
        $selectWork = $('#selectWork');
        $placeholderWork = $('#placeholderWork');
        $emailInput = $('#email input');
        $emailBar = $('#email .bar');
        $message = $("#message");
        $changePage = $('a.change-page');
        $inputName = $('.set input[name="name"]');
        $menuRight = $('.menu');
        $titleLogo = $('.title-logo');


        $.pageEffects.currentPage = 1;
        $.pageEffects.init(_animations);
        $.pageEffects.animate($.pageEffects.currentPage, 'outU');

        function initScrollEffects(x) {

            COMMON.clickTouchCtrl($('.click'), function(){goToMain(1)});
            
            // get error on mobile devices
            SCROOL = scrool();
            SCROOL.create();

            if ($('body').innerWidth() <= 768) {

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
                    after: function (index) {
                        $.pageEffects.currentPage = index + 1;
                        titleLogDisplay(index + 1);
                    },
                    afterResize: function () {
                        // if ($.scrollEffects.getIndex() == 8) {

                        // }
                    },
                    afterRender: function () {}
                });
                if (isMobile.any()) {
                    $.scrollEffects.disableResize();
                    contactSubmitBtn();
                }
                $('input, textarea').on('focus', function () {
                    $('.contactus').addClass('active');
                }).on('blur', function () {
                    $('.contactus').removeClass('active');
                })

            } else {
                // SCROOL = scrool();
                // SCROOL.create();
                $.scrollEffects({
                    section: ".example-classname",
                    sectionName: false,
                    interstitialSection: "",
                    easing: "easeOutExpo",
                    scrollSpeed: 300,
                    offset: 0,
                    scrollbars: true,
                    standardScrollElements: "",
                    setHeights: true,
                    overflowScroll: true,
                    updateHash: false,
                    before: function (index, arr) {
                        var delay = 0;
                        ARROW.display(index + 1);
                        SCROOL.setPage(index + 1);
                        if ($.scrollEffects.isScrolledDown) {
                            delay = $.pageEffects.animate($.pageEffects.currentPage, 'outD');
                        } else {
                            delay = $.pageEffects.animate($.pageEffects.currentPage, 'outU');
                        }
                        return $.pageEffects.getDelayPromise(delay);
                    },
                    after: function (index, arr) {
                        $.pageEffects.currentPage = index + 1;
                        if ($.scrollEffects.isScrolledDown) {
                            $.pageEffects.animate($.pageEffects.currentPage, 'inD');
                        } else {
                            $.pageEffects.animate($.pageEffects.currentPage, 'inU');
                        }
                    },
                    afterResize: function () {
                        var page = $.pageEffects.currentPage;
                        $.pageEffects.goToPage(page);
                    },
                    afterRender: function () {}
                });
            }
            if (x) {
                $.scrollEffects.setIndex(parseInt(x));
            }
            setTimeout(function () {
                $smartIsCool = $('.smart-is-cool');
                $mainArrow = $('.smart-arrow');
                COMMON.clickTouchCtrl($smartIsCool, goToMainItem.bind(this, 2));
                COMMON.clickTouchCtrl($mainArrow, goToMainItem.bind(this, 2));
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                });
            }, 1000);


            COMMON.clickTouchCtrl($('.close'), function () {
                $('#popup1').removeClass('display');
                $.scrollEffects.enable();

            });
        }

        if (page) {
            if (page != 1 && page != 2) {
                $titleLogo.addClass('hide');
            }
            removeHash();
            $.scrollEffects.destroy();
            initScrollEffects(page);
            $.pageEffects.goToPage(page);
            $('.change').removeClass('show', 300);
            $('.menu').removeClass('white');
            if (page == 4 || page == 5 || page == 6 || page == 7) {
                MENU.setPosition(1).setPosition(2).setActive(page);
            }
            if (page == 1 || page == 2) {
                MENU.setPosition(1);
                $titleLogo.removeClass('hide');
            }
            if (page == 8) {
                MENU.setPosition(1);
            }
            ARROW.deleteObj();
            SCROOL.setPage(page);
        } else {
            $('.change').removeClass('show', 300);
            ARROW.display(1);
            removeHash();
            // setTimeout(function () {
                $.scrollEffects.destroy();
                initScrollEffects();
                // added to enable scroll after back to main page
                $.scrollEffects.enable();
            // }, 1000);
        }

        $(document).keypress(function (e) {
            var code = e.keyCode || e.which;
            $.scrollEffects.move('#s' + (code - 48));
        });
        $('.link-web').click(function () {
            goToMainItem(4);
        });
        $('.link-mobile').click(function () {
            goToMainItem(5);
        });
        $('.link-lab').click(function () {
            goToMainItem(6);
        });
        $('.link-dribbble').click(function () {
            goToMainItem(7);
        });
        $('.close')

        $changePage.click(function (e) {
            e.preventDefault();
            var goTo = this.getAttribute("href");
            $('.change').addClass('show', 300, function () {
                destroyScroll();
                window.location = goTo;
            });
        });

        $inputName.change(function () {
            $(this).siblings('.liquid').removeClass('hide');
        });

        $emailInput.change(function () {
            var email = $(this)[0].value;
            $(this).siblings('.liquid').removeClass('hide');
        });

        $message.flexible();

    }

    function titleLogDisplay(index) {
        if (index == 1 || index == 2) {
            $titleLogo.removeClass('hide');
        } else {
            $titleLogo.addClass('hide');
        }
    }


    function goToMainItem(i) {
        if ($.pageEffects.currentPage == 3) {
            $('#pagination.icon-menu div').removeClass('icon');
            $.pageEffects.animate($.pageEffects.currentPage, 'outD');
            $.pageEffects.animate($.pageEffects.currentPage + 1, 'inU');
            $('#pagination.icon-menu div').addClass('icon');
        }
        $.pageEffects.init(_animations2);
        $.pageEffects.goToPageAnimate(i);
        setTimeout(function () {
            $.pageEffects.init(_animations);
            $.pageEffects.initCurrentPage();
            $.pageEffects.animate($.pageEffects.currentPage, 'inD');
        }, 1000);
    }

    function goToMain(i) {
        var currPage = $.pageEffects.currentPage;

        if (i == currPage) {
            return false;
        }

        var isProtfolio = currPage == 4 || currPage == 5 || currPage == 6 || currPage == 7;

        function setCurrentPage(x) {
            $.pageEffects.currentPage = x;
            $.scrollEffects.setIndex(x - 1);
        }

        if (currPage == 1) $('.arrow').removeClass('show');

        if (i != 1 && i != 2) {
            $titleLogo.addClass('hide');
        }

        if (isProtfolio && i == 4) {
            goToMainItem(4);
            setCurrentPage(4);
            SCROOL.setPage(i);
            return false;
        }

        if (i == 8 || i == 2 || i == 1) {
            MENU.setPosition(1);
        }

        if (i == 3) {
            MENU.setPosition(3);
        }

        if (i == 4) {
            MENU.setPosition(2);
            $.pageEffects.goToPage(i);
            setCurrentPage(i);
            SCROOL.setPage(i);
            return false;
        }

        if ($.pageEffects.currentPage == 3) {
            $.pageEffects.animate($.pageEffects.currentPage, 'outU');
            setTimeout(function () {
                $.pageEffects.goToPage(i);
            }, 300);
        } else {
            $.pageEffects.goToPage(i);
        }
        $.pageEffects.init(_animations2);

        setTimeout(function () {
            $.pageEffects.init(_animations);
            $.pageEffects.initCurrentPage();
            $.pageEffects.animate($.pageEffects.currentPage, 'inD');
        }, 500);
        setCurrentPage(i);
        SCROOL.setPage(i);
    }

    function destroyScroll() {
        $.scrollEffects.destroy();
    }

    function removeHash() {
        history.pushState("", document.title, window.location.pathname +
            window.location.search);
    }

    function menuPagination() {
        var $menuMain;
        var $menuMain_itemWrp;
        var $messageMenu;
        var $menuMain_li;
        var $menuMain_icon;
        var position = 1;
        var active = 0;
        var $iconName;

        function init() {
            $menuMain = $('#pagination.menu-main');
            $menuMain_itemWrp = $('#pagination.menu-main .item-wrp');
            $messageMenu = $('#pagination .message-menu');
            $menuMain_li = $('#pagination.menu-main li');
            $menuMain_icon = $('#pagination.menu-main .icon');
            $iconName = $('#pagination.menu-main .icon-name');
        }

        function removeActive() {
            $menuMain_icon.removeClass('active');
            $iconName.removeClass('active');
        }

        function setActive(i) {
            active = i;
            removeActive();
            $menuMain_icon.eq(active - 1).addClass('active');
            $iconName.eq(active - 1).addClass('active');
        }

        function setPosition(index) {
            if (index == 2 && position == 1) {
                $menuMain.addClass('show-fixed', 200);
                $menuMain_li.addClass('show-fixed', 200);
                $menuMain_itemWrp.addClass('show');
                $menuMain.removeClass('hide-menu', 200);
                $menuMain_li.removeClass('hide-li', 200);
                $messageMenu.css('display', 'none');
            }
            if (index == 2 && position == 3) {
                $menuMain.addClass('show-fixed', 200);
                $menuMain_li.addClass('show-fixed', 200);
                $menuMain_itemWrp.addClass('show', 200);
                $messageMenu.css('display', 'none');
            }
            if (index == 3 && position == 1) {
                $menuMain.removeClass('hide-menu', 200);
                $menuMain_li.removeClass('hide-li', 200);
                $menuMain_itemWrp.addClass('show');
                $messageMenu.css('display', 'block');
            }
            if (index == 1 && position == 2) {
                $menuMain.addClass('hide-menu', 200);
                $menuMain_li.addClass('hide-li', 200);
                $menuMain.removeClass('show-fixed', 200);
                $menuMain_li.removeClass('show-fixed', 200);
            }
            if (index == 1 && position == 3) {
                $menuMain.addClass('hide-menu', 200);
                $menuMain_li.addClass('hide-li', 200);
                $messageMenu.css('display', 'none');
            }
            if (index == 3 && position == 2) {
                removeActive();
                $menuMain.removeClass('show-fixed', 200);
                $menuMain_li.removeClass('show-fixed', 200);
                $messageMenu.css('display', 'block');
            }
            position = index;
            return this;
        }

        function getPosition() {
            return position;
        }

        var api = {
            setPosition: setPosition,
            setActive: setActive,
            init: init,
            getPosition: getPosition
        };
        return api;
    }

    function contactSubmitBtn() {
        $('#sendEmail').parent().addClass('absolute');
    }
    var api = {
        removeHash: removeHash,
        destroy: destroyScroll,
        create: init,
        goTo: goToMain,
        goToMain: goToMainItem
    }
    return api;
}
var MAIN = main();

// $(window).on('resize', function() {
//     // $.scrollEffects.destroy();
//     $.scrollEffects.update();
// });

