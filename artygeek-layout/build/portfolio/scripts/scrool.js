function scrool() {
    var $container;
    var $inner;
    var innerHeight;
    var numberOfPages;
    var innerTop;
    var page = 1;
    var windowHeight;

    function create() {
        $container = $('.scroll-container');
        $inner = $('.scroll-container__inner');
        numberOfPages = 9;
        setHeight();
    }

    function setHeight() {
        windowHeight = $(window).height();
        $container.css('height', windowHeight);
        $inner.css('height', calcInnerHeight());
    }

    function calcInnerHeight() {
        return innerHeight = windowHeight / numberOfPages;
    }

    function calcInnerTop() {
        return (page - 1) * calcInnerHeight();
    }

    function setPage(i) {
        page = i;
        $inner.css('top', calcInnerTop());
    }
    $(window).resize(function () {
        setHeight();
    });


    return {
        create: create,
        setPage: setPage
    }
}