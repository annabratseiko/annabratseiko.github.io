$(function () {
    var COMMON = common();
    setTimeout(function () {
        var $socialItems = $('.social-items');
        var $dribbble = $('#dribbble-btn');
        var $geekappslink=$('#geekappslink');
        function openInNewWindow(obj) {
            var href = $(obj).attr('href');
            window.open(href, '_blank');
        }
        COMMON.clickTouchCtrl($dribbble, openInNewWindow);
        COMMON.clickTouchCtrl($socialItems, openInNewWindow);
        COMMON.clickTouchCtrl($geekappslink, openInNewWindow);
    }, 3000);
});