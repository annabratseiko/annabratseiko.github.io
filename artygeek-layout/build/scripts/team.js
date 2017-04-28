function team() {
    $ANIMATION = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $persons = $('.person-icons .person-icon');
    $personIconActive = $('.person-icon.active');
    $previousPerson = null;
    $bars = {};
    $tags = $('.team-tag-link');

    // hardcode (but for now this size is static)
    $PERSON_ICON_SIZE = 92;
    // CONSTS for first number of team's members
    $FIRST_DEV = 0;
    $FIRST_DESIGNER = 21;
    $FIRST_QA = 27;
    $FIRST_OFFICE = 28;
    $activeFirstPerson = $('.active-first'); 

    // define flex direction of team
    defineFlexDirection();
    $(window).on('resize', function (e) {
        defineFlexDirection();
    });

    // add red circle around person
    $persons.each(function () {
        $bars[$(this).attr('data-person-name')] = new ProgressBar.Circle(this, {
            strokeWidth: 6,
            easing: 'linear',
            duration: 500,
            color: '#D9303E'
        });
    });

    $bars[$('.person-icon')
            .first()
            .addClass('active')
            .attr('data-person-name')]
        .set(1.0);

    // handler on tags
    $tags.on('click', function(e) {
        e.preventDefault();
        $currentTag = $(this)[0].id;
        $newClass = '.' + $currentTag;
        
        $tags.removeClass('active');
        $(this).addClass('active');
        
        $('.team-subblock').removeClass('active');
        $($newClass).addClass('active');
        setActivePerson($($newClass));
        defineFlexDirection();
    });

    $persons.mouseenter(function(e) {
        e.stopPropagation();
        var self = $(this);
        if (self.hasClass('active')) {
            return false;
        }
        $personIconActive = $('.person-icon.active');
        $previousPerson = $personIconActive;
        $personIconActive.removeClass('active');

        $activeImage = $('#' + $previousPerson.attr('data-person-name'));
        $dataPersonName = self.attr('data-person-name');
        $nextImage = $('#' + $dataPersonName);

        // self.addClass('animate');

        $bars[$previousPerson.attr('data-person-name')].set(0);
        $bars[$dataPersonName].animate(1.0);
        self.addClass('active');
        $('.person-image').removeClass('active');
        $nextImage.addClass('active');

    });

    $persons.mouseleave(function() {
       
    });

    // listeners for mobile version
    $persons.on('click', function(e) {
        e.preventDefault();
        if($(window).width() < 768) {
            setTimeout(function() {
                $('.team-col.right').addClass('show', 300);
            }, 1000);
        } else {
            return;
        }
    });

    $('a.back-to-team').click(function(e) {
        e.preventDefault();
        $('.team-col.right').removeClass('show', 300);
    });
}

function setActivePerson(block) {
    $index = 0;
    if ($activeFirstPerson.length) {
        $persons.removeClass('active-first');
    }

    switch(true){
        case (block.hasClass('developers')):
            $index = $FIRST_DEV;
            break;
        case (block.hasClass('designers')):
            $index = $FIRST_DESIGNER;
            break;
        case (block.hasClass('qa')):
            $index = $FIRST_QA;
            break;
        case (block.hasClass('office')):
            $index = $FIRST_OFFICE;
            break;
    }
    var icons = document.querySelectorAll('.person-icon');
    icons[$index].classList.add('active-first');
    $activeFirstPerson = $('.active-first'); 
    $activeFirstPerson.mouseenter(); 
}

function calcHeight(block) {
    return {
        containerHeight: block.height(),
        innerHeight: block.find('.person-icons').height()
    }
}

function defineFlexDirection() {
    $('.person-icons').removeClass('small');
    $('.team-subblock').css('width', '100%');

    $activeBlock = $('.team-subblock.active');
    
    containerHeight = calcHeight($activeBlock).containerHeight;
    innerHeight = calcHeight($activeBlock).innerHeight;

    if(innerHeight > containerHeight) {
        $('.person-icons').addClass('small');
        calcWrapperWidth();
    } 
}

function calcWrapperWidth() {
    if ($(window).width() < 768) {
        $currentWidth = $('.team-subblock.active').width();
        $columnsNumber = Math.floor($currentWidth / $PERSON_ICON_SIZE);
        $('.team-subblock').css('width', $columnsNumber*$PERSON_ICON_SIZE);
    } else {
        return;
    }
}
