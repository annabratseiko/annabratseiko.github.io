function common() {
    function btnBack() {
        $('a.link-back').click(function (e) {
            e.preventDefault();
            $.pageEffects.animate($.pageEffects.currentPage, 'out');
            var goTo = this.getAttribute("href");
            setTimeout(function () {
                $.scrollEffects.destroy();
                window.location = goTo;
            }, 600);
        });

    }

    function goToContactUs() {
        $('.contactUs').click(function (e) {
            localStorage.setItem('loc', JSON.stringify(9));
            $.pageEffects.animate($.pageEffects.currentPage, 'out');
            window.location = '/#/';
        });

    }

    function createVideo() {
        var myVideo = document.getElementById("video");
        myVideo.onended = function () {
            $('.play').removeClass('show');
            $('#video').removeClass('show');
        };

        $('.movie').click(function () {
            $('#video').addClass('show');
            if (myVideo.paused) {
                videoPlay();
            } else {
                videoPause();
            }
            $('.mouse').removeClass('show')
        });

        $('.movie').mousemove(function () {
            $('.sidebar-portfolio').removeClass('hide', 600);
        });
        $('#video').mousestop(1000, function () {
            if (!myVideo.paused) {
                $('.sidebar-portfolio').addClass('hide', 600);
            }
        });
    }

    function init() {
        btnBack();
        goToContactUs();
    }

    function videoPause() {
        var myVideo = document.getElementById("video");
        if (!isMobile.any()) {
            $('.sidebar-portfolio').removeClass('hide', 600);
        }
        $('.play').removeClass('show');
        myVideo.pause();
    }

    function videoPlay() {
        var myVideo = document.getElementById("video");
        if (!isMobile.any()) {
            $('.sidebar-portfolio').addClass('hide', 600);
        }
        $('.play').addClass('show');
        myVideo.play();
    }

    function clickTouchCtrl(obj, func) {
        obj.on('click', function (e) {
            e.preventDefault();
            func(this);
        }).on('ontouchstart', function (e) {
            e.preventDefault();
            func(this);
        });
    }

    function pagination() {
        return new ProgressBar.Circle('.pagination', {
            strokeWidth: 9,
            easing: 'linear',
            trailColor: '#eee',
            trailWidth: 7,
            duration: 400,
            color: '#D9303E'
        });
    }

    function arrow() {
        var obj;

        function init(e) {
            obj = e;
            return this;
        }

        function display(index) {
            if (index == 1) {
                setTimeout(function () {
                    obj.addClass('show');
                }, 300);
            } else {
                obj.removeClass('show');
            }
        }
        function deleteObj(){
            obj.removeClass('show');
        }

        var api = {
            init: init,
            display: display,
            deleteObj:deleteObj
        }
        return api;
    }

    var api = {
        arrow: arrow,
        back: btnBack,
        contactUs: goToContactUs,
        init: init,
        videoInit: createVideo,
        videoPause: videoPause,
        clickTouchCtrl: clickTouchCtrl,
        createPagination: pagination
    }
    return api;
}

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
