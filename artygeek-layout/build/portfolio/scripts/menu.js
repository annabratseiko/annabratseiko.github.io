$(document).ready(function () {
    var COMMON = common();
    var $menu_dark = $('.menu, .dark');
    var $dark = $('.dark');
    var $menuRight = $('.menu-right');
    var $menuLineAll = $('.ui-menu__line_1,.ui-menu__line_3, .ui-menu__line_2');


    function menu(obj, click) {
        var isClickedItem;
        if (click) {
            isClickedItem = false
        } else {
            isClickedItem = true
        }
        if (isClickedItem) {
            if ($.scrollEffects.isDisabled()) {
                $.scrollEffects.enable();
            } else {
                $.scrollEffects.disable();
            }
        }
        if ($dark.css('display') == 'block') {
            $dark.css('display', 'none');
        } else {
            $dark.css('display', 'block');
        }

        $menuRight.toggleClass('show');
        $dark.toggleClass('show');
        $('.menu').toggleClass('show');
        $menuLineAll.css('visibility', 'hidden');
        $('.ui-menu__line_1,.ui-menu__line_3').toggleClass('show');
        $('.ui-menu__line_2').toggleClass('show');
        $menuLineAll.css('visibility', 'visible');


    }

    function goToMenuLink(obj) {
        $.scrollEffects.enable();

        setTimeout(function () {
            var page = $(obj).attr('data-section');
            if (window.location.hash === '') {
                menu(null, true);
                MAIN.goTo(page);
            } else {
                localStorage.setItem('loc', JSON.stringify(page));
                window.location = '/#/';
                $.scrollEffects.destroy();
                menu(null, true);
            }
        }, 500);

    }

    // copypaste for hidding menu first
    function goToMenuPageLink(obj) {
        menu(null, true);
       
        setTimeout( function() {
            $('.change').addClass('show', 300, function () {
                window.location = '/#/career';
                $('.change').removeClass('show', 300);
            });
        }, 500);

    }

    function goToTopMain(obj) {
        // if (window.location.hash !== '#/' && window.location.hash !== "") {
        //     window.location = '/#/'
        // } else if (window.location.hash == "") {
            MAIN.goTo(1);
        // }
    }

    COMMON.clickTouchCtrl($menu_dark, menu);
    // COMMON.clickTouchCtrl($('.menu-link'), goToMenuLink);
    // COMMON.clickTouchCtrl($('.menu-career-link'), goToMenuPageLink);
    // setTimeout(function () {
    //     COMMON.clickTouchCtrl($('.click'), goToTopMain);
    // }, 1500);

});