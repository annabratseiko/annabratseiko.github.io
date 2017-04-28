$(document).ready(function () {
    var COMMON = common();
    var $content = $('#content');

    setTimeout(function () {
        $('.loader').addClass('hide', 300);
    }, 2000);

    if (window.location.hash === '') {
        localStorage.removeItem('loc');
        window.location = '/#/';
    }

    Path.map('#/').to(function () {
        var loc = localStorage.getItem('loc');
        var page;
        if (loc)
            page = JSON.parse(loc);
        localStorage.removeItem('loc');
        init_layout($content, page, MAIN);
    });
    Path.map('').to(function () {
        var loc = localStorage.getItem('loc');
        var page;
        if (loc)
            page = JSON.parse(loc);
        localStorage.removeItem('loc');
        init_layout($content, page, MAIN);
    });


    //web
    Path.map('#/board').to(function () {
        $content.load('templates/board_a_boat.html', function () {
            loader(MAIN).then(board(COMMON));
        });
    });

    Path.map('#/oscaro').to(function () {
        $content.load('templates/oscaro.html', function () {
            loader(MAIN).then(oscaro(COMMON));
        });
    });

    Path.map('#/psyball').to(function () {
        $content.load('templates/psyball.html', function () {
            loader(MAIN).then(psyball(COMMON));
        });
    });

    Path.map('#/rikroot').to(function () {
        $content.load('templates/rikroot.html', function () {
            loader(MAIN).then(rikroot(COMMON));
        });
    });

    //mobile
    Path.map('#/apps').to(function () {
        $content.load('templates/artygeekapps.html', function () {
            loader(MAIN).then(apps(COMMON));
        });
    });

    Path.map('#/levent').to(function () {
        $content.load('templates/levent.html', function () {
            loader(MAIN).then(levent(COMMON));
        });
    });

    Path.map('#/nem').to(function () {
        $content.load('templates/nem.html', function () {
            loader(MAIN).then(nem(COMMON));
        });
    });

    Path.map('#/wish-catcher').to(function () {
        $content.load('templates/wish-catcher.html', function () {
            loader(MAIN).then(wishCatcher(COMMON));
        });
    });

    //lab
    Path.map('#/himss').to(function () {
        $content.load('templates/himss.html', function () {
            loader(MAIN).then(himss(COMMON));
        });
    });

    Path.map('#/koktebel').to(function () {
        $content.load('templates/koktebel.html', function () {
            loader(MAIN).then(koktebel(COMMON));
        });
    });

    Path.map('#/bubble').to(function () {
        $content.load('templates/bubble.html', function () {
            loader(MAIN).then(bubble(COMMON));
        });
    });

    Path.history.listen(true);

    Path.listen();
});

function loader(e) {
    return new Promise(
        function (resolve) {
            if (e) e.destroy();
            setTimeout(function () {
                $(document).scrollTop(0);
                resolve();
            }, 990);
        }
    );
}

function init_layout(c, page, MAIN) {
    c.load('templates/layout.html', function () {
        if (page) {
            MAIN.create(page);
        } else {
            loader().then(MAIN.create());
        }
    });
}
